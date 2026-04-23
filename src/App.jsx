import React, { useState } from 'react';

import './App.css'; // นำเข้าไฟล์ CSS

import Navbar from './components/Navbar';
import Explore from './components/Explore';
import TcasInfo from './components/TcasInfo';
import Scholarship from "./components/Scholarship";
import TutorCourse from './components/TutorCourse';
import UniversityCriteria from './components/UniversityCriteria';
import Footer from './MyFooter'; 
import Portfolio from './components/Portfolio';
import Detail from './components/DetailCard';
import { 
  Calendar, MapPin, Clock, ChevronRight, Zap, 
  ArrowLeft, School , MessageCircle ,BriefcaseBusiness
} from 'lucide-react';

import { REGIONS, ACTIVITY_TYPES, CATEGORIES, Workshop_Data } from './data/mockData';

// --- Shared Components ---
const Badge = ({ children, variant = 'primary' }) => {
  return <span className={`badge-base badge-${variant}`}>{children}</span>;
};

const ActivityCard = ({ camp, onClick }) => (
  <div onClick={onClick} className="activity-card group">
    <div className="activity-card-img-wrapper ">
      <img src={camp.image} className="activity-card-img" alt={camp.title} />
    </div>
    <div className="activity-card-body">
      <div className="flex justify-between items-start mb-4 gap-2">
      <div className="flex flex-wrap gap-1">
        <Badge variant="indigo">{CATEGORIES.find(c => c.id === camp.category)?.name}</Badge>
        <Badge variant="blue">{camp.subCategory}</Badge>
      </div>
      <div className="price-tag shrink-0">{camp.price}</div>
    </div>
      <div className="flex flex-wrap gap-1 mb-2">
        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-[#FF6B00]">{camp.university.charAt(0)}</div>
        <span className="text-[10px] font-bold text-gray-400 mt-1">{camp.university}</span>
      </div>
      <h3 className="activity-card-title">{camp.title}</h3>
      <div className="mt-auto space-y-3">
        <div className="date-box">
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
    <section className="hero-section">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="hero-badge">
          <Zap size={14} /> The Future of Education
        </div>
        <h1 className="hero-title">
          สร้าง <span className="text-[#FF6B00]">Future Portfolio</span> <br className="md:block"/>
          ผ่าน <span className="underline decoration-[#FF6B00] decoration-8 underline-offset-8">กิจกรรม</span> ที่ใช่
        </h1>
        <p className="text-indigo-100 text-sm md:text-lg max-w-xl mx-auto mb-10 font-light opacity-80">
          ค้นหาค่าย การแข่งขัน ฝึกงาน และกิจกรรมพัฒนาทักษะ <br/> จากมหาวิทยาลัยทั่วไทย ครบจบในที่เดียว
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => onNavigate('explore')} className="btn-primary">
            เริ่มสำรวจกิจกรรม
          </button>
        </div>
      </div>
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
    </section>

    <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-20 space-y-4">
      <div className="category-grid">
        {CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => onNavigate('explore', { category: cat.id })} className="category-btn group">
            <div className="category-icon-box">
              {cat.icon}
            </div>
            <span className="text-xs font-black text-gray-700">{cat.name}</span>
          </button>
        ))}
      </div>
      <div className="region-bar">
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
        {Workshop_Data.map(camp => (
          <ActivityCard key={camp.id} camp={camp} onClick={() => onNavigate('detail', camp)} />
        ))}
      </div>
    </section>
  </div>
);

