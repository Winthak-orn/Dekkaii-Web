import React, { useState, useEffect } from 'react';
import TcasInfo from './components/TcasInfo';
import Scholarship from "./components/Scholarship";
import TutorCourse from './components/TutorCourse';
import { Menu, X } from 'lucide-react';
import UniversityCriteria from './components/UniversityCriteria';
import Footer from './MyFooter';

import { 

  Search, Calendar, MapPin, Clock, ChevronRight, Sparkles, 

  BookOpen, ArrowLeft, Filter, Zap, HeartPulse, Monitor, Brush, 

  School, Map, Lightbulb, GraduationCap, Video, BriefcaseBusiness, 

  Languages, Trophy as TrophyIcon, FileText, Heart, Briefcase, PlusCircle,

  AlertCircle, Timer, MessageCircle, Layers, Target

} from 'lucide-react';



// --- Global Data Structures ---

const REGIONS = [

  { id: 'central', name: 'ภาคกลาง (รวมกรุงเทพฯ)', universities: ['จุฬาลงกรณ์มหาวิทยาลัย', 'มหาวิทยาลัยมหิดล', 'มหาวิทยาลัยธรรมศาสตร์', 'มหาวิทยาลัยเกษตรศาสตร์'] },

  { id: 'north', name: 'ภาคเหนือ', universities: ['มหาวิทยาลัยเชียงใหม่', 'มหาวิทยาลัยแม่ฟ้าหลวง', 'มหาวิทยาลัยนเรศวร'] },

  { id: 'northeast', name: 'ภาคตะวันออกเฉียงเหนือ', universities: ['มหาวิทยาลัยขอนแก่น', 'มหาวิทยาลัยมหาสารคาม'] },

  { id: 'east', name: 'ภาคตะวันออก', universities: ['มหาวิทยาลัยบูรพา'] },

  { id: 'south', name: 'ภาคใต้', universities: ['มหาวิทยาลัยสงขลานครินทร์', 'มหาวิทยาลัยวลัยลักษณ์'] }

];



const ACTIVITY_TYPES = [

  { id: 'competition', name: 'การแข่งขัน', icon: <TrophyIcon size={14}/> },

  { id: 'career-guidance', name: 'การแนะแนวอาชีพ', icon: <BriefcaseBusiness size={14}/> },

  { id: 'self-discovery', name: 'ค้นหาตัวตน', icon: <Search size={14}/> },

  { id: 'workshop', name: 'เวิร์กชอปพัฒนาตนเอง', icon: <Lightbulb size={14}/> },

  { id: 'seminar', name: 'สัมมนา/เสวนา/ทอล์กโชว์', icon: <MessageCircle size={14}/> },

  { id: 'open-house', name: 'เปิดบ้าน/นิทรรศการ', icon: <School size={14}/> },

  { id: 'tutor-portfolio', name: 'ติวสอบ/สอนทำพอร์ต', icon: <FileText size={14}/> },

  { id: 'volunteer', name: 'อาสา', icon: <Heart size={14}/> },

  { id: 'online-course', name: 'คอร์สออนไลน์', icon: <Video size={14}/> },

  { id: 'mock-exam', name: 'จำลองสนามสอบ', icon: <GraduationCap size={14}/> },

  { id: 'internship', name: 'ฝึกงาน', icon: <Briefcase size={14}/> },

  { id: 'language', name: 'เสริมภาษา', icon: <Languages size={14}/> },

  { id: 'summer-camp', name: 'ซัมเมอร์แคมป์', icon: <Calendar size={14}/> },

  { id: 'others', name: 'กิจกรรมอื่นๆ', icon: <PlusCircle size={14}/> }

];



const CATEGORIES = [

  { 

    id: 'health', 

    name: 'สายวิทยาศาสตร์สุขภาพ', 

    icon: <HeartPulse size={16}/>,

    subCats: ['แพทยศาสตร์', 'ทันตแพทยศาสตร์', 'เภสัชศาสตร์', 'พยาบาลศาสตร์', 'จิตเวชศาสตร์']

  },

  { 

    id: 'eng', 

    name: 'วิศวกรรมและเทคโนโลยี', 

    icon: <Monitor size={16}/>,

    subCats: ['วิศวกรรมคอมพิวเตอร์', 'หุ่นยนต์และ AI', 'วิทยาการข้อมูล', 'วิศวกรรมโยธา']

  },

  { 

    id: 'art', 

    name: 'ศิลปะและการออกแบบ', 

    icon: <Brush size={16}/>,

    subCats: ['สถาปัตยกรรม', 'กราฟิกดีไซน์', 'แฟชั่นดีไซน์']

  },

  { 

    id: 'society', 

    name: 'มนุษยศาสตร์และสังคม', 

    icon: <Languages size={16}/>,

    subCats: ['อักษรศาสตร์', 'นิติศาสตร์', 'นิเทศศาสตร์', 'บริหารธุรกิจ']

  }

];



