"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuthStore } from "@/lib/authStore";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const role = user?.role;

  const services = [
    "International Curriculum Training", "School Placement", "Career Guidance & Counselling",
    "University Placement Abroad", "Professional Development", "Teacher Recruitment & Placement"
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-heading font-bold text-lg text-primary">E</div>
          <span className="font-heading font-bold text-white text-lg">EdBridge <span className="text-gold">Global</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {[['Home','/'],['Founders','/founders'],['Services','/services'],['Blog','/blog'],['Contact','/contact']].map(([l,h]) => (
            <Link key={h} href={h} className="font-heading text-sm font-semibold text-white/80 hover:text-gold transition-colors">{l}</Link>
          ))}

          {user ? (
            <>
              <Link href={role === "ADMIN" ? "/admin" : "/dashboard"} className="font-heading text-sm font-semibold text-white/80 hover:text-gold">
                {role === "ADMIN" ? "Admin" : "Dashboard"}
              </Link>
              <button onClick={logout} className="font-heading text-sm text-white/60 hover:text-gold transition-colors">Sign Out</button>
            </>
          ) : (
            <Link href="/login" className="font-heading text-sm font-semibold text-white/80 hover:text-gold">Login</Link>
          )}
          <Link href="/book-consultation" className="btn-primary !py-2 !px-5 !text-xs">Book Consultation</Link>
        </nav>

        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {[['Home','/'],['About','/about'],['Founders','/founders'],['Services','/services'],['Contact','/contact']].map(([l,h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)} className="font-heading text-sm font-semibold text-white/80 py-3 border-b border-white/10 hover:text-gold">
              {l}
            </Link>
          ))}
          {user ? (
            <>
              <Link href={role === "ADMIN" ? "/admin" : "/dashboard"} onClick={() => setOpen(false)} className="font-heading text-sm font-semibold text-white/80 py-3 border-b border-white/10 hover:text-gold">
                Dashboard
              </Link>
              <button onClick={() => { logout(); setOpen(false); }} className="text-sm text-white/60 py-3 text-left hover:text-gold">
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)} className="font-heading text-sm font-semibold text-white/80 py-3 border-b border-white/10 hover:text-gold">
              Login
            </Link>
          )}
          <Link href="/book-consultation" onClick={() => setOpen(false)} className="btn-primary text-center mt-3">
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
