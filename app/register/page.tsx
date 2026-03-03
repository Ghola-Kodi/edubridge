"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAuthStore } from "@/lib/authStore";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', organisation: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await register(form);
    setLoading(false);
    if (success) {
      toast.success("Account created! Please sign in.");
      router.push("/login");
    } else {
      toast.error("Registration failed. Email may already be in use.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-grey to-white flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 lg:p-10 border border-border">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl text-gold mx-auto mb-6">E</div>
          <h1 className="text-2xl font-heading font-bold text-primary mb-2">Create Account</h1>
          <p className="text-charcoal/50 text-sm">Join EdBridge Global</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Full Name</label>
            <input 
              type="text" 
              value={form.name} 
              onChange={(e) => setForm({...form, name: e.target.value})}
              placeholder="Your full name" 
              required 
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Email</label>
            <input 
              type="email" 
              value={form.email} 
              onChange={(e) => setForm({...form, email: e.target.value})}
              placeholder="your@email.com" 
              required 
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Organisation (Optional)</label>
            <input 
              type="text" 
              value={form.organisation} 
              onChange={(e) => setForm({...form, organisation: e.target.value})}
              placeholder="School or company name" 
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Password</label>
            <input 
              type="password" 
              value={form.password} 
              onChange={(e) => setForm({...form, password: e.target.value})}
              placeholder="Create a strong password" 
              required 
              className="input-field w-full"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full py-4 font-heading text-sm font-bold uppercase tracking-wide"
          >
            {loading ? "Creating…" : "Create Account"}
          </button>
        </form>
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-charcoal/50">
            Already have an account?{' '}
            <Link href="/login" className="text-teal font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
