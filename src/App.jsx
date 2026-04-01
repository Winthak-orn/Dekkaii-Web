import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Explore from './components/Explore';
import TcasInfo from './components/TcasInfo';
import Scholarship from "./components/Scholarship";
import TutorCourse from './components/TutorCourse';
import UniversityCriteria from './components/UniversityCriteria';
import Footer from './MyFooter'; // หรือ './components/Footer' ขึ้นอยู่กับว่าคุณเก็บไว้ไหน
import Portfolio from './components/Portfolio';
import { 
  Calendar, MapPin, Clock, ChevronRight, Zap, 
  ArrowLeft, School
} from 'lucide-react';

// 📌 ดึงข้อมูล Data Base จากไฟล์ mockData มาใช้งานตรงนี้!
import { REGIONS, ACTIVITY_TYPES, CATEGORIES, CAMPS_DATA } from './data/mockData';

// --- Shared Components ---
const Badge = ({ children, variant = 'primary' }) => {
  const styles = {
    primary: 'bg-orange-100 text-[#FF6B00]', success: 'bg-green-100 text-green-600',
    indigo: 'bg-indigo-50 text-[#1A237E]', gray: 'bg-gray-100 text-gray-500',
    blue: 'bg-blue-50 text-blue-600', purple: 'bg-purple-50 text-purple-600'
  };
  return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${styles[variant]}`}>{children}</span>;
};

const ActivityCard = ({ camp, onClick }) => (
  <div onClick={onClick} className="group bg-white rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all cursor-pointer flex flex-col h-full overflow-hidden">
    <div className="relative h-44">
      <img src={camp.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={camp.title} />
      <div className="absolute top-3 left-3 flex flex-col gap-1">
         <Badge variant="purple">{ACTIVITY_TYPES.find(t => t.id === camp.type)?.name}</Badge>
      </div>
      <div className="absolute bottom-3 left-3 flex flex-col gap-1 items-start">
         <Badge variant="indigo">{CATEGORIES.find(c => c.id === camp.category)?.name}</Badge>
         <Badge variant="blue">{camp.subCategory}</Badge>
      </div>
      <div className="absolute bottom-3 right-3">
         <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-black text-[#1A237E]">{camp.price}</div>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <div className="flex flex-wrap gap-1 mb-2">
        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-[#FF6B00]">{camp.university.charAt(0)}</div>
        <span className="text-[10px] font-bold text-gray-400 mt-1">{camp.university}</span>
      </div>
      <h3 className="font-bold text-gray-800 mt-2 mb-4 line-clamp-2 group-hover:text-[#FF6B00] transition-colors leading-snug">{camp.title}</h3>
      <div className="mt-auto space-y-3">
        <div className="bg-orange-50/50 p-2 rounded-xl border border-orange-100/50">
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#FF6B00]">
            <Clock size={12}/> วันสมัคร: {camp.regDate}
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-gray-400 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1"><MapPin size={12}/> {camp.location}</div>
          <div className="flex items-center gap-1"><Calendar size={12}/> {camp.date}</div>
        </div>
      </div>
    </div>
  </div>
);

const HomeView = ({ onNavigate }) => (
  <div className="animate-in fade-in duration-500">
    <section className="bg-[#1A237E] pt-16 pb-28 px-4 relative overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 text-orange-400 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 backdrop-blur-md border border-white/10 tracking-widest uppercase">
          <Zap size={14} /> The Future of Education
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
          สร้าง <span className="text-[#FF6B00]">Future Portfolio</span> <br className=" md:block"/>
          ผ่าน <span className="underline decoration-[#FF6B00] decoration-8 underline-offset-8">กิจกรรม</span> ที่ใช่
        </h1>
        <p className="text-indigo-100 text-sm md:text-lg max-w-xl mx-auto mb-10 font-light opacity-80">
          ค้นหาค่าย การแข่งขัน ฝึกงาน และกิจกรรมพัฒนาทักษะ <br/> จากมหาวิทยาลัยทั่วไทย ครบจบในที่เดียว
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => onNavigate('explore')} className="bg-[#FF6B00] text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-900/20 hover:scale-105 transition-all">
            เริ่มสำรวจกิจกรรม
          </button>
        </div>
      </div>
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
    </section>

    <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-20 space-y-4">
      <div className="bg-white p-6 rounded-[40px] shadow-2xl shadow-indigo-100 grid grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => onNavigate('explore', { category: cat.id })} className="flex items-center gap-3 p-4 hover:bg-orange-50 rounded-3xl transition-all group border border-transparent hover:border-orange-100">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-[#1A237E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
              {cat.icon}
            </div>
            <span className="text-xs font-black text-gray-700">{cat.name}</span>
          </button>
        ))}
      </div>
      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-[30px] flex flex-wrap justify-center gap-2 md:gap-8">
        {REGIONS.map(region => (
          <button key={region.id} onClick={() => onNavigate('explore', { region: region.id })} className="flex items-center gap-2 px-4 py-2 hover:text-[#FF6B00] transition-all group">
            <MapPin size={14} className="text-indigo-300 group-hover:text-[#FF6B00]" />
            <span className="text-[11px] font-bold text-gray-500 group-hover:text-gray-900">{region.name}</span>
          </button>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-2xl font-black text-[#1A237E]">กิจกรรมยอดนิยม</h2>
          <p className="text-gray-500 text-sm mt-1">กิจกรรมแนะนำเพื่อการสะสมผลงานรอบ Portfolio</p>
        </div>
        <button onClick={() => onNavigate('explore')} className="text-[#1A237E] font-bold text-sm flex items-center gap-1 hover:underline">
          ดูทั้งหมด <ChevronRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAMPS_DATA.map(camp => (
          <ActivityCard key={camp.id} camp={camp} onClick={() => onNavigate('detail', camp)} />
        ))}
      </div>
    </section>
  </div>
);

// --- Main App Controller ---
export default function App() {
  const [view, setView] = useState('home'); 
  const [selectedCamp, setSelectedCamp] = useState(null);

  const navigate = (to, data = null) => {
    setView(to);
    if (to === 'detail') setSelectedCamp(data);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFF] font-['Prompt',sans-serif]">
      <Navbar view={view} navigate={navigate} />

      <main>
        {view === 'home' && <HomeView onNavigate={navigate} />}
        
        {view === 'explore' && (
          <Explore 
            navigate={navigate} 
            CAMPS_DATA={CAMPS_DATA} 
            CATEGORIES={CATEGORIES} 
            REGIONS={REGIONS} 
            ACTIVITY_TYPES={ACTIVITY_TYPES}
            ActivityCard={ActivityCard}
          />
        )}

        {view === 'tcas' && <TcasInfo />}
        {view === 'scholarship' && <Scholarship />}
        {view === 'tutor' && <TutorCourse />}
        {view === 'criteria' && <UniversityCriteria />}
        {view === 'portfolio' && <Portfolio />}

        {/* หน้าดูรายละเอียดค่าย (Detail View) */}
        {view === 'detail' && selectedCamp && (
          <div className="max-w-4xl mx-auto px-4 py-16 animate-in slide-in-from-bottom-8">
            <button onClick={() => navigate('explore')} className="mb-8 flex items-center gap-2 font-bold text-gray-400 hover:text-black transition-colors">
              <ArrowLeft size={20}/> กลับสู่หน้ารายการ
            </button>
            <div className="bg-white rounded-[40px] shadow-2xl border border-gray-50 overflow-hidden">
               <div className="h-[400px] relative">
                 <img src={selectedCamp.image} className="w-full h-full object-cover" alt={selectedCamp.title} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>
                 <div className="absolute bottom-10 left-10 right-10 text-white">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="purple">{ACTIVITY_TYPES.find(t => t.id === selectedCamp.type)?.name}</Badge>
                      <Badge variant="indigo">{CATEGORIES.find(c => c.id === selectedCamp.category)?.name}</Badge>
                      <Badge variant="blue">{selectedCamp.subCategory}</Badge>
                    </div>
                    <h1 className="text-4xl font-black leading-tight">{selectedCamp.title}</h1>
                 </div>
               </div>
               <div className="p-10 md:p-16">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                   <div className="space-y-8">
                     <div className="bg-blue-50/50 p-6 rounded-[32px] border border-blue-100/50">
                        <h3 className="text-sm font-black text-[#1A237E] mb-4 flex items-center gap-2"><Clock size={16} className="text-[#FF6B00]"/> กำหนดการรับสมัคร</h3>
                        <p className="text-2xl font-black text-[#1A237E]">{selectedCamp.regDate}</p>
                        <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">ควรสมัครก่อนวันปิดรับสมัครอย่างน้อย 1 วัน</p>
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-[#1A237E] mb-2 flex items-center gap-2">
                           <School size={20} className="text-[#FF6B00]"/> ข้อมูลสถาบัน
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          <strong>{selectedCamp.university}</strong><br/>
                          สายการเรียน: {CATEGORIES.find(c => c.id === selectedCamp.category)?.name} ({selectedCamp.subCategory})<br/>
                          ภูมิภาค: {REGIONS.find(r => r.id === selectedCamp.region)?.name}<br/>
                          สถานที่จัด: {selectedCamp.location}
                        </p>
                     </div>
                   </div>
                   <div className="bg-orange-50/50 p-8 rounded-[32px] space-y-6 h-fit border border-orange-100/50">
                     <div>
                        <p className="text-[10px] text-orange-400 font-black uppercase mb-1 tracking-widest">วันจัดกิจกรรม</p>
                        <div className="flex items-center gap-4 text-xl font-black text-gray-700"><Calendar className="text-[#FF6B00]"/> {selectedCamp.date}</div>
                     </div>
                     <div className="pt-6 border-t border-orange-100">
                        <p className="text-[10px] text-orange-400 font-bold uppercase mb-2">จุดเด่นกิจกรรม</p>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="indigo">Portfolio</Badge>
                           <Badge variant="indigo">ค้นหาตัวตน</Badge>
                           <Badge variant="indigo">Certificate</Badge>
                        </div>
                     </div>
                     <div className="pt-4 text-center">
                        <span className="text-xs font-bold text-gray-400 uppercase">ค่าธรรมเนียม</span>
                        <div className="text-3xl font-black text-[#1A237E]">{selectedCamp.price}</div>
                     </div>
                   </div>
                 </div>
                 <button className="w-full bg-[#1A237E] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#FF6B00] transition-all shadow-xl shadow-indigo-100">สมัครเข้าร่วมกิจกรรม</button>
               </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800;900&display=swap');
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #FF6B00; }
        
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-bottom { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-in { animation: fade-in 0.5s ease-out; }
        .slide-in-from-bottom-8 { animation: slide-in-bottom 0.6s ease-out; }
      `}} />
    </div>
  );
}