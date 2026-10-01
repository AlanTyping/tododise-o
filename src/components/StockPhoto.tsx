"use client";

/* eslint-disable @next/next/no-img-element -- Remote stock photos use direct URLs and explicit intrinsic dimensions. */
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  name: string;
  accent: string;
  position?: string;
};

export function StockPhoto({ src, alt, name, accent, position = "center" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="stock-photo-fallback" role="img" aria-label={alt} style={{ "--fallback-tone": accent } as React.CSSProperties}>
        <span className="fallback-halo" />
        <span className="fallback-product"><span>{name}</span></span>
      </span>
    );
  }
  return <img src={src} alt={alt} width="900" height="900" loading="lazy" onError={() => setFailed(true)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: position }} />;
}
