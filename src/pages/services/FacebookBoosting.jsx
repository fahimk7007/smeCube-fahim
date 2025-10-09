import React, { useState } from 'react';
import { SquareCheckBig } from 'lucide-react';

const FacebookBoosting = () => {
  const [formData, setFormData] = useState({
    budget: '',
    mobile: '',
    pageLink: '',
    postLink: '',
    minAge: '18',
    maxAge: '65',
    location: '',
    days: '1'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('অর্ডার সফলভাবে সাবমিট হয়েছে!');
  };

  const features = [
    {
      icon: '/icons/target.png',
      title: "টার্গেটেড অডিয়েন্স",
      description: "সঠিক কাস্টমারদের কাছে পৌঁছান",
    },
    {
      icon: '/icons/pie-chart.png',
      title: "এনালিটিক্স রিপোর্ট",
      description: "বিস্তারিত পারফরমেন্স ট্র্যাকিং",
    },
    {
      icon: '/icons/money-bag.png',
      title: "বাজেট অপটিমাইজেশন",
      description: "সর্বোচ্চ ROI নিশ্চিত করুন",
    },
    {
      icon: '/icons/lightning.png',
      title: "দ্রুত রেজাল্ট",
      description: "১-২ দিনে ফলাফল দেখুন",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <div className="text-center mb-6 md:mb-12">
            <div className="mb-3 md:mb-6 h-12 md:h-20 inline-block">
              <img className='h-full' src="/icons/rocket.png" alt="Rocket" />
            </div>
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6">
              Facebook Boosting
            </h1>
            <p className="text-lg md:text-2xl font-bold text-yellow-300 mb-2 md:mb-4">
              ডলার প্রতি ১৬৫ টাকা মাত্র
            </p>
            <p className="text-sm md:text-xl text-gray-100 px-4">
              আপনার ব্যবসাকে সঠিক মানুষের কাছে পৌঁছে দিন
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl">
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
              বুস্টিং অর্ডার ফর্ম
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs md:text-base">
                    বাজেট ($)
                  </label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="উদাহরণ: 10"
                    className="w-full px-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs md:text-base">
                    মোবাইল নাম্বার
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="০১৭xxxxxxxx"
                    className="w-full px-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-xs md:text-base">
                  পেইজ লিংক
                </label>
                <input
                  type="url"
                  name="pageLink"
                  value={formData.pageLink}
                  onChange={handleChange}
                  placeholder="https://facebook.com/yourpage"
                  className="w-full px-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-xs md:text-base">
                  পোস্ট লিংক
                </label>
                <input
                  type="url"
                  name="postLink"
                  value={formData.postLink}
                  onChange={handleChange}
                  placeholder="https://facebook.com/yourpage/posts/..."
                  className="w-full px-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs md:text-base">
                    মিনিমাম বয়স
                  </label>
                  <input
                    type="number"
                    name="minAge"
                    value={formData.minAge}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs md:text-base">
                    মেক্সিমাম বয়স
                  </label>
                  <input
                    type="number"
                    name="maxAge"
                    value={formData.maxAge}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-xs md:text-base">
                  লোকেশন
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="উদাহরণ: ঢাকা, বাংলাদেশ"
                  className="w-full px-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-xs md:text-base">
                  কত দিন
                </label>
                <select
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800 text-sm"
                >
                  <option value="1">১ দিন</option>
                  <option value="3">৩ দিন</option>
                  <option value="7">৭ দিন</option>
                  <option value="14">১৪ দিন</option>
                  <option value="30">৩০ দিন</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 shadow-lg text-sm md:text-lg"
              >
                অর্ডার করুন →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
              কেন আমাদের সেবা নিবেন?
            </h2>
            <p className="text-xs md:text-lg text-gray-600">যা আমাদের আলাদা করে</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <img className='mb-2 md:mb-4 h-8 w-8 md:h-14 md:w-14' src={feature.icon} alt="" />
                <h3 className="text-xs md:text-xl font-bold text-gray-800 mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-xs md:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-blue-200 shadow-lg">
            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
              কেন ফেসবুক বুস্টিং?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-lg md:text-2xl flex-shrink-0"><SquareCheckBig /></span>
                <span className="text-xs md:text-base text-gray-700">৩ কোটি+ বাংলাদেশি ইউজার</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-lg md:text-2xl flex-shrink-0"><SquareCheckBig /></span>
                <span className="text-xs md:text-base text-gray-700">সর্বোচ্চ এনগেজমেন্ট রেট</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-lg md:text-2xl flex-shrink-0"><SquareCheckBig /></span>
                <span className="text-xs md:text-base text-gray-700">কম খরচে বেশি রিচ</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-lg md:text-2xl flex-shrink-0"><SquareCheckBig /></span>
                <span className="text-xs md:text-base text-gray-700">মাপযোগ্য ফলাফল</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-3 md:px-4 text-center">
          <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-6">
            আজই শুরু করুন আপনার ফেসবুক বুস্টিং
          </h2>
          <p className="text-sm md:text-xl mb-6 md:mb-8 text-gray-100">
            সাশ্রয়ী মূল্যে পান সেরা বুস্টিং সেবা
          </p>
          <button className="bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition">
            এখনই শুরু করুন →
          </button>
        </div>
      </section>
    </div>
  );
};

export default FacebookBoosting;