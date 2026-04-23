import React from 'react';
import { 
  Search, Calendar, Lightbulb, MessageCircle, School, 
  GraduationCap, Video, BriefcaseBusiness, Languages, 
  Trophy as TrophyIcon, FileText, Heart, Briefcase, PlusCircle,
  HeartPulse, Monitor, Brush 
} from 'lucide-react';

export const REGIONS = [
  { id: 'central', name: 'ภาคกลาง (รวมกรุงเทพฯ)', universities:[] },
  { id: 'north', name: 'ภาคเหนือ', universities: [] },
  { id: 'northeast', name: 'ภาคตะวันออกเฉียงเหนือ', universities: [] },
  { id: 'east', name: 'ภาคตะวันออก', universities: [] },
  { id: 'south', name: 'ภาคใต้', universities: [] }
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

export const Workshop_Data = [
    { 
    id: 1, title: "Cosmetic Sci Lab : Fragrance & Lip (ห้องเรียนจำลองวิทย์เครื่องสำอาง : กลิ่น และลิป)", 
    type: 'camp',
    regDate: "------", 
    date: "วันที่ 24 พฤษภาคม 2569", 
    location: "KX Knowledge Exchange", 
    region: 'central', 
    university: 'OnceThailand', 
    category: "health", 
    subCategory: "เภสัชศาสตร์", 
    price: "1600.-",
    image: "assets/onceThailand/Cosmetic Sci Lab Fragrance And Lip.jpg",
    Registerlink: "https://forms.gle/kgMj7qkoswUCSjfw5",
    Contactlink: "http://line.me/ti/p/~@edq9735t",
    GoogleMapLink: "https://goo.gl/maps/SAj6V94EDrYpQMgV6",
    Description: "ค่ายเต็มวันที่จะทำให้น้อง ๆ ได้เรียนรู้เกี่ยวกับการเรียน การทำงาน และทักษะที่น่าสนใจเกี่ยวกับ วิทยาศาสตร์เครื่องสำอาง และกิจกรรม workshop สนุก ๆ จากพี่วิทยากรคอสเมติกโดยตรง !!",
    Detail: [
      "ค่ายเต็มวันสำหรับน้อง ๆ ที่สนใจ เกี่ยวกับเครื่องสำอาง และความสวยความงาม",
      "ไขข้อสงสัยว่าคณะนี้มีที่ไหนเปิดบ้าง เรียนอะไรบ้าง วิชาที่จำเป็น หรือจบไปแล้วทำงานด้านใดได้บ้าง",
      "มาค้นหาความชอบ และอัพสกิลความสามารถของตนเอง",
      "น้อง ๆ คนไหนพร้อมแล้ว สมัครมาเจอเพื่อน ๆ พี่ ๆ ที่สนใจด้าน Make Up & Fragrance กันได้เลยยยย",
      "⭐️ สิ่งที่น้อง ๆ จะได้รับจากกิจกรรมนี้ ⭐️",
      "- ความรู้ด้านวิทยาศาสตร์เครื่องสำอาง พื้นฐานภาคทฤษฎีและภาคปฏิบัติ",
      "- เรียนรู้ประสบการณ์การเรียนวิทยาศาสตร์เครื่องสำอาง รายวิชาน่าสนใจในการเรียนระดับมหาวิทยาลัย",
      "- ล้วงลึกถึงแนวทางการเตรียมตัวสอบเข้ามหาวิทยาลัย ต้องใช้คะแนนเท่าไหร่ วิชาอะไรบ้าง",
      "- ร่วม WORKSHOP กิจกรรมเกี่ยวกับ Fragrance (Room spray) เครื่องสำอาง (Lip Gloss) และทักษะด้านอาชีพ",
      "- ฝึกใช้เครื่องมือทำเครื่องสำอาง สารเคมี ส่วนผสมต่าง ๆ อุปกรณ์ทางแลป ฉบับ D.I.Y",
      "- ได้ผลงานสุดเก๋ ที่ถูกสร้างสรรจากฝีมือของน้อง ๆ นำกลับบ้านเป็นที่ระลึกได้เลย",
      "- ฝึกความคิดสร้างสรรค์ ด้านการผลิต และทำแบรนด์เครื่องสำอางต่าง ๆ",
      "- พบกับเพื่อน ๆ ที่มีความฝันเดียวกัน ต่อยอดอาชีพในฝัน",
      "- ถาม - ตอบ ข้อสงสัยต่าง ๆ กับวิทยากรคนเก่ง",
      "- มีเกียรติบัตรมอบให้น้อง ๆ",
      "- อาหาร และขนมแสนอร่อย ",
      "- ฯลฯ",
    ]
  }
];

export const PORTFOLIOS_DATA = [
  {
    id: 1,
    studentName: "พี่นนท์",
    school: "รร.สวนกุหลาบวิทยาลัย",
    targetUniversity: "จุฬาลงกรณ์มหาวิทยาลัย",
    faculty: "วิศวกรรมศาสตร์",
    major: "วิศวกรรมคอมพิวเตอร์",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    tags: ["สอวน. คอมพิวเตอร์", "โครงงาน AI", "เกรด 3.95"],
    driveUrl: "https://drive.google.com/drive/folders/xxxxxx1"
  },
  {
    id: 2,
    studentName: "พี่มายด์",
    school: "รร.เตรียมอุดมศึกษา",
    targetUniversity: "มหาวิทยาลัยมหิดล",
    faculty: "แพทยศาสตร์ศิริราชพยาบาล",
    major: "แพทยศาสตร์",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tags: ["ค่ายสวมกาวน์", "จิตอาสา รพ.", "โครงงานชีววิทยา"],
    driveUrl: "https://drive.google.com/drive/folders/xxxxxx2"
  },
  {
    id: 3,
    studentName: "พี่เจเจ",
    school: "รร.สามเสนวิทยาลัย",
    targetUniversity: "มหาวิทยาลัยธรรมศาสตร์",
    faculty: "พาณิชยศาสตร์และการบัญชี",
    major: "บริหารธุรกิจ",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["แข่งแผนธุรกิจ", "ประธานชมรม", "TU-STAR"],
    driveUrl: "https://drive.google.com/drive/folders/xxxxxx3"
  },
  {
    id: 4,
    studentName: "พี่ฟ้า",
    school: "รร.สตรีวิทยา",
    targetUniversity: "มหาวิทยาลัยศิลปากร",
    faculty: "มัณฑนศิลป์",
    major: "ออกแบบนิเทศศิลป์",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    tags: ["ชนะเลิศประกวดวาดภาพ", "รับทำกราฟิก", "สายอาร์ต"],
    driveUrl: "https://drive.google.com/drive/folders/xxxxxx4"
  }
];
