import React, { useState } from 'react';
import './Scholarship.css';

const Scholarship = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // ข้อมูลทุนแบบ "ละเอียดขั้นสุด"
  const scholarships = [
    {
      id: 1,
      name: "ทุนรัฐบาลญี่ปุ่น (MEXT Scholarship) - ระดับ ป.ตรี",
      category: "ทุนต่างประเทศ (เต็มจำนวน)",
      details: {
        overview: "ทุนให้เปล่าจากกระทรวงศึกษาธิการ วัฒนธรรม กีฬา วิทยาศาสตร์ และเทคโนโลยี (MEXT) ประเทศญี่ปุ่น สำหรับนักศึกษาต่างชาติเพื่อศึกษาต่อในระดับปริญญาตรีที่มหาวิทยาลัยในญี่ปุ่น",
        coverage: [
          "ค่าเล่าเรียนเต็มจำนวน (รวมค่าแรกเข้า, ค่าเล่าเรียนรายเทอม, ค่าสอบเข้า)",
          "ค่าครองชีพรายเดือน ประมาณ 117,000 เยน/เดือน (อาจมีเพิ่มเติมตามพื้นที่)",
          "ตั๋วเครื่องบินไป-กลับ ประเทศไทย-ญี่ปุ่น (ชั้นประหยัด)",
          "ค่าเรียนปรับพื้นฐานภาษาญี่ปุ่น 1 ปี ก่อนเข้าเรียนมหาวิทยาลัย"
        ],
        qualifications: [
          "สัญชาติไทย",
          "อายุ 17 - 24 ปี (นับถึงวันที่ 1 เมษายน ของปีที่เริ่มไปศึกษา)",
          "GPAX ม.ปลาย รวมทุกเทอม ไม่ต่ำกว่า 3.00 (หรือเทียบเท่า)",
          "ผู้ที่เลือกสายศิลป์: ต้องมีความรู้ภาษาญี่ปุ่นพื้นฐาน หรือมีความสนใจอย่างจริงจัง",
          "ผู้ที่เลือกสายวิทย์: ต้องมีพื้นฐานคณิตศาสตร์และวิทยาศาสตร์ที่แข็งแกร่ง"
        ],
        requiredDocuments: [
          "ใบสมัคร (Application Form) ตามแบบฟอร์มสถานทูต",
          "รูปถ่ายขนาด 4.5 x 3.5 ซม. (ถ่ายไม่เกิน 6 เดือน)",
          "ใบแสดงผลการเรียน (Transcript) ฉบับภาษาอังกฤษ ตัวจริง 1 ฉบับ",
          "หนังสือรับรองสถานะภาพนักเรียน/ใบคาดว่าจะจบการศึกษา (ภาษาอังกฤษ)",
          "หนังสือรับรองจากผู้อำนวยการโรงเรียนหรือครูประจำชั้น (Recommendation Letter)"
        ],
        examSubjects: "สายศิลป์: คณิตศาสตร์(A), ภาษาอังกฤษ, ภาษาญี่ปุ่น | สายวิทย์: คณิตศาสตร์(B), ภาษาอังกฤษ, ภาษาญี่ปุ่น, เคมี, ฟิสิกส์ หรือ ชีววิทยา",
        schedule: "เปิดรับสมัคร: พฤษภาคม | สอบข้อเขียน: มิถุนายน | สัมภาษณ์: กรกฎาคม",
        obligations: "❌ ไม่มีพันธะผูกพันในการชดใช้ทุน หรือทำงานใช้คืนเมื่อสำเร็จการศึกษา",
        contactLink: "https://www.th.emb-japan.go.jp/itpr_th/jis_study.html"
      }
    },
    {
      id: 2,
      name: "ทุนรัฐบาล (ก.พ.) - บุคคลทั่วไประดับปริญญา",
      category: "ทุนต่างประเทศ (เต็มจำนวน มีเงื่อนไข)",
      details: {
        overview: "ทุนจากสำนักงานคณะกรรมการข้าราชการพลเรือน (ก.พ.) เพื่อส่งนักเรียนไทยไปศึกษาต่อต่างประเทศในสาขาวิชาที่เป็นความต้องการของหน่วยงานภาครัฐ",
        coverage: [
          "ค่าใช้จ่ายในการศึกษาทั้งหมด (ค่าเล่าเรียน, ค่าธรรมเนียมมหาวิทยาลัย)",
          "ค่าใช้จ่ายประจำเดือน (คำนวณตามค่าครองชีพของประเทศที่ไปศึกษา)",
          "ค่าใช้จ่ายในการเดินทางไป-กลับต่างประเทศ",
          "ค่าหนังสือและอุปกรณ์การศึกษา, ค่าประกันสุขภาพ"
        ],
        qualifications: [
          "สัญชาติไทย และอายุไม่เกิน 25 ปี (สำหรับผู้สมัครระดับ ป.ตรี)",
          "กำลังศึกษาชั้น ม.6 หรือเทียบเท่า และมี GPAX ไม่ต่ำกว่า 3.00",
          "หากศึกษาจบ ป.ตรี แล้ว ต้องมีเกรดเฉลี่ยไม่ต่ำกว่า 2.75 หรือ 3.00 (ขึ้นอยู่กับประเภททุน)",
          "ต้องไม่เป็นผู้ที่กำลังรับทุนอื่นที่มีเงื่อนไขผูกพัน"
        ],
        requiredDocuments: [
          "ใบสมัครที่พิมพ์จากระบบอินเทอร์เน็ต ติดรูปถ่าย 1 x 1.5 นิ้ว",
          "สำเนา Transcript ที่แสดงเกรดเฉลี่ยตรงตามเงื่อนไข",
          "สำเนาบัตรประจำตัวประชาชน",
          "เอกสารรับรองอื่นๆ (ถ้ามี ตามที่ระบุในประกาศรับสมัคร)"
        ],
        examSubjects: "วิชาภาษาอังกฤษ, วิชาความสามารถทั่วไป (คณิตศาสตร์, การวิเคราะห์เหตุผล)",
        schedule: "เปิดรับสมัคร: ตุลาคม - พฤศจิกายน | สอบข้อเขียน: ธันวาคม",
        obligations: "⚠️ ต้องกลับมาปฏิบัติราชการในหน่วยงานของรัฐที่กำหนด เป็นระยะเวลาไม่น้อยกว่า 2 เท่าของระยะเวลาที่รับทุน หากผิดสัญญาต้องชดใช้เงินคืนพร้อมเบี้ยปรับ",
        contactLink: "https://www.ocsc.go.th/scholarship"
      }
    },
    {
      id: 3,
      name: "กองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ.)",
      category: "ทุนภายในประเทศ (กู้ยืม)",
      details: {
        overview: "กองทุนของรัฐที่ให้เงินกู้ยืมแก่นักเรียน นักศึกษา เพื่อเป็นค่าเล่าเรียนและค่าครองชีพ โดยมีดอกเบี้ยต่ำ เพื่อลดความเหลื่อมล้ำทางการศึกษา",
        coverage: [
          "ค่าเล่าเรียน (จ่ายตรงให้สถานศึกษา ตามเพดานที่กำหนดในแต่ละคณะ/สาขา)",
          "ค่าครองชีพรายเดือน (โอนเข้าบัญชีผู้กู้ ประมาณ 3,000 บาท/เดือน)",
          "ค่าใช้จ่ายที่เกี่ยวเนื่องกับการศึกษาอื่นๆ"
        ],
        qualifications: [
          "สัญชาติไทย",
          "เป็นผู้ขาดแคลนทุนทรัพย์ (รายได้ครอบครัวรวมกันไม่เกิน 360,000 บาท/ปี)",
          "หรือ ศึกษาในสาขาวิชาที่เป็นความต้องการหลัก (ไม่ต้องดูรายได้ครอบครัว)",
          "เกรดเฉลี่ยสะสม (GPAX) ไม่ต่ำกว่า 2.00",
          "ทำกิจกรรมจิตอาสาไม่น้อยกว่า 36 ชั่วโมง/ปีการศึกษา"
        ],
        requiredDocuments: [
          "ใบคำขอกู้ยืมเงิน (พิมพ์จากระบบ กยศ. Connect)",
          "หนังสือรับรองรายได้ของครอบครัว (กยศ.102) พร้อมสำเนาบัตรข้าราชการของผู้รับรอง",
          "สำเนาบัตรประชาชน และสำเนาทะเบียนบ้าน (ผู้กู้, บิดา, มารดา)",
          "สมุดบันทึกกิจกรรมจิตอาสา",
          "ใบแสดงผลการเรียน (Transcript)"
        ],
        examSubjects: "ไม่มีการสอบข้อเขียน พิจารณาจากเอกสารสถานะทางการเงินและผลการเรียน",
        schedule: "ยื่นคำขอกู้ยืมผ่านแอปพลิเคชัน: เมษายน - กรกฎาคม ของทุกปี",
        obligations: "⚠️ เป็นเงินกู้ ต้องชำระเงินต้นคืนพร้อมดอกเบี้ย 1% ต่อปี โดยเริ่มชำระหลังจากสำเร็จการศึกษาหรือเลิกการศึกษาแล้ว 2 ปี (มีระยะเวลาผ่อนชำระสูงสุด 15 ปี)",
        contactLink: "https://www.studentloan.or.th/"
      }
    }
  ];

  const filteredScholarships = scholarships.filter((scholarship) => {
    return (
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const openModal = (scholarship) => setSelectedScholarship(scholarship);
  const closeModal = () => setSelectedScholarship(null);

  return (
    <div className="scholarship-page-wrapper">
      <div className="scholarship-container">
        
        <div className="scholarship-header">
          <h1>ระบบค้นหาทุนการศึกษา</h1>
          <p>เจาะลึกทุกรายละเอียดที่คุณต้องรู้</p>
        </div>

        <div className="search-section">
          <input 
            type="text" 
            placeholder="🔍 พิมพ์ชื่อทุน, ประเภท, หรือประเทศเพื่อค้นหา..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <ul className="timeline-list">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship) => (
              <li key={scholarship.id} onClick={() => openModal(scholarship)} className="clickable-item">
                <span className="phase-name">{scholarship.name}</span>
                <span className="phase-period category-badge">{scholarship.category}</span>
              </li>
            ))
          ) : (
            <div className="no-result">ไม่พบทุนการศึกษาที่ตรงกับการค้นหาของคุณ</div>
          )}
        </ul>

      </div>

      {/* ป๊อปอัพแบบละเอียดขั้นสุด */}
      {selectedScholarship && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content detailed-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{selectedScholarship.name}</h2>
            <div className="category-label"><strong>ประเภททุน:</strong> {selectedScholarship.category}</div>
            
            <div className="modal-body-scroll">
              
              <div className="modal-section intro-section">
                <p>{selectedScholarship.details.overview}</p>
              </div>

              <div className="modal-section two-col-layout">
                {/* คอลัมน์ซ้าย */}
                <div className="col">
                  <h3>💰 สิ่งที่ทุนครอบคลุม (มูลค่าทุน)</h3>
                  <ul className="detail-list">
                    {selectedScholarship.details.coverage.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3>👤 คุณสมบัติผู้สมัคร</h3>
                  <ul className="detail-list">
                    {selectedScholarship.details.qualifications.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* คอลัมน์ขวา */}
                <div className="col">
                  <h3>📄 เอกสารที่ต้องเตรียม</h3>
                  <ul className="detail-list">
                    {selectedScholarship.details.requiredDocuments.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3>📝 วิชาที่ใช้สอบ (ถ้ามี)</h3>
                  <p className="detail-text">{selectedScholarship.details.examSubjects}</p>
                </div>
              </div>

              <hr className="divider" />

              <div className="modal-section inline-info">
                <div className="info-box">
                  <h3>🗓️ กำหนดการโดยประมาณ</h3>
                  <p>{selectedScholarship.details.schedule}</p>
                </div>
                <div className="info-box warning-box">
                  <h3>⚖️ เงื่อนไข / พันธะผูกพัน</h3>
                  <p>{selectedScholarship.details.obligations}</p>
                </div>
              </div>

              <div className="modal-section official-link">
                <h3>🔗 ช่องทางติดตามและประกาศอย่างเป็นทางการ</h3>
                <a href={selectedScholarship.details.contactLink} target="_blank" rel="noopener noreferrer">
                  คลิกที่นี่เพื่อไปยังเว็บไซต์อย่างเป็นทางการ
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Scholarship;