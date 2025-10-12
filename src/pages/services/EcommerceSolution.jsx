import React from "react";
import { motion } from "framer-motion";

// HELPER DATA //
const pageData = {
  features: [
    {
      icon: "🎨",
      title: "পার্সোনালাইজড ডিজাইন",
      description: "আপনার ব্র্যান্ডের পরিচয় ফুটিয়ে তোলে এমন ইউনিক ডিজাইন।",
    },
    {
      icon: "🛒",
      title: "পূর্ণাঙ্গ শপিং কার্ট",
      description: "সহজ চেকআউট এবং পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।",
    },
    {
      icon: "📱",
      title: "সম্পূর্ণ রেসপন্সিভ",
      description: "মোবাইল, ট্যাবলেট ও ডেক্সটপে নিখুঁতভাবে কাজ করে।",
    },
    {
      icon: "⚡",
      title: "দ্রুত লোডিং স্পিড",
      description: "সর্বোত্তম পারফরম্যান্সের জন্য অপটিমাইজড ওয়েবসাইট।",
    },
    {
      icon: "🔒",
      title: "নিরাপত্তা ও সুরক্ষা",
      description: "SSL সার্টিফিকেট এবং নিরাপদ পেমেন্টের নিশ্চয়তা।",
    },
    {
      icon: "🛠️",
      title: "সেরা বিক্রয় পরবর্তী সেবা",
      description: "যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম সবসময় প্রস্তুত।",
    },
  ],
  clients: [
    {
      name: "bKash",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bkash_logo.svg/1280px-Bkash_logo.svg.png",
    },
    {
      name: "Daraz",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Daraz_logo.svg/2560px-Daraz_logo.svg.png",
    },
    {
      name: "Pathao",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pathao_Logo.svg/1280px-Pathao_Logo.svg.png",
    },
    {
      name: "Rokomari",
      logo: "https://www.rokomari.com/static/200/images/rokomari_logo.png",
    },
    {
      name: "Grameenphone",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Grameenphone_Logo.svg/1280px-Grameenphone_Logo.svg.png",
    },
    {
      name: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    },
    {
      name: "Unilever",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Unilever_logo.svg/2560px-Unilever_logo.svg.png",
    },
    {
      name: "Square",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Square_Pharmaceuticals_logo.svg/2560px-Square_Pharmaceuticals_logo.svg.png",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.svg",
    },
  ],
  portfolioImages: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800",
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
      staggerChildren: 0.2,
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

const EcommerceSolution = () => {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50 min-h-screen">
      {/* HERO SECTION */}
      <motion.section
        className="text-center pt-32 pb-24 bg-[url('https://images.unsplash.com/photo-1556740714-7c4a6b8b7b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-pink-600/50"></div>
        <div className="relative z-10 mx-auto max-w-6xl px-[15%]">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
            variants={fadeIn}
          >
            Ecommerce Solution
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 drop-shadow-lg leading-relaxed"
            variants={fadeIn}
          >
            আপনার ব্র্যান্ডের জন্য আকর্ষণীয় ল্যান্ডিং পেজ, যা কনভার্সেশন বাড়াবে!
            <span className="block mt-2">
              দৃষ্টিনন্দন Design আর কার্যকরী Conversion-এর সমন্বয়ে, আমরা তৈরি
              করি আপনার ব্র্যান্ডের Growth-এর পথ।
            </span>
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(192, 38, 211, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              আরও জানুন
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ফ্রী কন্সাল্টেশন
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className="py-20 mx-auto max-w-6xl px-[15%]">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          আমাদের ফিচারসমূহ
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {pageData.features.map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/50 cursor-pointer group backdrop-blur-sm"
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="mx-auto max-w-6xl px-[15%]">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            আমাদের সম্মানিত ক্লায়েন্টরা
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pageData.clients.map((client, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEMO PROJECTS - FIXED LAYOUT */}
      <section className="py-20 mx-auto max-w-6xl px-[15%]">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          ডেমো প্রজেক্টসমূহ
        </motion.h2>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {pageData.portfolioImages.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl relative group bg-white"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              {/* Mobile: Square tiles (3 per row) */}
              <div className="block md:hidden aspect-square">
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-0 transition-all duration-300 flex items-end p-3">
                  <div className="text-white text-sm font-semibold">
                    প্রজেক্ট {i + 1}
                  </div>
                </div>
                <motion.div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <motion.button
                    className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold text-sm transform scale-90 group-hover:scale-100 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    দেখুন
                  </motion.button>
                </motion.div>
              </div>

              {/* Desktop: Rectangular website elements */}
              <div className="hidden md:block">
                <div className="relative">
                  <img
                    src={img}
                    alt={`Project ${i + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <motion.button
                      className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      প্রজেক্ট দেখুন
                    </motion.button>
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    প্রজেক্ট {i + 1}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    ইকমার্স ওয়েবসাইট {i + 1}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    আধুনিক ডিজাইন এবং ব্যবহারকারী বান্ধব ইন্টারফেস
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gradient-to-r from-sky-50/50 to-blue-50/50">
        <div className="mx-auto max-w-6xl px-[15%]">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            আমাদের কাজের প্রক্রিয়া
          </motion.h2>
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
                className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100/50 group"
                variants={slideIn}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-sky-600 bg-clip-text text-transparent mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full mt-4 group-hover:w-16 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 mx-auto max-w-6xl px-[15%]">
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            আপনার প্রজেক্ট শুরু করুন আজই!
          </h3>
          <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
            আমাদের বিশেষজ্ঞ টিম আপনার প্রজেক্ট নিয়ে আলোচনা করতে প্রস্তুত।
            বিনামূল্যে কন্সাল্টেশন পান।
          </p>
          <motion.button
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ফ্রী কন্সাল্টেশন বুক করুন
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default EcommerceSolution;
