import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* ส่วนที่ 1: เมนูลิงก์ต่างๆ */}
        <div style={styles.linkSection}>
          <a href="/about" style={styles.link}>About Us</a>
          <span style={styles.separator}>|</span>
          <a href="/contact" style={styles.link}>Contact</a>
          <span style={styles.separator}>|</span>
          <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
        </div>

        {/* ส่วนที่ 2: คำชี้แจง (Disclaimer) */}
        <div style={styles.textSection}>
          <p style={styles.text}>
            <strong>คำชี้แจง (Disclaimer):</strong> เว็บไซต์นี้จัดทำขึ้นเพื่อวัตถุประสงค์ทางการศึกษาและอำนวยความสะดวกในการค้นหาข้อมูลแก่ผู้สมัครเรียนเท่านั้น ข้อมูลทั้งหมดอ้างอิงจากประกาศของมหาวิทยาลัย/แหล่งทุนต้นทาง ทางผู้จัดทำไม่ได้เป็นตัวแทนหรือส่วนหนึ่งส่วนใดของหน่วยงานดังกล่าว และไม่ได้รับค่าตอบแทนเชิงพาณิชย์ โปรดตรวจสอบข้อมูลที่เป็นปัจจุบันจากเว็บไซต์ทางการอีกครั้ง
          </p>
        </div>

        {/* ส่วนที่ 3: ช่องทางติดต่อ (Take-down Policy) */}
        <div style={styles.textSection}>
          <p style={styles.textSmall}>
            <strong>นโยบายการนำข้อมูลออก (Take-down Policy):</strong> หากหน่วยงานใดประสงค์ให้แก้ไขหรือนำข้อมูลออกจากระบบ โปรดติดต่อที่{' '}
            {/* อย่าลืมเปลี่ยนอีเมลตรงนี้นะครับ 👇 */}
            <a href="mailto:your-email@example.com" style={styles.emailLink}>
              [Email ของคุณ]
            </a>{' '}
            ทางเราจะดำเนินการทันที
          </p>
        </div>

        <div style={styles.copyright}>
          © {new Date().getFullYear()} Dekkaii. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// สไตล์พื้นฐาน (Inline CSS) เพื่อให้ใช้งานได้ทันทีโดยไม่ต้องตั้งค่า CSS เพิ่ม
const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #e9ecef',
    padding: '2rem 1rem',
    marginTop: 'auto', // ช่วยดัน Footer ให้อยู่ล่างสุดของหน้า
    color: '#495057',
    fontFamily: 'sans-serif',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  linkSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  link: {
    color: '#0056b3',
    textDecoration: 'none',
  },
  separator: {
    color: '#ced4da',
  },
  textSection: {
    textAlign: 'center',
    lineHeight: '1.6',
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
  },
  textSmall: {
    margin: 0,
    fontSize: '0.85rem',
    color: '#6c757d',
  },
  emailLink: {
    color: '#0056b3',
    textDecoration: 'underline',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#adb5bd',
    marginTop: '1rem',
  }
};

export default Footer;