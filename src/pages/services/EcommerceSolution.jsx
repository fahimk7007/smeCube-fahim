import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowUp, ChevronLeft, ChevronRight, Sparkles, Zap, Shield, Globe, Rocket, Eye, Clock, TrendingUp } from "lucide-react";

const pageData = {
  features: [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "হাই-স্পিড ওয়েবসাইট",
      description: "ব্লিটজ-ফাস্ট লোডিং স্পিড সঙ্গে অপটিমাইজড পারফরম্যান্স",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "এডভান্স সিকিউরিটি",
      description: "SSL প্রোটেকশন এবং সিকিউর পেমেন্ট গেটওয়ে",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "গ্লোবাল রেসপন্সিভ",
      description: "সব ডিভাইসে পারফেক্ট ভিউ এক্সপেরিয়েন্স",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "সেলস বুস্ট",
      description: "কনভার্সন রেট বাড়ানোর জন্য ডিজাইন করা",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "মডার্ন ডিজাইন",
      description: "কাস্টমাইজড এবং ব্র্যান্ডেড ডিজাইন সলিউশন",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "২৪/৭ সাপোর্ট",
      description: "রাউন্ড-দ্য-ক্লক টেকনিক্যাল সাপোর্ট",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO অপটিমাইজড",
      description: "সার্চ ইঞ্জিনে টপ র‍্যাংকিং নিশ্চিত",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "পেমেন্ট ইন্টিগ্রেশন",
      description: "মাল্টিপল পেমেন্ট গেটওয়ে সাপোর্ট",
    },
  ],
  clients: [
    "bKash",
    "Daraz",
    "Pathao",
    "Rokomari",
    "Grameenphone",
    "Shopify",
    "Unilever",
    "Square",
    "Google",
    "Meta",
  ],
  processSteps: [
    {
      step: "০১",
      title: "কন্সাল্টেশন",
      description: "আপনার বিজনেস নিডস এবং গোলস নিয়ে ডিটেইল্ড ডিসকাশন",
    },
    {
      step: "০২",
      title: "ডিজাইন ক্রিয়েশন",
      description: "ইউনিক এবং ব্র্যান্ড-অ্যালাইনড ডিজাইন ডেভেলপমেন্ট",
    },
    {
      step: "০৩",
      title: "ডেভেলপমেন্ট",
      description: "এডভান্স টেকনোলজি ব্যবহার করে ওয়েবসাইট বিল্ডিং",
    },
    {
      step: "০৪",
      title: "লঞ্চ সাপোর্ট",
      description: "লাইভ করার পর কন্টিনিউয়াস মেইনটেনেন্স সাপোর্ট",
    },
  ],
  demoProjects: [
    {
      title: "ফ্যাশন ই-কমার্স",
      description: "মডার্ন ফ্যাশন রিটেইল স্টোর",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"
    },
    {
      title: "ইলেকট্রনিক্স শপ",
      description: "ইলেকট্রনিক গ্যাজেটস অনলাইন স্টোর",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop"
    },
    {
      title: "ফুড ডেলিভারি",
      description: "রেস্টুরেন্ট ফুড অর্ডারিং সিস্টেম",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop"
    },
    {
      title: "বুক স্টোর",
      description: "অনলাইন বুক শপিং প্লাটফর্ম",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop"
    },
    {
      title: "হেলথ কেয়ার",
      description: "মেডিকেল প্রোডাক্টস ই-কমার্স",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop"
    },
    {
      title: "হোম ডেকোর",
      description: "হোম ডেকোরেশন প্রোডাক্টস স্টোর",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
      title: "জুয়েলারি স্টোর",
      description: "প্রিমিয়াম জুয়েলারি কালেকশন",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop"
    },
    {
      title: "স্পোর্টস শপ",
      description: "স্পোর্টস ইকুইপমেন্ট স্টোর",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop"
    },
  ]
};

