import React, { useState } from "react";
import { Plus, Trash2, Save, DollarSign, Package, Star, Bot } from "lucide-react";

const AdminChatbotSetup = () => {
  const [packages, setPackages] = useState([
    {
      name: "স্টার্টার",
      price: "5000",
      duration: "মাস",
      popular: false,
      platform: "messenger",
      features: [
        "১টি প্ল্যাটফর্ম",
        "২০টি অটো রিপ্লাই",
        "বেসিক এনালিটিক্স",
        "১ মাস সাপোর্ট"
      ],
    },
    {
      name: "প্রফেশনাল",
      price: "15000",
      duration: "মাস",
      popular: true,
      platform: "multi",
      features: [
        "৩টি প্ল্যাটফর্ম",
        "আনলিমিটেড রিপ্লাই",
        "অ্যাডভান্স এনালিটিক্স",
        "AI ইন্টিগ্রেশন",
        "৩ মাস সাপোর্ট"
      ],
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "35000",
      duration: "মাস",
      popular: false,
      platform: "all",
      features: [
        "সব প্ল্যাটফর্ম",
        "কাস্টম AI ট্রেনিং",
        "রিয়েল-টাইম এনালিটিক্স",
        "লিড ম্যানেজমেন্ট",
        "৬ মাস প্রিমিয়াম সাপোর্ট"
      ],
    },
  ]);

  const [platforms, setPlatforms] = useState([
    { id: "messenger", name: "Facebook Messenger", icon: "📘", enabled: true },
    { id: "whatsapp", name: "WhatsApp Business", icon: "💚", enabled: true },
    { id: "website", name: "Website Chat", icon: "🌐", enabled: true },
    { id: "instagram", name: "Instagram", icon: "📸", enabled: true },
  ]);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handlePackageChange = (index, field, value) => {
    const updatedPackages = [...packages];
    updatedPackages[index][field] = value;
    setPackages(updatedPackages);
  };

  const handleFeatureChange = (packageIndex, featureIndex, value) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].features[featureIndex] = value;
    setPackages(updatedPackages);
  };

  const addFeature = (packageIndex) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].features.push("");
    setPackages(updatedPackages);
  };

  const removeFeature = (packageIndex, featureIndex) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].features.splice(featureIndex, 1);
    setPackages(updatedPackages);
  };

  const addPackage = () => {
    setPackages([
      ...packages,
      {
        name: "",
        price: "",
        duration: "মাস",
        popular: false,
        platform: "messenger",
        features: [""],
      },
    ]);
  };

  const removePackage = (index) => {
    const updatedPackages = packages.filter((_, i) => i !== index);
    setPackages(updatedPackages);
  };

  const togglePlatform = (platformId) => {
    const updatedPlatforms = platforms.map((p) =>
      p.id === platformId ? { ...p, enabled: !p.enabled } : p
    );
    setPlatforms(updatedPlatforms);
  };

  const handleSubmit = async () => {
    try {
      // Replace with your actual axios call
      // const response = await axios.post('/api/chatbot-packages', { packages, platforms });
      console.log("Submitting chatbot packages:", packages);
      console.log("Platforms:", platforms);
      
      setNotification({
        show: true,
        message: "চ্যাটবট প্যাকেজ সফলভাবে আপডেট হয়েছে!",
        type: "success",
      });
      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    } catch {
      setNotification({
        show: true,
        message: "আপডেট করতে সমস্যা হয়েছে!",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          } animate-slide-in`}
        >
          {notification.message}
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                চ্যাটবট সেটআপ ম্যানেজমেন্ট
              </h1>
              <p className="text-gray-600 mt-1">
                চ্যাটবট সার্ভিস প্যাকেজ এবং প্ল্যাটফর্ম পরিচালনা করুন
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Platform Management */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            সাপোর্টেড প্ল্যাটফর্ম
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  platform.enabled
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-gray-50"
                }`}
                onClick={() => togglePlatform(platform.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="font-semibold text-gray-800">
                      {platform.name}
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={platform.enabled}
                    onChange={() => togglePlatform(platform.id)}
                    className="w-5 h-5"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  প্যাকেজ {index + 1}
                </h2>
              </div>
              {packages.length > 1 && (
                <button
                  onClick={() => removePackage(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Package Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  প্যাকেজের নাম
                </label>
                <input
                  type="text"
                  value={pkg.name}
                  onChange={(e) =>
                    handlePackageChange(index, "name", e.target.value)
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="স্টার্টার"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  মূল্য (৳)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={pkg.price}
                    onChange={(e) =>
                      handlePackageChange(index, "price", e.target.value)
                    }
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="5000"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  সময়কাল
                </label>
                <select
                  value={pkg.duration}
                  onChange={(e) =>
                    handlePackageChange(index, "duration", e.target.value)
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                >
                  <option value="মাস">মাস</option>
                  <option value="বছর">বছর</option>
                  <option value="একবার">একবার</option>
                </select>
              </div>

              {/* Platform */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  প্ল্যাটফর্ম
                </label>
                <select
                  value={pkg.platform}
                  onChange={(e) =>
                    handlePackageChange(index, "platform", e.target.value)
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                >
                  <option value="messenger">Messenger</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="website">Website</option>
                  <option value="multi">Multi-Platform</option>
                  <option value="all">All Platforms</option>
                </select>
              </div>
            </div>

            {/* Popular Badge */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={pkg.popular}
                  onChange={(e) =>
                    handlePackageChange(index, "popular", e.target.checked)
                  }
                  className="w-5 h-5"
                />
                <Star
                  className={`w-5 h-5 ${
                    pkg.popular ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
                  }`}
                />
                <span className="text-sm font-semibold text-gray-700">
                  জনপ্রিয় প্যাকেজ হিসেবে চিহ্নিত করুন
                </span>
              </label>
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                ফিচার সমূহ
              </label>
              <div className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(index, featureIndex, e.target.value)
                      }
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                      placeholder="ফিচার লিখুন"
                    />
                    <button
                      onClick={() => removeFeature(index, featureIndex)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addFeature(index)}
                  className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-blue-600 hover:border-blue-500 hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  নতুন ফিচার যোগ করুন
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Package Button */}
        <button
          onClick={addPackage}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
        >
          <Plus className="w-6 h-6" />
          নতুন প্যাকেজ যোগ করুন
        </button>

        {/* Save Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
        >
          <Save className="w-6 h-6" />
          সব পরিবর্তন সেভ করুন
        </button>
      </div>
    </div>
  );
};

export default AdminChatbotSetup;
