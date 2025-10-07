import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Zap, Users, Eye, Share2, BarChart3, Phone, Mail, MapPin, Sparkles, TrendingUp } from 'lucide-react';

const BrandPageSetup = () => {
  const [selectedPackage, setSelectedPackage] = useState(1);

  const packages = [
    {
      id: 1,
      name: 'বেসিক',
      price: '৳১০,০০০',
      features: [
        'কাস্টম ডিজাইনের ফেসবুক পেজ',
        'প্রফেশনাল লোগো ডিজাইন',
        '৫টি প্রোডাক্ট পোস্ট',
        '১ মাসের সাপোর্ট',
      ],
      icon: <Star className="w-8 h-8 text-yellow-400" />,
    },
    {
      id: 2,
      name: 'প্রো',
      price: '৳২৫,০০০',
      features: [
        'কাস্টম ফেসবুক ও ইনস্টাগ্রাম পেজ',
        'প্রফেশনাল লোগো ও কভার ডিজাইন',
        '১০টি প্রোডাক্ট পোস্ট',
        '২ মাসের সাপোর্ট',
        'বেসিক এসইও অপটিমাইজেশন',
      ],
      icon: <Zap className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 3,
      name: 'প্রিমিয়াম',
      price: '৳৫০,০০০',
      features: [
        'ফেসবুক, ইনস্টাগ্রাম ও টুইটার পেজ',
        'কমপ্লিট ব্র্যান্ডিং কিট',
        '২০টি প্রোডাক্ট পোস্ট',
        '৩ মাসের সাপোর্ট',
        'অ্যাডভান্সড এসইও ও অ্যানালিটিক্স',
      ],
      icon: <Users className="w-8 h-8 text-green-500" />,
    },
  ];

  const benefits = [
    { icon: <Eye className="w-6 h-6 text-red-500" />, text: 'দৃষ্টিনন্দন ডিজাইন' },
    { icon: <Share2 className="w-6 h-6 text-pink-500" />, text: 'সোশ্যাল মিডিয়া রিচ' },
    { icon: <BarChart3 className="w-6 h-6 text-purple-500" />, text: 'ব্র্যান্ড গ্রোথ' },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-800 via-pink-700 to-purple-800 pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
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
              আপনার ব্র্যান্ডকে
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                অনলাইনে জনপ্রিয় করুন
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              আমাদের কাস্টম ব্র্যান্ড পেজ সেটআপ সার্ভিসের মাধ্যমে আপনার ব্যবসাকে সোশ্যাল মিডিয়ায় শক্তিশালী উপস্থিতি দিন। পেশাদার ডিজাইন এবং স্ট্র্যাটেজির মাধ্যমে গ্রাহকদের আকর্ষণ করুন।
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="#pricing"
                className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                শুরু করুন
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
              src="/image-1.png"
              alt="Brand Setup"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            আমাদের সার্ভিসের সুবিধা
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            আমাদের প্যাকেজ
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className={`p-6 bg-white rounded-2xl shadow-lg border-2 ${
                  selectedPackage === pkg.id ? 'border-red-500' : 'border-gray-200'
                } hover:shadow-xl hover:scale-105 transition-all duration-300`}
                onClick={() => setSelectedPackage(pkg.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  {pkg.icon}
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                </div>
                <p className="mt-4 text-2xl font-semibold text-gray-900">{pkg.price}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  নির্বাচন করুন
                </button>
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
            আপনার ব্র্যান্ডকে নতুন উচ্চতায় নিয়ে যান
          </motion.h2>
          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            আমাদের বিশেষজ্ঞ দলের সাথে আজই শুরু করুন এবং আপনার ব্যবসার জন্য একটি শক্তিশালী অনলাইন উপস্থিতি তৈরি করুন।
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

export default BrandPageSetup;