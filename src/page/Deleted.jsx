import React from "react";
import { ArrowLeft, Ghost } from "lucide-react";

export default function ProjectDeletedPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 selection:bg-orange-100">
      <div className="max-w-sm w-full text-center">
        {/* --- VISUAL ELEMENT --- */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <Ghost size={64} className="text-gray-100 animate-bounce" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-gray-50 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="space-y-3">
          <h1 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#F98821]">
            Error Code: 404
          </h1>
          <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">
            Your Project <br /> Is Deleted
          </h2>
          <p className="text-[11px] text-gray-400 font-medium leading-relaxed max-w-[240px] mx-auto">
            Proyek yang Anda cari telah dihapus secara permanen atau tautan yang
            digunakan sudah tidak valid.
          </p>
        </div>

        {/* --- NAVIGATION --- */}
        <div className="mt-12">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-b-2 border-gray-900 pb-1 hover:border-[#F98821] hover:text-[#F98821] transition-all duration-300">
            <ArrowLeft size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Return to Previous
            </span>
          </button>
        </div>

        {/* --- FOOTER DECORATION --- */}
        <div className="mt-24">
          <div className="flex justify-center gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 h-1 bg-gray-100 rounded-full"></div>
            ))}
          </div>
          <p className="mt-4 text-[8px] font-bold text-gray-200 uppercase tracking-[0.4em]">
            CIVIXOR Cloud Services
          </p>
        </div>
      </div>
    </div>
  );
}
