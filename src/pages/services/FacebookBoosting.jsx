import React from 'react';
import { Link } from "react-router";

const FacebookBoosting = () => {
  const features = [
    {
      icon: "🎯",
      title: "টার্গেটেড অডিয়েন্স",
      description: "সঠিক কাস্টমারদের কাছে পৌঁছান"
    },
    {
      icon: "📊",
      title: "এনালিটিক্স রিপোর্ট",
      description: "বিস্তারিত পারফরমেন্স ট্র্যাকিং"
    },
    {
      icon: "💰",
      title: "বাজেট অপটিমাইজেশন",
      description: "সর্বোচ্চ ROI নিশ্চিত করুন"
    },
    {
      icon: "⚡",
      title: "দ্রুত রেজাল্ট",
      description: "১-২ দিনে ফলাফল দেখুন"
    }
  ];

  const packages = [
    {
      name: "বেসিক",
      price: "৫,০০০",
      duration: "মাসিক",
      features: [
        "১০টি পোস্ট বুস্টিং",
        "বেসিক টার্গেটিং",
        "সাপ্তাহিক রিপোর্ট",
        "ইমেইল সাপোর্ট"
      ]
    },
    {
      name: "প্রিমিয়াম",
      price: "১০,০০০",
      duration: "মাসিক",
      popular: true,
      features: [
        "২৫টি পোস্ট বুস্টিং",
        "এডভান্স টার্গেটিং",
        "দৈনিক রিপোর্ট",
        "২৪/৭ সাপোর্ট",
        "কাস্টম ক্রিয়েটিভ"
      ]
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "২০,০০০",
      duration: "মাসিক",
      features: [
        "আনলিমিটেড বুস্টিং",
        "প্রিমিয়াম টার্গেটিং",
        "রিয়েল-টাইম রিপোর্ট",
        "ডেডিকেটেড ম্যানেজার",
        "A/B টেস্টিং",
        "ভিডিও এড সাপোর্ট"
      ]
    }
  ];

  const processSteps = [
    {
      step: "১",
      title: "কনসালটেশন",
      description: "আপনার ব্যবসা এবং লক্ষ্য নিয়ে আলোচনা"
    },
    {
      step: "২",
      title: "স্ট্র্যাটেজি প্ল্যান",
      description: "কাস্টম মার্কেটিং স্ট্র্যাটেজি তৈরি"
    },
    {
      step: "৩",
      title: "ক্যাম্পেইন লঞ্চ",
      description: "টার্গেটেড এড ক্যাম্পেইন শুরু"
    },
    {
      step: "৪",
      title: "মনিটরিং ও অপটিমাইজেশন",
      description: "পারফরমেন্স ট্র্যাক এবং উন্নতি"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="text-6xl mb-6">📘</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ফেসবুক মার্কেটিং ও বুস্টিং সেবা
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                আপনার ব্যবসাকে সঠিক মানুষের কাছে পৌঁছে দিন ফেসবুক মার্কেটিং এর মাধ্যমে। 
                বৃদ্ধি করুন ব্র্যান্ড অ্যাওয়ারনেস এবং বিক্রয়।
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
                >
                  শুরু করুন →
                </Link>
                <button className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition">
                  আরও জানুন
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">কেন ফেসবুক মার্কেটিং?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span>৩ কোটি+ বাংলাদেশি ইউজার</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span>সর্বোচ্চ এনগেজমেন্ট রেট</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span>কম খরচে বেশি রিচ</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span>মাপযোগ্য ফলাফল</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের সেবার বৈশিষ্ট্য
            </h2>
            <p className="text-lg text-gray-600">যা আমাদের আলাদা করে</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের কাজের প্রক্রিয়া
            </h2>
            <p className="text-lg text-gray-600">সফলতার পথে ৪টি ধাপ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <span className="text-blue-500 text-3xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-lg text-gray-600">আপনার বাজেট অনুযায়ী প্যাকেজ বেছে নিন</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white transform scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    জনপ্রিয়
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
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  এখনই শুরু করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই শুরু করুন আপনার ফেসবুক মার্কেটিং
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            ফ্রি কনসালটেশন এবং মার্কেট এনালাইসিস পান
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition"
          >
            ফ্রি কনসালটেশন বুক করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FacebookBoosting;
