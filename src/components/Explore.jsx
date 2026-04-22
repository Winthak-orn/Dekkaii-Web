import React, { useState } from 'react';
import { Search, Map, Sparkles, Layers, Target } from 'lucide-react';

export default function Explore({ navigate, Workshop_Data, CATEGORIES, REGIONS, ACTIVITY_TYPES, ActivityCard }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [activeRegion, setActiveRegion] = useState(null);
  const [activeType, setActiveType] = useState(null);

  const filteredData = Workshop_Data.filter(camp => {
    const matchesSearch = camp.title.toLowerCase().includes(searchQuery.toLowerCase()) || camp.university.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (activeCategory && camp.category !== activeCategory) return false;
    if (activeSubCategory && camp.subCategory !== activeSubCategory) return false;
    if (activeRegion && camp.region !== activeRegion) return false;
    if (activeType && camp.type !== activeType) return false;
    return true;
  });

  return (
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
        {/* เมนูด้านซ้าย (Filters) */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm sticky top-32 max-h-[80vh] overflow-y-auto custom-scrollbar pr-2">
            
            {/* 1. Category Filter */}
            <div className="mb-8">
              <h5 className="font-black text-[#1A237E] mb-4 text-sm flex items-center gap-2 text-xs"><Layers size={14}/> สายการเรียน</h5>
              <div className="space-y-1">
                <button onClick={() => {setActiveCategory(null); setActiveSubCategory(null);}} className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all ${!activeCategory ? 'bg-[#1A237E] text-white' : 'text-gray-500 hover:bg-gray-50'}`}>ทุกสายการเรียน</button>
                {CATEGORIES.map(cat => (
                  <button key={cat.id} onClick={() => {setActiveCategory(cat.id); setActiveSubCategory(null);}} className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all flex items-center gap-2 ${activeCategory === cat.id ? 'bg-[#FF6B00] text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
                    <span className={activeCategory === cat.id ? 'text-white' : 'text-[#FF6B00]'}>{cat.icon}</span>{cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Sub-Category Filter */}
            {activeCategory && (
              <div className="mb-8 border-t pt-8 animate-in slide-in-from-top-2">
                <h5 className="font-black text-[#1A237E] mb-4 text-sm flex items-center gap-2 text-xs"><Target size={14}/> คณะ/สาขาเจาะลึก</h5>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setActiveSubCategory(null)} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${!activeSubCategory ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-400 border-gray-100 hover:border-indigo-200'}`}>ทั้งหมด</button>
                  {CATEGORIES.find(c => c.id === activeCategory)?.subCats.map(sub => (
                    <button key={sub} onClick={() => setActiveSubCategory(sub)} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${activeSubCategory === sub ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-400 border-gray-100 hover:border-orange-200'}`}>{sub}</button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Activity Type Filter */}
            <div className="mb-8 border-t pt-8">
              <h5 className="font-black text-[#1A237E] mb-4 text-sm flex items-center gap-2 text-xs"><Sparkles size={14}/> ประเภทกิจกรรมค่าย</h5>
              <div className="space-y-1">
                <button onClick={() => setActiveType(null)} className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all ${!activeType ? 'bg-[#1A237E] text-white' : 'text-gray-500 hover:bg-gray-50'}`}>ทุกประเภท</button>
                {ACTIVITY_TYPES.map(type => (
                  <button key={type.id} onClick={() => setActiveType(type.id)} className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all flex items-center gap-2 ${activeType === type.id ? 'bg-[#FF6B00] text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
                    <span className={activeType === type.id ? 'text-white' : 'text-[#FF6B00]'}>{type.icon}</span>{type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Region Filter */}
            <div className="mb-8 border-t pt-8">
              <h5 className="font-black text-[#1A237E] mb-4 text-sm flex items-center gap-2 text-xs"><Map size={14}/> ภูมิภาค</h5>
              <select value={activeRegion || ''} onChange={(e) => setActiveRegion(e.target.value || null)} className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3 text-xs font-bold text-gray-700 mb-4 outline-none focus:ring-2 focus:ring-[#FF6B00]">
                <option value="">ทุกภูมิภาค</option>
                {REGIONS.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
              </select>
            </div>

            <button onClick={() => {setActiveCategory(null); setActiveSubCategory(null); setActiveRegion(null); setActiveType(null); setSearchQuery('');}} className="w-full mt-4 py-3 bg-gray-100 text-gray-400 rounded-2xl text-[10px] font-black hover:bg-red-50 hover:text-red-500 transition-all uppercase tracking-widest">
              Clear Filters
            </button>
          </div>
        </div>

        {/* ตารางแสดงผลลัพธ์ค่าย */}
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
  );
}