// --- Mock Data ---

const CAMPS_DATA = [

  { 

    id: 1, title: "Pre-Med Workshop: สวมกาวน์ตะลุยห้องแล็บ", type: 'workshop', 

    regDate: "วันนี้ - 25 มี.ค. 69", date: "12–15 เม.ย. 2026", 

    location: "ศิริราช", region: 'central', university: 'มหาวิทยาลัยมหิดล', 

    category: "health", subCategory: "แพทยศาสตร์", price: "950.-",

    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 

  },

  { 

    id: 2, title: "Psychology Insights: เจาะลึกวิถีจิตแพทย์", type: 'career-guidance', 

    regDate: "วันนี้ - 5 เม.ย. 69", date: "18–20 เม.ย. 2026", 

    location: "กรุงเทพฯ", region: 'central', university: 'จุฬาลงกรณ์มหาวิทยาลัย', 

    category: "health", subCategory: "จิตเวชศาสตร์", price: "ฟรี",

    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 

  },

  { 

    id: 3, title: "Dental Hero: ค่ายเจาะลึกวิชาชีพทันตแพทย์", type: 'summer-camp', 

    regDate: "วันนี้ - 15 มี.ค. 69", date: "1–3 พ.ค. 2026", 

    location: "เชียงใหม่", region: 'north', university: 'มหาวิทยาลัยเชียงใหม่', 

    category: "health", subCategory: "ทันตแพทยศาสตร์", price: "1,200.-",

    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 

  },

  { 

    id: 4, title: "Smart Engineer: นวัตกรรมหุ่นยนต์กู้ภัย", type: 'competition', 

    regDate: "10 มี.ค. - 20 พ.ค. 69", date: "5–10 มิ.ย. 2026", 

    location: "ขอนแก่น", region: 'northeast', university: 'มหาวิทยาลัยขอนแก่น', 

    category: "eng", subCategory: "หุ่นยนต์และ AI", price: "ฟรี",

    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 

  },

  { 

    id: 5, title: "Portfolio 101: ทำพอร์ตให้ติดวิศวะ", type: 'tutor-portfolio', 

    regDate: "วันนี้ - 30 มี.ค. 69", date: "15–18 มิ.ย. 2026", 

    location: "ลาดกระบัง", region: 'central', university: 'พระจอมเกล้าฯ ลาดกระบัง', 

    category: "eng", subCategory: "วิทยาการข้อมูล", price: "500.-",

    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 

  }

];



// --- Shared Components ---

