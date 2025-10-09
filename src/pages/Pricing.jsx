import React, { useState } from 'react';
import { Check, Zap, Crown, Star, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "স্টার্টার",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      monthlyPrice: "৫,০০০",
      yearlyPrice: "৫০,০০০",
      description: "ছোট ব্যবসার জন্য আদর্শ",
      features: [
        "১টি ওয়েবসাইট/পেজ",
        "বেসিক ডিজাইন",
        "৫ GB হোস্টিং",
        "SSL সার্টিফিকেট",
        "মাসিক সাপোর্ট",
        "১টি ইমেইল একাউন্ট",
        "মোবাইল রেসপন্সিভ"
      ],
      popular: false
    },
    {
      name: "প্রফেশনাল",
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-purple-500 to-pink-600",
      monthlyPrice: "১০,০০০",
      yearlyPrice: "১,০০,০০০",
      description: "বাড়ন্ত ব্যবসার জন্য সেরা",
      features: [
        "৩টি ওয়েবসাইট/পেজ",
        "প্রিমিয়াম ডিজাইন",
        "২০ GB হোস্টিং",
        "SSL সার্টিফিকেট",
        "২৪/৭ সাপোর্ট",
        "৫টি ইমেইল একাউন্ট",
        "SEO অপটিমাইজেশন",
        "সোশ্যাল মিডিয়া ইন্টিগ্রেশন",
        "মাসিক রিপোর্ট"
      ],
      popular: true
    },
    {
      name: "এন্টারপ্রাইজ",
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-orange-500 to-red-600",
      monthlyPrice: "২০,০০০",
      yearlyPrice: "২,০০,০০০",
      description: "বড় প্রতিষ্ঠানের জন্য",
      features: [
        "আনলিমিটেড ওয়েবসাইট/পেজ",
        "কাস্টম ডিজাইন",
        "৫০ GB হোস্টিং",
        "SSL সার্টিফিকেট",
        "প্রাইয়োরিটি ২৪/৭ সাপোর্ট",
        "আনলিমিটেড ইমেইল",
        "অ্যাডভান্স SEO",
        "ই-কমার্স ফিচার",
        "ডেডিকেটেড ম্যানেজার",
        "সাপ্তাহিক রিপোর্ট",
        "ফ্রি মেইনটেনেন্স"
      ],
      popular: false
    }
  ];

  const addOnServices = [
    { name: "ফেসবুক বুস্টিং", price: "৩,০০০", unit: "/মাস" },
    { name: "গ্রাফিক ডিজাইন প্যাকেজ", price: "৫,০০০", unit: "/মাস" },
    { name: "বাল্ক এসএমএস", price: "০.২৫", unit: "/এসএমএস" },
    { name: "চাটবট সেটআপ", price: "৮,০০০", unit: "/একবার" },
    { name: "ডোমেইন রেজিস্ট্রেশন", price: "১,২০০", unit: "/বছর" },
    { name: "কন্টেন্ট রাইটিং", price: "৫০০", unit: "/পোস্ট" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex-1 text-center md:text-left w-full">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 flex justify-center md:justify-start">💰</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
                স্বচ্ছ প্রাইসিং প্ল্যান
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-100 px-4">
                আপনার ব্যবসার জন্য সঠিক প্যাকেজ নির্বাচন করুন। সকল প্ল্যানে স্বচ্ছ মূল্য, 
                কোন লুকানো খরচ নেই। মাসিক এবং বার্ষিক প্ল্যান উপলব্ধ।
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start px-4">
                <button className="bg-white text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transition text-center text-sm sm:text-base">
                  ফ্রি ট্রায়াল শুরু করুন →
                </button>
                <button className="border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition text-sm sm:text-base">
                  এক্সপার্ট পরামর্শ
                </button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">আমাদের মূল্য বৈশিষ্ট্য</h3>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base">কোন সেটআপ ফি নেই</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base">৭ দিনের মানি ব্যাক গ্যারান্টি</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base">যেকোনো সময় প্ল্যান আপগ্রেড</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base">২৪/৭ টেকনিক্যাল সাপোর্ট</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Billing Toggle */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg mb-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-base ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              মাসিক
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-base ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              বার্ষিক
              <span className="ml-1 sm:ml-2 text-xs bg-green-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-full">২০% ছাড়</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards - 2 cards per row on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 mb-10 sm:mb-16 md:mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl md:rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                plan.popular ? 'ring-2 md:ring-4 ring-red-500 md:scale-105' : ''
              } ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-2 md:-top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                    জনপ্রিয়
                  </div>
                </div>
              )}

              <div className="p-4 sm:p-6 md:p-8">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${plan.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg`}>
                  {plan.icon}
                </div>

                {/* Plan Name */}
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <div className="flex items-end gap-1 sm:gap-2">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      ৳{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold mb-1 sm:mb-2">
                      /{billingCycle === 'monthly' ? 'মাস' : 'বছর'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-xs sm:text-sm text-green-600 font-semibold mt-1 sm:mt-2">
                      মাসিক মূল্যে ২০% সাশ্রয়!
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2 h-2 sm:w-3 sm:h-3 text-green-600" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl font-bold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  শুরু করুন
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Services - 2 cards per row on mobile */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
              অতিরিক্ত সার্ভিস
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">আপনার প্যাকেজের সাথে যুক্ত করুন এই সার্ভিসগুলো</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{service.name}</h3>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-lg sm:text-xl md:text-3xl font-black text-gray-900">৳{service.price}</span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold mb-0.5 sm:mb-1">{service.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              প্ল্যান তুলনা
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base">ফিচার</th>
                  <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base">স্টার্টার</th>
                  <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base">প্রফেশনাল</th>
                  <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base">এন্টারপ্রাইজ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'ওয়েবসাইট সংখ্যা', starter: '১টি', pro: '৩টি', enterprise: 'আনলিমিটেড' },
                  { feature: 'হোস্টিং স্পেস', starter: '৫ GB', pro: '২০ GB', enterprise: '৫০ GB' },
                  { feature: 'ইমেইল একাউন্ট', starter: '১টি', pro: '৫টি', enterprise: 'আনলিমিটেড' },
                  { feature: 'সাপোর্ট', starter: 'মাসিক', pro: '২৪/৭', enterprise: 'প্রাইয়োরিটি ২৪/৭' },
                  { feature: 'SEO', starter: '✗', pro: '✓', enterprise: '✓ অ্যাডভান্স' },
                  { feature: 'ই-কমার্স', starter: '✗', pro: '✗', enterprise: '✓' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm md:text-base">{row.feature}</td>
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base">{row.starter}</td>
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base">{row.pro}</td>
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              সাধারণ প্রশ্ন
            </span>
          </h2>

          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: 'কি কি পেমেন্ট মেথড গ্রহণ করেন?',
                a: 'আমরা বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফার গ্রহণ করি।'
              },
              {
                q: 'রিফান্ড পলিসি কি?',
                a: 'প্রথম ৭ দিনের মধ্যে সম্পূর্ণ রিফান্ড পাবেন যদি সন্তুষ্ট না হন।'
              },
              {
                q: 'প্ল্যান আপগ্রেড করা যাবে?',
                a: 'হ্যাঁ, যেকোনো সময় আপনার প্ল্যান আপগ্রেড বা ডাউনগ্রেড করতে পারবেন।'
              },
              {
                q: 'সেটআপ ফি আছে কি?',
                a: 'না, কোন সেটআপ ফি নেই। শুধুমাত্র মাসিক বা বার্ষিক চার্জ প্রযোজ্য।'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-0">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{faq.q}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            এখনও নিশ্চিত নন?
          </h2>
          <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-8 text-white/90">
            আমাদের সাথে কথা বলুন এবং পান ফ্রি কনসালটেশন
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              কল করুন
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold border-2 border-white hover:bg-white hover:text-red-600 transition-all duration-300 text-xs sm:text-sm md:text-base">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 inline mr-1 sm:mr-2" />
              মেসেজ পাঠান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;