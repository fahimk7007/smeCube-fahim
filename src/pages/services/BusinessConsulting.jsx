import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const BusinessConsulting = () => {
  const [activeTab, setActiveTab] = useState("strategy");

  const services = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "ব্যবসায়িক কৌশল",
      description:
        "আপনার ব্যবসার জন্য কাস্টমাইজড কৌশলগত পরিকল্পনা এবং রোডম্যাপ তৈরি করা হয় যা বাজারে প্রতিযোগিতা বাড়ায়।",
      features: ["বাজার বিশ্লেষণ", "প্রতিযোগিতা মূল্যায়ন", "কৌশলগত পরিকল্পনা"],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "বিক্রয় বৃদ্ধি",
      description:
        "ডেটা-চালিত বিক্রয় কৌশল তৈরি করে আপনার ব্যবসার আয় এবং গ্রাহক সংযোগ বৃদ্ধি করুন।",
      features: ["লিড জেনারেশন", "কাস্টমার রিটেনশন", "মার্কেট ট্রেন্ড অ্যানালাইসিস"],
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "ঝুঁকি ব্যবস্থাপনা",
      description:
        "ব্যবসায়িক ঝুঁকি চিহ্নিত করে এবং তা মোকাবিলার জন্য কার্যকরী কৌশল প্রদান করা হয়।",
      features: ["ঝুঁকি মূল্যায়ন", "সতর্কতা পরিকল্পনা", "বিমা কৌশল"],
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "অপারেশনাল দক্ষতা",
      description:
        "সময়ের অপচয় কমাতে এবং প্রোডাক্টিভিটি বাড়াতে অপারেশনাল স্ট্রাটেজি ডিজাইন করা হয়।",
      features: ["প্রসেস অটোমেশন", "রিসোর্স অপটিমাইজেশন", "টাইম ম্যানেজমেন্ট"],
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-800"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      {/* ---------------- Hero Section ---------------- */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ব্যবসায়িক পরামর্শ সেবা
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          আমাদের পেশাদার পরামর্শদাতা দল আপনাকে ব্যবসায়িক লক্ষ্য অর্জনে সহায়তা করবে।
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full flex items-center mx-auto"
        >
          যোগাযোগ করুন <ArrowRight className="ml-2 w-5 h-5" />
        </motion.button>
      </section>

      {/* ---------------- Services Section ---------------- */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          আমাদের সেবা সমূহ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ y: -8 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- Contact Section ---------------- */}
      <section className="bg-blue-50 py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          যোগাযোগের জন্য
        </h2>
        <p className="text-gray-600 mb-10">
          যেকোন ব্যবসায়িক সহায়তার জন্য আমাদের সঙ্গে যোগাযোগ করুন।
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-blue-600" />
            <span>+880 1234 567 890</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-600" />
            <span>info@smecube.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-blue-600" />
            <span>ঢাকা, বাংলাদেশ</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;