const Badge = ({ children, variant = 'primary' }) => {

  const styles = {

    primary: 'bg-orange-100 text-[#FF6B00]',

    success: 'bg-green-100 text-green-600',

    indigo: 'bg-indigo-50 text-[#1A237E]',

    gray: 'bg-gray-100 text-gray-500',

    blue: 'bg-blue-50 text-blue-600',

    purple: 'bg-purple-50 text-purple-600'

  };

  return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${styles[variant]}`}>{children}</span>;

};



// --- Homepage View ---

const HomeView = ({ onNavigate }) => (

  <div className="animate-in fade-in duration-500">

    <section className="bg-[#1A237E] pt-16 pb-28 px-4 relative overflow- text-center rounded-b-[40px] md:rounded-b-[80px]">

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


    {/* Categories & Regions Quick Links */}

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



    {/* Featured Grid */}

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



// --- Component: Activity Card ---

const ActivityCard = ({ camp, onClick }) => (

  <div onClick={onClick} className="group bg-white rounded-3xl border border-gray-100  hover:shadow-2xl hover:shadow-indigo-100 transition-all cursor-pointer flex flex-col h-full">

    <div className="relative h-44 overflow-">

      <img src={camp.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

      <div className="absolute top-3 left-3 flex flex-col gap-1">

         <Badge variant="purple">{ACTIVITY_TYPES.find(t => t.id === camp.type)?.name}</Badge>

      </div>

      <div className="absolute bottom-3 left-3 flex flex-col gap-1 items-start">

         <Badge variant="indigo">{CATEGORIES.find(c => c.id === camp.category)?.name}</Badge>

         <Badge variant="blue">{camp.subCategory}</Badge>

      </div>

      <div className="absolute bottom-3 right-3">

         <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-black text-[#1A237E]">

            {camp.price}

         </div>

      </div>

    </div>

    <div className="p-5 flex flex-col flex-1">

      <div className="flex flex-wrap gap-1 mb-2">

        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-[#FF6B00]">

          {camp.university.charAt(0)}

        </div>

        <span className="text-[10px] font-bold text-gray-400 mt-1">{camp.university}</span>

      </div>

      <h3 className="font-bold text-gray-800 mt-2 mb-4 line-clamp-2 group-hover:text-[#FF6B00] transition-colors leading-snug">{camp.title}</h3>

      

      <div className="mt-auto space-y-3">

        <div className="bg-orange-50/50 p-2 rounded-xl border border-orange-100/50">

          <div className="flex items-center gap-2 text-[10px] font-bold text-[#FF6B00]">

            <Clock size={12}/> วันสมัคร: {camp.regDate}

          </div>

        </div>

        

        <div className="flex items-center justify-between text-[10px] text-gray-400 border-t pt-4">

          <div className="flex items-center gap-1"><MapPin size={12}/> {camp.location}</div>

          <div className="flex items-center gap-1"><Calendar size={12}/> {camp.date}</div>

        </div>

      </div>

    </div>

  </div>

);

// --- Main App Controller ---

export default function App() {

  const [view, setView] = useState('home'); 

  const [selectedCamp, setSelectedCamp] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');

  

  // Filtering States

  const [activeCategory, setActiveCategory] = useState(null);

  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const [activeRegion, setActiveRegion] = useState(null);

  const [activeType, setActiveType] = useState(null);



  const navigate = (to, data = null) => {

    setView(to);

    if (to === 'explore') {

      if (data?.region) setActiveRegion(data.region);

      if (data?.category) {

        setActiveCategory(data.category);

        setActiveSubCategory(null);

      }

    }

    if (to === 'detail') setSelectedCamp(data);

    window.scrollTo(0, 0);

  };



  const filteredData = CAMPS_DATA.filter(camp => {

    const matchesSearch = camp.title.toLowerCase().includes(searchQuery.toLowerCase()) || camp.university.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory && camp.category !== activeCategory) return false;

    if (activeSubCategory && camp.subCategory !== activeSubCategory) return false;

    if (activeRegion && camp.region !== activeRegion) return false;

    if (activeType && camp.type !== activeType) return false;

    return true;

  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <div className="min-h-screen bg-[#FAFBFF] font-['Prompt',sans-serif]">

      {/* เติม relative เข้าไปที่ nav เพื่อให้เมนูมือถืออ้างอิงตำแหน่งได้ถูกต้อง */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 h-25 flex items-center sticky top-0 z-50 px-4 md:px-8 relative">

        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">

          {/* ส่วนโลโก้ (เหมือนเดิม) */}
          <div onClick={() => navigate('home')} className="flex items-center cursor-pointer  object-contain rounded-xl hover:scale-105 transition-transform">
            <img src="UNVST-Logo/no.1/logo_blue.png" alt="DeKKaii Logo" 
                 className="h-20 w-auto object-contain mix-blend-multiply"
            />
            <span className="text-xl font-black text-[#1A237E] tracking-tight">DEKKAii</span>
          </div>

          {/* ส่วนเมนูคอมพิวเตอร์ (เพิ่ม hidden md:flex เพื่อให้ซ่อนตอนจอเล็ก) */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => navigate('home')} className={`text-sm font-bold ${view === 'home' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>หน้าแรก</button>
            <button onClick={() => navigate('explore')} className={`text-sm font-bold ${view === 'explore' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>ค้นหาค่าย</button>
            <button onClick={() => navigate('tcas')} className="text-gray-600 hover:text-[#ff6600] font-medium">TCAS</button>
            <button onClick={() => navigate('scholarship')} className="text-gray-600 hover:text-[#ff6600] font-medium">SCHOLARSHIP</button>
            <button onClick={() => navigate('tutor')} className="text-gray-600 hover:text-[#ff6600] font-medium">TUTOR COURSE</button>
            <button onClick={() => navigate('criteria')} className="text-gray-600 hover:text-[#ff6600] font-medium">กำหนดเกณฑ์มหาวทยาลัยต่างๆ</button>
          </div>

          {/* ปุ่ม 3 ขีดสำหรับมือถือ (จะโชว์เฉพาะจอเล็ก md:hidden) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1A237E] focus:outline-none p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>

        {/* ส่วนเมนู Dropdown สำหรับมือถือ (จะโผล่มาเมื่อ isMenuOpen เป็น true) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 flex flex-col p-4 gap-4 md:hidden z-50">
            {/* สังเกตว่าผมเพิ่ม setIsMenuOpen(false) เข้าไป เพื่อให้พอกดเมนูแล้ว แถบมันจะปิดพับเก็บไปเองครับ */}
            <button onClick={() => { navigate('home'); setIsMenuOpen(false); }} className={`text-left text-sm font-bold ${view === 'home' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>หน้าแรก</button>
            <button onClick={() => { navigate('explore'); setIsMenuOpen(false); }} className={`text-left text-sm font-bold ${view === 'explore' ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-[#FF6B00]'}`}>ค้นหาค่าย</button>
            <button onClick={() => { navigate('tcas'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-[#ff6600] font-medium">TCAS</button>
            <button onClick={() => { navigate('scholarship'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-[#ff6600] font-medium">SCHOLARSHIP</button>
            <button onClick={() => { navigate('tutor'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-[#ff6600] font-medium">TUTOR COURSE</button>
            <button onClick={() => { navigate('criteria'); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-[#ff6600] font-medium">กำหนดเกณฑ์มหาวทยาลัยต่างๆ</button>
          </div>
        )}
      </nav>



      <main>

        {view === 'home' && <HomeView onNavigate={navigate} />}

      

        {view === 'explore' && (

          <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">

                <div>

                   <h1 className="text-4xl font-black text-[#1A237E] mb-2">สำรวจกิจกรรมค่ายทั่วไทย</h1>

                   <p className="text-gray-500">ค้นหาตามประเภท ภูมิภาค มหาวิทยาลัย หรือคณะที่ต้องการ</p>

                </div>

                <div className="relative w-full md:w-96">

                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />

                   <input 

                     type="text" 

                     placeholder="ค้นหาชื่อค่าย, มหาวิทยาลัย..." 

                     className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-orange-200 outline-none text-sm font-bold"

                     value={searchQuery}

                     onChange={(e) => setSearchQuery(e.target.value)}

                   />

                </div>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

               {/* Filters Sidebar */}

               <div className="md:col-span-1 space-y-6">

                 <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm sticky top-32 max-h-[80vh] overflow-y-auto custom-scrollbar pr-2">

                   

                   {/* 1. Category Filter */}

                   <div className="mb-8">

                     <h5 className="font-black text-[#1A237E] mb-4 text-sm flex items-center gap-2 text-xs"><Layers size={14}/> สายการเรียน</h5>

                     <div className="space-y-1">

                        <button 

                          onClick={() => {setActiveCategory(null); setActiveSubCategory(null);}}

                          className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all ${!activeCategory ? 'bg-[#1A237E] text-white' : 'text-gray-500 hover:bg-gray-50'}`}

                        >

                          ทุกสายการเรียน

                        </button>

                        {CATEGORIES.map(cat => (

                          <button 

                            key={cat.id}

                            onClick={() => {setActiveCategory(cat.id); setActiveSubCategory(null);}}

                            className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all flex items-center gap-2 ${activeCategory === cat.id ? 'bg-[#FF6B00] text-white' : 'text-gray-500 hover:bg-gray-50'}`}

                          >

                            <span className={activeCategory === cat.id ? 'text-white' : 'text-[#FF6B00]'}>{cat.icon}</span>

                            {cat.name}

                          </button>

                        ))}

                     </div>

                   </div>



                   {/* 2. Sub-Category Filter (เจาะลึกคณะ) */}

                   {activeCategory && (

                     <div className="mb-8 border-t pt-8 animate-in slide-in-from-top-2">

                       <h5 className="font-black text-[#1A237E] mb-4 text-sm flex items-center gap-2 text-xs"><Target size={14}/> คณะ/สาขาเจาะลึก</h5>

                       <div className="flex flex-wrap gap-2">

                          <button 

                            onClick={() => setActiveSubCategory(null)}

                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${!activeSubCategory ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-400 border-gray-100 hover:border-indigo-200'}`}

                          >

                            ทั้งหมด

                          </button>

                          {CATEGORIES.find(c => c.id === activeCategory)?.subCats.map(sub => (

                            <button 

                              key={sub}

                              onClick={() => setActiveSubCategory(sub)}

                              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${activeSubCategory === sub ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-400 border-gray-100 hover:border-orange-200'}`}

                            >

                              {sub}

                            </button>

                          ))}

                       </div>

                     </div>

                   )}



                   {/* 3. Activity Type Filter */}

                   <div className="mb-8 border-t pt-8">

                     <h5 className="font-black text-[#1A237E] mb-4 text-sm flex items-center gap-2 text-xs"><Sparkles size={14}/> ประเภทกิจกรรมค่าย</h5>

                     <div className="space-y-1">

                        <button 

                          onClick={() => setActiveType(null)}

                          className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all ${!activeType ? 'bg-[#1A237E] text-white' : 'text-gray-500 hover:bg-gray-50'}`}

                        >

                          ทุกประเภท

                        </button>

                        {ACTIVITY_TYPES.map(type => (

                          <button 

                            key={type.id}

                            onClick={() => setActiveType(type.id)}

                            className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all flex items-center gap-2 ${activeType === type.id ? 'bg-[#FF6B00] text-white' : 'text-gray-500 hover:bg-gray-50'}`}

                          >

                            <span className={activeType === type.id ? 'text-white' : 'text-[#FF6B00]'}>{type.icon}</span>

                            {type.name}

                          </button>

                        ))}

                     </div>

                   </div>



                   {/* 4. Region Filter */}

                   <div className="mb-8 border-t pt-8">

                     <h5 className="font-black text-[#1A237E] mb-4 text-sm flex items-center gap-2 text-xs"><Map size={14}/> ภูมิภาค</h5>

                     <select 

                       value={activeRegion || ''} 

                       onChange={(e) => setActiveRegion(e.target.value || null)}

                       className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3 text-xs font-bold text-gray-700 mb-4 outline-none focus:ring-2 focus:ring-[#FF6B00]"

                     >

                       <option value="">ทุกภูมิภาค</option>

                       {REGIONS.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}

                     </select>

                   </div>



                   <button 

                    onClick={() => {setActiveCategory(null); setActiveSubCategory(null); setActiveRegion(null); setActiveType(null); setSearchQuery('');}}

                    className="w-full mt-4 py-3 bg-gray-100 text-gray-400 rounded-2xl text-[10px] font-black hover:bg-red-50 hover:text-red-500 transition-all uppercase tracking-widest"

                   >

                     Clear Filters

                   </button>

                 </div>

               </div>



               {/* Results Grid */}

               <div className="md:col-span-3">

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                   {filteredData.map(camp => (

                     <ActivityCard key={camp.id} camp={camp} onClick={() => navigate('detail', camp)} />

                   ))}

                   {filteredData.length === 0 && (

                     <div className="col-span-full py-32 text-center bg-white rounded-[40px] border border-dashed border-gray-200">

                        <Search className="mx-auto mb-4 text-gray-200" size={32} />

                        <p className="text-gray-400 font-bold text-sm">ไม่พบกิจกรรมที่คุณกำลังค้นหา</p>

                     </div>

                   )}

                 </div>

               </div>

            </div>

          </div>

        )}

        {view === 'tcas' && <TcasInfo />}

        {view === 'scholarship' && <Scholarship />}
        
        {view === 'tutor' && <TutorCourse />}

        {view === 'criteria' && <UniversityCriteria />}

        {view === 'detail' && selectedCamp && (

          <div className="max-w-4xl mx-auto px-4 py-16 animate-in slide-in-from-bottom-8">

            <button onClick={() => navigate('explore')} className="mb-8 flex items-center gap-2 font-bold text-gray-400 hover:text-black transition-colors">

              <ArrowLeft size={20}/> กลับสู่หน้ารายการ

            </button>

            <div className="bg-white rounded-[40px]  shadow-2xl border border-gray-50">

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

                        <h3 className="text-sm font-black text-[#1A237E] mb-4 flex items-center gap-2"><Timer size={16} className="text-[#FF6B00]"/> กำหนดการรับสมัคร</h3>

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