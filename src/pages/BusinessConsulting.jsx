import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Target, TrendingUp, Shield, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';

const BusinessConsulting = () => {
  const [activeTab, setActiveTab] = useState('strategy');

  const tabs = [
    {
      id: 'strategy',
      title: 'ব্যবসায়িক কৌশল',
      icon: <Target className="w-6 h-6" />,
      content: 'আমরা আপনার ব্যবসার জন্য কাস্টমাইজড কৌশল তৈরি করি যা আপনাকে প্রতিযোগিতায় এগিয়ে রাখবে। বাজার বিশ্লেষণ থেকে শুরু করে বৃদ্ধির পরিকল্পনা, আমরা সবকিছু কভার করি।',
    },
    {
      id: 'growth',
      title: 'বৃদ্ধি পরিকল্পনা',
      icon: <TrendingUp className="w-6 h-6" />,
      content: 'আপনার ব্যবসার সম্প্রসারণের জন্য আমরা কার্যকরী পরিকল্পনা তৈরি করি। নতুন বাজারে প্রবেশ থেকে শুরু করে রেভিনিউ বৃদ্ধি, আমরা আপনার পাশে আছি।',
    },
    {
      id: 'optimization',
      title: 'অপটিমাইজেশন',
      icon: <Shield className="w-6 h-6" />,
      content: 'আপনার ব্যবসায়িক প্রক্রিয়াগুলোকে আরও দক্ষ করতে আমরা প্রযুক্তি এবং কৌশল ব্যবহার করি, যাতে আপনি সময় এবং খরচ বাঁচাতে পারেন।',
    },
  ];

  const benefits = [
    { icon: <Clock className="w-6 h-6 text-red-500" />, text: 'দ্রুত ফলাফল' },
    { icon: <Award className="w-6 h-6 text-pink-500" />, text: 'বিশেষজ্ঞ পরামর্শ' },
    { icon: <TrendingUp className="w-6 h-6 text-purple-500" />, text: 'টেকসই বৃদ্ধি' },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 pt-24">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-2/3 text-white space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              আপনার ব্যবসাকে
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                নতুন উচ্চতায় নিয়ে যান
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              আমাদের বিশেষজ্ঞ পরামর্শ সেবার মাধ্যমে আপনার ব্যবসার সম্ভাবনাকে সর্বোচ্চ ব্যবহার করুন। কৌশল, বৃদ্ধি এবং অপটিমাইজেশনের মাধ্যমে সাফল্য অর্জন করুন।
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="#services"
                className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                আরও জানুন
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/3 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src="/image-2.png"
              alt="Business Consulting"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            আমাদের পরামর্শ সেবা
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } hover:scale-105`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </motion.button>
            ))}
          </div>
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 text-lg">{tabs.find((tab) => tab.id === activeTab).content}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            আমাদের সুবিধা
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {benefit.icon}
                <p className="mt-4 text-lg font-semibold text-gray-900">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            আপনার ব্যবসার সম্ভাবনা উন্মোচন করুন
          </motion.h2>
          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            আমাদের বিশেষজ্ঞ দলের সাথে আজই যোগাযোগ করুন এবং আপনার ব্যবসার জন্য কাস্টমাইজড সমাধান পান।
          </motion.p>
          <motion.a
            href="/login"
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            এখনই শুরু করুন
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            আমাদের সাথে যোগাযোগ করুন
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Phone className="w-6 h-6 text-red-500" />, title: 'ফোন', value: '+৮৮০ ১২৩৪ ৫৬৭৮৯০' },
              { icon: <Mail className="w-6 h-6 text-red-500" />, title: 'ইমেইল', value: 'support@smecube.com' },
              { icon: <MapPin className="w-6 h-6 text-red-500" />, title: 'ঠিকানা', value: 'ঢাকা, বাংলাদেশ' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;