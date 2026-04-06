"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Home, Lock, Mail, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin/blogs");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6">
      {/* Glow background accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#3BBFBF] blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#2C3E6B] blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Branding */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="h-16 w-16 bg-[#2C3E6B] rounded-2xl flex items-center justify-center shadow-xl mb-6 shadow-[#2C3E6B]/20">
            <Home className="text-[#3BBFBF] h-8 w-8" />
          </div>
          <h1 className="text-2xl font-black text-[#2C3E6B] uppercase tracking-tighter">
            Admin <span className="text-[#3BBFBF]">Portal</span>
          </h1>
          <p className="text-[#5A6A8A] text-xs font-bold uppercase tracking-widest mt-2 opacity-60">
            Home Experts UAE CMS Access
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-[#2C3E6B]/10 p-10 border border-gray-100">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl flex items-center gap-3">
                <div className="text-red-500 text-xs font-bold">{error}</div>
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Admin Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#3BBFBF] transition-colors" size={18} />
                  <input
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl text-sm font-bold text-[#2C3E6B] focus:outline-none focus:border-[#3BBFBF] focus:bg-white transition-all"
                    placeholder="name@homeexperts.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Secure Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#3BBFBF] transition-colors" size={18} />
                  <input
                    type="password"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl text-sm font-bold text-[#2C3E6B] focus:outline-none focus:border-[#3BBFBF] focus:bg-white transition-all"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2C3E6B] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#1a2642] transition-all shadow-xl shadow-[#2C3E6B]/20 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5 text-[#3BBFBF]" />
              ) : (
                <>
                  Authenticate Access
                  <ArrowRight size={18} className="text-[#3BBFBF]" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-10 flex items-center justify-center gap-6 opacity-40">
           <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#2C3E6B]" />
              <span className="text-[10px] font-bold text-[#2C3E6B] uppercase tracking-tighter">SSL Encrypted</span>
           </div>
           <div className="h-1 w-1 bg-gray-400 rounded-full" />
           <span className="text-[10px] font-bold text-[#2C3E6B] uppercase tracking-tighter">Managed by Home Experts IT</span>
        </div>
      </div>
    </div>
  );
}