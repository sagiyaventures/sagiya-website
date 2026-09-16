# Sagiya Ventures — SEO Action Plan (Step-by-Step)

**தயாரித்தவர்:** Meenatchi (SEO & Search Visibility Specialist) — Sagiya OS
**தேதி:** செப்டம்பர் 12, 2026

இதை மேலிருந்து கீழாக, order-படியே follow செய்யவும். Part A-ஐ முதலில் முடிக்காமல் Part B-க்கு போக வேண்டாம் — code fix live-ஆகாத வரை Search Console-இல் எதுவும் சரியா தெரியாது.

---

## PART A — இன்று செய்த Code Fixes-ஐ Live-க்கு கொண்டு வாங்க

என் மற்றும் Vikram-ஓட fixes (`vercel.json` + `App.tsx`) உங்க computer-லேயே save ஆயிருச்சு, ஆனா **இன்னும் live website-க்கு போகவில்லை.** Terminal-ஐ உங்க `sagiya-website` folder-இல் திறந்து, இதை ஒவ்வொன்றாக run பண்ணுங்க:

```bash
# 1. Dependencies சரியா இருக்கானு check
npm install

# 2. Local-ஆ test பாருங்க
npm run dev
```
Browser-இல் `localhost:3000` திறந்து:
- Nav-இல் "AI Services" click செய்யுங்க → address bar-இல் `#ai-services` தெரியணும்
- Page refresh பண்ணுங்க → அதே section-இலேயே இருக்கணும் (Home-க்கு போகக்கூடாது)
- Browser Back button அழுத்துங்க → முந்தைய section-க்கு போகணும்

எல்லாம் சரியா இருந்தா:

```bash
# 3. Production build test (errors இருக்கானு பாருங்க)
npm run build

# 4. Git-க்கு commit & push
git add -A
git commit -m "fix: SPA routing + Vercel rewrite for SEO/404"
git push
```

- **5.** Vercel dashboard-க்கு போய் (vercel.com/dashboard) deployment success ஆனதை confirm பண்ணுங்க (1-2 நிமிடம் ஆகும்).
- **6.** Live site-இல் இதை test பாருங்க:
  - `https://www.sagiyaventures.com/random-xyz` → இப்போ 404 error காட்டாமல் Home page load ஆகணும் (அல்லது உங்க custom NotFound view)
  - `https://www.sagiyaventures.com/#about` → நேரடியா "About Us" section-க்கு scroll ஆகணும்

---

## PART B — Google Search Console (இதுல தான் Google-க்கு உங்க site-ஐ "அறிமுகம்" பண்றது)

⚠️ இது உங்க Google account login தேவைப்படுற வேலை — இதை நான் பண்ண முடியாது, நீங்க தான் பண்ணனும். நான் ஒவ்வொரு step-ஐயும் சொல்றேன்:

1. **search.google.com/search-console** போங்க, `sagiyaventures@gmail.com` account-ஓட login பண்ணுங்க.
2. "Add Property" → **URL prefix** தேர்ந்துகொள்ளுங்க → `https://www.sagiyaventures.com` type பண்ணுங்க.
3. Verification method-ல் **"Google Analytics"** தேர்ந்துகொள்ளுங்க (உங்க site-ல ஏற்கனவே gtag/GA-4 install ஆயிருக்கு — `G-BJ22D6MLCP` — அதனால இது ஒரே click-ல verify ஆகும், வேற எதுவும் செய்யத் தேவையில்லை).
4. Verify ஆனதும், Left menu → **"Sitemaps"** → box-ல `sitemap.xml` type பண்ணி Submit பண்ணுங்க.
5. Same process-ஐ `https://www.sagiyaventures.in` domain-க்கும் repeat பண்ணுங்க (separate property-ஆ add பண்ணி, அதுக்கும் sitemap submit பண்ணுங்க — canonical tag ஏற்கனவே `.com`-க்கு point பண்ணுறதால Google duplicate-ஆ treat பண்ணாது).
6. **"URL Inspection"** tool-ல உங்க homepage URL paste பண்ணி, **"Request Indexing"** click பண்ணுங்க — இது Google-க்கு "இப்போவே வந்து crawl பண்ணு" சொல்லுறது மாதிரி, சாதாரணமா wait பண்றதை விட வேகமா ஆகும்.

---

## PART C — Google Business Profile (Local Search-க்கு முக்கியம்)

⚠️ இதுவும் account-based — நீங்க தான் பண்ணனும்.

1. **business.google.com** போங்க.
2. Business name: `Sagiya Ventures Private Limited`
3. Category: "Software Company" அல்லது "Information Technology Company"
4. உங்களுக்கு public office/walk-in இல்லாததால், "**Service area business**" தேர்ந்துகொள்ளுங்க (Tamil Nadu / India-ஐ service area-ஆ set பண்ணலாம், physical address public-ஆ காட்ட வேண்டாம்).
5. Phone number, website (sagiyaventures.com), logo சேருங்க.
6. Google phone/postcard மூலமா verification அனுப்பும் — அதை complete பண்ணுங்க.

---

## PART D — தொடர்ந்து செய்ய வேண்டியவை (Ongoing)

- **வாரம் ஒருமுறை:** Search Console → "Coverage/Pages" section பாருங்க, ஏதேனும் crawl errors வந்தா சொல்லுங்க, நான் fix செய்யலாம்.
- Footer-இல் phone number + full address சேர்க்கவும் (trust signal — முந்தைய audit report-ல குறிப்பிட்டது).
- "AI company Tamil Nadu", "Government AI solutions India" போன்ற keywords-ஐ content-இல் இன்னும் natural-ஆ சேர்க்கலாம் (Gayathri இதை பார்த்துக்கொள்ளலாம்).
- புது case study/pilot project update வந்த உடனே அதை Case Studies பக்கத்தில் சேர்த்து, Search Console-இல் அந்த section-ஐ "Request Indexing" பண்ணுங்க.

---

*Team: Vikram (code fix) · Meenatchi (SEO strategy) · Karthikeyan (CTO oversight) — Sagiya OS v2.5*
