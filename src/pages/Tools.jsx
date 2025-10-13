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
      description: 'ফেসবুক এবং ইনস্টাগ্রামে স্বয়ংক্রিয়',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'সহজে ড্র্যাগ এবং ড্রপ ...',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'কাস্টমার রিলেশনশিপ ম্যানেজমেন্ট সিস্টেম',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'আপনার ওয়েবসাইটের পারফরম্যান্স বিশ্লেষণ করুন',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'একাধিক প্ল্যাটফর্মে সোশ্যাল মিডিয়া পোস্টিং',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'হোয়াটসঅ্যাপের মাধ্যমে...',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'আপনার সার্ভারের পারফরম্যান্স নিরীক্ষণ করুন',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'আপনার ব্যবসার জন্য সোশ্যাল প্রুফ তৈরি করুন',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'নিরাপদ এবং সহজ পেমেন্ট ..',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'ইমেল ক্যাম্পেইন তৈরি এবং ম্যানেজ করুন',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'আপনার নিজস্ব ই-কমার্স স্টোর তৈরি করুন',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'আপনার কোম্পানির জন্য প্রফেশনাল ওয়েবসাইট',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'আপনার ওয়েবসাইটের এসইও পারফরম্যান্স রিপোর্ট',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'আপনার ব্যক্তিগত বা ব্যবসায়িক প্রোফাইল কার্ড তৈরি',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'একটি সিঙ্গেল পেজ ওয়েবসাইট তৈরি করুন',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'আপনার ব্যবসার জন্য ডোমেইন নাম সাজেশন',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'দীর্ঘ URL গুলোকে ছোট করুন সহজেই',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: 'বিভিন্ন প্ল্যাটফর্মে ইউজারনেম খুঁজুন',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  const getDescriptionFontSize = (description) => (description.length > 50 ? 'text-sm sm:text-base' : 'text-base sm:text-lg');

  return (
    <div className="min-h-screen bg-white font-hind">
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
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="py-12 sm:py-16 bg-white">
        <div className="mx-4 sm:mx-[15%] max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4 font-akceler">
            প্রিমিয়াম সাবস্ক্রিপশন টুলস
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-10 font-hind">
            নিচ থেকে প্রিমিয়াম সাবক্রিপশন টুলস সিলেক্ট করুন
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {premiumTools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[320px] sm:min-h-[340px] transition-all border border-gray-100"
              >
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                      {tool.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-akceler leading-tight">{tool.name}</h3>
                    <p className={`text-gray-600 text-lg font-hind`}>{tool.description}</p>
                  </div>
                  <div className="mt-4">
                    <div className="text-gray-500 text-sm mb-1 font-hind">{tool.status}</div>
                    <Link
                      to={tool.link}
                      className="inline-flex items-center text-red-500 font-medium hover:text-red-600 hover:bg-red-50 hover:underline rounded px-2 py-1 transition-all duration-200 text-sm font-hind"
                    >
                      ডেমো দেখুন
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Free Tools */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-4 sm:mx-[15%] max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4 font-akceler">
            ফ্রি টুলস
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-10 font-hind">
            নিচ থেকে ফ্রি টুলস সিলেক্ট করুন
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
            {freeTools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[300px] sm:min-h-[320px] transition-all border border-gray-100"
              >
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                      {tool.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-akceler leading-tight">{tool.name}</h3>
                    <p className={`text-gray-600 text-lg font-hind`}>{tool.description}</p>
                  </div>
                  <div className="mt-4">
                    <div className="text-gray-500 text-sm mb-1 font-hind">{tool.status}</div>
                    <Link
                      to={tool.link}
                      className="inline-flex items-center text-red-500 font-medium hover:text-red-600 hover:bg-red-50 hover:underline rounded px-2 py-1 transition-all duration-200 text-sm font-hind"
                    >
                      ডেমো দেখুন
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </Link>
                  </div>
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