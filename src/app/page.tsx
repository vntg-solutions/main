import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { InstantPortal } from "../components/instant-portal";
import { ServicesBento } from "../components/services-bento";
import { Trust } from "../components/trust";
import { ContactFooter } from "../components/contact-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-4 pb-12 pt-2 md:gap-6 md:pb-16">
        <Hero />
        <InstantPortal />
        <ServicesBento />
        <Trust />
      </main>
      <ContactFooter />
    </div>
  );
}