export default function App() {
  const [view, setView] = useState('home'); 
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const navigate = (to, data = null) => {
    setView(to);
    if (to === 'detail') setSelectedCamp(data);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar view={view} navigate={navigate} />

      <main>
        {view === 'home' && <HomeView onNavigate={navigate} />}
        
        {view === 'explore' && (
          <Explore 
            navigate={navigate} 
            Workshop_Data={Workshop_Data} 
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

        {view === 'detail' && selectedCamp && (
          <div className="max-w-4xl mx-auto px-4 py-16 animate-in slide-in-from-bottom-8">
            <button onClick={() => navigate('explore')} className="btn-back">
              <ArrowLeft size={20}/> กลับสู่หน้ารายการ
            </button>
            <div className="detail-card">
               <div className="p-10 md:p-16 overflow-hidden">
                <div className="relative  overflow-hidden rounded-2xl mb-6">
                 <img src={selectedCamp.image} className=" object-cover" alt={selectedCamp.title} />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="indigo">{CATEGORIES.find(c => c.id === selectedCamp.category)?.name}</Badge>
                      <Badge variant="blue">{selectedCamp.subCategory}</Badge>
                </div>
                <h1 className="text-3xl font-black leading-tight mb-2">{selectedCamp.title}</h1>
                <p className='mb-10' >{selectedCamp.Description}</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                   <div className="space-y-8">
                     <div className="info-box-blue">
                        <h3 className="text-sm font-black text-[#1A237E] mb-4 flex items-center gap-2"><Clock size={16} className="text-[#FF6B00]"/> กำหนดการรับสมัคร</h3>
                        <p className="text-2xl font-black text-[#1A237E]">{selectedCamp.regDate}</p>
                        <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">ควรสมัครก่อนวันปิดรับสมัครอย่างน้อย 1 วัน</p>
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-[#1A237E] mb-2 flex items-center gap-2">
                            <School size={20} className="text-[#FF6B00]"/> ข้อมูลค่าย
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          <strong>{selectedCamp.university}</strong><br/>
                          สายการเรียน: {CATEGORIES.find(c => c.id === selectedCamp.category)?.name} ({selectedCamp.subCategory})<br/>
                          ภูมิภาค: {REGIONS.find(r => r.id === selectedCamp.region)?.name}<br/>
                          สถานที่จัด: <a href= {selectedCamp.GoogleMapLink} target="_blank" className='inline-block transition-all text-blue-600 hover:text-blue-800 hover:scale-105 hover:translate-x-1 cursor-pointer'>{selectedCamp.location}</a><br />
                          อายุ: รับสมัครน้อง ๆ ระดับมัธยมศึกษา อายุ 13- 19 ปี
                        </p>
                     </div>
                   </div>
                   <div className="info-box-orange">
                     <div>
                        <p className="text-[10px] text-orange-4000 font-black uppercase mb-1 tracking-widest">วันจัดกิจกรรม</p>
                        <div className="flex items-center gap-4 text-xl font-black text-gray-700"><Calendar className="text-[#FF6B00]"/> {selectedCamp.date}</div>
                     </div>
                     <div className="pt-6 border-t border-orange-100">
                        <p className="text-[10px] text-orange-400 font-bold uppercase mb-2">จุดเด่นกิจกรรม</p>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="indigo">Portfolio</Badge>
                           <Badge variant="indigo">ค้นหาตัวตน</Badge>
                           <Badge variant="indigo">เวิร์กชอปพัฒนาตนเอง</Badge>
                        </div>
                     </div>
                     <div className="pt-4 text-center">
                        <span className="text-xs font-bold text-gray-400 uppercase">ค่าใช้จ่าย</span>
                        <div className="text-3xl font-black text-[#1A237E]">{selectedCamp.price}</div>
                     </div>
                   </div>
                   {/*Contact Link , Register Link*/}
                   <div>
                    <h3 className="text-xl font-black text-[#1A237E] mb-2 flex items-center gap-2">
                      <MessageCircle size={20} className="text-[#FF6B00]"/> Contact
                    </h3>
                    <p>
                      สอบถามเพิ่มเติม : <a href={selectedCamp.Contactlink} target="_blank" className='inline-block transition-all text-blue-600 hover:text-blue-800 hover:scale-105 hover:translate-x-1 cursor-pointer'>{selectedCamp.Contactlink}</a><br />
                      <p className='font-bold text-gray-700 mt-1'>หมายเหตุ  : สมัครได้แล้ววันนี้ รับจำนวนจำกัด!</p>
                    </p>
                  </div>
                 </div>
                 <button className="btn-register mb-6" onClick={() => window.open(selectedCamp.Registerlink)} >สมัครเข้าร่วมกิจกรรม</button><br />
                 <div className='Activity_Detail'>
                      {/* ถ้า Popup ปิดอยู่ ให้โชว์ปุ่ม */}
                      {!isDetailOpen && (
                        <button className='btn_detail' onClick={() => setIsDetailOpen(true)}>
                          รายละเอียดเพิ่มเติม
                        </button>
                      )}

                      {/* ส่วนของ Popup */}
                      <Detail isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)}>
                        {/* ตัวคลุมที่ส่งผ่าน props children ไปยัง .detail-content */}
                        <div className="modal-wrapper" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                          
                          <div className="modal-header">
                            <h2 style={{ margin: 0 }}>รายละเอียดกิจกรรม</h2>
                          </div>

                          {/* รายการ Card ทั้งหมดต้องอยู่ใน modal-body นี้เท่านั้น */}
                          <div className="modal-body">
                            {selectedCamp?.Detail?.map((item, index) => {
                              const isStar = item.includes('⭐️');
                              return (
                                <div key={index} className={`detail-card ${isStar ? 'highlight' : ''}`}>
                                  {!isStar && <span className="dot" />}
                                  <p>{item}</p>
                                </div>
                              );
                            })}
                          </div>

                          <div className="modal-footer">
                            <button className="btn-confirm" onClick={() => setIsDetailOpen(false)}>
                              ปิดหน้าต่าง
                            </button>
                          </div>

                        </div>
                      </Detail>
                    </div>

               </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}