"use client";

import React, { useState } from "react";

function SideBar() {
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setHistoryOpen(!historyOpen)}
        className="md:hidden p-3 whatsapp-button"
      >
        {historyOpen ? "Hide History" : "Show History"}
      </button>

      {/* Sidebar - Message History */}
      <aside
        className={`w-full md:w-1/3 lg:w-1/4 whatsapp-card border-r border-[var(--border-color)] p-4 overflow-y-auto transition-all duration-300 ${
          historyOpen ? "block" : "hidden md:block"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
          Message History
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          (No messages yet)
        </p>
      </aside>
    </>
  );
}

export default SideBar;
