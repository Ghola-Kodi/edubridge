"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/lib/authStore";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { user, checkAuth } = useAuthStore();
  const [consultations, setConsultations] = useState<any[]>([]);
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth().then(() => {
      if (!user) {
        router.push("/login");
      } else {
        Promise.all([
          fetch("/api/consultations").then(r => r.json()),
          fetch("/api/files").then(r => r.json())
        ]).then(([consultations, files]) => {
          setConsultations(Array.isArray(consultations) ? consultations : []);
          setFiles(Array.isArray(files) ? files : []);
          setLoading(false);
        });
      }
    });
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-grey to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-heading text-charcoal/40 text-lg">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-grey to-white">
      <div className="bg-gradient-to-r from-primary to-blue-900 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Welcome back, <span className="text-gold">{user?.name?.split(" ")[0]}!</span>
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">Manage your consultations and access exclusive resources.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Consultations", value: consultations.length, icon: "📅", color: "bg-primary" },
            { label: "Available Files", value: files.length, icon: "📁", color: "bg-teal" },
            { label: "Completed", value: consultations.filter((c: any) => c.status === "COMPLETED").length, icon: "✅", color: "bg-green-500" },
            { label: "Upcoming", value: consultations.filter((c: any) => c.status === "CONFIRMED").length, icon: "🗓️", color: "bg-gold" },
          ].map((stat, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 ${stat.color === "bg-gold" ? "hover:shadow-gold/25" : ""}`}>
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-charcoal/50 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/book-consultation" className="group bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-10 flex items-center gap-6 hover:scale-[1.02] transition-all duration-300 shadow-xl">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform">
              📅
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-2xl mb-2">Book Consultation</h3>
              <p className="text-white/80 text-lg">Schedule with Helen or Mwangi</p>
            </div>
          </Link>

          <Link href="/dashboard/files" className="group bg-white border-2 border-border rounded-2xl p-10 flex items-center gap-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-teal to-blue-500 rounded-2xl flex items-center justify-center text-3xl">
              📁
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary text-2xl mb-2">My Resources</h3>
              <p className="text-charcoal/70 text-lg">Download guides & materials</p>
            </div>
          </Link>
        </div>

        {/* Consultations Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-blue-900 px-8 py-6">
            <h2 className="font-heading font-bold text-white text-2xl">My Consultations</h2>
          </div>
          <div className="p-8">
            {consultations.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">📝</div>
                <h3 className="font-heading font-bold text-primary text-xl mb-4">No consultations yet</h3>
                <p className="text-charcoal/50 mb-8">Get started by booking your first session.</p>
                <Link href="/book-consultation" className="btn-primary px-10 py-4 text-lg">Book Consultation</Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      {["Service", "Consultant", "Date", "Time", "Status"].map((header) => (
                        <th key={header} className="pb-6 pr-8 font-heading font-semibold text-charcoal/50 text-left text-sm uppercase tracking-wide">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {consultations.map((consultation: any) => (
                      <tr key={consultation.id} className="border-b border-border/50 hover:bg-soft-grey transition-colors">
                        <td className="py-6 pr-8 font-medium text-charcoal max-w-xs truncate">{consultation.service}</td>
                        <td className="py-6 pr-8 capitalize text-charcoal/80">{consultation.founder}</td>
                        <td className="py-6 pr-8 text-charcoal/80">{new Date(consultation.date).toLocaleDateString()}</td>
                        <td className="py-6 pr-8 text-charcoal/80">{consultation.timeSlot}</td>
                        <td className="py-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wide ${
                            consultation.status === "CONFIRMED" ? "bg-teal/10 text-teal border border-teal/30" :
                            consultation.status === "COMPLETED" ? "bg-emerald-100 text-emerald-700 border border-emerald/30" :
                            consultation.status === "CANCELLED" ? "bg-red-100 text-red-600 border border-red/30" :
                            "bg-gold/10 text-gold-dark border border-gold/30"
                          }`}>
                            {consultation.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
