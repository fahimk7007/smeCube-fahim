import React, { useState } from 'react';
import { 
  Save, 
  Plus, 
  Trash2, 
  Edit, 
  Eye, 
  Star, 
  Users, 
  TrendingUp,
  DollarSign,
  Package,
  MessageCircle,
  CheckCircle2,
  X,
  ClipboardList,
  Settings,
  BarChart3
} from 'lucide-react';

const AdminBusinessConsulting = () => {
  // States for all sections
  const [services, setServices] = useState([
    { id: 1, icon: "📈", title: "ব্যবসা পরিকল্পনা", description: "কার্যকর ব্যবসা পরিকল্পনা এবং কৌশল উন্নয়ন", enabled: true },
    { id: 2, icon: "💼", title: "আর্থিক পরামর্শ", description: "বাজেট, বিনিয়োগ এবং আর্থিক ব্যবস্থাপনা", enabled: true },
    { id: 3, icon: "🎯", title: "মার্কেট এনালাইসিস", description: "বাজার গবেষণা এবং প্রতিযোগী বিশ্লেষণ", enabled: true },
    { id: 4, icon: "⚙️", title: "অপারেশন অপটিমাইজেশন", description: "ব্যবসায়িক প্রক্রিয়া উন্নতি এবং দক্ষতা বৃদ্ধি", enabled: true },
    { id: 5, icon: "👥", title: "মানবসম্পদ উন্নয়ন", description: "টিম বিল্ডিং এবং কর্মচারী ব্যবস্থাপনা", enabled: true },
    { id: 6, icon: "🚀", title: "বৃদ্ধির কৌশল", description: "ব্যবসা সম্প্রসারণ এবং স্কেলিং পরামর্শ", enabled: true }
  ]);

  const [consultingAreas, setConsultingAreas] = useState([
    { 
      id: 1, 
      category: "স্টার্টআপ কনসালটিং", 
      services: ["ব্যবসা মডেল ডিজাইন", "ফান্ডিং স্ট্র্যাটেজি", "পিচ ডেক প্রস্তুতি"],
      enabled: true 
    },
    { 
      id: 2, 
      category: "ক্ষুদ্র ব্যবসা", 
      services: ["অপারেশন সেটআপ", "লাভজনকতা বৃদ্ধি", "খরচ কমানোর কৌশল"],
      enabled: true 
    },
    { 
      id: 3, 
      category: "মাঝারি ব্যবসা", 
      services: ["সম্প্রসারণ পরিকল্পনা", "প্রক্রিয়া অটোমেশন", "টিম স্কেলিং"],
      enabled: true 
    }
  ]);

  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "এক্সপ্রেস কনসালটেশন",
      price: "১৫,০০০",
      duration: "১ সেশন",
      popular: false,
      enabled: true,
      features: [
        "২ ঘণ্টার কনসালটেশন",
        "ব্যবসা মূল্যায়ন",
        "সমস্যা চিহ্নিতকরণ",
        "প্রাথমিক সুপারিশ",
        "ফলো-আপ রিপোর্ট"
      ]
    },
    {
      id: 2,
      name: "বিজনেস গ্রোথ প্যাকেজ",
      price: "৫০,০০০",
      duration: "১ মাস",
      popular: true,
      enabled: true,
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
      id: 3,
      name: "কম্প্রিহেন্সিভ কনসালটিং",
      price: "১,৫০,০০০",
      duration: "৩ মাস",
      popular: false,
      enabled: true,
      features: [
        "আনলিমিটেড কনসালটেশন",
        "সম্পূর্ণ ব্যবসা ট্রান্সফর্মেশন",
        "ডেডিকেটেড কনসালটেন্ট",
        "টিম ট্রেনিং",
        "প্রসেস ডকুমেন্টেশন",
        "কোয়ার্টারলি পারফরমেন্স রিভিউ"
      ]
    }
  ]);

  const [process, setProcess] = useState([
    { 
      id: 1, 
      step: "১", 
      title: "ডিসকভারি মিটিং", 
      description: "আপনার ব্যবসা, লক্ষ্য এবং চ্যালেঞ্জ বুঝতে প্রাথমিক আলোচনা",
      enabled: true 
    },
    { 
      id: 2, 
      step: "২", 
      title: "এনালাইসিস ও রিসার্চ", 
      description: "গভীর ব্যবসা বিশ্লেষণ এবং মার্কেট রিসার্চ",
      enabled: true 
    },
    { 
      id: 3, 
      step: "৩", 
      title: "স্ট্র্যাটেজি ডেভেলপমেন্ট", 
      description: "কাস্টমাইজড ব্যবসায়িক সমাধান এবং কৌশল তৈরি",
      enabled: true 
    },
    { 
      id: 4, 
      step: "৪", 
      title: "ইমপ্লিমেন্টেশন", 
      description: "পরিকল্পনা বাস্তবায়ন এবং চলমান সহায়তা",
      enabled: true 
    }
  ]);

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "আব্দুল করিম",
      role: "রেস্টুরেন্ট চেইন মালিক",
      text: "SME CUBE এর পরামর্শে আমার ব্যবসা ৩ মাসে ৪০% বৃদ্ধি পেয়েছে। তাদের কৌশল সত্যিই কার্যকর।",
      image: "👨‍💼",
      enabled: true
    },
    {
      id: 2,
      name: "সাবিনা আক্তার",
      role: "টেক স্টার্টআপ ফাউন্ডার",
      text: "স্টার্টআপ শুরু করার জন্য তাদের গাইডেন্স অমূল্য ছিল। এখন আমরা সফলভাবে চলছি।",
      image: "👩‍💼",
      enabled: true
    }
  ]);

  const [stats, setStats] = useState({
    totalConsultations: 245,
    activeClients: 89,
    successRate: 92,
    monthlyRevenue: 1250000
  });

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: ""
  });

  const [activeTab, setActiveTab] = useState('overview');

  // Handler functions
  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };

  const handleServiceChange = (id, field, value) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  const toggleService = (id) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, enabled: !service.enabled } : service
    ));
  };

  const addService = () => {
    const newService = {
      id: Date.now(),
      icon: "⭐",
      title: "নতুন সার্ভিস",
      description: "সার্ভিসের বর্ণনা",
      enabled: true
    };
    setServices([...services, newService]);
  };

  const removeService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const handlePackageChange = (id, field, value) => {
    setPackages(packages.map(pkg => 
      pkg.id === id ? { ...pkg, [field]: value } : pkg
    ));
  };

  const handleFeatureChange = (packageId, featureIndex, value) => {
    setPackages(packages.map(pkg => {
      if (pkg.id === packageId) {
        const updatedFeatures = [...pkg.features];
        updatedFeatures[featureIndex] = value;
        return { ...pkg, features: updatedFeatures };
      }
      return pkg;
    }));
  };

  const addFeature = (packageId) => {
    setPackages(packages.map(pkg => 
      pkg.id === packageId ? { ...pkg, features: [...pkg.features, "নতুন ফিচার"] } : pkg
    ));
  };

  const removeFeature = (packageId, featureIndex) => {
    setPackages(packages.map(pkg => {
      if (pkg.id === packageId) {
        const updatedFeatures = pkg.features.filter((_, idx) => idx !== featureIndex);
        return { ...pkg, features: updatedFeatures };
      }
      return pkg;
    }));
  };

  const togglePackagePopular = (id) => {
    setPackages(packages.map(pkg => 
      pkg.id === id ? { ...pkg, popular: !pkg.popular } : pkg
    ));
  };

  const addPackage = () => {
    const newPackage = {
      id: Date.now(),
      name: "নতুন প্যাকেজ",
      price: "০",
      duration: "মাস",
      popular: false,
      enabled: true,
      features: ["নতুন ফিচার"]
    };
    setPackages([...packages, newPackage]);
  };

  const removePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const handleSubmit = () => {
    console.log("Saving data:", {
      services,
      consultingAreas,
      packages,
      process,
      testimonials,
      stats
    });
    showNotification("সব ডেটা সফলভাবে সেভ করা হয়েছে!", "success");
  };

  // Tab navigation component
  const TabNavigation = () => (
    <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 border border-gray-100">
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'overview', label: 'ওভারভিউ', icon: BarChart3 },
          { id: 'services', label: 'সার্ভিসেস', icon: Settings },
          { id: 'packages', label: 'প্যাকেজসমূহ', icon: Package },
          { id: 'process', label: 'প্রক্রিয়া', icon: ClipboardList },
          { id: 'testimonials', label: 'রিভিউ', icon: MessageCircle }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-4 md:p-8">
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
          notification.type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white animate-slide-in`}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            {notification.message}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  বিজনেস কনসালটিং 
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                  ব্যবসায়িক পরামর্শ সেবার সবকিছু পরিচালনা করুন
                </p>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105 transform"
            >
              <Save className="w-5 h-5" />
              সেভ করুন
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <TabNavigation />

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  label: "মোট কনসালটেশন", 
                  value: stats.totalConsultations, 
                  icon: Users, 
                  color: "blue",
                  bgColor: "bg-blue-100",
                  textColor: "text-blue-600"
                },
                { 
                  label: "সক্রিয় ক্লায়েন্ট", 
                  value: stats.activeClients, 
                  icon: TrendingUp, 
                  color: "green",
                  bgColor: "bg-green-100",
                  textColor: "text-green-600"
                },
                { 
                  label: "মাসিক আয়", 
                  value: `৳${(stats.monthlyRevenue / 100000).toFixed(1)}L`, 
                  icon: DollarSign, 
                  color: "purple",
                  bgColor: "bg-purple-100",
                  textColor: "text-purple-600"
                },
                { 
                  label: "সাফল্যের হার", 
                  value: `${stats.successRate}%`, 
                  icon: Star, 
                  color: "orange",
                  bgColor: "bg-orange-100",
                  textColor: "text-orange-600"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${stat.bgColor} rounded-xl shadow-sm`}>
                      <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">দ্রুত অ্যাকশন</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                >
                  <Plus className="w-8 h-8 text-gray-400 group-hover:text-orange-500" />
                  <span className="text-gray-600 group-hover:text-orange-600 font-medium">নতুন সার্ভিস যোগ করুন</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('packages')}
                  className="p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                >
                  <Package className="w-8 h-8 text-gray-400 group-hover:text-green-500" />
                  <span className="text-gray-600 group-hover:text-green-600 font-medium">নতুন প্যাকেজ তৈরি করুন</span>
                </button>
                
                <button className="p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 flex flex-col items-center justify-center gap-3 group">
                  <BarChart3 className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
                  <span className="text-gray-600 group-hover:text-blue-600 font-medium">রিপোর্ট দেখুন</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-800">সার্ভিসেস ম্যানেজমেন্ট</h2>
              <button
                onClick={addService}
                className="bg-green-500 text-white px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Plus className="w-5 h-5" />
                নতুন সার্ভিস
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} className="border-2 border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:border-orange-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={service.icon}
                        onChange={(e) => handleServiceChange(service.id, "icon", e.target.value)}
                        className="w-12 h-12 text-2xl text-center border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                      />
                      <div className="flex items-center gap-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={service.enabled}
                            onChange={() => toggleService(service.id)}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer ${service.enabled ? 'bg-green-500' : 'bg-gray-300'} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                        </label>
                        <span className={`text-sm font-medium ${service.enabled ? 'text-green-600' : 'text-red-600'}`}>
                          {service.enabled ? 'একটিভ' : 'ইনএকটিভ'}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeService(service.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => handleServiceChange(service.id, "title", e.target.value)}
                    className="w-full font-bold text-xl mb-3 p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    placeholder="সার্ভিসের নাম"
                  />

                  <textarea
                    value={service.description}
                    onChange={(e) => handleServiceChange(service.id, "description", e.target.value)}
                    className="w-full text-gray-600 p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
                    rows="3"
                    placeholder="সার্ভিসের বর্ণনা"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Packages Tab */}
        {activeTab === 'packages' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-800">প্যাকেজ ম্যানেজমেন্ট</h2>
              <button
                onClick={addPackage}
                className="bg-green-500 text-white px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Plus className="w-5 h-5" />
                নতুন প্যাকেজ
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div key={pkg.id} className={`relative border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                  pkg.popular 
                    ? 'border-orange-500 bg-gradient-to-b from-orange-50 to-white shadow-lg' 
                    : 'border-gray-200 hover:border-orange-200'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                        জনপ্রিয়
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={pkg.name}
                        onChange={(e) => handlePackageChange(pkg.id, "name", e.target.value)}
                        className="w-full text-2xl font-bold text-gray-800 mb-3 p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                      />
                      <div className="flex items-baseline gap-2">
                        <input
                          type="text"
                          value={pkg.price}
                          onChange={(e) => handlePackageChange(pkg.id, "price", e.target.value)}
                          className="text-3xl font-bold p-2 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition w-32"
                        />
                        <span className="text-gray-600 text-lg">/{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => togglePackagePopular(pkg.id)}
                        className={`p-3 rounded-xl transition ${
                          pkg.popular 
                            ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Star className={`w-5 h-5 ${pkg.popular ? 'fill-yellow-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => removePackage(pkg.id)}
                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-700">ফিচারসমূহ</span>
                      <button
                        onClick={() => addFeature(pkg.id)}
                        className="text-green-500 hover:text-green-700 text-sm flex items-center gap-2 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-lg transition"
                      >
                        <Plus className="w-4 h-4" />
                        যোগ
                      </button>
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleFeatureChange(pkg.id, idx, e.target.value)}
                          className="flex-1 text-sm p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                        />
                        <button
                          onClick={() => removeFeature(pkg.id, idx)}
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">প্রক্রিয়া ম্যানেজমেন্ট</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step) => (
                <div key={step.id} className="border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-orange-200 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => {/* Add handler */}}
                    className="font-bold text-lg text-gray-800 mb-3 p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition w-full text-center"
                  />
                  <textarea
                    value={step.description}
                    onChange={(e) => {/* Add handler */}}
                    className="text-gray-600 p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none w-full text-center"
                    rows="3"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">ক্লায়েন্ট রিভিউ</h2>
              <button className="bg-green-500 text-white px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-green-600 transition-all duration-300">
                <Plus className="w-5 h-5" />
                নতুন রিভিউ
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-200">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{testimonial.image}</span>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={testimonial.name}
                        onChange={(e) => {/* Add handler */}}
                        className="font-bold text-lg text-gray-800 p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition w-full mb-2"
                      />
                      <input
                        type="text"
                        value={testimonial.role}
                        onChange={(e) => {/* Add handler */}}
                        className="text-gray-600 p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition w-full"
                      />
                    </div>
                  </div>
                  <textarea
                    value={testimonial.text}
                    onChange={(e) => {/* Add handler */}}
                    className="w-full text-gray-700 p-4 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
                    rows="4"
                  />
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex text-yellow-400 text-lg">
                      {"⭐".repeat(5)}
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Save Button - Fixed at bottom */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:scale-105 transform"
          >
            <Save className="w-6 h-6" />
            <span className="hidden sm:inline">সব পরিবর্তন সেভ করুন</span>
            <span className="sm:hidden">সেভ করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBusinessConsulting;