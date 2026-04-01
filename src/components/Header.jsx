import React, { useState } from 'react';
import { Menu, X, Home, Search, GraduationCap, BookOpen, School, FileText } from 'lucide-react';

const Header = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', name: 'หน้าแรก', icon: <Home size={18} /> },
    { id: 'tcas', name: 'ข้อมูล TCAS', icon: <Search size={18} /> },
    { id: 'scholarship', name: 'ทุนการศึกษา', icon: <GraduationCap size={18} /> },
    { id: 'tutor', name: 'คอร์สติว/เรียนฟรี', icon: <BookOpen size={18} /> },
    { id: 'university', name: 'ระเบียบการมหาลัย', icon: <School size={18} /> },
    { id: 'portfolio', name: 'Portfolio', icon: <FileText size={18} /> }, // เพิ่มเมนูใหม่
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-[1000] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 bg-[#1A237E] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl">D</span>
            </div>
            <span className="text-2xl font-black text-[#1A237E] tracking-tighter">DEKKAII</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === item.id 
                    ? 'bg-[#1A237E] text-white shadow-md' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 shadow-xl">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
              }}
              className={`flex items-center gap-4 w-full px-5 py-4 rounded-2xl text-base font-bold ${
                activeTab === item.id ? 'bg-[#1A237E] text-white' : 'text-gray-600'
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;