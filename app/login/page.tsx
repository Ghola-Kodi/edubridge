"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAuthStore } from "@/lib/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(email, password);
    setLoading(false);
    if (success) {
      toast.success("Welcome back!");
      router.push("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-grey to-white flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 lg:p-10 border border-border">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl text-gold mx-auto mb-6">E</div>
          <h1 className="text-2xl font-heading font-bold text-primary mb-2">Welcome Back</h1>
          <p className="text-charcoal/50 text-sm">Sign in to access your dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com" 
              required 
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="block font-heading text-xs font-bold uppercase tracking-wide text-primary mb-2">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required 
              className="input-field w-full"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full py-4 font-heading text-sm font-bold uppercase tracking-wide"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-charcoal/50">
            Don't have an account?{' '}
            <Link href="/register" className="text-teal font-semibold hover:underline">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
