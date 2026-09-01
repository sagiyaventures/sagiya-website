import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyViewProps {
  onBack: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onBack }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-[#006400] font-label text-sm mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <h1 className="font-headline text-3xl font-bold text-[#2c160e] mb-2">Privacy Policy</h1>
      <p className="text-xs text-[#9aa89a] mb-10">Last updated: August 2026</p>

      <div className="prose prose-sm max-w-none text-[#404a3b] space-y-8 font-body leading-relaxed">

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">1. Who We Are</h2>
          <p>
            Sagiya Ventures Private Limited ("Sagiya Ventures", "we", "us", or "our") is an AI and software
            solutions company based in Tamil Nadu, India. We provide custom AI development, data analytics,
            and workflow automation services to government and enterprise clients.
          </p>
          <p className="mt-2">
            Contact: <a href="mailto:sagiyaventures@gmail.com" className="text-[#006400] hover:underline">sagiyaventures@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">2. Information We Collect</h2>
          <p>When you use our website or contact us, we may collect:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Contact information</strong> — your name, email address, and organisation name (when you submit our contact form)</li>
            <li><strong>Project details</strong> — information you voluntarily provide about your project or requirements</li>
            <li><strong>Usage data</strong> — basic analytics such as pages visited and time spent (if analytics is enabled)</li>
          </ul>
          <p className="mt-2">We do not collect sensitive personal data such as Aadhaar, PAN, financial details, or passwords.</p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">3. How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Respond to your enquiries and project requests</li>
            <li>Understand your requirements and provide relevant services</li>
            <li>Improve our website and services</li>
          </ul>
          <p className="mt-2">We do not use your information for unsolicited marketing or sell it to third parties.</p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">4. Third-Party Services</h2>
          <p>Our contact form is processed by <strong>Formspree</strong> (formspree.io), which transmits your submission to our email. Formspree's own privacy policy applies to data handled by their service.</p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">5. Data Retention</h2>
          <p>We retain contact form submissions only as long as necessary to respond to and fulfil your request. You may request deletion of your data at any time by emailing us.</p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">6. Your Rights</h2>
          <p>You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, contact us at <a href="mailto:sagiyaventures@gmail.com" className="text-[#006400] hover:underline">sagiyaventures@gmail.com</a>.</p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">7. Security</h2>
          <p>We take reasonable technical measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.</p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">9. Contact</h2>
          <p>
            For any privacy-related questions, please contact:<br />
            <strong>Rajkumar Sundar</strong>, Founder &amp; Managing Director<br />
            Sagiya Ventures Private Limited, Tamil Nadu, India<br />
            <a href="mailto:sagiyaventures@gmail.com" className="text-[#006400] hover:underline">sagiyaventures@gmail.com</a>
          </p>
        </div>

      </div>
    </section>
  );
};
