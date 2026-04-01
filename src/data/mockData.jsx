import React from 'react';
import { 
  Search, Calendar, Lightbulb, MessageCircle, School, 
  GraduationCap, Video, BriefcaseBusiness, Languages, 
  Trophy as TrophyIcon, FileText, Heart, Briefcase, PlusCircle,
  HeartPulse, Monitor, Brush 
} from 'lucide-react';

export const REGIONS = [
  { id: 'central', name: 'ภาคกลาง (รวมกรุงเทพฯ)', universities: ['จุฬาลงกรณ์มหาวิทยาลัย', 'มหาวิทยาลัยมหิดล', 'มหาวิทยาลัยธรรมศาสตร์', 'มหาวิทยาลัยเกษตรศาสตร์'] },
  { id: 'north', name: 'ภาคเหนือ', universities: ['มหาวิทยาลัยเชียงใหม่', 'มหาวิทยาลัยแม่ฟ้าหลวง', 'มหาวิทยาลัยนเรศวร'] },
  { id: 'northeast', name: 'ภาคตะวันออกเฉียงเหนือ', universities: ['มหาวิทยาลัยขอนแก่น', 'มหาวิทยาลัยมหาสารคาม'] },
  { id: 'east', name: 'ภาคตะวันออก', universities: ['มหาวิทยาลัยบูรพา'] },
  { id: 'south', name: 'ภาคใต้', universities: ['มหาวิทยาลัยสงขลานครินทร์', 'มหาวิทยาลัยวลัยลักษณ์'] }
];

export const ACTIVITY_TYPES = [
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

export const CATEGORIES = [
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

export const CAMPS_DATA = [
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