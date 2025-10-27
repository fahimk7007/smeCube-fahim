import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // SVG Icons
  const icons = {
    mission: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    vision: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    innovation: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    excellence: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    integrity: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    collaboration: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21V19C23 18.1 22.7 17.3 22.2 16.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    users: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    projects: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    team: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C6.477 14 2 18.477 2 24H22C22 18.477 17.523 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    experience: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  const stats = [
    { number: "500+", label: "সন্তুষ্ট ক্লায়েন্ট", icon: icons.users },
    { number: "1000+", label: "সম্পন্ন প্রজেক্ট", icon: icons.projects },
    { number: "50+", label: "দক্ষ টিম মেম্বার", icon: icons.team },
    { number: "5+", label: "বছরের অভিজ্ঞতা", icon: icons.experience },
  ];

  const values = [
    { 
      icon: icons.innovation, 
      title: "উদ্ভাবন", 
      desc: "আমরা প্রযুক্তির সীমানা অতিক্রম করে নতুন সমাধান তৈরি করি",
      color: "from-amber-500 to-amber-600"
    },
    { 
      icon: icons.excellence, 
      title: "উৎকর্ষতা", 
      desc: "প্রতিটি প্রজেক্টে সর্বোচ্চ মানের প্রতিশ্রুতি",
      color: "from-amber-500 to-amber-600"
    },
    { 
      icon: icons.integrity, 
      title: "সততা", 
      desc: "স্বচ্ছতা এবং বিশ্বস্ততা আমাদের মূলমন্ত্র",
      color: "from-amber-500 to-amber-600"
    },
    { 
      icon: icons.collaboration, 
      title: "সহযোগিতা", 
      desc: "ক্লায়েন্টদের সাথে অংশীদারিত্বের মনোভাব",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Background */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-br from-amber-500 to-amber-600 text-white pt-32 pb-24 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-amber-400/20 rounded-full blur-3xl top-0 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-amber-600/20 rounded-full blur-3xl bottom-0 -right-20 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
              আমাদের সম্পর্কে
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed mb-8">
              <strong className="text-white">SMECube</strong> – বাংলাদেশের অগ্রণী ডিজিটাল ট্রান্সফর্মেশন পার্টনার। 
              আমরা ক্ষুদ্র ও মাঝারি ব্যবসাগুলিকে বিশ্বমানের প্রযুক্তি সমাধান দিয়ে ভবিষ্যতের জন্য প্রস্তুত করি।
            </p>
            <div className="flex justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all text-white"
              >
                যোগাযোগ করুন
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-white"
              >
                আরও জানুন
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-8 text-center border border-gray-100 hover:shadow-xl transition-all sm:aspect-square md:aspect-auto"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 text-amber-600">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-2">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-3 sm:gap-4 md:gap-12"
          >
            {/* Mission */}
            <motion.div 
              variants={fadeInUp}
              className="relative group sm:aspect-square md:aspect-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg sm:rounded-xl md:rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-white rounded-lg sm:rounded-xl md:rounded-3xl border-2 border-gray-100 p-3 sm:p-4 md:p-10 hover:border-amber-300 transition-all">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-6 shadow-lg">
                  {icons.mission}
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3 md:mb-4 text-gray-900">আমাদের লক্ষ্য</h2>
                <p className="text-xs sm:text-sm md:text-lg text-gray-600 leading-relaxed">
                  বাংলাদেশের প্রতিটি ছোট ও মাঝারি ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে সফল করে তোলা 
                  এবং তাদের অনলাইন উপস্থিতি শক্তিশালী করা। আমরা বিশ্বাস করি প্রযুক্তি সবার জন্য সহজলভ্য হওয়া উচিত।
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              variants={fadeInUp}
              className="relative group sm:aspect-square md:aspect-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg sm:rounded-xl md:rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-white rounded-lg sm:rounded-xl md:rounded-3xl border-2 border-gray-100 p-3 sm:p-4 md:p-10 hover:border-amber-300 transition-all">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-6 shadow-lg">
                  {icons.vision}
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3 md:mb-4 text-gray-900">আমাদের দৃষ্টিভঙ্গি</h2>
                <p className="text-xs sm:text-sm md:text-lg text-gray-600 leading-relaxed">
                  আগামী পাঁচ বছরে বাংলাদেশের শীর্ষস্থানীয় ডিজিটাল সলিউশন প্রদানকারী হিসেবে 
                  নিজেদের প্রতিষ্ঠিত করা এবং আন্তর্জাতিক মানের সেবা প্রদান করা।
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                আমাদের মূল্যবোধ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              যে নীতিগুলি আমাদের প্রতিটি সিদ্ধান্ত এবং কর্মকাণ্ডকে পরিচালিত করে
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 sm:aspect-square md:aspect-auto"
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-6 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-2 md:mb-3">{value.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              কেন আমরা?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              আমরা শুধু সেবা প্রদানকারী নই, আমরা আপনার সফলতার অংশীদার
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          >
            {[
              { title: "বাংলাদেশের শীর্ষ ১০ ডিজিটাল এজেন্সি", icon: "🏆" },
              { title: "৯৮% গ্রাহক সন্তুষ্টির হার", icon: "⭐" },
              { title: "দেশব্যাপী ৫০০+ সফল প্রজেক্ট", icon: "🚀" },
              { title: "২৪/৭ প্রিমিয়াম সাপোর্ট সেবা", icon: "💬" },
              { title: "ISO সার্টিফাইড কোয়ালিটি", icon: "✓" },
              { title: "আন্তর্জাতিক মানের সার্ভিস", icon: "🌍" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-amber-300 hover:shadow-lg transition-all sm:aspect-square md:aspect-auto"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</div>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-amber-400/20 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-amber-600/20 rounded-full blur-3xl bottom-0 left-0 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            আমাদের সাথে কাজ করতে প্রস্তুত?
          </h2>
          <p className="text-xl md:text-2xl text-amber-100 mb-10">
            আজই শুরু করুন আপনার ডিজিটাল যাত্রা এবং ব্যবসাকে নিয়ে যান নতুন উচ্চতায়
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-900 px-10 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              যোগাযোগ করুন
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-white"
            >
              পোর্টফোলিও দেখুন
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;