import React from "react";
import Link from "next/link";

export default function LicensePage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 pt-24">
      <div className="whatsapp-card rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#25d366]">MIT License</h1>
        <pre className="bg-gray-100 p-6 rounded-xl text-xs overflow-x-auto mb-6 border border-gray-200">
{`MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**Additional Clause:** Use of this software to violate any third-party platform's terms of service, including WhatsApp's, is strictly at the user's own risk. The authors are not responsible for any misuse or resulting consequences.`}
        </pre>
        <p className="text-xs text-gray-500 pt-4 border-t border-gray-200">
          See also our <Link href="/disclaimer" className="underline hover:text-[#25d366] font-medium">Disclaimer</Link> and <Link href="/terms" className="underline hover:text-[#25d366] font-medium">Terms & Policy</Link>.
        </p>
      </div>
    </div>
  );
} 