"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SERVICES = [
  "International Curriculum Training", "School Placement", "Career Guidance & Counselling",
  "University Placement Abroad", "Professional Development for Educators",
  "Student Motivation Programmes", "Team Building & Workshops",
  "School Quality Assessment & Audits", "School Start-Up Consultancy",
  "Teacher Recruitment & Placement", "General Enquiry"
];

const FOUNDERS = [
  { slug: "helen", name: "Helen Nduhio", title: "Co-Founder & CEO" },
  { slug: "mwangi", name: "Mwangi Njoroge", title: "Co-Founder & Director of Operations" }
];

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

export default function BookConsultation() {
  const params = useSearchParams();
  const preFounder = params.get("founder") ?? "helen";
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { founder: preFounder }
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSuccess(true);
        reset();
        toast.success('Consultation booked successfully!');
      } else {
        toast.error('Booking failed. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  if (success) return (
    <div className="min-h-screen bg-soft-grey flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-12 text-center border border-border">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-4">Booking Confirmed!</h2>
        <p className="text-charcoal/70 mb-8">We'll send you a confirmation email shortly. Thank you!</p>
        <button onClick={() => setSuccess(false)} className="btn-primary px-8 py-3">
          Book Another
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-soft-grey">
      <section className="bg-primary py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="section-label">Book a Session</span>
          <h1 className="text-4xl font-heading font-bold text-white mt-2">Book Consultation</h1>
          <div className="divider mx-auto mt-3 bg-white/20"/>
          <p className="text-white/70 mt-4 text-lg">Select consultant, service, and time. Confirmed within 24 hours.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-10 border border-border space-y-6">
          <h3 className="text-xl font-heading font-bold text-primary">Your Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Full Name *</label>
              <input {...register("name", { required: true })} placeholder="Your full name" className="input-field" />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Email *</label>
              <input type="email" {...register("email", { required: true })} placeholder="your@email.com" className="input-field" />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Phone</label>
              <input type="tel" {...register("phone")} placeholder="+254 700 000 000" className="input-field" />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Service *</label>
              <select {...register("service", { required: true })} className="input-field">
                <option value="">Select service…</option>
                {SERVICES.map(service => <option key={service} value={service}>{service}</option>)}
              </select>
            </div>
          </div>

          <h3 className="text-xl font-heading font-bold text-primary pt-4">Choose Consultant</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {FOUNDERS.map(founder => (
              <label key={founder.slug} className="cursor-pointer p-4 border-2 border-border rounded-xl hover:border-gold/50 transition-all duration-200">
                <input type="radio" {...register("founder", { required: true })} value={founder.slug} className="sr-only peer" />
                <div className="peer-checked:bg-gold/5">
                  <p className="font-heading font-bold text-primary text-sm">{founder.name}</p>
                  <p className="text-xs text-charcoal/60 mt-1">{founder.title}</p>
                </div>
              </label>
            ))}
          </div>

          <h3 className="text-xl font-heading font-bold text-primary pt-4">Date & Time</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Date *</label>
              <input type="date" {...register("date", { required: true })} className="input-field" min={new Date().toISOString().split('T')[0]} />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Time *</label>
              <select {...register("timeSlot", { required: true })} className="input-field">
                <option value="">Choose time…</option>
                {TIME_SLOTS.map(slot => <option key={slot} value={slot}>{slot}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Notes (optional)</label>
            <textarea {...register("message")} rows={3} placeholder="Any specific details for the session…" className="input-field resize-none" />
          </div>

          <button type="submit" className="btn-primary w-full py-5 font-heading text-sm font-bold uppercase tracking-wide">
            Confirm Booking
          </button>
        </form>
      </section>
    </div>
  );
}
