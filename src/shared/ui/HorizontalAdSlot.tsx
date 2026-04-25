"use client";

import { useEffect, useRef } from "react";

interface Props {
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const HorizontalAdSlot = ({ className = "" }: Props) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`my-8 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6661151683803615"
        data-ad-slot="6229732237"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default HorizontalAdSlot;
