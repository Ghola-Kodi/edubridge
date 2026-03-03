import Link from "next/link";

const SERVICES = [
  {
    title: "International Curriculum Training",
    desc: "Cambridge, Edexcel & IB training for teachers with workshops, certification and transition support."
  },
  {
    title: "School Placement",
    desc: "Personalised school matching for parents and students through structured needs assessment."
  },
  {
    title: "Career Guidance & Counselling",
    desc: "Career assessments, counselling sessions, and structured goal-setting to empower futures."
  },
  {
    title: "University Placement Abroad",
    desc: "University selection, application support, visa guidance, and scholarship search."
  },
  {
    title: "Professional Development for Educators",
    desc: "Leadership training, modern teaching methodologies, and EdTech integration."
  },
  {
    title: "Teacher Recruitment & Placement",
    desc: "Rigorous screening, curriculum-qualified matching, and full onboarding support."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-soft-grey">
      <section className="bg-primary py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="section-label">Our Expertise</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">Services We Offer</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive support for schools, educators, students and families at every step of the educational journey.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(s => (
            <div key={s.title} className="card">
              <h3 className="font-heading font-bold text-primary text-xl mb-2">{s.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{s.desc}</p>
              <Link href="/book-consultation" className="text-teal text-sm font-heading font-bold hover:underline">
                Book Consultation →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
