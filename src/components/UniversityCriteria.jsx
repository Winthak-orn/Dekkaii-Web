import React, { useState } from 'react';
import './UniversityCriteria.css';

const UniversityCriteria = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const uniData = [
    { 
      id: 1, 
      name: "จุฬาลงกรณ์มหาวิทยาลัย", 
      abbr: "CU", 
      link: "https://www.admissions.chula.ac.th/", 
      details: { rounds: "TCAS 1-4 (ยกเว้นคณะแพทย์ รอบ 1)", criteria: "GPAX 3.00+, TGAT/TPAT, CU-TEP/IELTS (ตามคณะ)", documents: "ปพ.1, บัตรประชาชน, Portfolio (รอบ 1), คะแนนสอบ", note: "เน้น Portfolio ที่มีผลงานระดับชาติ/นานาชาติ" } 
    },
    { 
      id: 2, 
      name: "มหาวิทยาลัยธรรมศาสตร์", 
      abbr: "TU", 
      link: "https://www.tuadmissions.in.th/", 
      details: { rounds: "TCAS 1-3 (รอบ 1 บางคณะ)", criteria: "GPAX 3.00+, TGAT/TPAT/A-Level (ตามคณะ)", documents: "ปพ.1, บัตรประชาชน, Portfolio (ตามคณะกำหนด)", note: "มีโครงการรับตรงพิเศษ และโครงการช้างเผือก" } 
    },
    { 
      id: 3, 
      name: "มหาวิทยาลัยเกษตรศาสตร์", 
      abbr: "KU", 
      link: "https://admission.ku.ac.th/", 
      details: { rounds: "TCAS 1-4 (รอบ 1 เปิดรับคณะส่วนใหญ่)", criteria: "GPAX 2.50+, TGAT/TPAT/A-Level", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "รับนิสิตผ่านโครงการพิเศษหลายโครงการ" } 
    },
    { 
      id: 4, 
      name: "มหาวิทยาลัยมหิดล", 
      abbr: "MU", 
      link: "https://tcas.mahidol.ac.th/", 
      details: { rounds: "TCAS 1-2 (รอบ 1 รับคณะส่วนใหญ่, รอบ 2 โควตา)", criteria: "GPAX 3.25+ (ตามคณะ), TGAT/TPAT, คะแนนภาษาอังกฤษ", documents: "ปพ.1, บัตรประชาชน, Portfolio, ผลสอบ", note: "คณะแพทย์/พยาบาล/วิทยาศาสตร์ รอบ 1 เน้นวิชาการ" } 
    },
    { 
      id: 5, 
      name: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", 
      abbr: "KMITL", 
      link: "https://reg.kmitl.ac.th/TCAS/", 
      details: { rounds: "TCAS 1-3 (รอบ 1 รับจำนวนมาก)", criteria: "GPAX 3.00+ (คณะวิศวะ), GPAX 2.50+ (คณะอื่นๆ), TGAT/TPAT", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "เปิดรับรอบ 1 Portfolio หลายโครงการมาก" } 
    },
    { id: 6, name: "มหาวิทยาลัยเชียงใหม่", abbr: "CMU", link: "https://www.reg.cmu.ac.th/", details: { rounds: "TCAS 1-3", criteria: "GPAX ตามคณะ, TGAT/TPAT", documents: "ปพ.1, Portfolio", note: "มีโควตาภาคเหนือ" } },
    { id: 7, name: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", abbr: "KMUTT", link: "https://admission.kmutt.ac.th/", details: { rounds: "TCAS 1-4", criteria: "GPAX 2.50+", documents: "ปพ.1, Portfolio", note: "โครงการ Multi Active" } },
    { id: 8, name: "มหาวิทยาลัยขอนแก่น", abbr: "KKU", link: "https://admissions.kku.ac.th/", details: { rounds: "TCAS 1-2", criteria: "GPAX ตามคณะ", documents: "ปพ.1, Portfolio", note: "มีโควตาภาคอีสาน" } }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredUni = uniData.filter(uni => 
    uni.name.includes(searchTerm) || uni.abbr.includes(searchTerm)
  );

  return (
    <div className="list-page-wrapper">
      <div className="list-container">
        <div className="list-header">
          <h2>ระเบียบการและเกณฑ์การรับสมัคร</h2>
          <div className="list-search">
            <input 
              type="text" 
              placeholder="🔍 ค้นหามหาวิทยาลัย..." 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="uni-list-group">
          {filteredUni.map((uni, index) => (
            <div key={uni.id} className={`list-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="list-row-header" onClick={() => toggleAccordion(index)}>
                <div className="row-left">
                  <div className="uni-logo-wrapper">
                    {uni.logo && (
                      <img 
                        src={uni.logo} 
                        alt={uni.name} 
                        className="list-logo" 
                        onError={(e) => { e.target.style.display = 'none'; }} 
                      />
                    )}
                    <div className="logo-placeholder">{uni.abbr}</div>
                  </div>
                  <div className="row-title">
                    <h3>{uni.name} ({uni.abbr})</h3>
                    <span>คลิกเพื่อดูรายละเอียดเกณฑ์การรับสมัคร</span>
                  </div>
                </div>
                <div className="row-right">
                  <span className="arrow">{activeIndex === index ? '🔼' : '🔽'}</span>
                </div>
              </div>
              {activeIndex === index && (
                <div className="list-row-content">
                  <div className="detail-grid">
                    <div className="detail-box">
                      <strong>📅 รอบการรับสมัคร:</strong>
                      <p>{uni.details.rounds}</p>
                    </div>
                    <div className="detail-box">
                      <strong>📝 เกณฑ์คะแนนที่ใช้:</strong>
                      <p>{uni.details.criteria}</p>
                    </div>
                    <div className="detail-box">
                      <strong>📂 เอกสารที่ต้องเตรียม:</strong>
                      <p>{uni.details.documents}</p>
                    </div>
                    <div className="detail-box">
                      <strong>💡 หมายเหตุเพิ่มเติม:</strong>
                      <p>{uni.details.note}</p>
                    </div>
                  </div>
                  {uni.link && (
                    <button className="visit-btn" onClick={() => window.open(uni.link, '_blank')}>
                      ไปยังเว็บไซต์ระเบียบการโดยตรง
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      
      </div>
    </div>
    
    
  );
};

export default UniversityCriteria;