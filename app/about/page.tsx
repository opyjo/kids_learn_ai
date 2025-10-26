"use client";

import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Heart,
  Compass,
  Globe2,
  Sparkles,
  GraduationCap,
  Code,
  Users,
  BookOpen,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const pillars = [
  {
    title: "Mission",
    icon: Heart,
    description:
      "Give every child the chance to master Python fundamentals and understand how AI affects their world—no gatekeepers, no intimidation, just joyful learning.",
  },
  {
    title: "Vision",
    icon: Compass,
    description:
      "A generation of young innovators who can question, build, and guide intelligent technology with empathy, creativity, and confidence.",
  },
  {
    title: "Promise",
    icon: ShieldCheck,
    description:
      "We design experiences that are safe, caring, and culturally aware, so families feel seen and supported every step of the journey.",
  },
];

const impactHighlights = [
  {
    stat: "70%",
    label: "Of tomorrow's jobs",
    detail:
      "are projected to require advanced digital skills. Python and AI literacy prepare kids to make bold choices, not play catch-up.",
  },
  {
    stat: "3x",
    label: "Higher confidence",
    detail:
      "is reported by young learners who build projects that reflect their voice, culture, and community stories.",
  },
  {
    stat: "100%",
    label: "Parent peace of mind",
    detail:
      "comes from transparent curricula, realistic timelines, and mentors who care about the whole child—not just the code they write.",
  },
];

const commitments = [
  {
    title: "Start with heart",
    body:
      "We listen before we teach. Student check-ins, family feedback, and community advisors shape every update we release.",
  },
  {
    title: "Teach the " + "why" + " behind AI",
    body:
      "Our lessons explore fairness, bias, and responsible use. Kids learn to ask better questions before they write better code.",
  },
  {
    title: "Make it accessible",
    body:
      "Scholarships, teacher toolkits, and bilingual resources ensure cost or language never become the reason a child is left behind.",
  },
  {
    title: "Celebrate small wins",
    body:
      "From a first successful print statement to a full project showcase, we capture progress with reflection journals, badges, and family wrap-ups.",
  },
];

export default function AboutPage() {
  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-20 lg:py-28">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 inline mr-2" />
            About Kids Learn AI
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Every child deserves a seat in the future of AI.
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
            We combine warm teaching, rigorous Python foundations, and honest
            conversations about artificial intelligence to help curious kids
            become thoughtful creators—not passive users—of technology.
          </p>
        </section>

        {/* Mission | Vision | Promise */}
        <section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-20">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="border-2 rounded-3xl h-full">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-center">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Our Story */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            We started with one question: who gets to build tomorrow?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Kids Learn AI was born after watching brilliant young minds feel
            intimidated by code—or worse, convinced technology wasn&apos;t “for
            them.” We knew that if kids could see Python as playful, and if they
            could explore AI in a safe, transparent way, they would realise the
            future was theirs to shape.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            So we gathered educators, engineers, parents, and students to design
            a learning path that respects curiosity, embraces culture, and meets
            families exactly where they are. The result is a platform that feels
            like a friend cheering you on, backed by curriculum rigour and
            real-world relevance.
          </p>
        </section>

        {/* Impact Highlights */}
        <section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-20">
          {impactHighlights.map((item) => (
            <Card key={item.label} className="rounded-3xl border-2 h-full">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-5xl font-bold text-primary">{item.stat}</div>
                <div className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                  {item.label}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Why AI matters for kids */}
        <section className="bg-secondary/40 border border-secondary/60 rounded-3xl p-10 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                Why we believe AI literacy can&apos;t wait until high school
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-base leading-relaxed">
              <li>
                AI already shapes the stories our kids watch, the music they
                stream, and the news they read. Understanding how algorithms
                decide things builds healthy skepticism and critical thinking.
              </li>
              <li>
                Learning Python first gives children the mental models they need
                to stay curious and in control when they encounter AI systems.
                They see behind the curtain and learn to ask better questions.
              </li>
              <li>
                Early exposure is protective. Kids learn about bias, privacy,
                and consent before they adopt harmful habits or internalise the
                idea that technology is neutral.
              </li>
              <li>
                The earlier we nurture confidence, the more diverse voices we
                welcome into advanced courses, internships, and careers.
              </li>
            </ul>
          </div>
        </section>

        {/* Commitments */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
            How we turn this mission into daily practice
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {commitments.map((commitment) => (
              <Card key={commitment.title} className="border rounded-2xl h-full">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {commitment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {commitment.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-12 lg:p-16 text-center text-primary-foreground shadow-2xl">
          <div className="text-6xl mb-6">🌟</div>
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Together, we can write a new story for the next generation.
          </h2>
          <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
            Whether you&apos;re a parent, educator, community leader, or technologist,
            Kids Learn AI invites you to co-create a world where every child can
            speak the language of innovation and guide intelligent technology
            with courage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                <Rocket className="mr-2 h-5 w-5" /> Start learning for free
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-white/10"
              >
                Connect with our team
              </Button>
            </Link>
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
