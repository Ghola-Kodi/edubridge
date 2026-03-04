import Link from "next/link";
import Image from "next/image";
import helenImg from "@/app/images/Helen2.jpg";
import mwangiImg from "@/app/images/man03.jpg";

const founders = [
  {
    name: "Hellen Nduhiu",
    title: "Co-Founder & CEO",
    slug: "helen",
    bio: `HELLEN NDUHIU – Visionary Education Leader | School Principal | International Curriculum Trainer | Education Consultant

Professional Brand Profile

Hellen Nduhiu is a visionary and transformational education leader with a passion for building schools, empowering teachers, and shaping globally competent learners. With over a decade of experience in education and school leadership, she brings a unique blend of academic excellence, strategic leadership, and compassionate mentorship to the institutions and communities she serves.

Through her education consultancy work, Hellen supports schools transitioning to international standards, trains teachers on global best practices, and mentors education leaders on building sustainable, high-quality institutions. Her work focuses on equipping educators with practical skills, strong pedagogy, and leadership capacity to thrive in modern classrooms.
Speaker & Mentor
Hellen is also a passionate mentor and speaker, especially in empowering educators, school leaders, youth, and women to lead purposeful and impactful lives. She advocates for continuous growth, resilience, and excellence in both personal and professional spaces.

 `,
    qualifications: ["M.Ed Education Leadership – University of Nairobi", "Cambridge International Trainer", "IB Curriculum Consultant", "School Governance Specialist"],
    email: "hellen@edbridgeglobal.com",
    image: helenImg
  },
  {
    name: "Mwangi Njoroge",
    title: "Co-Founder & Director of Operations",
    slug: "mwangi",
    bio: "Mwangi specializes in university placement strategy, career counselling, and institutional partnerships across Africa and Europe. Helped 500+ students secure placements in UK, USA, Canada, Australia. Leads international partnerships and scholarship programmes.",
    qualifications: ["B.A. International Relations – University of Dar es Salaam", "Postgraduate Diploma Education Management", "Certified Career Development Facilitator", "UK UCAS Placement Advisor"],
    email: "mwangi@edbridgeglobal.com",
    image: mwangiImg
  }
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-soft-grey">
      <section className="bg-primary py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="section-label">Leadership</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">Meet Our Founders</h1>
          <div className="divider mx-auto w-20 h-1 bg-white/30 mb-6"/>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">EdBridge Global was founded by education experts committed to bridging learners to world-class opportunities.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {founders.map((founder, index) => (
            <article key={founder.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 ? 'lg:grid-cols-2-reverse' : ''}`}>
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">{founder.name}</h2>
                <p className="text-gold font-semibold text-lg mb-8">{founder.title}</p>
                <div className="divider mb-8"/>
                <div className="text-charcoal/80 leading-relaxed text-lg mb-8">
                {founder.bio.split("\n").map((line, i) => {
                  const trimmed = line.trim();
                  if (!trimmed) return null;
                  return (
                    <p key={i} className="mb-4">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

                <h4 className="font-heading font-bold text-primary text-sm uppercase tracking-wider mb-4">Qualifications</h4>
                <ul className="space-y-2 mb-10">
                  {founder.qualifications.map((qual, i) => (
                    <li key={i} className="flex items-start gap-3 text-charcoal/80">
                      <span className="text-gold font-bold mt-1 w-5 flex-shrink-0">✓</span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link href={`/book-consultation?founder=${founder.slug}&name=${founder.name.split(' ')[0]}`} className="btn-primary">
                    📅 Book with {founder.name.split(' ')[0]}
                  </Link>
                  <a href={`mailto:${founder.email}`} className="btn-teal">✉️ Email {founder.name.split(' ')[0]}</a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-none h-96 lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200">
                <Image 
                  src={founder.image} 
                  alt={founder.name} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"/>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
