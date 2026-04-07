"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

import {
  FileText,
  LogOut,
  ChevronRight,
  LayoutDashboard,
  ShieldCheck,
  Home,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  const isLoginRoute = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginRoute) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!isMounted) return;

      if (!session) {
        router.replace("/admin/login");
      } else {
        setLoading(false);
      }
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/admin/login");
      } else {
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [isLoginRoute, router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  // AUTH LOADING STATE
  if (loading && !isLoginRoute) {
    return (
      <div className="min-h-screen bg-[#2C3E6B] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#3BBFBF]/20 border-t-[#3BBFBF] rounded-full animate-spin mb-4" />
        <span className="text-[10px] font-black text-[#3BBFBF] uppercase tracking-[0.5em] animate-pulse">
          Authenticating_Session
        </span>
      </div>
    );
  }

  // LOGIN PAGE
  if (isLoginRoute) return <>{children}</>;

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-72 bg-[#2C3E6B] flex flex-col relative z-20 shadow-2xl">
        {/* BRANDING */}
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <Home className="text-[#3BBFBF] h-8 w-8" />
            <div className="leading-none text-white">
              <div className="text-lg font-black uppercase tracking-tight">Home</div>
              <div className="text-sm font-light uppercase tracking-[0.2em] opacity-70">Experts</div>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 py-8 space-y-3">
          <div className="px-4 mb-4">
             <span className="text-[10px] font-black text-[#3BBFBF] uppercase tracking-widest opacity-50">Menu</span>
          </div>

          <NavLink
            href="/admin/blogs"
            icon={<FileText size={18} />}
            label="Expert Articles"
            active={pathname === "/admin/blogs" || pathname.startsWith("/admin/blogs/")}
          />
        </nav>

        {/* FOOTER */}
        <div className="p-6 border-t border-white/5 bg-black/10">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 text-white/50 hover:text-red-400 transition-all w-full px-4 py-2 rounded-xl hover:bg-white/5"
          >
            <LogOut size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Sign Out</span>
          </button>

          <div className="mt-6 px-4 flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] font-bold text-white/30 uppercase tracking-tighter">
              <span>Home Experts CMS</span>
              <span>v1.2</span>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-[#3BBFBF] font-black uppercase">
                <ShieldCheck size={10} /> Secure Admin Access
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top bar for mobile/desktop spacing */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-end px-10">
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#3BBFBF]" />
                <span className="text-[10px] font-black text-[#2C3E6B] uppercase tracking-widest">Admin Portal Active</span>
            </div>
        </header>
        
        <div className="flex-1 overflow-auto p-10 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </div>
      </main>
    </div>
  );
}

/* NAV LINK COMPONENT */

function NavLink({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`
        flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300
        ${
          active
            ? "bg-[#3BBFBF] text-white shadow-lg shadow-[#3BBFBF]/20"
            : "text-white/60 hover:bg-white/5 hover:text-white"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span className={`${active ? "text-white" : "text-[#3BBFBF]"}`}>
          {icon}
        </span>
        <span className="text-sm font-black uppercase tracking-widest">
          {label}
        </span>
      </div>

      {active && (
        <ChevronRight size={16} className="text-white animate-pulse" />
      )}
    </Link>
  );
}