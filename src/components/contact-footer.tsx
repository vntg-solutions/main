"use client";

import { Section } from "./section";

export function ContactFooter() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer id="contact" className="mt-6 border-t border-white/10 bg-black/70">
      <Section className="mx-auto max-w-6xl py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Contact
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Ready to simplify?
            </h2>
            <p className="max-w-sm text-sm text-zinc-400">
              Tell us what you need — a website, bill generator, automation, or
              something else. We&apos;ll get back with a clear next step.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
              <div>
                <p className="text-zinc-400">Response time</p>
                <p className="text-sm font-semibold text-zinc-100">&lt; 5 days</p>
              </div>
              <div>
                <p className="text-zinc-400">Best fit</p>
                <p className="text-sm font-semibold text-zinc-100">
                  Small business · solopreneurs · growing teams
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-black/60 to-black/80 p-4 text-sm shadow-soft-xl md:p-5"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-zinc-100 outline-none ring-0 ring-accent/40 transition focus:border-accent/60 focus:ring-1"
                  placeholder="Ada Lovelace"
                />
              </Field>
              <Field label="Work email">
                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-zinc-100 outline-none ring-0 ring-accent/40 transition focus:border-accent/60 focus:ring-1"
                  placeholder="you@company.com"
                />
              </Field>
            </div>

            <Field label="Company">
              <input
                className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-zinc-100 outline-none ring-0 ring-accent/40 transition focus:border-accent/60 focus:ring-1"
                placeholder="Vantage Warehouse Group"
              />
            </Field>

            <Field label="What do you need?">
              <textarea
                required
                rows={3}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-zinc-100 outline-none ring-0 ring-accent/40 transition focus:border-accent/60 focus:ring-1"
                placeholder="e.g. a website, bill/invoice tool, client portal, or automation — and any deadlines or constraints."
              />
            </Field>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-primary shadow-soft-xl transition hover:bg-accent/90"
              >
                Send brief
              </button>
              <p className="text-[11px] text-zinc-500">
                We&apos;ll only use your details to respond to this request.
              </p>
            </div>
          </form>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-[11px] text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Vantage Solutions. All rights reserved.</p>
          <p className="text-xs text-zinc-600">vntg.solutions</p>
        </div>
      </Section>
    </footer>
  );
}

type FieldProps = {
  label: string;
  children: React.ReactNode;
};

function Field({ label, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-1 text-xs text-zinc-300">
      <span>{label}</span>
      {children}
    </label>
  );
}

