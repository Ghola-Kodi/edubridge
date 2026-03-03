import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-heading font-bold text-lg text-primary">E</div>
              <span className="font-heading font-bold text-white text-lg">EdBridge <span className="text-gold">Global</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">Bridging learners to world-class education through expert consultancy and personalised guidance.</p>
            <div className="flex gap-3 mt-5">
              {["in","f","ig"].map(icon=>(
                <a key={icon} href="#" className="w-9 h-9 rounded-full border border-gold/40 bg-white/5 flex items-center justify-center text-gold text-xs font-bold hover:bg-gold hover:text-primary transition-all duration-200">{icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-gold mb-5">Quick Links</h5>
            <ul className="flex flex-col gap-2.5">
              {[["Home","/"],["Founders","/founders"],["Services","/services"],["Blog","/blog"],["Contact","/contact"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-white/60 hover:text-gold transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-gold mb-5">Our Services</h5>
            <ul className="flex flex-col gap-2.5">
              {["Curriculum Training","School Placement","Career Guidance","University Placement","Professional Development","Teacher Recruitment"].map(s=>(
                <li key={s}><Link href="/services" className="text-sm text-white/60 hover:text-gold transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-gold mb-5">Contact</h5>
            {[["📞","+254 700 000 000"],["✉️","info@edbridgeglobal.com"],["📍","Nairobi, Kenya"],["🕐","Mon–Fri, 8am–5pm EAT"]].map(([icon,text])=>(
              <div key={text} className="flex gap-3 mb-3 text-sm text-white/60"><span>{icon}</span><span>{text}</span></div>
            ))}
            <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-gold mt-6 mb-3">Newsletter</h5>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l text-white text-sm placeholder:text-white/30 outline-none focus:border-gold"/>
              <button className="px-4 py-2 bg-gold text-white text-xs font-heading font-bold rounded-r hover:bg-gold-dark transition-colors">Go</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-3 text-xs text-white/40">
          <span>© 2026 EdBridge Global Limited. All rights reserved.</span>
          <span>Designed for education excellence.</span>
        </div>
      </div>
    </footer>
  );
}
