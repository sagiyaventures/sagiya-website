/**
 * Non-blocking Google Fonts loader.
 *
 * Perf fix: index.html used to load two Google Fonts stylesheets as
 * synchronous <link rel="stylesheet"> tags in <head>. Lighthouse flagged
 * these as render-blocking (est. ~21s of savings under throttled mobile
 * conditions) - the browser must fetch+parse both before it can finish
 * building the render tree.
 *
 * Injecting the same <link> tags from JS instead means they no longer
 * block the initial parse; text renders immediately in a fallback font
 * and swaps to the real font once it arrives (both stylesheets already
 * use &display=swap, so this is a brief FOUT, not invisible text).
 *
 * This avoids the classic <link rel="preload" onload="..."> swap trick
 * on purpose: this site's CSP has a strict script-src with no
 * 'unsafe-inline', so an inline onload="" attribute would be silently
 * blocked and the font would never apply.
 */
export function loadFonts(): void {
  if (typeof document === 'undefined') return;

  const stylesheets = [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap',
    // Icon-subsetting fix: the unsubsetted Material Symbols variable font
    // covers thousands of icons across 4 variable axes and is genuinely
    // multi-megabyte - Lighthouse's "avoid enormous network payloads"
    // finding (4.1 MB total) traced back to this one request. This site
    // only ever renders 9 distinct icon ligatures (grep for
    // material-symbols-outlined across src/components to get this list),
    // so &icon_names= (Google's official Material Symbols subsetting
    // param) fetches only those glyphs instead of the whole icon set.
    // If you add a NEW material-symbols-outlined icon anywhere, its name
    // MUST be added to this list too, or it will silently fail to render.
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=architecture,arrow_forward,close,psychology,robot_2,shield_lock,share,smart_toy,visibility&display=swap',
  ];

  for (const href of stylesheets) {
    if (document.querySelector(`link[href="${href}"]`)) continue;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
}
