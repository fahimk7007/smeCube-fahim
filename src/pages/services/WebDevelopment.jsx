import React from 'react';
import { Link } from "react-router";

const WebDevelopment = () => {
  const services = [
    {
      icon: "🎨",
      title: "কাস্টম ওয়েব ডিজাইন",
      description: "আপনার ব্র্যান্ডের জন্য ইউনিক ডিজাইন"
    },
    {
      icon: "⚡",
      title: "দ্রুত লোডিং",
      description: "হাই পারফরমেন্স অপটিমাইজেশন"
    },
    {
      icon: "📱",
      title: "রেসপন্সিভ ডিজাইন",
      description: "সব ডিভাইসে পারফেক্ট"
    },
    {
      icon: "🔍",
      title: "SEO অপটিমাইজড",
      description: "গুগলে ভালো র‍্যাংকিং"
    },
    {
      icon: "🔐",
      title: "সিকিউরিটি",
      description: "SSL ও সিকিউরিটি ফিচার"
    },
    {
      icon: "🔄",
      title: "সহজ আপডেট",
      description: "CMS ইন্টিগ্রেশন"
    }
  ];

  const technologies = [
    { name: "React.js", icon: "⚛️", color: "bg-blue-50" },
    { name: "Node.js", icon: "🟢", color: "bg-green-50" },
    { name: "WordPress", icon: "📝", color: "bg-purple-50" },
    { name: "HTML5/CSS3", icon: "🎨", color: "bg-orange-50" },
    { name: "PHP", icon: "🐘", color: "bg-indigo-50" },
    { name: "MongoDB", icon: "🍃", color: "bg-teal-50" }
  ];

  const packages = [
    {
      name: "ল্যান্ডিং পেজ",
      price: "১৫,০০০",
      duration: "একবার",
      features: [
        "১ পেজ ডিজাইন",
        "রেসপন্সিভ লেআউট",
        "কন্টাক্ট ফর্ম",
        "বেসিক SEO",
        "২ মাস সাপোর্ট"
      ]
    },
    {
      name: "বিজনেস ওয়েবসাইট",
      price: "৩৫,০০০",
      duration: "একবার",
      popular: true,
      features: [
        "৫-৭ পেজ ডিজাইন",
        "কাস্টম ডিজাইন",
        "CMS ইন্টিগ্রেশন",
        "এডভান্স SEO",
        "ব্লগ সেকশন",
        "৬ মাস সাপোর্ট"
      ]
    },
    {
      name: "কর্পোরেট ওয়েবসাইট",
      price: "৭৫,০০০+",
      duration: "কাস্টম",
      features: [
        "আনলিমিটেড পেজ",
        "প্রিমিয়াম ডিজাইন",
        "কাস্টম ফিচার",
        "মাল্টি-ল্যাঙ্গুয়েজ",
        "API ইন্টিগ্রেশন",
        "১ বছর সাপোর্ট"
      ]
    }
  ];

  const portfolio = [
    {
      name: "রেস্টুরেন্ট ওয়েবসাইট",
      category: "খাদ্য ও পানীয়",
      image: "🍽️"
    },
    {
      name: "শিক্ষা প্রতিষ্ঠান",
      category: "শিক্ষা",
      image: "🎓"
    },
    {
      name: "রিয়েল এস্টেট",
      category: "সম্পত্তি",
      image: "🏢"
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-6">💻</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              প্রফেশনাল ওয়েব ডেভেলপমেন্ট সার্ভিস
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              আপনার ব্যবসার জন্য আধুনিক, দ্রুত এবং SEO ফ্রেন্ডলি ওয়েবসাইট তৈরি করি। 
              রেসপন্সিভ ডিজাইন এবং ইউজার ফ্রেন্ডলি ইন্টারফেস সহ।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
              >
                প্রজেক্ট শুরু করুন →
              </Link>
              <a
                href="#portfolio"
                className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition"
              >
                পোর্টফোলিও দেখুন
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের ওয়েব ডেভেলপমেন্ট সেবা
            </h2>
            <p className="text-lg text-gray-600">আপনার প্রয়োজন অনুযায়ী কাস্টমাইজড সলিউশন</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমরা যে টেকনোলজি ব্যবহার করি
            </h2>
            <p className="text-lg text-gray-600">আধুনিক এবং শক্তিশালী টেকনোলজি স্ট্যাক</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} p-6 rounded-xl shadow-md hover:shadow-lg transition text-center`}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-semibold text-gray-800">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের সাম্প্রতিক কাজ
            </h2>
            <p className="text-lg text-gray-600">বিভিন্ন শিল্পে আমাদের সফলতার গল্প</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{project.name}</h3>
                  <button className="text-purple-600 font-semibold hover:text-purple-700">
                    বিস্তারিত দেখুন →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-lg text-gray-600">সাশ্রয়ী মূল্যে পেশাদার ওয়েবসাইট</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white transform scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    প্রস্তাবিত
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                  <span className={pkg.popular ? 'text-gray-200' : 'text-gray-600'}>/{pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={pkg.popular ? 'text-yellow-300' : 'text-green-500'}>✓</span>
                      <span className={pkg.popular ? 'text-gray-100' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-bold transition ${
                    pkg.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  অর্ডার করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই পান আপনার ড্রিম ওয়েবসাইট
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            ফ্রি কনসালটেশন এবং প্রজেক্ট প্ল্যানিং
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition"
          >
            ফ্রি কনসালটেশন বুক করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
