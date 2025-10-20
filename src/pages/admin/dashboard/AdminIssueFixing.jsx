import React, { useState } from "react";
import { Plus, Trash2, Save, DollarSign, Package, Star, Wrench } from "lucide-react";

const AdminIssueFixing = () => {
  const [packages, setPackages] = useState([
    {
      name: "দ্রুত সমাধান",
      price: "1500",
      duration: "সমস্যা প্রতি",
      popular: false,
      responseTime: "২৪ ঘণ্টা",
      features: [
        "ছোট বাগ ফিক্স",
        "UI/UX সমস্যা সমাধান",
        "স্পীড অপটিমাইজেশন",
        "১ মাস ওয়ারেন্টি"
      ],
    },
    {
      name: "স্ট্যান্ডার্ড সলিউশন",
      price: "5000",
      duration: "প্রজেক্ট",
      popular: true,
      responseTime: "১২ ঘণ্টা",
      features: [
        "কমপ্লেক্স বাগ ফিক্স",
        "ডাটাবেস অপটিমাইজেশন",
        "সিকিউরিটি ইস্যু সমাধান",
        "API ইন্টিগ্রেশন ফিক্স",
        "৩ মাস সাপোর্ট"
      ],
    },
    {
      name: "এন্টারপ্রাইজ সাপোর্ট",
      price: "15000",
      duration: "মাস",
      popular: false,
      responseTime: "তাৎক্ষণিক",
      features: [
        "সম্পূর্ণ সিস্টেম অডিট",
        "পারফরম্যান্স টিউনিং",
        "সিকিউরিটি পেনিট্রেশন টেস্ট",
        "২৪/৭ প্রায়োরিটি সাপোর্ট",
        "কোড রিভিউ ও ডকুমেন্টেশন",
        "৬ মাস সাপোর্ট"
      ],
    },
  ]);

  const [issueTypes, setIssueTypes] = useState([
    { id: "bug", name: "বাগ ফিক্স", icon: "🐛", enabled: true },
    { id: "performance", name: "পারফরম্যান্স", icon: "⚡", enabled: true },
    { id: "security", name: "সিকিউরিটি", icon: "🔒", enabled: true },
    { id: "ui", name: "UI/UX", icon: "🎨", enabled: true },
    { id: "database", name: "ডাটাবেস", icon: "💾", enabled: true },
    { id: "api", name: "API", icon: "🔌", enabled: true },
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
        duration: "সমস্যা প্রতি",
        popular: false,
        responseTime: "২৪ ঘণ্টা",
        features: [""],
      },
    ]);
  };

  const removePackage = (index) => {
    const updatedPackages = packages.filter((_, i) => i !== index);
    setPackages(updatedPackages);
  };

  const toggleIssueType = (typeId) => {
    const updatedTypes = issueTypes.map((t) =>
      t.id === typeId ? { ...t, enabled: !t.enabled } : t
    );
    setIssueTypes(updatedTypes);
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting issue fixing packages:", packages);
      console.log("Issue types:", issueTypes);
      
      setNotification({
        show: true,
        message: "ইস্যু ফিক্সিং প্যাকেজ সফলভাবে আপডেট হয়েছে!",
        type: "success",
      });
      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    } catch  {
      setNotification({
        show: true,
        message: "আপডেট করতে সমস্যা হয়েছে!",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-4 md:p-8">
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
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ইস্যু ফিক্সিং ম্যানেজমেন্ট
              </h1>
              <p className="text-gray-600 mt-1">
                টেকনিক্যাল সমস্যা সমাধান প্যাকেজ পরিচালনা করুন
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Issue Types Management */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔧</span>
            সমস্যার ধরন
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {issueTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  type.enabled
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 bg-gray-50"
                }`}
                onClick={() => toggleIssueType(type.id)}
              >
                <div className="text-center">
                  <span className="text-3xl block mb-2">{type.icon}</span>
                  <span className="font-semibold text-gray-800 text-sm">
                    {type.name}
                  </span>
                  <input
                    type="checkbox"
                    checked={type.enabled}
                    onChange={() => toggleIssueType(type.id)}
                    className="w-4 h-4 mt-2"
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
                <Package className="w-6 h-6 text-orange-600" />
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
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="দ্রুত সমাধান"
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
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    placeholder="1500"
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
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                >
                  <option value="সমস্যা প্রতি">সমস্যা প্রতি</option>
                  <option value="প্রজেক্ট">প্রজেক্ট</option>
                  <option value="মাস">মাস</option>
                  <option value="বছর">বছর</option>
                </select>
              </div>

              {/* Response Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  রেসপন্স টাইম
                </label>
                <input
                  type="text"
                  value={pkg.responseTime}
                  onChange={(e) =>
                    handlePackageChange(index, "responseTime", e.target.value)
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="২৪ ঘণ্টা"
                />
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
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
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
                  className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-orange-600 hover:border-orange-500 hover:bg-orange-50 transition flex items-center justify-center gap-2"
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
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
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

export default AdminIssueFixing;
