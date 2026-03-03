import Link from "next/link";
import Image from "next/image";
import helenImg from "./images/Helen2.jpg";
import mwangiImg from "./images/man03.jpg";

const services = [
  { icon:"🎓", title:"International Curriculum Training", desc:"Cambridge, Edexcel & IB training for teachers with workshops, certification and transition support.", cta:"Request a Programme" },
  { icon:"🏫", title:"School Placement",                  desc:"Personalised school matching for parents and students through structured needs assessment.", cta:"Book a Consultation" },
  { icon:"🧭", title:"Career Guidance & Counselling",     desc:"Career assessments, counselling sessions, and structured goal-setting to empower futures.", cta:"Schedule a Session" },
  { icon:"🌍", title:"University Placement Abroad",       desc:"University selection, application support, visa guidance, and scholarship search.", cta:"Start Your Journey" },
  { icon:"📚", title:"Professional Development",          desc:"Leadership training, modern teaching methodologies, and EdTech integration.", cta:"Join a Course" },
  { icon:"👩‍🏫", title:"Teacher Recruitment & Placement",  desc:"Rigorous screening, curriculum-qualified matching, and full onboarding support.", cta:"Hire With Confidence" },
];

const stats = [
  { value:"500+", label:"Students Placed" },
  { value:"120+", label:"Partner Schools" },
  { value:"15+",  label:"Countries Reached" },
  { value:"98%",  label:"Client Satisfaction" },
];

const testimonials = [
  { quote:"EdBridge transformed our school's curriculum transition to Cambridge. Their trainers were exceptional.", name:"Anne Mwangi", role:"Head Teacher, Nairobi International Academy" },
  { quote:"As a parent I was overwhelmed by school choices. EdBridge found the perfect school for my daughter.", name:"James Otieno", role:"Parent, Kisumu" },
  { quote:"My son was accepted to his first-choice UK university with a scholarship. We could not have done it without EdBridge.", name:"Grace Njoroge", role:"Parent, Nairobi" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-cover bg-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600')"}}>
        <div className="absolute inset-0 bg-primary/75"/>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <span className="inline-block border border-gold text-gold font-heading text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Global Education Consultancy</span>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl leading-tight">
            Bridging Learners to <span className="text-gold">World-Class Education</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-10 leading-relaxed">EdBridge Global empowers schools, educators, parents, and students with expert curriculum training, strategic placement, and personalised guidance.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services"          className="btn-primary">Explore Our Services</Link>
            <Link href="/book-consultation" className="btn-outline">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gold py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map(s=>(
            <div key={s.label}>
              <p className="font-heading font-bold text-primary text-4xl">{s.value}</p>
              <p className="text-primary/70 text-sm font-semibold mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">About EdBridge Global</span>
            <h2 className="text-3xl font-heading font-bold text-primary mt-1 mb-4">Transforming Education, One School at a Time</h2>
            <div className="divider"/>
            <p className="text-charcoal/80 leading-relaxed mb-4">EdBridge Global Limited is a premier education consultancy dedicated to helping institutions, educators, parents, and students navigate the evolving landscape of global education.</p>
            <p className="text-charcoal/80 leading-relaxed mb-8">From curriculum transitions to international university placements, our team provides end-to-end support that ensures every learner reaches their full potential.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about"  className="btn-primary">Our Story</Link>
              <Link href="/founders" className="btn-teal">Meet the Founders</Link>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
            <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" alt="International classroom" fill className="object-cover"/>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-soft-grey">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="section-label">What We Offer</span>
          <h2 className="text-3xl font-heading font-bold text-primary mt-1 mb-3">Our Expert Services</h2>
          <div className="divider mx-auto"/>
          <p className="text-charcoal/60 max-w-xl mx-auto mb-12">Comprehensive education consultancy for schools, educators, parents, and students across Africa and beyond.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s=>(
              <div key={s.title} className="card text-left flex flex-col">
                <span className="text-4xl mb-4">{s.icon}</span>
                <h4 className="font-heading font-bold text-primary text-base mb-2">{s.title}</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed flex-1">{s.desc}</p>
                <Link href="/book-consultation" className="mt-4 text-teal text-sm font-heading font-bold hover:underline">{s.cta} →</Link>
              </div>
            ))}
          </div>
          <Link href="/services" className="btn-primary mt-12 inline-block">View All Services</Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="section-label">Why EdBridge Global</span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1 mb-3">The EdBridge Difference</h2>
          <div className="divider mx-auto"/>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {icon:"🏆",title:"Proven Excellence",      desc:"A track record of transformative outcomes across 120+ schools."},
              {icon:"🌐",title:"Global Perspective",     desc:"Deep connections with international institutions and curricula worldwide."},
              {icon:"🎯",title:"Personalised Approach",  desc:"Every solution is tailored to match your unique goals and context."},
              {icon:"🤲",title:"End-to-End Support",     desc:"From initial consultation through implementation, we are with you."},
            ].map(w=>(
              <div key={w.title} className="text-center">
                <span className="text-5xl">{w.icon}</span>
                <h4 className="font-heading font-bold text-white text-base mt-4 mb-2">{w.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="section-label">Client Stories</span>
          <h2 className="text-3xl font-heading font-bold text-primary mt-1 mb-3">What Our Clients Say</h2>
          <div className="divider mx-auto mb-12"/>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t=>(
              <div key={t.name} className="bg-soft-grey rounded-xl p-6 text-left relative">
                <span className="text-6xl text-gold/20 font-serif absolute top-4 left-5 leading-none">"</span>
                <p className="text-charcoal/80 text-sm italic leading-relaxed mb-4 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-gold text-sm">{t.name[0]}</div>
                  <div>
                    <p className="font-heading font-bold text-primary text-sm">{t.name}</p>
                    <p className="text-charcoal/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/testimonials" className="btn-primary mt-12 inline-block">Read More Testimonials</Link>
        </div>
      </section>

      {/* FOUNDERS PREVIEW */}
      <section className="py-24 bg-soft-grey">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="section-label">Meet the Team</span>
          <h2 className="text-3xl font-heading font-bold text-primary mt-1 mb-3">Our Founders</h2>
          <div className="divider mx-auto mb-12"/>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {name:"Helen Nduhio",    title:"Co-Founder & CEO",                      slug:"helen", img: helenImg},
              {name:"Mwangi Njoroge",  title:"Co-Founder & Director of Operations",   slug:"mwangi", img: mwangiImg},
            ].map(f=>(
              <div key={f.slug} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border flex flex-col">
                <div className="relative h-64">
                  <Image src={f.img} alt={f.name} fill className="object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"/>
                  <div className="absolute bottom-4 left-4">
                    <p className="font-heading font-bold text-white">{f.name}</p>
                    <p className="text-gold text-sm">{f.title}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <Link href={`/book-consultation?founder=${f.slug}&name=${f.name.split(" ")[0]}`} className="btn-primary text-center">
                    📅 Book with {f.name.split(" ")[0]}
                  </Link>
                  <Link href="/founders" className="text-teal text-sm font-heading font-bold text-center hover:underline">Full Profile →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="py-24 bg-gradient-to-br from-primary to-blue-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Transform Your Educational Journey?</h2>
          <p className="text-white/70 text-lg mb-10">Whether you are a school, parent, student, or educator — EdBridge Global has a solution for you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book-consultation" className="btn-primary">Get Started Today</Link>
            <Link href="/services"          className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