const EcommerceSolution = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
   
    window.addEventListener('scroll', handleScroll);
   
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, Math.ceil(pageData.demoProjects.length / 4) - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

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
    <div className="font-sans text-gray-800 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 min-h-screen">
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
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-900 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-full text-lg font-semibold border border-white/20 mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-hind">প্রিমিয়াম ই-কমার্স সলিউশন</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
              <span className="block gradient-text bg-gradient-to-r from-white to-blue-100">
                DIGITAL
              </span>
              <span className="block gradient-text bg-gradient-to-r from-cyan-200 to-blue-200 mt-2">
                COMMERCE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-12 max-w-2xl mx-auto font-hind">
              <span className="font-semibold text-white">আপনার বিজনেসকে নেক্সট লেভেলে নিয়ে যান</span>
              <br />
              মডার্ন, ফাস্ট এবং হাই-কনভার্সন ই-কমার্স এক্সপেরিয়েন্স
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              {[
                { number: '৫০০+', label: 'সফল প্রজেক্ট' },
                { number: '৯৯%', label: 'সন্তুষ্টি' },
                { number: '২৪/৭', label: 'সাপোর্ট' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-xs md:text-sm font-hind">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105 hover:shadow-3xl active:scale-95">
                <span className="font-hind">ফ্রী প্রোজেক্ট কন্সাল্ট</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group border-2 border-white/40 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                <span className="font-hind">ভিউ পোর্টফোলিও</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 leading-tight">
              <span className="gradient-text bg-gradient-to-r from-blue-600 to-cyan-600 font-hind">
                WHY CHOOSE OUR SOLUTION?
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pageData.features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[180px] sm:min-h-[200px] flex flex-col justify-center items-center border border-blue-100 shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300"></div>
                
                <div className="relative z-10 text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300 scale-75 sm:scale-100">
                  {feature.icon}
                </div>
                
                <h3 className="relative z-10 text-sm sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {formatTitle(feature.title)}
                </h3>
                
                <p className="hidden sm:block relative z-10 text-xs text-gray-600 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300 font-hind">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO PROJECTS SECTION */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 leading-tight">
              <span className="gradient-text bg-gradient-to-r from-blue-600 to-cyan-600 font-hind">
                আমাদের ডেমো প্রজেক্টস
              </span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Mobile: 3 columns grid */}
            <div className="grid grid-cols-3 gap-4 lg:hidden">
              {pageData.demoProjects.slice(0, 6).map((project, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 aspect-square border border-gray-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white z-20">
                    <h3 className="text-sm font-bold mb-1 leading-tight">
                      {formatTitle(project.title)}
                    </h3>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop: Carousel with 4 items */}
            <div className="hidden lg:block relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(pageData.demoProjects.length / 4) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full grid grid-cols-4 gap-6">
                      {pageData.demoProjects.slice(slideIndex * 4, (slideIndex + 1) * 4).map((project, i) => (
                        <div
                          key={i}
                          className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 aspect-square border border-gray-200"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                          
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white z-20">
                            <h3 className="text-lg font-bold mb-2 leading-tight">
                              {formatTitle(project.title)}
                            </h3>
                            <p className="text-sm opacity-90 line-clamp-2 font-hind">
                              {project.description}
                            </p>
                          </div>
                          
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                              <Eye className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= Math.ceil(pageData.demoProjects.length / 4) - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(pageData.demoProjects.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 leading-tight">
              <span className="gradient-text bg-gradient-to-r from-blue-600 to-cyan-600 font-hind">
                OUR WORK PROCESS
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-hind">
              সহজ এবং স্ট্রেইটফরওয়ার্ড প্রসেসে আপনার ডিজিটাল বিজনেস জার্নি
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pageData.processSteps.map((step, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-100 min-h-[200px] flex flex-col justify-center"
              >
                <div className="text-2xl font-bold gradient-text bg-gradient-to-r from-blue-500 to-cyan-600 mb-3">
                  {step.step}
                </div>
                
                <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-3 leading-tight min-h-[3rem] flex items-center justify-center">
                  {formatTitle(step.title)}
                </h3>
                
                <p className="hidden sm:block text-xs sm:text-sm text-gray-600 line-clamp-2 font-hind">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-semibold mb-4 shadow-sm font-hind">
              বিশ্বস্ত ব্র্যান্ড
            </span>
            <h2 className="text-2xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-cyan-600 font-hind">
              আমাদের সম্মানিত ক্লায়েন্টরা
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
            {pageData.clients.map((client, i) => (
              <span
                key={i}
                className="text-sm md:text-lg font-semibold text-gray-700 font-hind"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 font-hind">
            <span className="gradient-text bg-gradient-to-r from-white to-blue-200">
              READY TO
            </span>
            <br />
            <span className="gradient-text bg-gradient-to-r from-cyan-200 to-blue-200">
              GET STARTED?
            </span>
          </h3>
          
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto leading-relaxed font-hind">
            আজই কন্টাক্ট করুন এবং আপনার ডিজিটাল ট্রান্সফর্মেশন জার্নি শুরু করুন
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl active:scale-95">
              <span className="font-hind">ফ্রী কন্সাল্টেশন বুক করুন</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 active:scale-95">
              <span className="font-hind">লাইভ চ্যাট</span>
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default EcommerceSolution;