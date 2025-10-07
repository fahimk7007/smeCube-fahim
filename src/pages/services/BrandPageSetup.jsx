import React from 'react';
import { Link } from "react-router";

const BrandPageSetup = () => {
  const features = [
    {
      icon: "🎨",
      title: "প্রফেশনাল ডিজাইন",
      description: "আকর্ষণীয় প্রোফাইল ও কভার ফটো ডিজাইন"
    },
    {
      icon: "📝",
      title: "কন্টেন্ট রাইটিং",
      description: "এনগেজিং About সেকশন এবং বিবরণ লেখা"
    },
    {
      icon: "⚙️",
      title: "পেজ অপটিমাইজেশন",
      description: "SEO এবং রিচ বৃদ্ধির জন্য অপটিমাইজেশন"
    },
    {
      icon: "🔧",
      title: "সেটিংস কনফিগার",
      description: "সম্পূর্ণ সেটিংস এবং প্রাইভেসি সেটআপ"
    },
    {
      icon: "🤖",
      title: "চ্যাটবট সেটআপ",
      description: "অটো রিপ্লাই এবং মেসেঞ্জার অটোমেশন"
    },
    {
      icon: "📊",
      title: "এনালিটিক্স সেটআপ",
      description: "পেজ ইনসাইট এবং ট্র্যাকিং কনফিগারেশন"
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      icon: "📘",
      services: ["বিজনেস পেজ সেটআপ", "ভেরিফিকেশন", "শপ সেটআপ", "CTA বাটন"]
    },
    {
      name: "Instagram",
      icon: "📸",
      services: ["বিজনেস প্রোফাইল", "হাইলাইটস সেটআপ", "লিংক ইন বায়ো", "শপিং ট্যাগ"]
    },
    {
      name: "LinkedIn",
      icon: "💼",
      services: ["কোম্পানি পেজ", "প্রোডাক্ট শোকেস", "জব পোস্টিং", "এনালিটিক্স"]
    }
  ];

  const packages = [
    {
      name: "বেসিক সেটআপ",
      price: "৩,০০০",
      duration: "১ পেজ",
      features: [
        "১টি প্ল্যাটফর্ম সেটআপ",
        "প্রোফাইল ও কভার ইমেজ",
        "বেসিক About সেকশন",
        "কন্টাক্ট ইনফরমেশন",
        "প্রাইভেসি সেটিংস"
      ]
    },
    {
      name: "প্রফেশনাল সেটআপ",
      price: "৮,০০০",
      duration: "১ পেজ",
      popular: true,
      features: [
        "১টি প্ল্যাটফর্ম সেটআপ",
        "কাস্টম গ্রাফিক ডিজাইন",
        "এনগেজিং কন্টেন্ট রাইটিং",
        "চ্যাটবট সেটআপ",
        "CTA বাটন কনফিগার",
        "এনালিটিক্স সেটআপ",
        "১ সপ্তাহ সাপোর্ট"
      ]
    },
    {
      name: "মাল্টি-প্ল্যাটফর্ম",
      price: "২০,০০০",
      duration: "৩ পেজ",
      features: [
        "৩টি প্ল্যাটফর্ম সেটআপ",
        "প্রিমিয়াম ডিজাইন",
        "ব্র্যান্ডিং কনসিসটেন্সি",
        "ক্রস-পোস্টিং সেটআপ",
        "এডভান্স চ্যাটবট",
        "কন্টেন্ট ক্যালেন্ডার",
        "১ মাস সাপোর্ট"
      ]
    }
  ];

  const setupSteps = [
    {
      step: "১",
      title: "প্রয়োজনীয়তা সংগ্রহ",
      description: "আপনার ব্যবসা সম্পর্কে তথ্য এবং লোগো সংগ্রহ"
    },
    {
      step: "২",
      title: "পেজ তৈরি",
      description: "সম্পূর্ণ পেজ সেটআপ এবং কনফিগারেশন"
    },
    {
      step: "৩",
      title: "ডিজাইন ও কন্টেন্ট",
      description: "গ্রাফিক্স ডিজাইন এবং কন্টেন্ট যুক্ত করা"
    },
    {
      step: "৪",
      title: "অপটিমাইজেশন ও লঞ্চ",
      description: "ফাইনাল চেক এবং পেজ লাইভ করা"
    }
  ];

  const checklist = [
    "পেজ নাম এবং ইউজারনেম ভেরিফিকেশন",
    "প্রোফাইল ও কভার ফটো (১০৮০x১০৮০ এবং ১৬৪০x৮৫৬)",
    "About সেকশন (১৫৫ ক্যারেক্টার সর্ট এবং লং ডেসক্রিপশন)",
    "কন্টাক্ট ইনফরমেশন (ফোন, ইমেইল, ওয়েবসাইট)",
    "ব্যবসার ঠিকানা এবং ম্যাপ লোকেশন",
    "ব্যবসার ধরন এবং ক্যাটাগরি",
    "পেজ CTA বাটন (Learn More, Shop Now, Contact Us)",
    "মেসেঞ্জার অটো রিপ্লাই",
    "পেজ রোল এবং পারমিশন",
    "ইনসাইট এবং এনালিটিক্স এনেবল"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Container */}
      <section className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <div className="text-6xl mb-6">📝</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              প্রফেশনাল ব্র্যান্ড পেজ সেটআপ সার্ভিস
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Facebook, Instagram এবং LinkedIn-এ আপনার ব্যবসার জন্য সম্পূর্ণ অপটিমাইজড 
              এবং প্রফেশনাল ব্র্যান্ড পেজ তৈরি করি।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
              >
                পেজ সেটআপ শুরু করুন →
              </Link>
              <button className="border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition">
                পোর্টফোলিও দেখুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Container and Margins */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের সেটআপ সার্ভিস
            </h2>
            <p className="text-base md:text-lg text-gray-600">সম্পূর্ণ পেজ সেটআপ সলিউশন</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section with Container */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              আমরা যে প্ল্যাটফর্মে কাজ করি
            </h2>
            <p className="text-base md:text-lg text-gray-600">সব মেজর সোশ্যাল মিডিয়া প্ল্যাটফর্ম</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border-2 border-gray-100"
              >
                <div className="text-5xl mb-4 text-center">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{platform.name}</h3>
                <ul className="space-y-3">
                  {platform.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process with Container */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              সেটআপ প্রক্রিয়া
            </h2>
            <p className="text-base md:text-lg text-gray-600">৪টি সহজ ধাপে সম্পূর্ণ সেটআপ</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {setupSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center text-sm md:text-base">{item.description}</p>
                </div>
                {index < setupSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <span className="text-blue-500 text-3xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section with Container */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              সেটআপ চেকলিস্ট
            </h2>
            <p className="text-base md:text-lg text-gray-600">আমরা যা যা করি</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-blue-100">
            <div className="grid sm:grid-cols-2 gap-4">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition"
                >
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with Container */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-base md:text-lg text-gray-600">আপনার প্রয়োজন অনুযায়ী প্যাকেজ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white transform md:scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    প্রস্তাবিত
                  </div>
                )}
                <h3 className={`text-xl md:text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold">৳{pkg.price}</span>
                  <span className={`text-sm ${pkg.popular ? 'text-gray-200' : 'text-gray-600'}`}>/{pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={pkg.popular ? 'text-yellow-300' : 'text-green-500'}>✓</span>
                      <span className={`text-sm md:text-base ${pkg.popular ? 'text-gray-100' : 'text-gray-700'}`}>{feature}</span>
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
                  অর্ডার করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Container */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            আজই তৈরি করুন আপনার প্রফেশনাল ব্র্যান্ড পেজ
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            ২৪ ঘণ্টায় সম্পূর্ণ সেটআপ এবং ডেলিভারি
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition shadow-lg"
          >
            এখনই অর্ডার করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandPageSetup;
