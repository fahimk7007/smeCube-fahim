import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, TrendingUp, Sparkles } from "lucide-react";

// HELPER DATA //
const pageData = {
  features: [
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 12L12 8L8 12H10V16H14V12H16Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      
      title: "পার্সোনালাইজড ডিজাইন",
      description: "আপনার ব্র্যান্ডের পরিচয় ফুটিয়ে তোলে এমন ইউনিক ডিজাইন।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H21V21H3V3Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 7H16M8 12H16M8 17H12" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "পূর্ণাঙ্গ শপিং কার্ট",
      description: "সহজ চেকআউট এবং পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "সম্পূর্ণ রেসপন্সিভ",
      description: "মোবাইল, ট্যাবলেট ও ডেক্সটপে নিখুঁতভাবে কাজ করে।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6V12L16 14" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "দ্রুত লোডিং স্পিড",
      description: "সর্বোত্তম পারফরম্যান্সের জন্য অপটিমাইজড ওয়েবসাইট।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#8b5cf6" strokeWidth="2"/>
          <path d="M12 6V18M6 12H18" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "নিরাপত্তা ও সুরক্ষা",
      description: "SSL সার্টিফিকেট এবং নিরাপদ পেমেন্টের নিশ্চয়তা।",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#14b8a6" strokeWidth="2"/>
          <path d="M8 9H16M8 13H14" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "সেরা বিক্রয় পরবর্তী সেবা",
      description: "যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম সবসময় প্রস্তুত।",
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
  portfolioImages: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&w=800",
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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const EcommerceSolution = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-800 via-pink-700 to-purple-800">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        {/* Red dots pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="container mx-auto px-4 md:px-16 relative z-10 py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4" /> ই-কমার্স সলিউশন বিশেষজ্ঞ
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
              Ecommerce Solution
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mt-2">
                আপনার ব্যবসার জন্য
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-purple-100 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              আপনার ব্র্যান্ডের জন্য আকর্ষণীয় ই-কমার্স সাইট, যা কনভার্সেশন বাড়াবে!
              <span className="block mt-2">
                দৃষ্টিনন্দন Design আর কার্যকরী Conversion-এর সমন্বয়ে, আমরা তৈরি করি আপনার ব্র্যান্ডের Growth-এর পথ।
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
            >
              {[
                { number: '500+', label: 'সফল প্রজেক্ট' },
                { number: '98%', label: 'সন্তুষ্টি' },
                { number: '24/7', label: 'সাপোর্ট' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-purple-200 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                আরও জানুন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                ফ্রী কন্সাল্টেশন
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        {/* Curved bottom with soft red gradient */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF2F2" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="url(#curveGradient)"
            />
          </svg>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">আপনার প্রজেক্ট শুরু করুন আজই!</h3>
            <p className="text-purple-100 text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              আমাদের বিশেষজ্ঞ টিম আপনার প্রজেক্ট নিয়ে আলোচনা করতে প্রস্তুত। বিনামূল্যে কন্সাল্টেশন পান।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-purple-600 px-8 md:px-10 py-3 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                ফ্রী কন্সাল্টেশন বুক করুন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 md:px-10 py-3 md:py-5 rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                লাইভ চ্যাট
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-red-50 to-white relative">
        <div className="mx-auto max-w-7xl px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4"
            >
              <Sparkles className="w-4 h-4" /> আমাদের সেবা
            </motion.span>
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-30">আমাদের ফিচারসমূহ </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              সম্পূর্ণ ই-কমার্স সলিউশন একটি প্যাকেজে
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pageData.features.map((feature, i) => (
              <motion.div
                key={i}
                className="group text-center bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23a855f7' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-semibold mb-4 shadow-sm"
            >
              বিশ্বস্ত ব্র্যান্ড
            </motion.span>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের সম্মানিত ক্লায়েন্টরা
            </h2>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pageData.clients.map((client, i) => (
              <motion.div
                key={i}
                className="px-4 md:px-6 py-2 md:py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-100"
                variants={scaleIn}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm md:text-lg font-semibold text-gray-700">{client}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEMO PROJECTS */}
      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4"
            >
              <TrendingUp className="w-4 h-4" /> আমাদের কাজ
            </motion.span>
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">ডেমো প্রজেক্টসমূহ</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              সফল ই-কমার্স প্রজেক্টের নমুনা
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pageData.portfolioImages.map((img, i) => (
              <motion.div
                key={i}
                className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl relative bg-white aspect-square"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                  <motion.button
                    className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold text-base shadow-lg flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    দেখুন
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  প্রজেক্ট {i + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-semibold mb-4 shadow-sm"
            >
              <Sparkles className="w-4 h-4" /> কাজের ধাপ
            </motion.span>
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">আমাদের কাজের প্রক্রিয়া</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              পরিকল্পনা থেকে ডেলিভারি পর্যন্ত সম্পূর্ণ প্রক্রিয়া
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pageData.processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition-all border border-purple-100 group relative overflow-hidden"
                variants={slideIn}
                whileHover={{ y: -10 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-4 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolution;