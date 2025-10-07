import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Facebook, ShoppingCart, Code, TrendingUp, Layers,
  MessageCircle, Users, BarChart3, PenTool, FileText,
  Gift, Megaphone, ArrowRight, CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Facebook className="w-10 h-10" />,
      title: "ফেসবুক বুস্টিং",
      desc: "টার্গেটেড অডিয়েন্সে পৌঁছান এবং বিক্রয় বাড়ান",
      gradient: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      path: "/services/facebook-boosting",
      features: ["টার্গেটেড অ্যাড", "বাজেট অপটিমাইজেশন", "পারফরম্যান্স ট্র্যাকিং"]
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "ই-কমার্স সলিউশন",
      desc: "সম্পূর্ণ অনলাইন শপ সেটআপ এবং ম্যানেজমেন্ট",
      gradient: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-50",
      path: "/services/ecommerce-solution",
      features: ["পেমেন্ট গেটওয়ে", "ইনভেন্টরি ম্যানেজমেন্ট", "অর্ডার ট্র্যাকিং"]
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "ডেভেলপ ওয়েবসাইট",
      desc: "আধুনিক এবং রেসপন্সিভ ওয়েবসাইট ডেভেলপমেন্ট",
      gradient: "from-purple-500 to-indigo-600",
      iconBg: "bg-purple-50",
      path: "/services/web-development",
      features: ["কাস্টম ডিজাইন", "মোবাইল ফ্রেন্ডলি", "SEO অপটিমাইজড"]
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "ডিজাইন হোস্টিং",
      desc: "নিরাপদ এবং দ্রুত হোস্টিং সেবা",
      gradient: "from-orange-500 to-red-600",
      iconBg: "bg-orange-50",
      path: "/services/web-development",
      features: ["৯৯.৯% আপটাইম", "SSL সার্টিফিকেট", "ডেইলি ব্যাকআপ"]
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "ল্যান্ডিং পেজ",
      desc: "কনভার্শন অপটিমাইজড ল্যান্ডিং পেজ ডিজাইন",
      gradient: "from-pink-500 to-rose-600",
      iconBg: "bg-pink-50",
      path: "/services/landing-page",
      features: ["হাই কনভার্শন", "দ্রুত লোডিং", "A/B টেস্টিং"]
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "বাল্ক এসএমএস",
      desc: "বাল্ক এসএমএস মার্কেটিং সার্ভিস",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-50",
      path: "/services/bulk-sms",
      features: ["দ্রুত ডেলিভারি", "রিপোর্টিং", "সাশ্রয়ী দাম"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "বিজনেস কনসালটিং",
      desc: "ব্যবসায়িক পরামর্শ এবং কৌশল উন্নয়ন",
      gradient: "from-yellow-500 to-orange-600",
      iconBg: "bg-yellow-50",
      path: "/services/business-consulting",
      features: ["কৌশল পরিকল্পনা", "মার্কেট রিসার্চ", "গ্রোথ হ্যাকিং"]
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "ব্র্যান্ড পেজ সেটআপ",
      desc: "প্রফেশনাল বিজনেস পেজ সেটআপ",
      gradient: "from-cyan-500 to-blue-600",
      iconBg: "bg-cyan-50",
      path: "/services/brand-page-setup",
      features: ["পেজ ভেরিফিকেশন", "কন্টেন্ট স্ট্র্যাটেজি", "অডিয়েন্স বিল্ডিং"]
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "গ্রাফিক ডিজাইন",
      desc: "লোগো, ব্যানার এবং ব্র্যান্ডিং ডিজাইন",
      gradient: "from-violet-500 to-purple-600",
      iconBg: "bg-violet-50",
      path: "/services/graphic-design",
      features: ["লোগো ডিজাইন", "সোশ্যাল মিডিয়া গ্রাফিক্স", "ব্র্যান্ড আইডেন্টিটি"]
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "চাটবট সেটআপ",
      desc: "অটোমেটেড কাস্টমার সাপোর্ট সিস্টেম",
      gradient: "from-teal-500 to-cyan-600",
      iconBg: "bg-teal-50",
      path: "/services/chatbot-setup",
      features: ["২৪/৭ সাপোর্ট", "অটো রেসপন্স", "লিড জেনারেশন"]
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: "ইস্যু ফিক্সিং",
      desc: "ওয়েবসাইট সমস্যা সমাধান",
      gradient: "from-rose-500 to-pink-600",
      iconBg: "bg-rose-50",
      path: "/services/web-development",
      features: ["দ্রুত সমাধান", "বাগ ফিক্স", "পারফরম্যান্স উন্নতি"]
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "বিজনেস ট্রেনিং",
      desc: "ডিজিটাল মার্কেটিং প্রশিক্ষণ",
      gradient: "from-indigo-500 to-blue-600",
      iconBg: "bg-indigo-50",
      path: "/services/business-consulting",
      features: ["হাতে-কলমে শিক্ষা", "সার্টিফিকেট", "লাইফটাইম সাপোর্ট"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-32 pb-20 relative overflow-hidden">
      {/* Floating background gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-400/20 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              আমাদের সার্ভিস
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            আপনার ব্যবসার জন্য সম্পূর্ণ ডিজিটাল সলিউশন। মানসম্মত সেবা এবং দক্ষ টিমের সাথে আপনার স্বপ্ন বাস্তবায়ন করুন।
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-inner`}
                >
                  <div className={`bg-gradient-to-br ${service.gradient} text-transparent bg-clip-text`}>
                    {service.icon}
                  </div>
                </motion.div>
                <div className={`absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full animate-pulse`}></div>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                to={service.path}
                className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4`}
              >
                বিস্তারিত দেখুন
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 relative z-10">আপনার প্রজেক্ট শুরু করুন আজই</h2>
          <p className="text-xl mb-8 text-white/90 relative z-10">
            আমাদের সাথে যোগাযোগ করুন এবং পান বিনামূল্যে পরামর্শ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              যোগাযোগ করুন
            </Link>
            <Link
              to="/#pricing"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              প্রাইসিং দেখুন
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
