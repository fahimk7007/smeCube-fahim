import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Code, Zap, Shield, Clock, HeadphonesIcon, ArrowRight, CheckCircle, Star, TrendingUp, Sparkles } from "lucide-react";

// HELPER DATA //
const pageData = {
  features: [
    { icon: <ShoppingCart className="w-6 h-6" />, title: "পার্সোনালাইজড ডিজাইন", description: "আপনার ব্র্যান্ডের পরিচয় ফুটিয়ে তোলে এমন ইউনিক ডিজাইন।" },
    { icon: <Code className="w-6 h-6" />, title: "পূর্ণাঙ্গ শপিং কার্ট", description: "সহজ চেকআউট এবং পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।" },
    { icon: <Zap className="w-6 h-6" />, title: "সম্পূর্ণ রেসপন্সিভ", description: "মোবাইল, ট্যাবলেট ও ডেক্সটপে নিখুঁতভাবে কাজ করে।" },
    { icon: <Clock className="w-6 h-6" />, title: "দ্রুত লোডিং স্পিড", description: "সর্বোত্তম পারফরম্যান্সের জন্য অপটিমাইজড ওয়েবসাইট।" },
    { icon: <Shield className="w-6 h-6" />, title: "নিরাপত্তা ও সুরক্ষা", description: "SSL সার্টিফিকেট এবং নিরাপদ পেমেন্টের নিশ্চয়তা।" },
    { icon: <HeadphonesIcon className="w-6 h-6" />, title: "সেরা বিক্রয় পরবর্তী সেবা", description: "যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম সবসময় প্রস্তুত।" },
  ],
  clients: [
    { name: "bKash", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bkash_logo.svg/1280px-Bkash_logo.svg.png" },
    { name: "Daraz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Daraz_logo.svg/2560px-Daraz_logo.svg.png" },
    { name: "Pathao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pathao_Logo.svg/1280px-Pathao_Logo.svg.png" },
    { name: "Rokomari", logo: "https://www.rokomari.com/static/200/images/rokomari_logo.png" },
    { name: "Grameenphone", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Grameenphone_Logo.svg/1280px-Grameenphone_Logo.svg.png" },
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
      description:
        "আপনার ব্যবসার লক্ষ্য এবং প্রয়োজন নিয়ে আমরা বিস্তারিত আলোচনা করি।",
    },
    {
      step: "০২",
      title: "ডিজাইন ও প্রোটোটাইপ",
      description:
        "আপনার ব্র্যান্ডের সাথে মিল রেখে একটি আকর্ষণীয় ডিজাইন তৈরি করি।",
    },
    {
      step: "০৩",
      title: "ডেভেলপমেন্ট",
      description:
        "অনুমোদিত ডিজাইনের উপর ভিত্তি করে ওয়েবসাইট তৈরির কাজ শুরু করি।",
    },
    {
      step: "০৪",
      title: "ডেলিভারি ও সাপোর্ট",
      description:
        "ওয়েবসাইট লঞ্চ করার পর প্রয়োজনীয় সাপোর্ট ও রক্ষণাবেক্ষণ সেবা দেই।",
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
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 12 
    }
  },
};

const EcommerceSolution = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* HERO SECTION - Soft bluish theme, smaller height */}
      <motion.section
        className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        style={{ minHeight: '70vh' }}
      >
        {/* Soft bluish gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 opacity-90"></div>
        
        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#F0F9FF"/>
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              ই-কমার্স সলিউশন বিশেষজ্ঞ
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ecommerce Solution
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mt-2">
                আপনার ব্যবসার জন্য
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-2xl max-w-3xl mx-auto text-white/90 drop-shadow-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              আপনার ব্র্যান্ডের জন্য আকর্ষণীয় ই-কমার্স সাইট, যা কনভার্সেশন বাড়াবে!
            </motion.p>
            
            <motion.div
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { number: '500+', label: 'সফল প্রজেক্ট' },
                { number: '98%', label: 'সন্তুষ্টি' },
                { number: '24/7', label: 'সাপোর্ট' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                আরও জানুন
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                ফ্রী কন্সাল্টেশন
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FEATURES - With gradient hover effects */}
      <section className="py-12 md:py-20 mx-auto max-w-7xl px-4 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50"></div>
        </div>
        
        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            আমাদের ফিচারসমূহ
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            variants={staggerContainer}
          >
            {pageData.features.map((feature, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden group cursor-pointer aspect-square flex flex-col justify-center items-center text-center p-3 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 rounded-xl md:rounded-2xl transition-all duration-500"></div>
                
                <motion.div
                  className="relative z-10 text-3xl md:text-4xl mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                >
                  {feature.icon}
                </motion.div>
                
                <motion.h3 
                  className="relative z-10 text-xs md:text-xl font-bold mb-1 md:mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-500 transition-all duration-300"
                  variants={itemVariants}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="relative z-10 text-[10px] md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                  variants={itemVariants}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CLIENTS - Smaller section with demo brands only */}
      <motion.section 
        className="py-8 md:py-12 bg-white/50 relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-blue-100 to-purple-100"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-16">
          <motion.div
            className="text-center mb-6 md:mb-8"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-semibold mb-4 shadow-sm hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              বিশ্বস্ত ব্র্যান্ড
            </motion.span>
            <motion.h2
              className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              আমাদের সম্মানিত ক্লায়েন্টরা
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-6 items-center justify-center"
            variants={staggerContainer}
          >
            {pageData.clients.slice(0, 5).map((client, i) => (
              <motion.div
                key={i}
                className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 aspect-square flex items-center justify-center group hover:border-blue-200"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.08, 
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto max-h-8 md:max-h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="text-gray-400 text-sm">${client.name}</div>`;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* DEMO PROJECTS */}
      <section className="py-12 md:py-20 mx-auto max-w-7xl px-4 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-blue-50 to-white"></div>
        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            ডেমো প্রজেক্টসমূহ
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            variants={staggerContainer}
          >
            {pageData.portfolioImages.map((img, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-xl relative group bg-white aspect-square transition-all duration-500"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                }}
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-3 md:pb-6">
                  <motion.button
                    className="px-3 py-2 md:px-6 md:py-3 bg-white text-blue-600 rounded-lg font-semibold text-xs md:text-base shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    দেখুন
                  </motion.button>
                </div>
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/60 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-sm font-medium backdrop-blur-sm">
                  প্রজেক্ট {i + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-20 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            আমাদের কাজের প্রক্রিয়া
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pageData.processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group aspect-square flex flex-col justify-center relative overflow-hidden"
                variants={slideIn}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 15px 30px rgba(59, 130, 246, 0.15)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 rounded-xl md:rounded-2xl transition-all duration-500"></div>
                
                <motion.div 
                  className="relative z-10 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 md:mb-4 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.step}
                </motion.div>
                
                <motion.h3 
                  className="relative z-10 text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-500 transition-all duration-300"
                >
                  {step.title}
                </motion.h3>
                
                <motion.p 
                  className="relative z-10 text-[10px] md:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                >
                  {step.description}
                </motion.p>
                
                <motion.div 
                  className="relative z-10 w-8 md:w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 md:mt-4 group-hover:w-12 md:group-hover:w-16 transition-all duration-300"
                  whileHover={{ scaleX: 1.2 }}
                  style={{ originX: 0 }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 mx-auto max-w-7xl px-4 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <motion.div
          className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl hover:shadow-3xl transition-all duration-500"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <motion.h3 
            className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent hover:from-cyan-200 hover:to-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            আপনার প্রজেক্ট শুরু করুন আজই!
          </motion.h3>
          
          <motion.p 
            className="text-blue-100 text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90"
            whileHover={{ opacity: 1 }}
          >
            আমাদের বিশেষজ্ঞ টিম আপনার প্রজেক্ট নিয়ে আলোচনা করতে প্রস্তুত। বিনামূল্যে কন্সাল্টেশন পান।
          </motion.p>
          
          <motion.button
            className="bg-white text-blue-600 hover:bg-gray-50 font-bold py-3 px-8 md:py-4 md:px-12 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base flex items-center justify-center gap-2 mx-auto group"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            ফ্রী কন্সাল্টেশন বুক করুন
            <motion.div
              className="w-4 h-4"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default EcommerceSolution;
