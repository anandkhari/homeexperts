"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 3200);
    const t2 = setTimeout(() => setGone(true), 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <>
      <style>{`
        @keyframes loaderLogoIn {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes loaderTaglineIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderTrackIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes loaderFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes loaderExit {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-100%); }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          backgroundColor: "#1e3156",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: hiding
            ? "loaderExit 0.6s cubic-bezier(0.4,0,0.2,1) forwards"
            : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              opacity: 0,
              animation:
                "loaderLogoIn 0.9s cubic-bezier(0.34,1.56,0.64,1) 0s forwards",
            }}
          >
            <Image
              src="/logo.png"
              alt="HomeExperts"
              width={140}
              height={140}
              priority
              style={{ width: "140px", height: "auto" }}
            />
          </div>

          {/* Tagline */}
          <p
            style={{
              opacity: 0,
              animation: "loaderTaglineIn 0.6s ease 0.9s forwards",
              color: "#00bcd4",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            we do it right!
          </p>

          {/* Progress track */}
          <div
            style={{
              opacity: 0,
              animation: "loaderTrackIn 0.3s ease 1.1s forwards",
              width: 140,
              height: 3,
              borderRadius: 999,
              backgroundColor: "rgba(255,255,255,0.12)",
              overflow: "hidden",
            }}
          >
            {/* Fill */}
            <div
              style={{
                height: "100%",
                width: "0%",
                borderRadius: 999,
                backgroundColor: "#00bcd4",
                animation:
                  "loaderFill 2.2s cubic-bezier(0.4,0,0.2,1) 1.2s forwards",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
