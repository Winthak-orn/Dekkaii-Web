import React, { useState } from 'react';
import './UniversityCriteria.css';

const UniversityCriteria = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const uniData = [
    { id: 1, name: "จุฬาลงกรณ์มหาวิทยาลัย", abbr: "CU", logo: "UNVST-Logo/no.1/จุฬาลงกรณ์มหาวิทยาลัย.png" , link: "https://www.admissions.chula.ac.th/", details: { rounds: "TCAS 1-4 (ยกเว้นคณะแพทย์ รอบ 1)", criteria: "GPAX 3.00+, TGAT/TPAT, CU-TEP/IELTS (ตามคณะ)", documents: "ปพ.1, บัตรประชาชน, Portfolio (รอบ 1), คะแนนสอบ", note: "เน้น Portfolio ที่มีผลงานระดับชาติ/นานาชาติ" } },
    { id: 2, name: "มหาวิทยาลัยธรรมศาสตร์", abbr: "TU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยธรรมศาสตร์.png", link: "https://www.tuadmissions.in.th/", details: { rounds: "TCAS 1-3 (รอบ 1 บางคณะ)", criteria: "GPAX 3.00+, TGAT/TPAT/A-Level (ตามคณะ)", documents: "ปพ.1, บัตรประชาชน, Portfolio (ตามคณะกำหนด)", note: "มีโครงการรับตรงพิเศษ และโครงการช้างเผือก" } },
    { id: 3, name: "มหาวิทยาลัยเกษตรศาสตร์", abbr: "KU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยเกษตรศาสตร์.png", link: "https://admission.ku.ac.th/", details: { rounds: "TCAS 1-4 (รอบ 1 เปิดรับคณะส่วนใหญ่)", criteria: "GPAX 2.50+, TGAT/TPAT/A-Level", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "รับนิสิตผ่านโครงการพิเศษหลายโครงการ" } },
    { id: 4, name: "มหาวิทยาลัยมหิดล", abbr: "MU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยมหิดล.png", link: "https://tcas.mahidol.ac.th/", details: { rounds: "TCAS 1-2 (รอบ 1 รับคณะส่วนใหญ่, รอบ 2 โควตา)", criteria: "GPAX 3.25+ (ตามคณะ), TGAT/TPAT, คะแนนภาษาอังกฤษ", documents: "ปพ.1, บัตรประชาชน, Portfolio, ผลสอบ", note: "คณะแพทย์/พยาบาล/วิทยาศาสตร์ รอบ 1 เน้นวิชาการ" } },
    { id: 5, name: "ม.พระจอมเกล้าฯ ลาดกระบัง", abbr: "KMITL", logo: "UNVST-Logo/no.1/สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง.png", link: "https://reg.kmitl.ac.th/TCAS/", details: { rounds: "TCAS 1-3 (รอบ 1 รับจำนวนมาก)", criteria: "GPAX 3.00+ (คณะวิศวะ), GPAX 2.50+ (คณะอื่นๆ), TGAT/TPAT", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "เปิดรับรอบ 1 Portfolio หลายโครงการมาก" } },
    { id: 6, name: "มหาวิทยาลัยเชียงใหม่", abbr: "CMU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยเชียงใหม่.png", link: "https://www.reg.cmu.ac.th/", details: { rounds: "TCAS 1-3 (รอบ 1 เน้นเด็กโครงการพิเศษ)", criteria: "GPAX ตามคณะ, TGAT/TPAT, โควตาภาคเหนือ (รอบ 2)", documents: "ปพ.1, บัตรประชาชน, Portfolio, โครงการ", note: "มีโควตาสำหรับโรงเรียนในเขตภาคเหนือ" } },
    { id: 7, name: "ม.เทคโนโลยีพระจอมเกล้าธนบุรี", abbr: "KMUTT", logo: "UNVST-Logo/no.1/มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี.jpg", link: "https://admission.kmutt.ac.th/", details: { rounds: "TCAS 1-4 (รอบ 1 รับเกือบทุกคณะ)", criteria: "GPAX 2.50-3.00+, TGAT/TPAT, คะแนนวิชาการเฉพาะคณะ", documents: "ปพ.1, บัตรประชาชน, Portfolio, ผลสอบวิชาการ", note: "โครงการ Multi Active Recruitment รับนักเรียนหลากหลาย" } },
    { id: 8, name: "มหาวิทยาลัยขอนแก่น", abbr: "KKU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยขอนแก่น.png", link: "https://admissions.kku.ac.th/", details: { rounds: "TCAS 1-2 (รอบ 1 Portfolio, รอบ 2 โควตาภาคอีสาน)", criteria: "GPAX ตามคณะ, TGAT/TPAT, โควตาภาคอีสาน", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "โควตาสำหรับโรงเรียนในเขตภาคอีสาน" } },
    { id: 9, name: "มหาวิทยาลัยศิลปากร", abbr: "SU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยศิลปากร.png", link: "https://admission.su.ac.th/", details: { rounds: "TCAS 1-4 (รอบ 1 Portfolio)", criteria: "GPAX ตามคณะ, TGAT/TPAT, คะแนนสอบวิชาศิลปะ (ตามคณะ)", documents: "ปพ.1, บัตรประชาชน, Portfolio, ผลงานศิลปะ", note: "เน้น Portfolio ที่มีผลงานศิลปะโดดเด่น" } },
    { id: 10, name: "ม.ศรีนครินทรวิโรฒ", abbr: "SWU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยศรีนครินทรวิโรฒ.png", link: "https://admission.swu.ac.th/", details: { rounds: "TCAS 1-3 (รอบ 1 Portfolio)", criteria: "GPAX 2.50-3.00+, TGAT/TPAT, คะแนนภาษาอังกฤษ (ตามคณะ)", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "มีโครงการเด็กดีมีที่เรียน โครงการเรียนดีมีที่เรียน" } },
    { id: 11, name: "มหาวิทยาลัยสงขลานครินทร์", abbr: "PSU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยสงขลานครินทร์.png", link: "https://entrance.psu.ac.th/", details: { rounds: "TCAS 1-2 (รอบ 1 Portfolio, รอบ 2 โควตาภาคใต้)", criteria: "GPAX ตามคณะ, TGAT/TPAT, โควตาภาคใต้", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "มีโควตาสำหรับโรงเรียนในเขตภาคใต้" } },
    { id: 12, name: "มหาวิทยาลัยบูรพา", abbr: "BUU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยบูรพา.png", link: "https://admission.buu.ac.th/", details: { rounds: "TCAS 1-4 (รอบ 1 Portfolio)", criteria: "GPAX 2.00-2.50+ (ตามคณะ), TGAT/TPAT", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "มีโควตาสำหรับโรงเรียนในเขตภาคตะวันออก" } },
    { id: 13, name: "มหาวิทยาลัยนเรศวร", abbr: "NU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยนเรศวร.png", link: "https://admission.nu.ac.th/", details: { rounds: "TCAS 1-4 (รอบ 1 Portfolio)", criteria: "GPAX ตามคณะ, TGAT/TPAT, โควตาภาคเหนือตอนล่าง", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "มีโควตาสำหรับโรงเรียนในเขตภาคเหนือตอนล่าง" } },
    { id: 14, name: "มหาวิทยาลัยแม่โจ้", abbr: "MJU", logo: "UNVST-Logo/no.1/มหาวิทยาลัยแม่โจ้.png", link: "https://admissions.mju.ac.th/", details: { rounds: "TCAS 1-4 (รอบ 1 Portfolio)", criteria: "GPAX ตามคณะ, TGAT/TPAT", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "รับสมัครผ่านโครงการเรียนดี โครงการโควตา" } },
    { id: 15, name: "มหาวิทยาลัยพะเยา", abbr: "UP", logo: "UNVST-Logo/no.1/มหาวิทยาลัยพะเยา.png", link: "https://admission.up.ac.th/", details: { rounds: "TCAS 1-4 (รอบ 1 Portfolio)", criteria: "GPAX 2.00-2.50+ (ตามคณะ), TGAT/TPAT", documents: "ปพ.1, บัตรประชาชน, Portfolio", note: "มีโครงการรับตรงหลายโครงการ" } },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // กรองข้อมูลตามคำค้นหา
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
                  <img src={uni.logo} alt={uni.name} className="list-logo" />
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
                  <button className="visit-btn" onClick={() => window.open(uni.link, '_blank')}>
                    ไปยังเว็บไซต์ระเบียบการโดยตรง
                  </button>
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