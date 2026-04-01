import React from 'react';
import { BookOpen, Award, Star, ExternalLink, School } from 'lucide-react';
import { PORTFOLIOS_DATA } from '../data/mockData';

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF6B00] px-4 py-1.5 rounded-full text-[10px] font-bold mb-4 tracking-widest uppercase">
          <Star size={14} /> Showcase
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A237E] mb-4">
          คลังพอร์ตโฟลิโอ <span className="text-[#FF6B00]">รุ่นพี่ที่สอบติด</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          ดูเป็นไอเดียและแรงบันดาลใจในการทำ Portfolio ของตัวเองให้โดดเด่นและเตะตากรรมการ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PORTFOLIOS_DATA.map((port) => (
          <div key={port.id} className="bg-white rounded-[32px] overflow-hidden shadow-xl shadow-indigo-100/50 border border-gray-100 group cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {/* รูปหน้าปกพอร์ต */}
            <div className="relative h-60 overflow-hidden bg-gray-100">
              <img 
                src={port.coverImage} 
                alt={`Portfolio ${port.studentName}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-black text-xl leading-tight mb-1">{port.faculty}</h3>
                <p className="text-xs font-medium text-gray-300 flex items-center gap-1">
                  <School size={12} /> {port.targetUniversity}
                </p>
              </div>
            </div>

            {/* ข้อมูลด้านล่าง */}
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm font-bold text-[#1A237E]">{port.studentName}</p>
                  <p className="text-[10px] text-gray-400">{port.school}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B00]">
                  <BookOpen size={16} />
                </div>
              </div>

              {/* Tags ผลงานเด่น */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ผลงานเด่นในพอร์ต</p>
                <div className="flex flex-wrap gap-1.5">
                  {port.tags.map((tag, idx) => (
                    <span key={idx} className="bg-indigo-50 text-[#1A237E] text-[10px] px-2 py-1 rounded-md font-medium border border-indigo-100/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={port.driveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full mt-6 bg-gray-50 hover:bg-[#1A237E] hover:text-white text-[#1A237E] font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                ดูผลงานแบบเต็ม <ExternalLink size={14} />
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}