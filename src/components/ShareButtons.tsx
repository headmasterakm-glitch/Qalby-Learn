"use client";

import { useState } from "react";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const text = encodeURIComponent(`${title} ${url}`);
  const encodedUrl = encodeURIComponent(url);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-muted mr-1 text-sm font-semibold">Bagikan:</span>
      <a href={`https://wa.me/?text=${text}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
        WhatsApp
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
      >
        Facebook
      </a>
      <button type="button" onClick={copy} className="btn-outline" aria-live="polite">
        {copied ? "Tautan disalin ✓" : "Salin tautan"}
      </button>
    </div>
  );
}
