import React, { useState } from "react";
import {
  Plus,
  Trash2,
  Save,
  DollarSign,
  Package,
  Star,
  Edit,
  EyeOff,
  Eye,
  X,
  Briefcase,
} from "lucide-react";

const AdminWebdev = () => {
  const [heroData, setHeroData] = useState({
    title: "আপনার ব্যবসার জন্য পেশাদার ওয়েবসাইট",
    description:
      "আধুনিক ডিজাইন এবং সর্বশেষ প্রযুক্তি দিয়ে তৈরি আপনার ব্যবসার জন্য একটি সম্পূর্ণ ওয়েবসাইট সমাধান। দ্রুত, নিরাপদ এবং মোবাইল-ফ্রেন্ডলি।",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop",
    cta1: "প্রজেক্ট শুরু করুন →",
    cta2: "পোর্টফোলিও দেখুন →",
  });

  const [editingHero, setEditingHero] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
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
      span: 2,
    },
  ]);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [animate, setAnimate] = useState(true);
  const [sectionData, setSectionData] = useState({
    title: "আমাদের সাম্প্রতিক কাজ",
    subtitle: "বিভিন্ন শিল্পে আমাদের সফলতার গল্প",
  });

  const [portfolio, setPortfolio] = useState([
    {
      name: "ই-কমার্স ওয়েবসাইট",
      category: "ই-কমার্স",
      image: "🛒",
      description: "একটি সম্পূর্ণ অনলাইন শপিং সমাধান",
    },
    {
      name: "রেস্টুরেন্ট ওয়েবসাইট",
      category: "রেস্টুরেন্ট",
      image: "🍽️",
      description: "অনলাইন অর্ডারিং সিস্টেম সহ",
    },
    {
      name: "কর্পোরেট ওয়েবসাইট",
      category: "কর্পোরেট",
      image: "💼",
      description: "পেশাদার বিজনেস সমাধান",
    },
    {
      name: "শিক্ষা পোর্টাল",
      category: "শিক্ষা",
      image: "📚",
      description: "অনলাইন লার্নিং প্ল্যাটফর্ম",
    },
    {
      name: "হেলথকেয়ার সিস্টেম",
      category: "স্বাস্থ্য",
      image: "🏥",
      description: "রোগী ব্যবস্থাপনা সিস্টেম",
    },
    {
      name: "রিয়েল এস্টেট",
      category: "রিয়েল এস্টেট",
      image: "🏢",
      description: "প্রপার্টি লিস্টিং ওয়েবসাইট",
    },
  ]);

  const [editingSection, setEditingSection] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveChangesHeroSection = async () => {
    try {
      // Replace with your actual axios call
      // const response = await axios.put('/api/hero-section', heroData);

      console.log("Saving hero data:", heroData);

      setNotification({
        show: true,
        message: "হিরো সেকশন সফলভাবে আপডেট হয়েছে!",
        type: "success",
      });

      setEditingHero(false);

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

  const handleSectionChange = (e) => {
    const { name, value } = e.target;
    setSectionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedPortfolio = [...portfolio];
    updatedPortfolio[index][field] = value;
    setPortfolio(updatedPortfolio);
  };

  const addProject = () => {
    setPortfolio([
      ...portfolio,
      {
        name: "",
        category: "",
        image: "📁",
        description: "",
      },
    ]);
    setEditingProject(portfolio.length);
  };

  const removeProject = (index) => {
    const updatedPortfolio = portfolio.filter((_, i) => i !== index);
    setPortfolio(updatedPortfolio);
    setEditingProject(null);
  };

  const saveChangesProjectSection = async () => {
    try {
      // Replace with your actual axios call
      // const response = await axios.put('/api/portfolio-section', { sectionData, portfolio });

      console.log("Saving portfolio data:", { sectionData, portfolio });

      setNotification({
        show: true,
        message: "পোর্টফোলিও সেকশন সফলভাবে আপডেট হয়েছে!",
        type: "success",
      });

      setEditingSection(false);
      setEditingProject(null);

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
      <h1 className="text-center mb-8 text-3xl font-bold">
        ওয়েব ডেভেলপমেন্ট অ্যাডমিন প্যানেল{" "}
      </h1>
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              হিরো সেকশন ম্যানেজমেন্ট
            </h1>
            <p className="text-gray-600">
              ওয়েবসাইট ডেভেলপমেন্ট পেজের হিরো সেকশন এডিট করুন
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

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Editor Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Edit className="w-6 h-6 text-blue-500" />
                  এডিট করুন
                </h2>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="lg:hidden bg-blue-100 text-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-200 transition"
                >
                  {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
                  {showPreview ? "এডিটর" : "প্রিভিউ"}
                </button>
              </div>

              {editingHero ? (
                <div className="space-y-5">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      টাইটেল
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={heroData.title}
                      onChange={handleHeroChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      placeholder="টাইটেল লিখুন"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      বিবরণ
                    </label>
                    <textarea
                      name="description"
                      value={heroData.description}
                      onChange={handleHeroChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      rows="4"
                      placeholder="বিবরণ লিখুন"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      ছবির URL
                    </label>
                    <input
                      type="url"
                      name="image"
                      value={heroData.image}
                      onChange={handleHeroChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700">
                        প্রথম বাটন টেক্সট
                      </label>
                      <input
                        type="text"
                        name="cta1"
                        value={heroData.cta1}
                        onChange={handleHeroChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                        placeholder="বাটন টেক্সট"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700">
                        দ্বিতীয় বাটন টেক্সট
                      </label>
                      <input
                        type="text"
                        name="cta2"
                        value={heroData.cta2}
                        onChange={handleHeroChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                        placeholder="বাটন টেক্সট"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={saveChangesHeroSection}
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      <Save size={18} /> পরিবর্তন সংরক্ষণ করুন
                    </button>
                    <button
                      onClick={() => setEditingHero(false)}
                      className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                    >
                      <X size={18} /> বাতিল করুন
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-100">
                    <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-blue-500" />
                      বর্তমান কন্টেন্ট
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <span className="font-semibold text-sm text-gray-500">
                          টাইটেল:
                        </span>
                        <p className="mt-1">{heroData.title}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-sm text-gray-500">
                          বিবরণ:
                        </span>
                        <p className="mt-1">{heroData.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <span className="font-semibold text-sm text-gray-500">
                            বাটন ১:
                          </span>
                          <p className="mt-1">{heroData.cta1}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-gray-500">
                            বাটন ২:
                          </span>
                          <p className="mt-1">{heroData.cta2}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setEditingHero(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    <Edit size={18} /> এডিট শুরু করুন
                  </button>
                </div>
              )}
            </div>

            {/* Live Preview Section */}
            <div
              className={`bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl ${
                showPreview ? "block" : "hidden lg:block"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-green-500" />
                  লাইভ প্রিভিউ
                </h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  রিয়েল-টাইম
                </span>
              </div>

              {/* Preview Content */}
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                {/* Hero Image */}
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
                  <img
                    src={heroData.image}
                    alt="Hero"
                    className="w-full h-full object-cover opacity-90"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://via.placeholder.com/1200x400?text=Hero+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    {heroData.title || "টাইটেল যোগ করুন..."}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {heroData.description || "বিবরণ যোগ করুন..."}
                  </p>

                  {/* CTA Buttons Preview */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                      {heroData.cta1 || "বাটন ১"}
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                      {heroData.cta2 || "বাটন ২"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Preview Note */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">নোট:</span> এটি একটি লাইভ
                  প্রিভিউ। আপনার করা সকল পরিবর্তন তাৎক্ষণিকভাবে এখানে দেখা যাবে।
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Preview Toggle Info */}
          <div className="lg:hidden mt-6 p-4 bg-white rounded-lg shadow-md text-center">
            <p className="text-sm text-gray-600">
              মোবাইলে এডিটর এবং প্রিভিউ দেখতে উপরের বাটন ব্যবহার করুন
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Plan Update Section */}
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
        <div
          className={`text-center mb-2 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {/* <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4 animate-bounce">
            <DollarSign className="w-4 h-4 text-white" />
          </div> */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {packages.map((pkg, packageIndex) => (
              <div
                key={packageIndex}
                className={`bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  pkg.span === 2 ? "lg:col-span-2 xl:col-span-1" : ""
                }`}
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

      {/*  <style>{`
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

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style> */}

      {/* Admin Project or portfolio*/}
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
        <div className="text-center mb-8">
          {/* <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div> */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            পোর্টফোলিও সেকশন ম্যানেজমেন্ট
          </h1>
          <p className="text-gray-600">
            আপনার সাম্প্রতিক কাজ এবং প্রজেক্ট পরিচালনা করুন
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

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Editor Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Edit className="w-6 h-6 text-purple-500" />
                  সেকশন এডিট করুন
                </h2>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="lg:hidden bg-purple-100 text-purple-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-200 transition"
                >
                  {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
                  {showPreview ? "এডিটর" : "প্রিভিউ"}
                </button>
              </div>

              {editingSection ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      সেকশন টাইটেল
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={sectionData.title}
                      onChange={handleSectionChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-300"
                      placeholder="টাইটেল লিখুন"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      সাবটাইটেল
                    </label>
                    <input
                      type="text"
                      name="subtitle"
                      value={sectionData.subtitle}
                      onChange={handleSectionChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-300"
                      placeholder="সাবটাইটেল লিখুন"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={saveChangesProjectSection}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      <Save size={18} /> সংরক্ষণ করুন
                    </button>
                    <button
                      onClick={() => setEditingSection(false)}
                      className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-100">
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-semibold text-gray-500">
                          টাইটেল:
                        </span>
                        <p className="text-gray-800 font-medium">
                          {sectionData.title}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">
                          সাবটাইটেল:
                        </span>
                        <p className="text-gray-600">{sectionData.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setEditingSection(true)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    <Edit size={18} /> সেকশন এডিট করুন
                  </button>
                </div>
              )}
            </div>

            {/* Projects Editor */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                  প্রজেক্ট সমূহ
                </h2>
                <button
                  onClick={addProject}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-200 transition font-semibold"
                >
                  <Plus size={18} /> নতুন
                </button>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {portfolio.map((project, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-xl p-4 transition-all ${
                      editingProject === index
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {editingProject === index ? (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                              প্রজেক্টের নাম
                            </label>
                            <input
                              type="text"
                              value={project.name}
                              onChange={(e) =>
                                handleProjectChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                              placeholder="নাম লিখুন"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                              ক্যাটাগরি
                            </label>
                            <input
                              type="text"
                              value={project.category}
                              onChange={(e) =>
                                handleProjectChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                              placeholder="ক্যাটাগরি"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">
                            ইমোজি/আইকন
                          </label>
                          <input
                            type="text"
                            value={project.image}
                            onChange={(e) =>
                              handleProjectChange(
                                index,
                                "image",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                            placeholder="🎨 ইমোজি যোগ করুন"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">
                            বিবরণ
                          </label>
                          <textarea
                            value={project.description}
                            onChange={(e) =>
                              handleProjectChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                            rows="2"
                            placeholder="সংক্ষিপ্ত বিবরণ"
                          />
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingProject(null)}
                            className="flex-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition text-sm font-semibold"
                          >
                            সম্পন্ন
                          </button>
                          <button
                            onClick={() => removeProject(index)}
                            className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => setEditingProject(index)}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <div className="text-3xl bg-gradient-to-br from-purple-100 to-pink-100 w-14 h-14 rounded-lg flex items-center justify-center">
                          {project.image}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">
                            {project.name}
                          </h4>
                          <p className="text-sm text-purple-600 font-semibold">
                            {project.category}
                          </p>
                        </div>
                        <Edit size={16} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={saveChangesProjectSection}
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
              >
                <Save size={18} /> সকল পরিবর্তন সংরক্ষণ করুন
              </button>
            </div>
          </div>

          {/* Live Preview Section */}
          <div className={`${showPreview ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-green-500" />
                  লাইভ প্রিভিউ
                </h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  রিয়েল-টাইম
                </span>
              </div>

              {/* Preview Content */}
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {sectionData.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {sectionData.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {portfolio.slice(0, 6).map((project, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    >
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-32 flex items-center justify-center text-4xl hover:scale-110 transition duration-300">
                        {project.image}
                      </div>
                      <div className="p-3">
                        <div className="text-xs text-purple-600 font-semibold mb-2">
                          {project.category}
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                          {project.name}
                        </h3>
                        <button className="text-xs text-purple-600 font-semibold hover:text-purple-700">
                          বিস্তারিত দেখুন →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Note */}
              <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-sm text-purple-700">
                  <span className="font-semibold">নোট:</span> প্রিভিউতে সর্বোচ্চ
                  ৬টি প্রজেক্ট প্রদর্শিত হবে। সকল প্রজেক্ট মূল পেজে দেখা যাবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style>{`
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

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: #a855f7;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #9333ea;
        }
      `}</style> */}
    </div>
  );
};

export default AdminWebdev;
