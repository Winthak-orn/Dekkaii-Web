import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const Portfolio = () => {
  const ports = [
    {
      id: 1,
      title: "Portfolio รอบที่ 1 (วิศวกรรมศาสตร์)",
      desc: "ตัวอย่างพอร์ตติดจริง คณะวิศวะ มหาวิทยาลัยชื่อดัง",
      link: "https://drive.google.com/file/d/XXXXX/view", // ใส่ลิงก์ Google Drive ของคุณ
      color: "bg-blue-50"
    },
    {
      id: 2,
      title: "Portfolio สายกิจกรรม/จิตอาสา",
      desc: "เน้นรวบรวมเกียรติบัตรและภาพกิจกรรมที่โดดเด่น",
      link: "https://drive.google.com/file/d/YYYYY/view",
      color: "bg-orange-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black text-[#1A237E] mb-4">My Portfolios</h2>
        <p className="text-gray-500">รวมรวมตัวอย่างแฟ้มสะสมผลงาน (คลิกเพื่อดูไฟล์ PDF)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ports.map((port) => (
          <a 
            key={port.id}
            href={port.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-8 rounded-3xl border-2 border-transparent hover:border-[#1A237E] transition-all shadow-sm ${port.color} block`}
          >
            <div className="flex justify-between items-start">
              <div className="p-4 bg-white rounded-2xl shadow-sm mb-4">
                <FileText className="text-[#1A237E]" size={32} />
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-[#1A237E]" size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{port.title}</h3>
            <p className="text-gray-600 mb-4">{port.desc}</p>
            <span className="text-[#1A237E] font-bold text-sm underline">เปิดดูผ่าน Google Drive</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;