import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal, X, Tag } from 'lucide-react';
import Select from 'react-select';
import {categories,industries,portfolioData} from '../assets/assest.js'


const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [industryFilter, setIndustryFilter] = useState('all');
    const [showIndustrySheet, setShowIndustrySheet] = useState(false);
    const [showCategorySheet, setShowCategorySheet] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const scrollRef = useRef(null);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener('scroll', checkScroll);
        const ro = new ResizeObserver(checkScroll);
        ro.observe(el);
        return () => {
            el.removeEventListener('scroll', checkScroll);
            ro.disconnect();
        };
    }, []);

    const scroll = (dir) => {
        scrollRef.current?.scrollBy({ left: dir * 200, behavior: 'smooth' });
    };

    const handleCategoryChange = (value) => {
        setFilter(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredData = portfolioData.filter(item => {
        const categoryMatch = filter === 'all' || item.category === filter;
        const industryMatch = industryFilter === 'all' || item.industry === industryFilter;
        return categoryMatch && industryMatch;
    });

    const activeIndustryLabel = industries.find(i => i.value === industryFilter)?.label;
    const activeCategoryLabel = filter === 'all' ? 'All Works' : categories.find(c => c.value === filter)?.label;

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            backgroundColor: 'white',
            border: state.isFocused ? '1px solid #ff6b00' : '1px solid #e5e7eb',
            borderRadius: '9999px',
            padding: '2px 8px',
            fontSize: '14px',
            fontWeight: '700',
            boxShadow: 'none',
            cursor: 'pointer',
            width: '224px',
            '&:hover': { borderColor: state.isFocused ? '#ff6b00' : '#d1d5db' },
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#ff6b00' : state.isFocused ? '#fff7ed' : 'white',
            color: state.isSelected ? 'white' : '#374151',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            '&:active': { backgroundColor: '#ff6b00' },
        }),
        menu: (base) => ({
            ...base,
            overflow: 'hidden',
            marginTop: '8px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
            zIndex: 100,
        }),
        indicatorSeparator: () => ({ display: 'none' }),
        dropdownIndicator: (base) => ({ ...base, color: '#9ca3af' }),
    };

    return (
        <div className="bg-[#fafafa] min-h-screen font-sans overflow-x-hidden">
            <style>{`
                .hide-scroll::-webkit-scrollbar { display: none; }
                .sheet-overlay { transition: opacity 0.3s ease; }
                .sheet-content { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
                .card-anim { transition: transform 0.3s ease, opacity 0.3s ease, scale 0.3s ease; }
            `}</style>

            <header className="pt-32 pb-16 px-[5%] text-center max-w-5xl mx-auto">
                <span className="inline-block px-4 py-1.5 bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                    Visual Production
                </span>
                <h1 className="text-[6.5vw] sm:text-[5vw] md:text-5xl font-extrabold leading-none mb-6 tracking-tighter text-[#050505] whitespace-nowrap">
                    Success.Innovation.<span className="text-[#ff6b00]">Impact.</span>
                </h1>
                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                    Backed by a decade of digital excellence since 2016, our 50+ member strong creative team crafts compelling visual narratives that elevate brands and drive measurable results.
                </p>
            </header>

            <section className="px-[5%] max-w-7xl mx-auto pb-20">
                <div className="hidden md:flex flex-row items-center gap-3 mb-12 bg-gray-100 p-2 rounded-full border border-gray-200 shadow-inner">
                    <button
                        onClick={() => scroll(-1)}
                        disabled={!canScrollLeft}
                        className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200
                        ${canScrollLeft ? 'bg-white text-gray-700 shadow hover:bg-gray-50 active:scale-95' : 'text-gray-300 cursor-default'}`}
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button
                        onClick={() => handleCategoryChange('all')}
                        className={`shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300
                        ${filter === 'all' ? 'bg-black text-white shadow-lg' : 'text-gray-500 hover:text-black'}`}
                    >
                        All Works
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex-1 flex items-center gap-2 overflow-x-auto scroll-smooth hide-scroll"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => handleCategoryChange(cat.value)}
                                className={`shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border
                                ${filter === cat.value ? 'bg-black text-white border-black shadow-lg' : 'bg-white/50 text-gray-500 border-transparent hover:border-gray-300'}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll(1)}
                        disabled={!canScrollRight}
                        className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200
                        ${canScrollRight ? 'bg-white text-gray-700 shadow hover:bg-gray-50 active:scale-95' : 'text-gray-300 cursor-default'}`}
                    >
                        <ChevronRight size={16} />
                    </button>

                    <div className="shrink-0 ml-1">
                        <Select
                            options={industries}
                            value={industries.find(opt => opt.value === industryFilter)}
                            onChange={(option) => setIndustryFilter(option.value)}
                            styles={customSelectStyles}
                            menuPlacement="bottom"
                            isSearchable={false}
                            components={{
                                DropdownIndicator: () => (
                                    <div className="pr-4 text-gray-400">
                                        <ChevronDown size={18} />
                                    </div>
                                ),
                            }}
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="card-anim group bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-sm  hover:-translate-y-1"
                        >
                            <div className="relative aspect-9/16 rounded-4xl overflow-hidden bg-gray-50">
                                <iframe
                                    src={item.link}
                                    className="absolute inset-0 w-full h-[101%] border-0"
                                    style={{ overflow: 'hidden' }}
                                    scrolling="no"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6 flex justify-between items-center">
                                <span className="text-[#ff6b00] text-[10px] font-black uppercase tracking-[0.2em] block">{item.tag}</span>
                                <span className="text-gray-300 text-[9px] uppercase font-bold">{item.industry}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredData.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400">No videos found for this combination.</p>
                        <button
                            onClick={() => { setFilter('all'); setIndustryFilter('all'); }}
                            className="mt-4 text-[#ff6b00] font-bold underline"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </section>

            <div className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-500`}>
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl px-4 py-3 flex items-center justify-center gap-3">
                    <button
                        onClick={() => setShowCategorySheet(true)}
                        className="flex-1 flex items-center justify-center gap-2  px-4 py-3 rounded-2xl text-sm font-bold text-gray-700 active:scale-95 transition-transform"
                    >
                        <Tag size={14} className="text-[#ff6b00] shrink-0" />
                        <span className="truncate max-w-25">{activeCategoryLabel}</span>
                        <ChevronDown size={14} className="text-gray-400 shrink-0" />
                    </button>

                    <button
                        onClick={() => setShowIndustrySheet(true)}
                        className="flex-1 flex items-center justify-center gap-2  px-4 py-3 rounded-2xl text-sm font-bold text-gray-700 active:scale-95 transition-transform"
                    >
                        <SlidersHorizontal size={14} className="text-[#ff6b00] shrink-0" />
                        <span className="truncate max-w-25">{activeIndustryLabel}</span>
                        <ChevronDown size={14} className="text-gray-400 shrink-0" />
                    </button>
                </div>
            </div>

            <div className={`md:hidden fixed inset-0 z-60 ${showCategorySheet ? 'visible' : 'invisible'}`}>
                <div 
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${showCategorySheet ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setShowCategorySheet(false)}
                />
                <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-400 ease-out transform ${showCategorySheet ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="flex justify-center pt-3 pb-1"><div className="w-10 h-1 rounded-full bg-gray-200" /></div>
                    <div className="px-6 pt-3 pb-4 flex items-center justify-between">
                        <span className="font-extrabold text-base text-[#050505]">Filter by Category</span>
                        <button onClick={() => setShowCategorySheet(false)} className="p-1.5 rounded-full bg-gray-100"><X size={16} /></button>
                    </div>
                    <div className="overflow-y-auto max-h-[55vh] px-6 pb-10 flex flex-col gap-2">
                        <button
                            onClick={() => { handleCategoryChange('all'); setShowCategorySheet(false); }}
                            className={`w-full px-5 py-3.5 rounded-2xl font-bold text-sm ${filter === 'all' ? 'bg-[#ff6b00] text-white shadow-lg' : 'bg-gray-100 text-gray-600'}`}
                        >
                            All Works
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => { handleCategoryChange(cat.value); setShowCategorySheet(false); }}
                                className={`w-full px-5 py-3.5 rounded-2xl font-bold text-sm ${filter === cat.value ? 'bg-[#ff6b00] text-white shadow-lg' : 'bg-gray-100 text-gray-600'}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`md:hidden fixed inset-0 z-60 ${showIndustrySheet ? 'visible' : 'invisible'}`}>
                <div 
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${showIndustrySheet ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setShowIndustrySheet(false)}
                />
                <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-400 ease-out transform ${showIndustrySheet ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="flex justify-center pt-3 pb-1"><div className="w-10 h-1 rounded-full bg-gray-200" /></div>
                    <div className="px-6 pt-3 pb-4 flex items-center justify-between">
                        <span className="font-extrabold text-base text-[#050505]">Filter by Industry</span>
                        <button onClick={() => setShowIndustrySheet(false)} className="p-1.5 rounded-full bg-gray-100"><X size={16} /></button>
                    </div>
                    <div className="overflow-y-auto max-h-[55vh] px-6 pb-10 flex flex-col gap-2">
                        {industries.map((ind) => (
                            <button
                                key={ind.value}
                                onClick={() => { setIndustryFilter(ind.value); setShowIndustrySheet(false); }}
                                className={`w-full px-5 py-3.5 rounded-2xl font-bold text-sm ${industryFilter === ind.value ? 'bg-[#ff6b00] text-white shadow-lg' : 'bg-gray-100 text-gray-600'}`}
                            >
                                {ind.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;