import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Target, Shield, Award, BarChart3, Briefcase } from 'lucide-react';

const BusinessConsulting = () => {
  const [activeTab, setActiveTab] = useState('strategy');

  // সেবাসমূহ
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'ব্যবসায়িক কৌশল',
      description: 'আপনার ব্যবসার জন্য কাস্টমাইজড কৌশলগত পরিকল্পনা এবং রোডম্যাপ তৈরি',
      features: ['বাজার বিশ্লেষণ', 'প্রতিযোগিতা মূল্যায়ন', 'কৌশলগত পরিকল্পনা'],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'বাজার উন্নয়ন',
      description: 'আপনার পণ্য ও সেবার জন্য নতুন বাজার ও গ্রাহক খুঁজে বের করুন',
      features: ['বাজার গবেষণা', 'গ্রাহক প্রোফাইলিং', 'বিক্রয় কৌশল'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ঝুঁকি ব্যবস্থাপনা',
      description: 'ব্যবসায়িক ঝুঁকি চিহ্নিতকরণ এবং ব্যবস্থাপনা কৌশল',
      features: ['ঝুঁকি মূল্যায়ন', 'সতর্কতা পরিকল্পনা', 'বিমা কৌশল'],
    },
  ];

  const stats = [
    { number: '150+', label: 'সন্তুষ্ট ক্লায়েন্ট' },
    { number: '15+', label: 'বছরের অভিজ্ঞতা' },
  ];

  const steps = [
    {
      number: '০১',
      title: 'পরামর্শ সেশন',
      description: 'বিনামূল্যে প্রাথমিক পরামর্শ এবং প্রয়োজনীয়তা বিশ্লেষণ',
      icon: <Briefcase className="w-8 h-8 text-rose-600" />,
    },
    {
      number: '০২',
      title: 'কৌশল উন্নয়ন',
      description: 'আপনার ব্যবসার জন্য কাস্টমাইজড কৌশল ও পরিকল্পনা তৈরি',
      icon: <Target className="w-8 h-8 text-rose-600" />,
    },
    {
      number: '০৩',
      title: 'বাস্তবায়ন',
      description: 'পরিকল্পনা বাস্তবায়ন এবং নিয়মিত মনিটরিং',
      icon: <CheckCircle className="w-8 h-8 text-rose-600" />,
    },
    {
      number: '০৪',
      title: 'ফলাফল মূল্যায়ন',
      description: 'কর্মক্ষমতা ট্র্যাকিং এবং প্রয়োজনীয় সমন্বয়',
      icon: <Award className="w-8 h-8 text-rose-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ================= Hero Section ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 pt-20 py-10 mt-8">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-rose-500/20 text-rose-300 rounded-full text-sm font-semibold border border-rose-400/30"
              >
                বিশেষজ্ঞ ব্যবসায়িক পরামর্শ
              </motion.span>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                ব্যবসায়িক পরামর্শ{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mt-2">
                  সেবা
                </span>
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যান আমাদের বিশেষজ্ঞ পরামর্শদাতাদের সাথে
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-red-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 shadow-2xl transition-all"
                >
                  বিনামূল্যে পরামর্শ বুক করুন
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  আরও জানুন
                </motion.button>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image-1.png"
                  alt="Business Consulting"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML =
                      '<div class="w-full h-96 bg-gradient-to-br from-red-500/20 to-rose-500/20 flex items-center justify-center rounded-2xl"><div class="text-white text-center"><div class="text-6xl mb-4">📊</div><div class="text-xl">Business Growth</div></div></div>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-rose-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">15+</div>
                    <div className="text-gray-600 text-sm">বছরের অভিজ্ঞতা</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Services Section ================= */}
      <section className="py-24 bg-white relative">
        <div className="px-[15%] relative z-10 text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-rose-100 text-rose-500 rounded-full text-sm font-semibold mb-4"
          >
            আমাদের সেবাসমূহ
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            আমাদের পরামর্শ সেবাসমূহ
          </h2>
          <p className="text-lg text-gray-600">
            আমরা আপনার ব্যবসার সকল দিক কভার করি সম্পূর্ণ পরামর্শ সেবা দিয়ে
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[10%]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="text-red-600 mb-6 bg-gradient-to-br from-red-100 to-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= Work Process Section ================= */}
      <section className="py-24 bg-gradient-to-br from-rose-50 to-white text-center">
        <motion.span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">
          কাজের প্রক্রিয়া
        </motion.span>
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">আমাদের কাজের প্রক্রিয়া</h2>
        <p className="text-lg text-gray-600 mb-16">সহজ এবং কার্যকরী ধাপে আপনার ব্যবসার উন্নয়ন</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-[10%]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:-translate-y-2 transition-all"
            >
              <div className="text-4xl font-bold text-rose-600 mb-4">{step.number}</div>
              <div className="flex items-center justify-center mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-rose-500 text-white text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">আপনার ব্যবসার রূপান্তর শুরু করুন</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          আজই আমাদের বিশেষজ্ঞ দলের সাথে কথা বলুন এবং দেখুন কিভাবে আমরা আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যেতে পারি
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-rose-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-rose-100 transition-all"
        >
          বিনামূল্যে পরামর্শ নিন
        </motion.button>
      </section>
    </div>
  );
};

export default BusinessConsulting;
