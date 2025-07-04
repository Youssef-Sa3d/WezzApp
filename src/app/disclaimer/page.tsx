import React from "react";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 pt-24">
      <div className="whatsapp-card rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#25d366]">Legal Disclaimer</h1>
        <p className="mb-6 text-gray-700 leading-relaxed">This project ("WezzApp") is developed for educational, experimental, and entertainment purposes. WezzApp allows users to create an account and send anonymous messages to WhatsApp numbers.</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#128c7e]">Data Policy</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Email address</li>
              <li>Display name</li>
              <li>Message content (in future versions)</li>
              <li>Recipient WhatsApp number (if needed for delivery)</li>
            </ul>
            <p className="mb-4 text-gray-700 leading-relaxed">We commit to not using this data for advertising or profiling, not sharing this data with third parties, and deleting data upon user request (where technically possible).</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#128c7e]">Platform Terms Notice</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">WezzApp uses the unofficial <code className="bg-gray-100 px-2 py-1 rounded text-sm">whatsapp-web.js</code> library to automate interactions with WhatsApp Web. This is <b>not supported by Meta Platforms, Inc.</b> and may violate WhatsApp's <a href="https://www.whatsapp.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="underline text-[#25d366] hover:text-[#128c7e]">Terms of Service</a>.</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Ensuring you are allowed to use such tools in your country</li>
              <li>Using the platform in a legal, ethical, and respectful manner</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#128c7e]">Liability</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>The developers do not endorse illegal activity or harassment</li>
              <li>The developers are not liable for any damage, bans, or account issues that arise from using this tool</li>
              <li>This software is provided as-is, with no warranty</li>
            </ul>
          </section>
        </div>
        
        <p className="mb-4 text-gray-700 leading-relaxed">By using this project, you acknowledge and accept these terms.</p>
        
        <p className="text-xs text-gray-500 pt-4 border-t border-gray-200">
          See also our <Link href="/license" className="underline hover:text-[#25d366] font-medium">License</Link> and <Link href="/terms" className="underline hover:text-[#25d366] font-medium">Terms & Policy</Link>.
        </p>
      </div>
    </div>
  );
} 