import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ view, navigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 h-25 flex items-center sticky top-0 z-50 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        
        {/* ส่วนโลโก้ */}
        <div onClick={() => navigate('home')} className="flex items-center gap-2 cursor-pointer rounded-xl hover:scale-105 transition-transform duration-300">
          <img 
            src="UNVST-Logo/no.1/logo_blue.png" /* 📌 เพิ่ม / ด้านหน้าเพื่อให้หาไฟล์เจอทุกหน้า */
            alt="DeKKaii Logo" 
            className="h-20 w-auto object-contain mix-blend-multiply"
          />
          <span className="text-xl font-black text-[#1A237E] tracking-tight">DEKKAii</span>
        </div>

        {/* ส่วนเมนูคอมพิวเตอร์ */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => navigate('home')} className={`text-sm font-bold ${view === 'home' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>หน้าแรก</button>
          <button onClick={() => navigate('explore')} className={`text-sm font-bold ${view === 'explore' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>ค้นหาค่าย</button>
          <button onClick={() => navigate('tcas')} className={`text-sm font-bold ${view === 'tcas' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>TCAS</button>
          <button onClick={() => navigate('scholarship')} className={`text-sm font-bold ${view === 'scholarship' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>SCHOLARSHIP</button>
          <button onClick={() => navigate('tutor')} className={`text-sm font-bold ${view === 'tutor' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>TUTOR COURSE</button>
          <button onClick={() => navigate('criteria')} className={`text-sm font-bold ${view === 'criteria' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>กำหนดเกณฑ์มหาวิทยาลัย</button>
          <button onClick={() => navigate('portfolio')} className={`text-sm font-bold ${view === 'portfolio' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>PORTFOLIO</button>
        </div>

        {/* ปุ่ม 3 ขีดสำหรับมือถือ */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1A237E] focus:outline-none p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* เมนู Dropdown สำหรับมือถือ */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 flex flex-col p-4 gap-4 md:hidden z-50">
          <button onClick={() => navigate('home')} className={`text-sm font-bold ${view === 'home' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>หน้าแรก</button>
          <button onClick={() => navigate('explore')} className={`text-sm font-bold ${view === 'explore' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>ค้นหาค่าย</button>
          <button onClick={() => navigate('tcas')} className={`text-sm font-bold ${view === 'tcas' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>TCAS</button>
          <button onClick={() => navigate('scholarship')} className={`text-sm font-bold ${view === 'scholarship' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>SCHOLARSHIP</button>
          <button onClick={() => navigate('tutor')} className={`text-sm font-bold ${view === 'tutor' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>TUTOR COURSE</button>
          <button onClick={() => navigate('criteria')} className={`text-sm font-bold ${view === 'criteria' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>กำหนดเกณฑ์มหาวิทยาลัย</button>
          <button onClick={() => navigate('portfolio')} className={`text-sm font-bold ${view === 'portfolio' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>PORTFOLIO</button>
        </div>
      )}
    </nav>
  );
}