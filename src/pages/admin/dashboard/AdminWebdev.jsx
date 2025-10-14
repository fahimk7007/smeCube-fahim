import React, { useState } from "react";
import { Plus, Trash2, Save, DollarSign, Package, Star } from "lucide-react";

const AdminWebdev = () => {
  const [packages, setPackages] = useState([
    {
      name: "বেসিক",
      price: "5000",
      duration: "মাস",
      popular: false,
      features: ["৫ পেজ", "রেসপন্সিভ ডিজাইন", "বেসিক এসইও"],
    },
    {
      name: "স্ট্যান্ডার্ড",
      price: "10000",
      duration: "মাস",
      popular: true,
      features: [
        "১০ পেজ",
        "রেসপন্সিভ ডিজাইন",
        "অ্যাডভান্স এসইও",
        "কন্টাক্ট ফর্ম",
      ],
    },
    {
      name: "প্রিমিয়াম",
      price: "20000",
      duration: "মাস",
      popular: false,
      features: [
        "আনলিমিটেড পেজ",
        "কাস্টম ডিজাইন",
        "প্রিমিয়াম এসইও",
        "ই-কমার্স",
      ],
    },
  ]);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [animate, setAnimate] = useState(true);

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
        features: [""],
      },
    ]);
  };

  const removePackage = (index) => {
    const updatedPackages = packages.filter((_, i) => i !== index);
    setPackages(updatedPackages);
  };

  const handleSubmit = async () => {
    try {
      // Replace with your actual axios call
      // const response = await axios.post('/api/pricing-plans', { packages });

      console.log("Submitting packages:", packages);

      setNotification({
        show: true,
        message: "প্রাইসিং প্ল্যান সফলভাবে আপডেট হয়েছে!",
        type: "success",
      });

      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    } catch (error) {
      setNotification({
        show: true,
        message: "আপডেট করতে সমস্যা হয়েছে!",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4 animate-bounce">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
            প্রাইসিং প্ল্যান আপডেট করুন
          </h1>
          <p className="text-lg text-gray-600">
            আপনার সার্ভিস প্যাকেজ সহজেই পরিচালনা করুন
          </p>
        </div>

        {/* Notification */}
        {notification.show && (
          <div
            className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white font-medium transform transition-all duration-300 animate-slide-in`}
          >
            {notification.message}
          </div>
        )}

        {/* Packages Grid */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, packageIndex) => (
              <div
                key={packageIndex}
                className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${
                    packageIndex * 0.1
                  }s both`,
                }}
              >
                {/* Delete Button */}
                {packages.length > 1 && (
                  <button
                    onClick={() => removePackage(packageIndex)}
                    className="absolute top-4 right-4 p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition transform hover:scale-110"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}

                {/* Popular Toggle */}
                <div className="mb-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`popular-${packageIndex}`}
                    checked={pkg.popular}
                    onChange={(e) =>
                      handlePackageChange(
                        packageIndex,
                        "popular",
                        e.target.checked
                      )
                    }
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                  <label
                    htmlFor={`popular-${packageIndex}`}
                    className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer"
                  >
                    <Star className="w-4 h-4 text-yellow-500" />
                    প্রস্তাবিত
                  </label>
                </div>

                {/* Package Name */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    প্যাকেজ নাম
                  </label>
                  <input
                    type="text"
                    value={pkg.name}
                    onChange={(e) =>
                      handlePackageChange(packageIndex, "name", e.target.value)
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="প্যাকেজ নাম লিখুন"
                  />
                </div>

                {/* Price */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    মূল্য (৳)
                  </label>
                  <input
                    type="number"
                    value={pkg.price}
                    onChange={(e) =>
                      handlePackageChange(packageIndex, "price", e.target.value)
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="মূল্য লিখুন"
                  />
                </div>

                {/* Duration */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    সময়কাল
                  </label>
                  <select
                    value={pkg.duration}
                    onChange={(e) =>
                      handlePackageChange(
                        packageIndex,
                        "duration",
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  >
                    <option value="মাস">মাস</option>
                    <option value="বছর">বছর</option>
                    <option value="একবার">একবার</option>
                  </select>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ফিচার সমূহ
                  </label>
                  <div className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex gap-2 animate-fade-in"
                      >
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) =>
                            handleFeatureChange(
                              packageIndex,
                              featureIndex,
                              e.target.value
                            )
                          }
                          className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                          placeholder="ফিচার লিখুন"
                        />
                        {pkg.features.length > 1 && (
                          <button
                            onClick={() =>
                              removeFeature(packageIndex, featureIndex)
                            }
                            className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition transform hover:scale-110"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => addFeature(packageIndex)}
                    className="mt-2 w-full py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition flex items-center justify-center gap-2 text-sm font-medium transform hover:scale-105"
                  >
                    <Plus className="w-4 h-4" />
                    নতুন ফিচার যোগ করুন
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            {/* Add Package Button */}
            <button
              onClick={addPackage}
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 mx-auto transform hover:scale-105 flex-1"
            >
              <Package className="w-5 h-5" />
              নতুন প্যাকেজ যোগ করুন
            </button>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-lg transform hover:scale-105 flex-1"
            >
              <Save className="w-6 h-6" />
              পরিবর্তন সংরক্ষণ করুন
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminWebdev;
