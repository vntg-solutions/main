"use client";

import { motion } from "framer-motion";
import { FileText, Globe2, Settings, Zap } from "lucide-react";
import { Section } from "./section";
import { cn } from "../lib/utils";

const cardBase =
  "flex flex-col justify-between rounded-2xl border border-white/10 bg-black/60 p-5 text-sm text-zinc-200";

export function ServicesBento() {
  return (
    <Section id="services" className="mx-auto max-w-6xl py-10 md:py-16">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Services
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Websites, tools, and automation for small business.
          </h2>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            From a simple website or bill generator to client portals and
            workflow tools — we build what you need to run better.
          </p>
        </div>
        <p className="text-xs text-zinc-500">
          Practical solutions you can use right away.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <BentoCard
          className="md:col-span-2 md:row-span-2"
          title="Website creation"
          icon={<Globe2 className="h-5 w-5 text-sky-300" />}
          highlight="A professional presence that works for you."
        >
          <p className="mt-2 text-xs text-zinc-400">
            Custom sites and landing pages for your business — clear, fast, and
            easy to update. We handle design, hosting, and a smooth handoff.
          </p>
          <ul className="mt-3 space-y-1.5 text-[11px] text-zinc-400">
            <li>— Brand-aligned design and copy.</li>
            <li>— Mobile-friendly and easy to maintain.</li>
            <li>— Optional client or customer portals.</li>
          </ul>
        </BentoCard>

        <BentoCard
          className="md:col-span-2"
          title="Bill & document generation"
          icon={<FileText className="h-5 w-5 text-emerald-300" />}
          highlight="Template-based PDFs you can share with customers."
        >
          <p className="mt-2 text-xs text-zinc-400">
            We build tools that take your inputs (e.g. line items, dates, client
            details) and generate polished PDFs — invoices, quotes, or reports —
            ready to send.
          </p>
        </BentoCard>

        <BentoCard
          className="md:row-span-2"
          title="Automation & tools"
          icon={<Zap className="h-5 w-5 text-amber-300" />}
          highlight="Workflows and tools that simplify operations."
        >
          <p className="mt-2 text-xs text-zinc-400">
            Custom tools and light automation: forms, integrations, repeatable
            workflows, and small apps that reduce manual work and errors.
          </p>
          <ul className="mt-3 space-y-1.5 text-[11px] text-zinc-400">
            <li>— Forms and data collection that feed your process.</li>
            <li>— Integrations with tools you already use.</li>
            <li>— Simple dashboards or internal tools when needed.</li>
          </ul>
        </BentoCard>

        <BentoCard
          className="md:col-span-1"
          title="Client portals"
          icon={<Settings className="h-5 w-5 text-sky-300" />}
          highlight="Dedicated spaces for your clients."
        >
          <p className="mt-2 text-xs text-zinc-400">
            Subdomain-based portals (like devi.vntg.solutions) so you can give
            clients a branded, secure place to access info or services.
          </p>
        </BentoCard>
      </div>
    </Section>
  );
}

type BentoCardProps = {
  title: string;
  highlight: string;
  icon: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

function BentoCard({
  title,
  highlight,
  icon,
  className,
  children,
}: BentoCardProps) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className={cn(cardBase, "relative overflow-hidden", className)}
    >
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          {icon}
        </div>
      </div>

      <div className="relative mt-4 space-y-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-zinc-400">{highlight}</p>
      </div>

      <div className="relative mt-3">{children}</div>
    </motion.article>
  );
}

