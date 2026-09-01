import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface NotFoundViewProps {
  onGoHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onGoHome }) => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="font-headline font-bold text-[120px] leading-none text-[#004900]/10 select-none mb-4">
          404
        </div>

        {/* Message */}
        <h1 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] mb-3">
          Page Not Found
        </h1>
        <p className="font-body text-[#5a6b55] text-base mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onGoHome}
            className="inline-flex items-center justify-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#004d00] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </button>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-[#004900]/20 text-[#004900] font-label text-sm px-6 py-3 rounded-sm hover:bg-[#004900]/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Contact hint */}
        <p className="mt-10 text-xs text-[#9aa89a]">
          Need help?{' '}
          <a
            href="mailto:sagiyaventures@gmail.com"
            className="text-[#006400] hover:underline"
          >
            sagiyaventures@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
