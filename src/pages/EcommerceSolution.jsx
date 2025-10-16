import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowUp, ChevronRight, Sparkles } from "lucide-react";

// HELPER DATA //
const pageData = {
  features: [
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 12L12 8L8 12H10V16H14V12H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "পার্সোনালাইজড ডিজাইন",
      description: "আপনার ব্র্যান্ডের পরিচয় ফুটিয়ে তোলে এমন ইউনিক ডিজাইন।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 7H16M8 12H16M8 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "পূর্ণাঙ্গ শপিং কার্ট",
      description: "সহজ চেকআউট এবং পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "সম্পূর্ণ রেসপন্সিভ",
      description: "মোবাইল, ট্যাবলেট ও ডেক্সটপে নিখুঁতভাবে কাজ করে।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "দ্রুত লোডিং স্পিড",
      description: "সর্বোত্তম পারফরম্যান্সের জন্য অপটিমাইজড ওয়েবসাইট।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "নিরাপত্তা ও সুরক্ষা",
      description: "SSL সার্টিফিকেট এবং নিরাপদ পেমেন্টের নিশ্চয়তা।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 9H16M8 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "সেরা বিক্রয় পরবর্তী সেবা",
      description: "যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম সবসময় প্রস্তুত।",
    },
  ],
  clients: [
    { name: "bKash", color: "from-red-500 to-pink-600" },
    { name: "Daraz", color: "from-orange-500 to-red-600" },
    { name: "Pathao", color: "from-green-500 to-teal-600" },
    { name: "Rokomari", color: "from-blue-500 to-purple-600" },
    { name: "Grameenphone", color: "from-yellow-500 to-orange-600" },
    { name: "Shopify", color: "from-green-600 to-emerald-700" },
    { name: "Unilever", color: "from-blue-600 to-cyan-600" },
    { name: "Square", color: "from-purple-600 to-pink-700" },
    { name: "Google", color: "from-blue-500 to-green-500" },
    { name: "Meta", color: "from-purple-700 to-blue-700" },
  ],
  processSteps: [
    {
      step: "০১",
      title: "আলোচনা ও পরিকল্পনা",
      description: "আপনার ব্যবসার লক্ষ্য এবং প্রয়োজন নিয়ে আমরা বিস্তারিত আলোচনা করি।",
    },
    {
      step: "০২",
      title: "ডিজাইন ও প্রোটোটাইপ",
      description: "আপনার ব্র্যান্ডের সাথে মিল রেখে একটি আকর্ষণীয় ডিজাইন তৈরি করি।",
    },
    {
      step: "০৩",
      title: "ডেভেলপমেন্ট",
      description: "অনুমোদিত ডিজাইনের উপর ভিত্তি করে ওয়েবসাইট তৈরির কাজ শুরু করি।",
    },
    {
      step: "০৪",
      title: "ডেলিভারি ও সাপোর্ট",
      description: "ওয়েবসাইট লঞ্চ করার পর প্রয়োজনীয় সাপোর্ট ও রক্ষণাবেক্ষণ সেবা দেই।",
    },
  ],
};

const EcommerceSolution = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setIsVisible(true);
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const formatTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 2) {
      const mid = Math.ceil(words.length / 2);
      return (
        <>
          {words.slice(0, mid).join(' ')}<br />
          {words.slice(mid).join(' ')}
        </>
      );
    }
    return title;
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 min-h-screen font-hind">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-16 relative z-10 py-20 md:py-0">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/20 mb-6">
              <Sparkles className="w-4 h-4" /> ই-কমার্স সলিউশন বিশেষজ্ঞ
            </div>
            
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
              Ecommerce Solution
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300 mt-2">
                আপনার ব্যবসার জন্য
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-purple-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              আপনার ব্র্যান্ডের জন্য আকর্ষণীয় ই-কমার্স সাইট, যা কনভার্সেশন বাড়াবে!
              <span className="block mt-2">
                দৃষ্টিনন্দন Design আর কার্যকরী Conversion-এর সমন্বয়ে, আমরা তৈরি করি আপনার ব্র্যান্ডের Growth-এর পথ।
              </span>
            </p>
            
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { number: '500+', label: 'সফল প্রজেক্ট' },
                { number: '98%', label: 'সন্তুষ্টি' },
                { number: '24/7', label: 'সাপোর্ট' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transition-all duration-500 delay-200"
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-purple-200 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl active:scale-95">
                আরও জানুন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                ফ্রী কন্সাল্টেশন
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FAF5FF" />
                <stop offset="100%" stopColor="#FDF2F8" />
              </linearGradient>
            </defs>
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="url(#curveGradient)"
            />
          </svg>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-8 md:py-12 mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            আমাদের ফিচারসমূহ
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {pageData.features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-3 md:p-5 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 aspect-square flex flex-col justify-center items-center border border-purple-100 shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl md:rounded-2xl transition-all duration-300"></div>
              
              <div className="relative z-10 text-purple-600 mb-2 md:mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="relative z-10 text-xs md:text-sm font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300 leading-tight min-h-[2.5rem] flex items-center justify-center">
                {formatTitle(feature.title)}
              </h3>
              
              <p className="relative z-10 text-[10px] md:text-xs text-gray-600 line-clamp-1 group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              আমাদের কাজের প্রক্রিয়া
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10">
              পরিকল্পনা থেকে ডেলিভারি পর্যন্ত সম্পূর্ণ প্রক্রিয়া
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {pageData.processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[280px] transition-all border border-gray-100 hover:shadow-xl hover:scale-105"
              >
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl sm:text-lg font-semibold text-gray-900 mb-3 leading-tight min-h-[3rem] flex items-center">
                      {formatTitle(step.title)}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{step.description}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 hover:bg-purple-50 rounded px-2 py-1 transition-all duration-200 text-sm"
                    >
                      আরও জানুন
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23a855f7' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 md:px-16 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-semibold mb-4 shadow-sm">
              বিশ্বস্ত ব্র্যান্ড
            </span>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের সম্মানিত ক্লায়েন্টরা
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
            {pageData.clients.map((client, i) => (
              <div
                key={i}
                className="px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-100 hover:scale-105 active:scale-95"
                style={{ 
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  backgroundImage: `linear-gradient(135deg, ${client.color.split(' ')[0].replace('from-', '')}, ${client.color.split(' ')[1].replace('to-', '')})`
                }}
              >
                <span className="text-sm md:text-lg font-semibold text-white">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 md:px-16 text-center relative z-10">
          <div>
            <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">আপনার প্রজেক্ট শুরু করুন আজই!</h3>
            <p className="text-purple-100 text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              আমাদের বিশেষজ্ঞ টিম আপনার প্রজেক্ট নিয়ে আলোচনা করতে প্রস্তুত। বিনামূল্যে কন্সাল্টেশন পান।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button className="group bg-white text-purple-600 px-8 md:px-10 py-3 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl active:scale-95">
                ফ্রী কন্সাল্টেশন বুক করুন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 md:px-10 py-3 md:py-5 rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 active:scale-95">
                লাইভ চ্যাট
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-5 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}
    </div>
  );
};

export default EcommerceSolution;