"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type HeroVideoBackgroundProps = {
  posterSrc: string;
  posterAlt: string;
  videoSrc: string;
};

export function HeroVideoBackground({
  posterSrc,
  posterAlt,
  videoSrc,
}: HeroVideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="absolute inset-0">
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100",
        )}
      >
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {!hasError ? (
        <video
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "absolute inset-0 hidden h-full w-full object-cover object-center opacity-80 transition-opacity duration-700 motion-safe:block",
            isLoaded ? "opacity-80" : "opacity-0",
          )}
        />
      ) : null}
    </div>
  );
}
