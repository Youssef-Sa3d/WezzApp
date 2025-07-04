import React from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 pt-24">
      <div className="whatsapp-card rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#25d366]">Terms & Policy</h1>
        <p className="mb-6 text-gray-700 leading-relaxed">WezzApp is developed for educational, experimental, and entertainment purposes. By using this service, you agree to the following terms and policies:</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#128c7e]">Data Policy</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We store limited user information: email, display name, and (in future) message content and recipient WhatsApp number.</li>
              <li>We do not use your data for advertising or profiling.</li>
              <li>We do not share your data with third parties.</li>
              <li>We delete your data upon request, where technically possible.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#128c7e]">Platform Terms Notice</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">WezzApp uses the unofficial <code className="bg-gray-100 px-2 py-1 rounded text-sm">whatsapp-web.js</code> library to automate WhatsApp Web. This is <b>not supported by Meta Platforms, Inc.</b> and may violate WhatsApp's <a href="https://www.whatsapp.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="underline text-[#25d366] hover:text-[#128c7e]">Terms of Service</a>.</p>
            <p className="mb-4 text-gray-700 leading-relaxed">You are solely responsible for ensuring you are allowed to use such tools in your country and for using the platform in a legal, ethical, and respectful manner.</p>
          </section>
        </div>
        
        <p className="text-xs text-gray-500 mt-8 pt-4 border-t border-gray-200">
          See also our <Link href="/disclaimer" className="underline hover:text-[#25d366] font-medium">Disclaimer</Link> and <Link href="/license" className="underline hover:text-[#25d366] font-medium">License</Link>.
        </p>
      </div>
    </div>
  );
} 