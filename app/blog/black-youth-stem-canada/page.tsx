import { MainLayout } from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    stat: "9%",
    label: "Share of Black Canadians in STEM jobs",
    detail:
      "Statistics Canada (2021) shows Black Canadians represent roughly 4% of the population but only 9% of STEM roles, compared to 22% for non-visible minorities.",
  },
  {
    stat: "3x",
    label: "Likelihood of facing hiring bias",
    detail:
      "Research by the Conference Board of Canada indicates Black job seekers are nearly three times more likely to perceive bias during STEM recruitment cycles.",
  },
  {
    stat: "64%",
    label: "Teachers who want more culturally relevant resources",
    detail:
      "A STEM Teaching Canada survey found almost two-thirds of K-12 educators want materials that better reflect Black student experiences.",
  },
];

const callsToAction = [
  {
    title: "Start early and stay consistent",
    body:
      "Introduce coding clubs, after-school programs, or weekend workshops in elementary school. Early wins build confidence that carries into high school course selections.",
  },
  {
    title: "Show Black excellence in tech",
    body:
      "Highlight Canadian innovators—think Claudette McGowan, Jean Augustine, or Saadia Muzaffar. Invite guest speakers who reflect the students you serve.",
  },
  {
    title: "Create mentorship pipelines",
    body:
      "Partner with Black professional networks (Obsidi, Black Professionals in Tech Network) to match students with mentors for project feedback and career chats.",
  },
  {
    title: "Support families with resources",
    body:
      "Offer bilingual guides, info nights, and scholarships. Parents who feel informed are more likely to champion STEM pathways at home.",
  },
];

export default function BlackYouthStemCanadaPage() {
  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
            Equity in STEM
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Closing the Gap: Supporting Black Youth in Canadian STEM
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Despite Canada&apos;s growing tech sector, Black youth remain
            underrepresented in STEM classrooms and careers. Understanding the
            reasons, and taking action together, can help us change the story.
          </p>

          <section className="grid gap-6 md:grid-cols-3 mb-16">
            {stats.map((item) => (
              <Card key={item.label} className="border-2 rounded-2xl h-full">
                <CardContent className="p-6 space-y-3 text-center">
                  <div className="text-4xl font-bold text-primary">
                    {item.stat}
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold">
              Barriers Black learners face in Canada
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li>
                Limited access to early enrichment: Many predominantly Black
                neighbourhoods have fewer STEM camps, clubs, and specialists—so
                gaps appear before grade 6.
              </li>
              <li>
                Lack of culturally affirming curriculum: When lessons never
                reference Black history, innovators, or community challenges,
                students may disengage.
              </li>
              <li>
                Guidance counselling gaps: Reports from People for Education show
                Black students are less likely to be encouraged toward advanced
                math and science streams in high school.
              </li>
              <li>
                Financial barriers: University tuition, competition fees, and
                tech equipment can be prohibitive without scholarships or
                community-backed programs.
              </li>
            </ul>
          </section>

          <section className="space-y-6 mb-16">
            <h2 className="text-2xl font-semibold">What success can look like</h2>
            <p className="text-muted-foreground leading-relaxed">
              Across Canada, organizations are co-designing programs with Black
              youth, parents, and educators:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li>
                <strong>Black Boys Code / Black Girls Code</strong> chapters run
                weekend Python workshops that tie coding to entrepreneurship and
                real community needs.
              </li>
              <li>
                <strong>Ontario Tech University&apos;s Impact Labs</strong>
                pair high school students with undergraduate mentors for AI
                hackathons rooted in social impact challenges.
              </li>
              <li>
                <strong>Nova Scotia&apos;s Imhotep&apos;s Legacy Academy</strong>
                blends STEM tutoring with cultural heritage trips, boosting
                graduation rates and university enrolment.
              </li>
            </ul>
          </section>

          <section className="space-y-6 mb-16">
            <h2 className="text-2xl font-semibold">
              How families, schools, and communities can respond
            </h2>
            <div className="space-y-4">
              {callsToAction.map((action) => (
                <Card key={action.title} className="border rounded-2xl">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">{action.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {action.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold">Our commitment at Kids Learn AI</h2>
            <p className="text-muted-foreground leading-relaxed">
              We design Python and AI pathways that honour Black stories,
              celebrate community achievements, and remove financial and
              mentorship barriers. By partnering with parents, educators, and
              Black tech professionals, we ensure kids see themselves reflected
              in every lesson.
            </p>
          </section>

          <section className="bg-secondary/40 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to champion a new generation of innovators?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you&apos;re a parent, educator, community leader, or tech
              professional, there&apos;s room at the table. Start a club, mentor
              a student, or sponsor a scholarship—together we can build the
              future Black youth deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                href="/signup"
              >
                Enroll a learner
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                href="/contact"
              >
                Partner with us
              </a>
            </div>
          </section>
        </div>
      </article>
    </MainLayout>
  );
}
