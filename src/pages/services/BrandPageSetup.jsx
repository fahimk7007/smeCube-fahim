import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp, CheckCircle, Star, Zap, Users, Eye, Share2, BarChart3, Sparkles, TrendingUp } from 'lucide-react';

const BrandPageSetup = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'প্রফেশনাল ডিজাইন',
      description: 'আপনার ব্র্যান্ডের জন্য আকর্ষণীয় এবং প্রফেশনাল ডিজাইন'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'গ্রাহক বেস বৃদ্ধি',
      description: 'কৌশলগত কন্টেন্ট দ্রুত গ্রাহক বেস বৃদ্ধি'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'কন্টেন্ট পরিকল্পনা',
      description: 'মাসিক কন্টেন্ট ক্যালেন্ডার এবং পরিকল্পনা'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'বিশ্লেষণ রিপোর্ট',
      description: 'নিয়মিত কর্মক্ষমতা বিশ্লেষণ এবং রিপোর্ট'
    }
  ];

  const packages = [
    {
      name: 'বেসিক',
      price: '৫,০০০',
      duration: 'মাসিক',
      features: [
        'প্রফেশনাল পেজ সেটআপ',
        'কভার ও প্রোফাইল ফটো',
        'বায়ো অপটিমাইজেশন',
        'প্রাথমিক কন্টেন্ট পরিকল্পনা',
        'সাপ্তাহিক পোস্ট (৪টি)'
      ],
      recommended: false
    },
    {
      name: 'প্রিমিয়াম',
      price: '১০,০০০',
      duration: 'মাসিক',
      features: [
        'সমস্ত বেসিক ফিচার',
        'কাস্টম গ্রাফিক্স ডিজাইন',
        'মাসিক কন্টেন্ট ক্যালেন্ডার',
        'সাপ্তাহিক পোস্ট (৮টি)',
        'এনগেজমেন্ট ম্যানেজমেন্ট',
        'সাপ্তাহিক রিপোর্ট',
        'বেসিক এডস সেটআপ'
      ],
      recommended: true
    },
    {
      name: 'এন্টারপ্রাইজ',
      price: '২০,০০০',
      duration: 'মাসিক',
      features: [
        'সমস্ত প্রিমিয়াম ফিচার',
        'ডেডিকেটেড ম্যানেজার',
        'ডেইলি পোস্ট (৩০টি)',
        'এডভান্সড এডস ক্যাম্পেইন',
        'কস্টম চ্যাটবট সেটআপ',
        'রিয়েল-টাইম মনিটরিং',
        'প্রাইওরিটি সাপোর্ট'
      ],
      recommended: false
    }
  ];

  const successStories = [
    {
      brand: 'ফ্যাশন হাব',
      growth: '৩৫০%',
      description: '৩ মাসে ফলোয়ার ১০,০০০ তে বৃদ্ধি'
    },
    {
      brand: 'টেক সলিউশন',
      growth: '৫০০%',
      description: 'রিচ ৫x বৃদ্ধি এবং লিড জেনারেশন'
    },
    {
      brand: 'ফুডি বাংলা',
      growth: '২৮০%',
      description: 'এনগেজমেন্ট ৩x বৃদ্ধি এবং সেলস বৃদ্ধি'
    }
  ];

  const testimonials = [
    {
      name: 'আহমেদ রহমান',
      company: 'টেক স্টার্টআপ',
      text: 'SME Cube আমাদের ব্র্যান্ডকে সোশ্যাল মিডিয়ায় প্রতিষ্ঠিত করতে অসাধারণ সাহায্য করেছে।',
      rating: 5
    },
    {
      name: 'ফারিহা আক্তার',
      company: 'ফ্যাশন ব্র্যান্ড',
      text: 'প্রফেশনাল সেবা এবং দ্রুত ফলাফল। আমাদের ফলোয়ার বেস তিনগুণ বেড়েছে।',
      rating: 5
    }
  ];

  const clients = [
    { name: "Facebook", domain: "facebook.com" },
    { name: "Instagram", domain: "instagram.com" },
    { name: "LinkedIn", domain: "linkedin.com" },
    { name: "Twitter", domain: "twitter.com" },
    { name: "YouTube", domain: "youtube.com" },
    { name: "TikTok", domain: "tiktok.com" },
    { name: "Pinterest", domain: "pinterest.com" },
    { name: "Snapchat", domain: "snapchat.com" }
  ];

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
    <div className="font-sans text-gray-800 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* HERO SECTION - UPDATED */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo SVG */}
            <div className="mb-4 flex justify-center"> {/* Reduced margin-bottom */}
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="55" fill="url(#gradient1)" opacity="0.2"/>
                <circle cx="60" cy="60" r="45" fill="url(#gradient2)"/>
                <path d="M60 30L75 52.5H45L60 30Z" fill="white" opacity="0.9"/>
                <circle cx="45" cy="67.5" r="7.5" fill="white" opacity="0.9"/>
                <circle cx="75" cy="67.5" r="7.5" fill="white" opacity="0.9"/>
                <path d="M45 80C50 85 55 87.5 60 87.5C65 87.5 70 85 75 80" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
                <defs>
                  <linearGradient id="gradient1" x1="5" y1="5" x2="115" y2="115" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EC4899"/>
                    <stop offset="1" stopColor="#8B5CF6"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="15" y1="15" x2="105" y2="105" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7"/>
                    <stop offset="1" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"> {/* Reduced margin-bottom */}
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                ব্র্যান্ড পেজ ম্যানেজমেন্ট
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto font-hind">
              <span className="font-semibold text-white">আপনার ব্র্যান্ডকে সোশ্যাল মিডিয়ায় প্রতিষ্ঠিত করুন</span>
              <br />
              মডার্ন, ফাস্ট এবং হাই-কনভার্সন ব্র্যান্ড এক্সপেরিয়েন্স
            </p>

            <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
              {[
                { number: '৫০০+', label: 'ব্র্যান্ড' },
                { number: '১০M+', label: 'রিচ' },
                { number: '৯৮%', label: 'সন্তুষ্টি' },
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

        {/* CROPPED WHITE ACTION PANEL - Buttons like ecommerce page */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10 z-20 w-[90%] max-w-3xl">
          <div className="bg-white rounded-3xl shadow-2xl backdrop-blur-md border border-gray-100 px-4 py-4 md:px-6 md:py-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-6 py-3 rounded-2xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span className="font-hind">ফ্রী প্রোজেক্ট কন্সাল্ট</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group border-2 border-gray-200 text-gray-700 bg-white px-6 py-3 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span className="font-hind">ভিউ পোর্টফোলিও</span>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - USING CODE2'S UI */}
      {/* FEATURES SECTION - USING CODE2'S UI */}
<section className="py-12 md:py-20 bg-white">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-hind">
          আমাদের সেবা সমূহ
        </span>
      </h2>
      <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
        আপনার ব্র্যান্ডের সোশ্যাল মিডিয়া উপস্থিতি শক্তিশালী করতে সম্পূর্ণ সেবা প্যাকেজ
      </p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((feature, i) => (
        <div
          key={i}
          className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[180px] sm:min-h-[200px] flex flex-col justify-center items-center border border-purple-100 shadow-sm aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
          
          <div className="relative z-10 text-purple-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300 scale-75 sm:scale-100">
            {feature.icon}
          </div>
          
          <h3 className="relative z-10 text-sm sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
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

      {/* PRICING SECTION - KEEP ORIGINAL DESIGN */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-hind">
                আমাদের প্যাকেজ সমূহ
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-4 md:p-8 shadow-xl transition-all hover:scale-105 ${
                  pkg.recommended 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white scale-100 md:scale-105 shadow-2xl' 
                    : 'bg-white text-gray-800 hover:shadow-2xl'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    <span className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      সর্বাধিক জনপ্রিয়
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 mt-2">
                  <h3 className="text-xl md:text-3xl font-bold mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-3xl md:text-5xl font-bold">৳{pkg.price}</span>
                  </div>
                  <span className={`text-sm ${pkg.recommended ? 'text-purple-200' : 'text-gray-500'}`}>
                    প্রতি {pkg.duration}
                  </span>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3 text-xs md:text-base">
                      <CheckCircle className={`w-4 md:w-5 h-4 md:h-5 flex-shrink-0 mt-0.5 ${
                        pkg.recommended ? 'text-green-300' : 'text-green-500'
                      }`} />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPackage(index)}
                  className={`w-full py-3 md:py-4 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 text-sm md:text-base ${
                    pkg.recommended
                      ? 'bg-white text-purple-500 hover:bg-gray-100 shadow-lg'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
                  }`}
                >
                  প্যাকেজ নির্বাচন করুন
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES - USING CODE2'S UI */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-hind">
                সাফল্যের গল্প
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              বিভিন্ন ব্র্যান্ডের সাথে আমাদের কাজের অসাধারণ ফলাফল
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-white to-pink-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-pink-100 min-h-[180px] sm:min-h-[220px] flex flex-col justify-center aspect-square" // Added aspect-square
              >
                <div className="text-3xl sm:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 sm:mb-4">
                  {story.growth}
                </div>
                <h3 className="text-base sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{story.brand}</h3>
                <p className="hidden sm:block text-gray-600 leading-relaxed text-sm font-hind">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - UPDATED WITH SQUARE BOXES */}
      <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-4 sm:mb-6 lg:mb-10">
              ক্লায়েন্টরা যা বলেন
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 px-4">
              আমাদের <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">ক্লায়েন্ট</span> এর মতামত
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              আমাদের সেবা নিয়ে ক্লায়েন্টদের মূল্যবান মতামত
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-3 sm:p-4 aspect-square hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-1 h-full flex flex-col items-center justify-center text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col items-center justify-center space-y-2 sm:space-y-3 h-full w-full">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 group-hover:text-white leading-relaxed italic font-hind line-clamp-3">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 group-hover:text-white text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-gray-600 group-hover:text-white/90 text-xs sm:text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Empty box for the third column */}
            <div className="group relative bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-3 sm:p-4 aspect-square hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-transparent hover:-translate-y-1 h-full flex flex-col items-center justify-center text-center">
              <div className="relative z-10 flex flex-col items-center justify-center space-y-2 sm:space-y-3 h-full">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white transition-colors leading-tight">
                  আপনার সাফল্যের<br />গল্প যুক্ত করুন
                </h3>
                
                <p className="text-sm sm:text-base lg:text-lg text-white/90 transition-colors leading-relaxed">
                  পরবর্তী সাফল্যের গল্পটি হতে পারে আপনার
                </p>

                <button className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm">
                  শুরু করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION - REPLACED WITH ECOMMERCE PAGE STYLE */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl my-12 mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-sm inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 mb-5 rounded-full font-semibold mb-12">আমাদের প্ল্যাটফর্ম</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
              <span className="bg-gradient-to-r m-10 from-purple-600 to-pink-600 bg-clip-text text-transparent">
                আমরা যেখানে কাজ করি
              </span>
            </h2>
            <p className="text-sm mb-10 text-gray-600 mt-8">বিভিন্ন সোশ্যাল মিডিয়া প্ল্যাটফর্মে আমাদের বিশেষজ্ঞতা</p>
          </div>

          <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-center justify-items-center">
            {clients.map((client, i) => (
              <a
                key={i}
                href={`https://${client.domain}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-white rounded-lg p-2 sm:p-3 w-full max-w-[150px] sm:max-w-[220px] shadow-sm hover:shadow-md transition"
              >
                <img
                  src={`https://logo.clearbit.com/${client.domain}`}
                  alt={client.name}
                  className="h-6 sm:h-8 md:h-10 object-contain"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://via.placeholder.com/120x40?text=${encodeURIComponent(client.name)}`; }}
                />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center sm:text-left">{client.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 font-hind">আপনার প্রজেক্ট শুরু করুন আজই!</h3>
          <p className="text-purple-100 text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed font-hind">
            আমাদের বিশেষজ্ঞ টিম আপনার প্রজেক্ট নিয়ে আলোচনা করতে প্রস্তুত। বিনামূল্যে কন্সাল্টেশন পান।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl active:scale-95">
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
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BrandPageSetup;