import React, { useState } from 'react';
import './tcas.css';

const TCAS = () => {
  const [selectedRound, setSelectedRound] = useState(null);

  const tcasRounds = [
    {
      id: 1,
      name: "รอบที่ 1: Portfolio (แฟ้มสะสมผลงาน)",
      period: "ประมาณช่วง ต.ค. - ม.ค.",
      details: {
        schedule: "เปิดรับสมัครประมาณเดือน ตุลาคม - มกราคม (กำหนดการจะแตกต่างกันไปในแต่ละมหาวิทยาลัย ให้ยึดตามประกาศของมหาวิทยาลัยโดยตรง)",
        criteria: "เน้นพิจารณาจากแฟ้มสะสมผลงาน (Portfolio), เกรดเฉลี่ยสะสม (GPAX) และอาจมีกำหนดหน่วยกิตขั้นต่ำในบางกลุ่มวิชา",
        notes: "ส่วนใหญ่ไม่มีการจัดสอบข้อเขียนเพิ่มเติม แต่อาจมีการเรียกสอบสัมภาษณ์ หรือทดสอบทักษะเฉพาะทาง (เช่น วาดรูป, เล่นดนตรี, กีฬา)",
        target: "เหมาะสำหรับนักเรียนที่มีผลงานโดดเด่นระดับประเทศ/นานาชาติ, มีทักษะความสามารถพิเศษเฉพาะทาง, หรือผู้ที่ทำกิจกรรมเพื่อสังคมอย่างต่อเนื่อง"
      }
    },
    {
      id: 2,
      name: "รอบที่ 2: Quota (โควตา)",
      period: "ประมาณช่วง ก.พ. - เม.ย.",
      details: {
        schedule: "เปิดรับสมัครประมาณเดือน กุมภาพันธ์ - เมษายน",
        criteria: "ใช้เกรดเฉลี่ย (GPAX) ร่วมกับคะแนนสอบส่วนกลาง (TGAT/TPAT, A-Level) หรือคะแนนสอบเฉพาะที่จัดโดยมหาวิทยาลัยนั้นๆ",
        notes: "ผู้สมัครจะต้องมีคุณสมบัติตรงตามเงื่อนไขโควตาอย่างเคร่งครัด เช่น โควตาพื้นที่/ภูมิภาค, โควตาโรงเรียนเครือข่าย, โควตาทายาท, หรือโควตาเรียนดี",
        target: "เหมาะสำหรับนักเรียนที่กำลังศึกษาอยู่ในภูมิภาคหรือพื้นที่ที่มหาวิทยาลัยกำหนด หรือมีคุณสมบัติเฉพาะกลุ่มตามที่โครงการระบุไว้"
      }
    },
    {
      id: 3,
      name: "รอบที่ 3: Admission (แอดมิชชัน)",
      period: "ประมาณช่วง พ.ค.",
      details: {
        schedule: "เปิดรับสมัครพร้อมกันทั่วประเทศประมาณเดือน พฤษภาคม (ผ่านระบบ myTCAS ของ ทปอ.)",
        criteria: "ใช้คะแนนสอบส่วนกลาง (TGAT/TPAT, A-Level) เป็นหลักในการประมวลผลคะแนนตามสัดส่วนที่แต่ละคณะ/มหาวิทยาลัยกำหนด",
        notes: "สามารถเลือกสมัครได้สูงสุด 10 อันดับ โดยระบบจะประมวลผลจากคะแนนรวมและลำดับที่เลือกไว้ (จ่ายค่าสมัครตามจำนวนอันดับ)",
        target: "เหมาะสำหรับนักเรียนสายวิชาการที่เตรียมตัวสอบส่วนกลางมาเป็นอย่างดี และต้องการกระจายความเสี่ยงโดยการเลือกคณะ/มหาวิทยาลัยได้หลายอันดับ"
      }
    },
    {
      id: 4,
      name: "รอบที่ 4: Direct Admission (รับตรงอิสระ)",
      period: "ประมาณช่วง พ.ค. - มิ.ย.",
      details: {
        schedule: "เปิดรับสมัครประมาณเดือน พฤษภาคม - มิถุนายน (ดำเนินการหลังจากการประกาศผลรอบ 3 เสร็จสิ้น)",
        criteria: "มหาวิทยาลัยเป็นผู้กำหนดเกณฑ์การคัดเลือกเองโดยอิสระ อาจใช้คะแนนสอบส่วนกลาง, เกรดเฉลี่ย (GPAX), หรือการสอบสัมภาษณ์",
        notes: "เป็นรอบ 'เก็บตก' รับเฉพาะคณะ/สาขาวิชาที่ยังมีจำนวนที่นั่งว่างจากการรับในรอบ 1-3 สมัครโดยตรงกับทางเว็บไซต์ของมหาวิทยาลัย",
        target: "เหมาะสำหรับผู้ที่พลาดหวังยังไม่ได้ที่เรียนจากรอบก่อนหน้า หรือผู้ที่เพิ่งตัดสินใจเปลี่ยนสายการเรียน/คณะที่ต้องการเข้าศึกษา"
      }
    }
  ];

  const openModal = (round) => {
    setSelectedRound(round);
  };

  const closeModal = () => {
    setSelectedRound(null);
  };

  return (
    <div className="tcas-page-wrapper">
      <div className="tcas-container">
        
        <div className="tcas-header">
          <h1>TCAS 2569</h1>
          <p>คลิกที่แต่ละกรอบเพื่อดูรายละเอียดเพิ่มเติม</p>
        </div>

        <div className="note-box">
          <strong>📌 หมายเหตุเกี่ยวกับช่วงเวลา:</strong> 
          ข้อมูลกำหนดการรับสมัครด้านล่างเป็นเพียง <strong>"กรอบเวลาโดยประมาณ"</strong> เท่านั้น โปรดติดตามประกาศอย่างเป็นทางการจากเว็บไซต์ของมหาวิทยาลัยที่คุณสนใจอีกครั้ง
        </div>

        <ul className="timeline-list">
          {tcasRounds.map((round) => (
            <li key={round.id} onClick={() => openModal(round)} className="clickable-item">
              <span className="phase-name">{round.name}</span>
              <span className="phase-period">{round.period}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* ป๊อปอัพ (Modal) */}
      {selectedRound && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{selectedRound.name}</h2>
            
            <div className="modal-body-scroll">
              <div className="modal-section">
                <h3>🗓️ กำหนดการ</h3>
                <p>{selectedRound.details.schedule}</p>
              </div>

              <div className="modal-section">
                <h3>📊 เกณฑ์คร่าวๆ</h3>
                <p>{selectedRound.details.criteria}</p>
              </div>

              <div className="modal-section">
                <h3>📝 หมายเหตุการรับสมัคร</h3>
                <p>{selectedRound.details.notes}</p>
              </div>

              <div className="modal-section target-audience">
                <h3>🎯 เหมาะกับใคร?</h3>
                <p>{selectedRound.details.target}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div> 
  );
};
export default TCAS;