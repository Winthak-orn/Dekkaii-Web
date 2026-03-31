import React, { useState } from 'react';
import './TutorCourse.css';

const TutorCourse = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { id: 1, name: "มหากาพย์ อังกฤษ อัพเกรด (Grammar)", category: "ภาษา", subCategory: "ภาษาอังกฤษ", location: "CHULA MOOC", date: "สมัครตามรอบประกาศ", price: "ฟรี", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800", link: "https://mooc.chula.ac.th/" },
    { id: 2, name: "Essential Python for Data Science", category: "เทคโนโลยี", subCategory: "วิทยาการข้อมูล", location: "Skooldio", date: "เรียนได้ทันทีตลอดชีพ", price: "3,490.-", image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=800", link: "https://www.skooldio.com/courses/essential-python-for-data-science" },
    { id: 3, name: "Data Analytics Bootcamp", category: "เทคโนโลยี", subCategory: "Data Science", location: "DataRockie", date: "สมัครตามรอบปี 2026", price: "9,900.-", image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800", link: "https://datarockie.com/" },
    { id: 4, name: "Introduction to UX Design", category: "การออกแบบ", subCategory: "UX/UI Design", location: "Skooldio", date: "เรียนออนไลน์", price: "2,500.-", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800", link: "https://www.skooldio.com/courses/intro-to-ux-design" },
    { id: 5, name: "เงินทองต้องวางแผน (Personal Finance)", category: "การเงิน", subCategory: "วางแผนการเงิน", location: "SET e-Learning", date: "เรียนฟรีตลอดเวลา", price: "ฟรี", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800", link: "https://elearning.set.or.th/" },
    { id: 6, name: "สร้างเว็บไซต์ด้วย React สำหรับผู้เริ่มต้น", category: "เทคโนโลยี", subCategory: "Frontend", location: "FutureSkill", date: "ระบบสมาชิก", price: "990.-/ด.", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800", link: "https://futureskill.co/" },
    { id: 7, name: "ภาษาเกาหลีระดับต้น (Elementary Korean)", category: "ภาษา", subCategory: "ภาษาเกาหลี", location: "Thai MOOC", date: "สมัครฟรีออนไลน์", price: "ฟรี", image: "https://images.unsplash.com/photo-1517147177326-b37599372b73?q=80&w=800", link: "https://thaimooc.org/" },
    { id: 8, name: "Digital Marketing Essentials", category: "การตลาด", subCategory: "Marketing", location: "Google Garage", date: "พร้อมใบเซอร์ฟรี", price: "ฟรี", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", link: "https://learndigital.withgoogle.com/" },
    { id: 9, name: "การผลิตสื่อวิดีโอด้วยสมาร์ทโฟน", category: "ศิลปะ", subCategory: "ตัดต่อวิดีโอ", location: "CHULA MOOC", date: "สมัครตามรอบประกาศ", price: "ฟรี", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=800", link: "https://mooc.chula.ac.th/" },
    { id: 10, name: "Excel for Business (Pivot Table)", category: "เทคโนโลยี", subCategory: "Office", location: "Skooldio", date: "เรียนได้ทันที", price: "2,900.-", image: "https://images.unsplash.com/photo-1543286386-713bcd534007?q=80&w=800", link: "https://www.skooldio.com/" },
    { id: 11, name: "Cyber Security Overview", category: "เทคโนโลยี", subCategory: "Security", location: "Thai CERT", date: "อบรมฟรีออนไลน์", price: "ฟรี", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800", link: "https://www.thaicert.or.th/" },
    { id: 12, name: "Introduction to AI with Python", category: "เทคโนโลยี", subCategory: "AI", location: "Harvard (edX)", date: "เรียนฟรีออนไลน์", price: "ฟรี", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", link: "https://www.edx.org/" },
    { id: 13, name: "ภาษาญี่ปุ่นเบื้องต้นสื่อสาร", category: "ภาษา", subCategory: "ภาษาญี่ปุ่น", location: "Thai MOOC", date: "สมัครฟรีออนไลน์", price: "ฟรี", image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800", link: "https://thaimooc.org/" },
    { id: 14, name: "Graphic Design Masterclass", category: "การออกแบบ", subCategory: "Creative", location: "Udemy", date: "เรียนได้ตลอดชีพ", price: "599.-", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800", link: "https://www.udemy.com/" },
    { id: 15, name: "Creative Writing for Bloggers", category: "พัฒนาตนเอง", subCategory: "Writing", location: "FutureSkill", date: "เรียนได้ทันที", price: "850.-", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800", link: "https://futureskill.co/" }
  ];

  const filteredCourses = courses.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-style-wrapper">
      <div className="home-container">
        
        {/* Header สไตล์หน้า Home */}
        <div className="home-header-section">
          <div className="header-text">
            <h2 className="home-title">คอร์สเรียนยอดนิยม</h2>
            <p className="home-subtitle">คอร์สแนะนำเพื่อการสะสมผลงานรอบ Portfolio</p>
          </div>
          <div className="home-search-bar">
            <input 
              type="text" 
              placeholder="ค้นหาวิชา, ชื่อคอร์ส, หรือทักษะที่ต้องการ..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid ของการ์ด */}
        <div className="home-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="home-card" onClick={() => window.open(course.link, '_blank')}>
              <div className="home-card-image">
                <img src={course.image} alt={course.name} />
                <div className="home-badge-group">
                  <span className="badge-top-left">{course.category}</span>
                  <span className="badge-bottom-left">{course.subCategory}</span>
                </div>
                <div className="home-price-tag">{course.price}</div>
              </div>
              
              <div className="home-card-content">
                <div className="home-provider">
                  <span className="provider-icon">🏫</span> {course.location}
                </div>
                <h3 className="home-course-name">{course.name}</h3>
                
                <div className="home-info-row orange-text">
                  <span className="icon">🕒</span> {course.date}
                </div>
                <div className="home-info-row gray-text">
                  <span className="icon">📍</span> ออนไลน์
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TutorCourse;