import React, { useState } from "react";
import { Plus, Trash2, Save, DollarSign, Package, Star, GraduationCap } from "lucide-react";

const AdminBusinessTraining = () => {
  const [packages, setPackages] = useState([
    {
      name: "বেসিক ট্রেনিং",
      price: "2000",
      duration: "মাস",
      popular: false,
      sessions: "8",
      features: [
        "বিজনেস বেসিক",
        "ডিজিটাল মার্কেটিং পরিচিতি",
        "৮টি লাইভ সেশন",
        "কমিউনিটি সাপোর্ট"
      ],
    },
    {
      name: "প্রফেশনাল ট্রেনিং",
      price: "5000",
      duration: "মাস",
      popular: true,
      sessions: "16",
      features: [
        "অ্যাডভান্স বিজনেস স্ট্র্যাটেজি",
        "পূর্ণাঙ্গ ডিজিটাল মার্কেটিং",
        "১৬টি রিয়েল লাইভ সেশন",
        "মেন্টরশিপ সাপোর্ট",
        "সার্টিফিকেট"
      ],
    },
    {
      name: "এন্টারপ্রাইজ ট্রেনিং",
      price: "10000",
      duration: "মাস",
      popular: false,
      sessions: "30+",
      features: [
        "এক্সক্লুসিভ ১-অন-১ সেশন",
        "কাস্টম কারিকুলাম",
        "৩০+ লাইভ সেশন",
        "প্রজেক্ট গাইডেন্স",
        "লাইফটাইম কমিউনিটি এক্সেস",
        "প্রিমিয়াম সার্টিফিকেট"
      ],
    },
  ]);

  const [courseModules, setCourseModules] = useState([
    { id: "business", name: "বিজনেস ফান্ডামেন্টাল", icon: "💼", enabled: true },
    { id: "marketing", name: "ডিজিটাল মার্কেটিং", icon: "📱", enabled: true },
    { id: "sales", name: "সেলস স্ট্র্যাটেজি", icon: "💰", enabled: true },
    { id: "finance", name: "ফিন্যান্স ম্যানেজমেন্ট", icon: "💵", enabled: true },
    { id: "leadership", name: "লিডারশিপ", icon: "👔", enabled: true },
    { id: "branding", name: "ব্র্যান্ডিং", icon: "🎯", enabled: true },
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
        sessions: "0",
        features: [""],
      },
    ]);
  };

  const removePackage = (index) => {
    const updatedPackages = packages.filter((_, i) => i !== index);
    setPackages(updatedPackages);
  };

  const toggleModule = (moduleId) => {
    const updatedModules = courseModules.map((m) =>
      m.id === moduleId ? { ...m, enabled: !m.enabled } : m
    );
    setCourseModules(updatedModules);
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting training packages:", packages);
      console.log("Course modules:", courseModules);
      
      setNotification({
        show: true,
        message: "ট্রেনিং প্যাকেজ সফলভাবে আপডেট হয়েছে!",
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 md:p-8">
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
            <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                বিজনেস ট্রেনিং ম্যানেজমেন্ট
              </h1>
              <p className="text-gray-600 mt-1">
                ব্যবসায়িক প্রশিক্ষণ প্যাকেজ ও কোর্স মডিউল পরিচালনা করুন
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Course Modules Management */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📚</span>
            কোর্স মডিউল
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {courseModules.map((module) => (
              <div
                key={module.id}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  module.enabled
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 bg-gray-50"
                }`}
                onClick={() => toggleModule(module.id)}
              >
                <div className="text-center">
                  <span className="text-3xl block mb-2">{module.icon}</span>
                  <span className="font-semibold text-gray-800 text-sm">
                    {module.name}
                  </span>
                  <input
                    type="checkbox"
                    checked={module.enabled}
                    onChange={() => toggleModule(module.id)}
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
                <Package className="w-6 h-6 text-green-600" />
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
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                  placeholder="বেসিক ট্রেনিং"
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
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                    placeholder="2000"
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
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                >
                  <option value="মাস">মাস</option>
                  <option value="বছর">বছর</option>
                  <option value="কোর্স">কোর্স</option>
                </select>
              </div>

              {/* Sessions */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  সেশন সংখ্যা
                </label>
                <input
                  type="text"
                  value={pkg.sessions}
                  onChange={(e) =>
                    handlePackageChange(index, "sessions", e.target.value)
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                  placeholder="8"
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
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
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
                  className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-green-600 hover:border-green-500 hover:bg-green-50 transition flex items-center justify-center gap-2"
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
          className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
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

export default AdminBusinessTraining;
