"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        toast.success('Message sent!');
        reset();
      } else {
        toast.error('Failed to send message');
      }
    } catch {
      toast.error('Something went wrong');
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-soft-grey">
      <section className="bg-primary py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="section-label">Get in Touch</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">We'd love to hear from you. Fill out the form below or reach us through the listed contact details.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-10 border border-border">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Name *</label>
              <input {...register("name", { required: true })} className="input-field" />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Email *</label>
              <input type="email" {...register("email", { required: true })} className="input-field" />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Phone</label>
              <input type="tel" {...register("phone")} className="input-field" />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Service</label>
              <input {...register("service")} className="input-field" />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Message *</label>
              <textarea {...register("message", { required: true })} rows={4} className="input-field resize-none" />
            </div>
            <button type="submit" disabled={submitting} className="btn-primary w-full py-4 font-heading text-sm font-bold uppercase tracking-wide">
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
