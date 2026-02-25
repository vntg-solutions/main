"use client";

import { Section } from "./section";

const LOGOS = [
  "Atlas Logistics",
  "Northline Manufacturing",
  "Riverstone Finance",
  "Amplitude Clinics",
  "Summit Retail Group",
  "Harborline Freight",
  "Nova Energy",
  "Meridian Labs",
];

export function Trust() {
  return (
    <Section className="mx-auto max-w-6xl py-10 md:py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Social proof
          </p>
          <h2 className="text-sm font-medium text-zinc-300 md:text-base">
            Trusted by local and global businesses.
          </h2>
          <p className="max-w-xs text-xs text-zinc-500">
            From owner-operated warehouses to multi-region teams, Vantage meets
            your operational reality where it is.
          </p>
        </div>

        <div className="relative h-20 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex h-full animate-marquee items-center gap-6 pl-16 text-xs text-zinc-300">
            {[...LOGOS, ...LOGOS].map((logo, idx) => (
              <div
                key={`${logo}-${idx}`}
                className="whitespace-nowrap rounded-full bg-white/5 px-4 py-1.5 ring-1 ring-white/10"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

