import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceViewProps {
  onBack: () => void;
}

export const TermsOfServiceView: React.FC<TermsOfServiceViewProps> = ({ onBack }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-[#006400] font-label text-sm mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <h1 className="font-headline text-3xl font-bold text-[#2c160e] mb-2">Terms of Service</h1>
      <p className="text-xs text-[#9aa89a] mb-10">Last updated: August 2026</p>

      <div className="prose prose-sm max-w-none text-[#404a3b] space-y-8 font-body leading-relaxed">

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Sagiya Ventures website (sagiyaventures.com), you agree to be bound
            by these Terms of Service. If you do not agree, please do not use this website.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">2. About Us</h2>
          <p>
            Sagiya Ventures Private Limited is an AI and software solutions company incorporated in Tamil Nadu,
            India. We provide services including custom AI development, data analytics, workflow automation,
            and computer vision solutions.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">3. Use of This Website</h2>
          <p>You agree to use this website only for lawful purposes. You must not:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Use the site in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorised access to any part of the website or its servers</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
            <li>Misrepresent your identity or affiliation when contacting us</li>
          </ul>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">4. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and images — is the property of
            Sagiya Ventures Private Limited and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, or create derivative works without our prior written consent.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">5. Contact Form & Enquiries</h2>
          <p>
            Submitting our contact form does not constitute a binding contract or guarantee of services.
            It is an expression of interest and will be followed up at our discretion. All service
            agreements will be formalised in a separate written contract.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">6. Disclaimer</h2>
          <p>
            This website is provided on an "as is" basis. Sagiya Ventures makes no warranties, express or
            implied, regarding the accuracy, completeness, or fitness for a particular purpose of the
            content on this site. We reserve the right to modify or discontinue any part of the website
            at any time without notice.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Sagiya Ventures shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of this website or reliance on
            information contained herein.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">8. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of India. Any disputes shall be subject to
            the exclusive jurisdiction of the courts in Tamil Nadu, India.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">9. Changes to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of the website after
            any changes constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-lg font-semibold text-[#2c160e] mb-2">10. Contact</h2>
          <p>
            For any questions regarding these Terms, please contact:<br />
            <strong>Rajkumar Sundar</strong>, Founder &amp; Managing Director<br />
            Sagiya Ventures Private Limited, Tamil Nadu, India<br />
            <a href="mailto:sagiyaventures@gmail.com" className="text-[#006400] hover:underline">sagiyaventures@gmail.com</a>
          </p>
        </div>

      </div>
    </section>
  );
};
