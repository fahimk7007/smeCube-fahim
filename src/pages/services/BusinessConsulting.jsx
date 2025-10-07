import React from 'react';
import { Link } from "react-router";

const BusinessConsulting = () => {
  const services = [
    {
      icon: "📈",
      title: "ব্যবসা পরিকল্পনা",
      description: "কার্যকর ব্যবসা পরিকল্পনা এবং কৌশল উন্নয়ন"
    },
    {
      icon: "💼",
      title: "আর্থিক পরামর্শ",
      description: "বাজেট, বিনিয়োগ এবং আর্থিক ব্যবস্থাপনা"
    },
    {
      icon: "🎯",
      title: "মার্কেট এনালাইসিস",
      description: "বাজার গবেষণা এবং প্রতিযোগী বিশ্লেষণ"
    },
    {
      icon: "⚙️",
      title: "অপারেশন অপটিমাইজেশন",
      description: "ব্যবসায়িক প্রক্রিয়া উন্নতি এবং দক্ষতা বৃদ্ধি"
    },
    {
      icon: "👥",
      title: "মানবসম্পদ উন্নয়ন",
      description: "টিম বিল্ডিং এবং কর্মচারী ব্যবস্থাপনা"
    },
    {
      icon: "🚀",
      title: "বৃদ্ধির কৌশল",
      description: "ব্যবসা সম্প্রসারণ এবং স্কেলিং পরামর্শ"
    }
  ];

  const consultingAreas = [
    {
      category: "স্টার্টআপ কনসালটিং",
      services: ["ব্যবসা মডেল ডিজাইন", "ফান্ডিং স্ট্র্যাটেজি", "পিচ ডেক প্রস্তুতি"]
    },
    {
      category: "ক্ষুদ্র ব্যবসা",
      services: ["অপারেশন সেটআপ", "লাভজনকতা বৃদ্ধি", "খরচ কমানোর কৌশল"]
    },
    {
      category: "মাঝারি ব্যবসা",
      services: ["সম্প্রসারণ পরিকল্পনা", "প্রক্রিয়া অটোমেশন", "টিম স্কেলিং"]
    }
  ];

  const packages = [
    {
      name: "এক্সপ্রেস কনসালটেশন",
      price: "১৫,০০০",
      duration: "১ সেশন",
      features: [
        "২ ঘণ্টার কনসালটেশন",
        "ব্যবসা মূল্যায়ন",
        "সমস্যা চিহ্নিতকরণ",
        "প্রাথমিক সুপারিশ",
        "ফলো-আপ রিপোর্ট"
      ]
    },
    {
      name: "বিজনেস গ্রোথ প্যাকেজ",
      price: "৫০,০০০",
      duration: "১ মাস",
      popular: true,
      features: [
        "সাপ্তাহিক কনসালটেশন",
        "বিস্তারিত ব্যবসা এনালাইসিস",
        "কাস্টম গ্রোথ স্ট্র্যাটেজি",
        "মার্কেট রিসার্চ",
        "ইমপ্লিমেন্টেশন সাপোর্ট",
        "মাসিক রিপোর্ট"
      ]
    },
    {
      name: "কম্প্রিহেন্সিভ কনসালটিং",
      price: "১,৫০,০০০",
      duration: "৩ মাস",
      features: [
        "আনলিমিটেড কনসালটেশন",
        "সম্পূর্ণ ব্যবসা ট্রান্সফর্মেশন",
        "ডেডিকেটেড কনসালটেন্ট",
        "টিম ট্রেনিং",
        "প্রসেস ডকুমেন্টেশন",
        "কোয়ার্টারলি পারফরমেন্স রিভিউ"
      ]
    }
  ];

  const process = [
    {
      step: "১",
      title: "ডিসকভারি মিটিং",
      description: "আপনার ব্যবসা, লক্ষ্য এবং চ্যালেঞ্জ বুঝতে প্রাথমিক আলোচনা"
    },
    {
      step: "২",
      title: "এনালাইসিস ও রিসার্চ",
      description: "গভীর ব্যবসা বিশ্লেষণ এবং মার্কেট রিসার্চ"
    },
    {
      step: "৩",
      title: "স্ট্র্যাটেজি ডেভেলপমেন্ট",
      description: "কাস্টমাইজড ব্যবসায়িক সমাধান এবং কৌশল তৈরি"
    },
    {
      step: "৪",
      title: "ইমপ্লিমেন্টেশন",
      description: "পরিকল্পনা বাস্তবায়ন এবং চলমান সহায়তা"
    }
  ];

  const testimonials = [
    {
      name: "আব্দুল করিম",
      role: "রেস্টুরেন্ট চেইন মালিক",
      text: "SME CUBE এর পরামর্শে আমার ব্যবসা ৩ মাসে ৪০% বৃদ্ধি পেয়েছে। তাদের কৌশল সত্যিই কার্যকর।",
      image: "👨‍💼"
    },
    {
      name: "সাবিনা আক্তার",
      role: "টেক স্টার্টআপ ফাউন্ডার",
      text: "স্টার্টআপ শুরু করার জন্য তাদের গাইডেন্স অমূল্য ছিল। এখন আমরা সফলভাবে চলছি।",
      image: "👩‍💼"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="text-6xl mb-6">👥</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                প্রফেশনাল বিজনেস কনসালটিং সার্ভিস
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                আপনার ব্যবসাকে সফলতার পথে নিয়ে যান বিশেষজ্ঞ পরামর্শের মাধ্যমে। 
                স্ট্র্যাটেজি থেকে ইমপ্লিমেন্টেশন - সম্পূর্ণ সহায়তা।
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
                >
                  ফ্রি কনসালটেশন →
                </Link>
                <button className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition">
                  কেস স্টাডি দেখুন
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">আমরা কিভাবে সাহায্য করি</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <span>ব্যবসায়িক সমস্যা চিহ্নিতকরণ ও সমাধান</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <span>লাভজনকতা বৃদ্ধির কৌশল</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <span>টিম ও প্রসেস অপটিমাইজেশন</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <span>সম্প্রসারণ পরিকল্পনা ও বাস্তবায়ন</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের কনসালটিং সার্ভিস
            </h2>
            <p className="text-lg text-gray-600">সম্পূর্ণ ব্যবসায়িক সহায়তা</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              কনসালটিং এরিয়া
            </h2>
            <p className="text-lg text-gray-600">আপনার ব্যবসার ধরন অনুযায়ী বিশেষায়িত সেবা</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {consultingAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-300 transition"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{area.category}</h3>
                <ul className="space-y-3">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের কাজের প্রক্রিয়া
            </h2>
            <p className="text-lg text-gray-600">সফলতার ৪টি ধাপ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <span className="text-orange-500 text-3xl">→</span>
                  </div>
                )}
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
            <p className="text-lg text-gray-600">আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white transform scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-orange-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    সবচেয়ে জনপ্রিয়
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
                      ? 'bg-white text-orange-600 hover:bg-gray-100'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  শুরু করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ক্লায়েন্ট সাকসেস স্টোরি
            </h2>
            <p className="text-lg text-gray-600">আমাদের কনসালটিংয়ের ফলাফল</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg border-2 border-orange-200"
              >
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{testimonial.image}</div>
                  <div className="flex text-yellow-400 text-xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-orange-200 pt-4">
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই নিন বিশেষজ্ঞ পরামর্শ
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            ৩০ মিনিট ফ্রি কনসালটেশন সেশন বুক করুন
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition"
          >
            ফ্রি কনসালটেশন বুক করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;
