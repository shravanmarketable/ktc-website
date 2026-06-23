import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  MapPin,
  ArrowRight,
  TrendingUp,
  Clock,
  Ticket,
  Rocket,
  Users,
  Briefcase,
  Zap,
  Instagram,
  Banknote,
  Gift,
  Mic
} from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KTC 2026 — Kerala Traders Carnival" },
    ],
  }),
  component: Landing,
});

const TICKET_URL = "https://www.cofee.life/events/kerala-traders-carnival-2026---marketable-x-the5ers-india/evnt_yOxP1iyocc3820?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnw5eHPZfGo2gv28E7AbkoqF_5tAwXyPumof0HMZvi-y6tRPAyekdIDytMtmY_aem_4pN_TLzSm-jX9MtwfvpFqw";

function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isLoading ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Glowing background behind logo */}
        <div className="absolute h-40 w-40 rounded-full bg-blue/20 blur-3xl animate-pulse-slow" />
        <img src="/KTC Logo 1.svg" alt="Loading..." className="relative h-16 md:h-24 w-auto animate-float" />
      </div>
      <div className="mt-10 h-1 w-48 bg-border rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-lime rounded-full animate-[loading_1.5s_ease-in-out_forwards]" />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-5 lg:py-6 flex items-center justify-between">
        <a href="#top" className="transition-transform hover:scale-105 shrink-0 flex items-center">
          <img src="/KTC Logo 1.svg" alt="Kerala Traders Carnival" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
          <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground/70 whitespace-nowrap leading-none mt-0.5">
            Presented by
          </span>
          <a href="https://the5ers.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 flex items-center">
            <img
              src="/5ers logo.webp"
              alt="The 5ers Logo"
              className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full blur-3xl opacity-40 animate-pulse-slow"
        style={{ background: "radial-gradient(closest-side, var(--blue), transparent 70%)" }}
      />
      {/* grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] animate-grid-pan"
        style={{
          backgroundImage:
            "linear-gradient(var(--cyan) 1px, transparent 1px), linear-gradient(90deg, var(--cyan) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
        <div data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-blue/40 bg-blue-soft px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] md:tracking-[0.2em] text-blue hover:scale-105 transition-transform cursor-default">
          <TrendingUp className="h-4 w-4" /> Marketable <span className="text-lime mx-0.5">x</span> The 5ers
        </div>

        <h1 data-aos="fade-right" data-aos-delay="50" className="mt-8 font-black tracking-tight text-5xl sm:text-7xl md:text-8xl leading-[0.9]">
          KERALA
          <br />
          <span className="text-lime">TRADERS</span>
          <br />
          CARNIVAL
        </h1>

        <p data-aos="fade-left" data-aos-delay="100" className="mt-8 max-w-2xl text-xl md:text-2xl font-medium text-foreground/90 leading-tight">
          Kerala's largest offline summit.
          Stop trading alone. <span className="text-lime font-bold">Connect, learn, and get funded.</span>
        </p>

        {/* event details card */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:px-5 hover:-translate-y-1 transition-transform">
            <Calendar className="h-6 w-6 text-cyan md:h-5 md:w-5" />
            <div className="min-w-0">
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/60">Date</div>
              <div className="font-semibold text-sm md:text-base">July 5, 2026</div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:px-5 hover:-translate-y-1 transition-transform">
            <Clock className="h-6 w-6 text-cyan md:h-5 md:w-5" />
            <div className="min-w-0">
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/60">Time</div>
              <div className="font-semibold text-sm md:text-base truncate">9 AM – 6 PM</div>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/nEyr5WS4UzuR6WP86" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="250" className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:px-5 hover:-translate-y-1 hover:border-cyan/50 hover:bg-card/80 transition-all active:scale-[0.98]">
            <MapPin className="h-6 w-6 text-cyan md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
            <div className="min-w-0">
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/60">Venue</div>
              <div className="font-semibold text-sm md:text-base truncate group-hover:text-cyan transition-colors">Gokulam Park</div>
            </div>
          </a>
          <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="300" className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 rounded-2xl border border-lime/30 bg-lime-soft p-4 md:px-5 hover:-translate-y-1 hover:border-lime/60 hover:bg-lime/20 transition-all active:scale-[0.98]">
            <Ticket className="h-6 w-6 text-lime md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
            <div className="min-w-0">
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-lime">Entry</div>
              <div className="font-bold text-sm md:text-base text-foreground group-hover:text-lime transition-colors">₹999/- Onwards</div>
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="350" className="mt-10">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-blue text-white px-8 py-4 text-lg font-bold shadow-[0_15px_50px_-12px_var(--blue)] hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all"
          >
            Get Your Access Pass
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </a>
          <p className="mt-4 text-sm text-foreground/50 md:ml-4 inline-block text-center md:text-left w-full md:w-auto">
            Limited to 500 seats. Selling fast.
          </p>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    { text: "KERALA TRADERS CARNIVAL 2026", icon: Rocket },
    { text: "500 TRADERS", icon: Users },
    { text: "GET FUNDED", icon: Briefcase },
    { text: "LIVE PAYOUTS", icon: TrendingUp },
    { text: "MARKETABLE x THE 5ERS", icon: Zap }
  ];

  return (
    <div className="w-full bg-lime text-deep py-2.5 md:py-4 overflow-hidden flex whitespace-nowrap shadow-[0_0_30px_-10px_var(--lime)] -rotate-1 scale-105 my-8">
      <div className="animate-marquee flex items-center w-max">
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center font-black text-sm md:text-xl tracking-widest uppercase">
            {items.map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="mx-4 md:mx-8">{item.text}</span>
                <item.icon className="h-4 w-4 md:h-6 md:w-6" strokeWidth={3} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hooks() {
  const hooks = [
    {
      icon: Banknote,
      title: "$10 Bonus For All Registrations",
      desc: "Every participant receives a $10 trading bonus from our event partner. Start your trading journey with an extra edge.",
      color: "lime"
    },
    {
      icon: Gift,
      title: "Funded Account Giveaways",
      desc: "Win funded trading accounts, exclusive rewards, merchandise, and surprise giveaways throughout the event.",
      color: "blue"
    },
    {
      icon: Mic,
      title: "20+ Speakers & Panel Discussions",
      desc: "Learn from top traders, investors, tax experts, content creators, and industry leaders through keynote sessions and debates.",
      color: "cyan"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-deep/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 data-aos="zoom-in" className="font-black tracking-tight text-3xl md:text-5xl">
            Why You <span className="text-lime">Need To Be Here</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 overflow-hidden py-4">
          {hooks.map((h, i) => (
            <div
              key={i}
              data-aos={i === 0 ? "fade-right" : i === 1 ? "fade-up" : "fade-left"}
              data-aos-delay={i * 100}
              className={`group rounded-3xl border border-border bg-card/40 backdrop-blur p-8 hover:-translate-y-2 transition-all hover:border-${h.color}/50`}
            >
              <div className={`grid place-items-center h-16 w-16 rounded-2xl bg-${h.color}/10 text-${h.color} mb-6 group-hover:scale-110 transition-transform ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}>
                <h.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{h.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="register" className="py-16 md:py-24 bg-deep border-t border-border relative overflow-hidden">
      {/* background floating orbs */}
      <div aria-hidden className="pointer-events-none absolute top-10 left-10 h-64 w-64 rounded-full bg-blue/10 blur-3xl animate-float" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-lime/10 blur-3xl animate-float-delayed" />

      <div className="absolute inset-0 bg-lime/5" />
      <div data-aos="zoom-in" className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="animate-float inline-block">
          <Rocket className="h-12 w-12 text-lime mx-auto mb-6" />
        </div>
        <h2 className="font-black tracking-tight text-3xl md:text-5xl leading-tight">
          Don't Miss <br className="md:hidden" />
          <span className="text-lime">The Event of 2026.</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-foreground/75 font-medium">
          1 Full Day. 500 Traders. Infinite Opportunities.
        </p>
        <div className="mt-8 md:mt-10">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-lime text-deep px-8 py-4 text-lg font-bold shadow-[0_15px_40px_-12px_var(--lime)] hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
          >
            Claim Your Ticket Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a href="https://www.instagram.com/keralatraderscarnival/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/50 hover:text-cyan transition-colors" aria-label="KTC Instagram">
            <Instagram className="h-5 w-5" /> <span className="text-xs font-semibold tracking-wider uppercase">Carnival</span>
          </a>
          <a href="https://www.instagram.com/themarketable.in/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/50 hover:text-blue transition-colors" aria-label="Marketable Instagram">
            <Instagram className="h-5 w-5" /> <span className="text-xs font-semibold tracking-wider uppercase">Marketable</span>
          </a>
          <a href="https://www.instagram.com/the5ersindia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/50 hover:text-lime transition-colors" aria-label="The 5ers India Instagram">
            <Instagram className="h-5 w-5" /> <span className="text-xs font-semibold tracking-wider uppercase">The 5ers</span>
          </a>
        </div>
        <p className="text-sm text-foreground/50 text-center">
          Hosted by <a href="https://www.instagram.com/themarketable.in/?hl=en" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground/80 hover:text-blue transition-colors">Marketable</a> · Presented by <a href="https://the5ers.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-lime hover:text-lime/80 transition-colors">The 5ers</a>
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AOS.init({
        duration: 800,
        once: true,
        easing: "ease-out-cubic",
        offset: 50,
      });
      setTimeout(() => AOS.refresh(), 100);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />
      <Nav />
      <Hero />
      <Marquee />
      <Hooks />
      <FinalCTA />
      <Footer />
    </div>
  );
}
