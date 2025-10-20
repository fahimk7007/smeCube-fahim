import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Tools = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const premiumTools = [
    {
      id: 1,
      name: 'FB + Insta Automation',
      description: 'স্বয়ংক্রিয় সোশ্যাল মিডিয়া',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H6C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V4C20 2.895 19.105 2 18 2Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 2V22" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-600',
      link: '/tools/fb-insta-automation',
      status: 'Coming Soon..',
    },
    {
      id: 2,
      name: 'Drag n Drop Web Builder',
      description: 'সহজ ওয়েব ডিজাইন',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H21V21H3V3Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 9H21M9 3V21" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-green-500 to-green-600',
      link: '/tools/web-builder',
      status: 'Coming Soon..',
    },
    {
      id: 3,
      name: 'Online CRM',
      description: 'কাস্টমার ম্যানেজমেন্ট সিস্টেম',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20V20H4V4Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 10H20M10 4V20" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-purple-500 to-purple-600',
      link: '/tools/crm',
      status: 'Coming Soon..',
    },
    {
      id: 4,
      name: 'Site Analysis',
      description: 'ওয়েবসাইট পারফরম্যান্স বিশ্লেষণ',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 15L21 9" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 15L12 21L21 15" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: 'from-red-500 to-red-600',
      link: '/tools/site-analysis',
      status: 'Coming Soon..',
    },
    {
      id: 5,
      name: 'Social Media Posting',
      description: 'মাল্টি-প্ল্যাটফর্ম পোস্টিং',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#f59e0b" strokeWidth="2"/>
          <path d="M16 8L12 12L16 16" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-yellow-500 to-yellow-600',
      link: '/tools/social-posting',
      status: 'Coming Soon..',
    },
    {
      id: 6,
      name: 'Whatsapp Automation',
      description: 'হোয়াটসঅ্যাপ স্বয়ংক্রিয় মেসেজিং',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#14b8a6" strokeWidth="2"/>
          <path d="M8 10H16M8 14H14" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-teal-500 to-teal-600',
      link: '/tools/whatsapp-automation',
      status: 'Coming Soon..',
    },
    {
      id: 7,
      name: 'Server Monitoring',
      description: 'সার্ভার পারফরম্যান্স নিরীক্ষণ',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20V10H4V6Z" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 14H20V18H4V14Z" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-indigo-500 to-indigo-600',
      link: '/tools/server-monitoring',
      status: 'Coming Soon..',
    },
    {
      id: 8,
      name: 'Social Proof',
      description: 'সোশ্যাল প্রুফ তৈরি',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#f97316" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-orange-500 to-orange-600',
      link: '/tools/social-proof',
      status: 'Coming Soon..',
    },
    {
      id: 9,
      name: 'Payment Gateway',
      description: 'নিরাপদ পেমেন্ট সলিউশন',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H21V18H3V6Z" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 10H21" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-pink-500 to-pink-600',
      link: '/tools/payment-gateway',
      status: 'Coming Soon..',
    },
    {
      id: 10,
      name: 'Email Marketing',
      description: 'ইমেল ক্যাম্পেইন ম্যানেজমেন্ট',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L12 14L21 8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 8V18H21V8H3Z" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-cyan-500 to-cyan-600',
      link: '/tools/email-marketing',
      status: 'Coming Soon..',
    },
    {
      id: 11,
      name: 'e-Commerce Store',
      description: 'ই-কমার্স স্টোর তৈরি',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H21V21H3V3Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 7H16M8 12H16M8 17H12" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-700',
      link: '/tools/ecommerce-store',
      status: 'Coming Soon..',
    },
    {
      id: 12,
      name: 'Company Site Builder',
      description: 'প্রফেশনাল ওয়েবসাইট তৈরি',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#16a34a" strokeWidth="2"/>
          <path d="M12 6V18M6 12H18" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-green-600 to-green-700',
      link: '/tools/company-site-builder',
      status: 'Coming Soon..',
    },
  ];

  const freeTools = [
    {
      id: 1,
      name: 'Site SEO Report',
      description: 'এসইও পারফরম্যান্স রিপোর্ট',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 16.194 17.194 20 12.5 20C7.806 20 4 16.194 4 11.5C4 6.806 7.806 3 12.5 3" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 11.5H12.5V9" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-gray-500 to-gray-600',
      link: '/tools/seo-report',
      status: 'Coming Soon....',
    },
    {
      id: 2,
      name: 'Intro/Bio Card',
      description: 'প্রোফাইল কার্ড তৈরি',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20V20H4V4Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 8V12" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-blue-400 to-blue-500',
      link: '/tools/intro-card',
      status: 'Coming Soon....',
    },
    {
      id: 3,
      name: 'Single Webpage',
      description: 'সিঙ্গেল পেজ ওয়েবসাইট',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H21V21H3V3Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 9H21" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-green-400 to-green-500',
      link: '/tools/single-webpage',
      status: 'Coming Soon....',
    },
    {
      id: 4,
      name: 'Domain Name Generator',
      description: 'ডোমেইন নাম সাজেশন',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#8b5cf6" strokeWidth="2"/>
          <path d="M12 6V18M6 12H18" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-purple-400 to-purple-500',
      link: '/tools/domain-generator',
      status: 'Coming Soon....',
    },
    {
      id: 5,
      name: 'Short Linker',
      description: 'URL শর্টনার সার্ভিস',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 9H9V15H15V9Z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 12H15" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-red-400 to-red-500',
      link: '/tools/short-linker',
      status: 'Coming Soon....',
    },
    {
      id: 6,
      name: 'Username Search',
      description: 'ইউজারনেম অনুসন্ধান টুল',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 16.194 17.194 20 12.5 20C7.806 20 4 16.194 4 11.5C4 6.806 7.806 3 12.5 3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 11.5H12.5V9" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'from-yellow-400 to-yellow-500',
      link: '/tools/username-search',
      status: 'Coming Soon....',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, when: 'beforeChildren', staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-white font-hind">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
        .font-akceler {
          font-family: 'Hind Siliguri', sans-serif; /* Replace with actual Akceler font if available */
        }
      `}</style>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 pt-24 sm:pt-28 pb-16 sm:pb-20 text-center"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-akceler">
            টুলস – SME Cube
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-hind">
            আপনার ব্যবসার দক্ষতা বাড়াতে আমাদের আধুনিক টুলস ব্যবহার করুন। আমাদের টুলস আপনার কাজকে আরও সহজ এবং দ্রুত করবে।
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg font-hind"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </motion.section>

{/* Premium Tools */}
<motion.section
  initial="hidden"
  animate="visible"
  variants={sectionVariants}
  className="py-12 sm:py-16 bg-white"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4 font-akceler">
      প্রিমিয়াম সাবস্ক্রিপশন টুলস
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 text-center mb-10 font-hind">
      নিচ থেকে প্রিমিয়াম সাবক্রিপশন টুলস সিলেক্ট করুন
    </p>

    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-3 sm:gap-4 md:gap-6">
      {premiumTools.map((tool) => (
        <motion.div
          key={tool.id}
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col justify-center p-3 sm:p-4 md:p-6 border border-gray-100"
        >
          <div
            className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-inner`}
          >
            <div className="absolute inset-[3px] bg-white/90 rounded-lg flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-gray-800"
              >
                {tool.icon}
              </motion.div>
            </div>
          </div>

          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2 font-akceler leading-tight">
            {tool.name}
          </h3>
          <p className="hidden md:block text-xs sm:text-sm md:text-base text-gray-600 font-hind">
            {tool.description}
          </p>
          <div className="mt-2 sm:mt-3 md:mt-4">
            <Link
              to={tool.link}
              className="inline-flex items-center text-red-500 font-medium hover:text-red-600 hover:bg-red-50 hover:underline rounded px-2 py-1 transition-all duration-200 text-xs sm:text-sm font-hind"
            >
              ডেমো দেখুন
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

{/* Free Tools */}
<motion.section
  initial="hidden"
  animate="visible"
  variants={sectionVariants}
  className="py-12 sm:py-16 bg-gray-50"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4 font-akceler">
      ফ্রি টুলস
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 text-center mb-10 font-hind">
      নিচ থেকে ফ্রি টুলস সিলেক্ট করুন
    </p>

    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-3 sm:gap-4 md:gap-6">
      {freeTools.map((tool) => (
        <motion.div
          key={tool.id}
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col justify-center p-3 sm:p-4 md:p-6 border border-gray-100"
        >
          <div
            className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-inner`}
          >
            <div className="absolute inset-[3px] bg-white/90 rounded-lg flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-gray-800"
              >
                {tool.icon}
              </motion.div>
            </div>
          </div>

          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2 font-akceler leading-tight">
            {tool.name}
          </h3>
          <p className="hidden md:block text-xs sm:text-sm md:text-base text-gray-600 font-hind">
            {tool.description}
          </p>
          <div className="mt-2 sm:mt-3 md:mt-4">
            <Link
              to={tool.link}
              className="inline-flex items-center text-red-500 font-medium hover:text-red-600 hover:bg-red-50 hover:underline rounded px-2 py-1 transition-all duration-200 text-xs sm:text-sm font-hind"
            >
              ডেমো দেখুন
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>




      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-red-500 to-pink-600 text-white p-4 sm:p-5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
          >
            <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tools;