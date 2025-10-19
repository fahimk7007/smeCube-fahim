import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowUp, ChevronLeft, ChevronRight, Sparkles, Zap, Shield, Globe, Rocket, Eye, Clock, TrendingUp, ChevronRight as ChevronRightIcon } from "lucide-react";

const pageData = {
  features: [
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "হাই-স্পিড ওয়েবসাইট",
      description: "ব্লিটজ-ফাস্ট লোডিং স্পিড...",
      gradient: "from-blue-500 to-cyan-600",
      iconBg: "bg-blue-100"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "এডভান্স সিকিউরিটি",
      description: "SSL প্রোটেকশন এবং..",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "গ্লোবাল রেসপন্সিভ",
      description: "সব ডিভাইসে পারফেক্ট...",
      gradient: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-100"
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "সেলস বুস্ট",
      description: "কনভার্সন রেট বাড়ানোর...",
      gradient: "from-orange-500 to-red-600",
      iconBg: "bg-orange-100"
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "মডার্ন ডিজাইন",
      description: "কাস্টমাইজড এবং ব্র্যান্ডেড...",
      gradient: "from-yellow-500 to-amber-600",
      iconBg: "bg-yellow-100"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "২৪/৭ সাপোর্ট",
      description: "রাউন্ড-দ্য-ক্লক...",
      gradient: "from-indigo-500 to-blue-600",
      iconBg: "bg-indigo-100"
    },
  ],
  clients: [
    "bKash", "Daraz", "Pathao", "Rokomari", "Grameenphone", 
    "Shopify", "Unilever", "Square", "Google", "Meta",
  ],
  processSteps: [
    {
      step: "০১",
      title: "কন্সাল্টেশন",
      description: "আপনার বিজনেস নিডস...",
      gradient: "from-red-500 to-pink-600",
      iconBg: "bg-red-100"
    },
    {
      step: "০২",
      title: "ডিজাইন ক্রিয়েশন",
      description: "ইউনিক এবং ব্র্যান্ড-অ্যালাইনড...",
      gradient: "from-blue-500 to-cyan-600",
      iconBg: "bg-blue-100"
    },
    {
      step: "০৩",
      title: "ডেভেলপমেন্ট",
      description: "এডভান্স টেকনোলজি...",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100"
    },
    {
      step: "০৪",
      title: "লঞ্চ সাপোর্ট",
      description: "লাইভ করার পর কন্টিনিউয়াস...",
      gradient: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-100"
    },
  ],
  demoProjects: [
    {
      title: "ফ্যাশন ই-কমার্স",
      description: "মডার্ন ফ্যাশন রিটেইল স্টোর",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "ইলেকট্রনিক্স শপ",
      description: "ইলেকট্রনিক গ্যাজেটস অনলাইন স্টোর",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "ফুড ডেলিভারি",
      description: "রেস্টুরেন্ট ফুড অর্ডারিং সিস্টেম",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "বুক স্টোর",
      description: "অনলাইন বুক শপিং প্লাটফর্ম",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      title: "হেলথ কেয়ার",
      description: "মেডিকেল প্রোডাক্টস ই-কমার্স",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      title: "হোম ডেকোর",
      description: "হোম ডেকোরেশন প্রোডাক্টস স্টোর",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      title: "জুয়েলারি স্টোর",
      description: "প্রিমিয়াম জুয়েলারি কালেকশন",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "স্পোর্টস শপ",
      description: "স্পোর্টস ইকুইপমেন্ট স্টোর",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop",
      gradient: "from-red-500 to-orange-600"
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
    <div className="font-sans text-gray-800 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      {/* HERO SECTION - UPDATED */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-full text-lg font-semibold border border-white/20 mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-hind">প্রিমিয়াম ই-কমার্স সলিউশন</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                ডিজিটাল
              </span>
              <span className="block bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent mt-2">
                ই-কমার্স
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto font-hind">
              <span className="font-semibold text-white">আপনার বিজনেসকে নেক্সট লেভেলে নিয়ে যান</span>
              <br />
              মডার্ন, ফাস্ট এবং হাই-কনভার্সন ই-কমার্স এক্সপেরিয়েন্স
            </p>

            <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
              {[
                { number: '৫০০+', label: 'সফল প্রজেক্ট' },
                { number: '৯৯%', label: 'সন্তুষ্টি' },
                { number: '২৪/৭', label: 'সাপোর্ট' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="text-lg md:text-xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/80 text-xs font-hind">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105 hover:shadow-3xl active:scale-95">
                <span className="font-hind">ফ্রী প্রোজেক্ট কন্সাল্ট</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group border-2 border-white/40 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
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

      {/* FEATURES SECTION - UPDATED WITH SERVICE SECTION DESIGN */}
      <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-4 sm:mb-6 lg:mb-10">
              আমাদের বৈশিষ্ট্য
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 px-4">
              কেন আমাদের <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">সমাধান</span> বেছে নিবেন?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              আধুনিক প্রযুক্তি এবং অভিজ্ঞতার সমন্বয়ে তৈরি আপনার ব্যবসার জন্য পারফেক্ট ই-কমার্স সমাধান
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {pageData.features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 md:hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 md:hover:border-transparent md:hover:-translate-y-2 h-full"
              >
                {/* GRADIENT: Visible on mobile, appears on hover on desktop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col items-center text-center h-full justify-center space-y-2">
                  {/* ICON WRAPPER */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 md:${feature.iconBg} rounded-xl sm:rounded-2xl md:group-hover:bg-white/20 transition-all duration-300 md:group-hover:scale-110 md:group-hover:rotate-6`}>
                    {/* ICON: White on mobile, colored on desktop, white on desktop hover */}
                    {React.cloneElement(feature.icon, { 
                      className: `w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white md:text-gray-700 md:group-hover:text-white transition-colors` 
                    })}
                  </div>
                  
                  {/* TITLE: White on mobile, dark on desktop, white on desktop hover */}
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-white md:text-gray-900 md:group-hover:text-white transition-colors leading-tight mb-0">
                    {formatTitle(feature.title)}
                  </h3>
                  
                  {/* DESCRIPTION: Visible from md screens up */}
                  <p className="hidden md:block text-sm lg:text-base text-white/90 md:text-gray-600 md:group-hover:text-white/90 transition-colors leading-relaxed">
                    {feature.description}
                  </p>

                  {/* DETAILS LINK: Visible from md screens up */}
                  <div className="hidden md:flex items-center text-white md:text-red-500 md:group-hover:text-white font-semibold pt-2 text-sm lg:text-base">
                    বিস্তারিত
                    <ChevronRightIcon className="w-4 h-4 lg:w-5 lg:h-5 ml-1 md:group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - UPDATED WITH SERVICE SECTION DESIGN */}
      <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-4 sm:mb-6 lg:mb-10">
              আমাদের কাজের প্রক্রিয়া
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 px-4">
              সহজ এবং <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">স্ট্রেইটফরওয়ার্ড</span> প্রক্রিয়া
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              আপনার ডিজিটাল বিজনেস জার্নি শুরু হোক সহজ এবং পরিকল্পিত প্রক্রিয়ায়
            </p>
          </div>

          <div className="grid grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {pageData.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 md:hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 md:hover:border-transparent md:hover:-translate-y-2 h-full"
              >
                {/* GRADIENT: Visible on mobile, appears on hover on desktop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col items-center text-center h-full justify-center space-y-2">
                  {/* STEP NUMBER */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white md:text-gray-900 md:group-hover:text-white transition-colors">
                    {step.step}
                  </div>
                  
                  {/* TITLE: White on mobile, dark on desktop, white on desktop hover */}
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-white md:text-gray-900 md:group-hover:text-white transition-colors leading-tight mb-0">
                    {formatTitle(step.title)}
                  </h3>
                  
                  {/* DESCRIPTION: Visible from md screens up */}
                  <p className="hidden md:block text-sm lg:text-base text-white/90 md:text-gray-600 md:group-hover:text-white/90 transition-colors leading-relaxed">
                    {step.description}
                  </p>

                  {/* DETAILS LINK: Visible from md screens up */}
                  <div className="hidden md:flex items-center text-white md:text-blue-500 md:group-hover:text-white font-semibold pt-2 text-sm lg:text-base">
                    জানুন
                    <ChevronRightIcon className="w-4 h-4 lg:w-5 lg:h-5 ml-1 md:group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO PROJECTS SECTION - UPDATED */}
      <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-4 sm:mb-6 lg:mb-10">
              আমাদের ডেমো প্রজেক্ট
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 px-4">
              একনজরে <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">আমাদের কাজ</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              বিভিন্ন ইন্ডাস্ট্রির জন্য তৈরি আমাদের সফল ই-কমার্স প্রজেক্টস
            </p>
          </div>

          <div className="relative">
            {/* Mobile: 3 columns grid */}
            <div className="grid grid-cols-3 gap-2 lg:hidden">
              {pageData.demoProjects.slice(0, 6).map((project, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-xl overflow-hidden hover:shadow transition-all duration-300 aspect-square border border-gray-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white z-20">
                    <h3 className="text-[10px] font-bold leading-tight">
                      {formatTitle(project.title)}
                    </h3>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                      <Eye className="w-3 h-3 text-white" />
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
                    <div key={slideIndex} className="min-w-full grid grid-cols-4 gap-4">
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
                            <h3 className="text-base font-bold mb-1 leading-tight">
                              {formatTitle(project.title)}
                            </h3>
                            <p className="text-xs opacity-90 line-clamp-2 font-hind">
                              {project.description}
                            </p>
                          </div>
                          
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <Eye className="w-5 h-5 text-white" />
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
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white transition-all hover:scale-110 active:scale-95 disabled:opacity-30 border border-gray-300 text-gray-700"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= Math.ceil(pageData.demoProjects.length / 4) - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white transition-all hover:scale-110 active:scale-95 disabled:opacity-30 border border-gray-300 text-gray-700"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: Math.ceil(pageData.demoProjects.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? 'w-6 bg-gradient-to-r from-purple-500 to-pink-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections (Clients, CTA) remain the same */}
      {/* CLIENTS SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* ... existing clients section code ... */}
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* ... existing CTA section code ... */}
      </section>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default EcommerceSolution;