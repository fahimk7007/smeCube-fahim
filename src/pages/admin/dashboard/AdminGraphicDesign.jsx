import { useState } from "react";
import { 
    Save, 
    Plus, 
    Trash2, 
    Eye, 
    Star, 
    Palette,
    Zap,
    CheckCircle,
    Image,
    DollarSign
} from "lucide-react";

const AdminGraphicDesign = () => {
    // Hero Section State
    const [heroData, setHeroData] = useState({
        title: "গ্রাফিক ডিজাইন সার্ভিস",
        description: "আপনার ব্যবসার জন্য আকর্ষণীয় এবং প্রফেশনাল গ্রাফিক ডিজাইন। লোগো, ব্র্যান্ডিং, সোশ্যাল মিডিয়া এবং প্রিন্ট ডিজাইন সলিউশন।",
        cta: "ফ্রি কনসালটেশন"
    });

    // Features Section State
    const [features, setFeatures] = useState([
        {
            id: 1,
            icon: "🎨",
            title: "ব্র্যান্ড আইডেন্টিটি",
            description: "লোগো, কালার স্কিম এবং ব্র্যান্ড গাইডলাইন"
        },
        {
            id: 2,
            icon: "📱",
            title: "সোশ্যাল মিডিয়া ডিজাইন",
            description: "পোস্ট, ব্যানার এবং কভার ডিজাইন"
        },
        {
            id: 3,
            icon: "🖼️",
            title: "প্রিন্ট ডিজাইন",
            description: "ব্রোশিওর, ফ্লায়ার এবং বিজনেস কার্ড"
        },
        {
            id: 4,
            icon: "✨",
            title: "ইলাস্ট্রেশন",
            description: "কাস্টম ইলাস্ট্রেশন এবং আইকন ডিজাইন"
        },
        {
            id: 5,
            icon: "📦",
            title: "প্যাকেজিং ডিজাইন",
            description: "প্রোডাক্ট প্যাকেজিং এবং লেবেল"
        },
        {
            id: 6,
            icon: "🎯",
            title: "ইনফোগ্রাফিক্স",
            description: "ডেটা ভিজুয়ালাইজেশন এবং চার্ট ডিজাইন"
        }
    ]);

    // Design Tools State
    const [designTools, setDesignTools] = useState([
        {
            id: 1,
            name: "Adobe Photoshop",
            icon: "🖌️",
            color: "bg-blue-50"
        },
        {
            id: 2,
            name: "Adobe Illustrator",
            icon: "✏️",
            color: "bg-orange-50"
        },
        {
            id: 3,
            name: "Figma",
            icon: "🎨",
            color: "bg-purple-50"
        },
        {
            id: 4,
            name: "Canva Pro",
            icon: "🎭",
            color: "bg-green-50"
        },
        {
            id: 5,
            name: "Adobe InDesign",
            icon: "📐",
            color: "bg-pink-50"
        },
        {
            id: 6,
            name: "CorelDRAW",
            icon: "💎",
            color: "bg-indigo-50"
        }
    ]);

    // Portfolio State
    const [portfolio, setPortfolio] = useState([
        {
            id: 1,
            name: "ব্র্যান্ড লোগো",
            category: "ব্র্যান্ডিং",
            icon: "🏢"
        },
        {
            id: 2,
            name: "সোশ্যাল মিডিয়া",
            category: "ডিজিটাল",
            icon: "📱"
        },
        {
            id: 3,
            name: "প্রিন্ট মেটেরিয়াল",
            category: "প্রিন্ট",
            icon: "📄"
        },
        {
            id: 4,
            name: "প্যাকেজিং",
            category: "প্রোডাক্ট",
            icon: "📦"
        }
    ]);

    // Packages State
    const [packages, setPackages] = useState([
        {
            id: 1,
            name: "বেসিক",
            price: "৩,০০০",
            duration: "৫টি ডিজাইন",
            features: [
                "৫টি সোশ্যাল মিডিয়া পোস্ট",
                "বেসিক এডিটিং",
                "২টি রিভিশন",
                "২৪ ঘণ্টা ডেলিভারি",
                "সোর্স ফাইল"
            ],
            popular: false
        },
        {
            id: 2,
            name: "স্ট্যান্ডার্ড",
            price: "৮,০০০",
            duration: "প্যাকেজ",
            features: [
                "লোগো ডিজাইন (৩টি কনসেপ্ট)",
                "১০টি সোশ্যাল মিডিয়া পোস্ট",
                "বিজনেস কার্ড ডিজাইন",
                "আনলিমিটেড রিভিশন",
                "সোর্স ফাইল সহ সব ফরম্যাট",
                "১ সপ্তাহ সাপোর্ট"
            ],
            popular: true
        },
        {
            id: 3,
            name: "প্রিমিয়াম",
            price: "২৫,০০০",
            duration: "সম্পূর্ণ ব্র্যান্ডিং",
            features: [
                "কমপ্লিট ব্র্যান্ড আইডেন্টিটি",
                "লোগো + ব্র্যান্ড গাইডলাইন",
                "৩০টি সোশ্যাল মিডিয়া টেমপ্লেট",
                "ব্রোশিওর ও ফ্লায়ার ডিজাইন",
                "স্টেশনারি ডিজাইন",
                "আনলিমিটেড রিভিশন",
                "১ মাস সাপোর্ট"
            ],
            popular: false
        }
    ]);

    // CTA Section State
    const [ctaData, setCtaData] = useState({
        title: "আপনার ব্র্যান্ডকে আলাদা করুন",
        description: "ফ্রি কনসালটেশন এবং ডিজাইন মকআপ পান",
        cta: "এখনই যোগাযোগ করুন →"
    });

    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: ""
    });

    // Hero Section Handlers
    const handleHeroChange = (field, value) => {
        setHeroData(prev => ({ ...prev, [field]: value }));
    };

    // Features Handlers
    const handleFeatureChange = (id, field, value) => {
        setFeatures(prev => 
            prev.map(feature => 
                feature.id === id ? { ...feature, [field]: value } : feature
            )
        );
    };

    const addFeature = () => {
        const newFeature = {
            id: features.length + 1,
            icon: "🔧",
            title: "নতুন ফিচার",
            description: "ফিচারের বিবরণ"
        };
        setFeatures(prev => [...prev, newFeature]);
    };

    const removeFeature = (id) => {
        setFeatures(prev => prev.filter(feature => feature.id !== id));
    };

    // Design Tools Handlers
    const handleToolChange = (id, field, value) => {
        setDesignTools(prev => 
            prev.map(tool => 
                tool.id === id ? { ...tool, [field]: value } : tool
            )
        );
    };

    const addTool = () => {
        const newTool = {
            id: designTools.length + 1,
            name: "নতুন টুল",
            icon: "🛠️",
            color: "bg-gray-50"
        };
        setDesignTools(prev => [...prev, newTool]);
    };

    const removeTool = (id) => {
        setDesignTools(prev => prev.filter(tool => tool.id !== id));
    };

    // Portfolio Handlers
    const handlePortfolioChange = (id, field, value) => {
        setPortfolio(prev => 
            prev.map(item => 
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const addPortfolioItem = () => {
        const newItem = {
            id: portfolio.length + 1,
            name: "নতুন আইটেম",
            category: "ক্যাটাগরি",
            icon: "📁"
        };
        setPortfolio(prev => [...prev, newItem]);
    };

    const removePortfolioItem = (id) => {
        setPortfolio(prev => prev.filter(item => item.id !== id));
    };

    // Packages Handlers
    const handlePackageChange = (id, field, value) => {
        setPackages(prev => 
            prev.map(pkg => 
                pkg.id === id ? { ...pkg, [field]: value } : pkg
            )
        );
    };

    const handlePackageFeatureChange = (packageId, featureIndex, value) => {
        setPackages(prev => 
            prev.map(pkg => {
                if (pkg.id === packageId) {
                    const updatedFeatures = [...pkg.features];
                    updatedFeatures[featureIndex] = value;
                    return { ...pkg, features: updatedFeatures };
                }
                return pkg;
            })
        );
    };

    const addPackageFeature = (packageId) => {
        setPackages(prev => 
            prev.map(pkg => 
                pkg.id === packageId 
                    ? { ...pkg, features: [...pkg.features, "নতুন ফিচার"] }
                    : pkg
            )
        );
    };

    const removePackageFeature = (packageId, featureIndex) => {
        setPackages(prev => 
            prev.map(pkg => {
                if (pkg.id === packageId) {
                    const updatedFeatures = pkg.features.filter((_, idx) => idx !== featureIndex);
                    return { ...pkg, features: updatedFeatures };
                }
                return pkg;
            })
        );
    };

    const addPackage = () => {
        const newPackage = {
            id: packages.length + 1,
            name: "নতুন প্যাকেজ",
            price: "০",
            duration: "প্যাকেজ",
            features: ["ফিচার ১"],
            popular: false
        };
        setPackages(prev => [...prev, newPackage]);
    };

    const removePackage = (id) => {
        setPackages(prev => prev.filter(pkg => pkg.id !== id));
    };

    // CTA Section Handlers
    const handleCtaChange = (field, value) => {
        setCtaData(prev => ({ ...prev, [field]: value }));
    };

    // Save Handler
    const handleSave = () => {
        try {
            console.log("Saving graphic design data:", {
                heroData,
                features,
                designTools,
                portfolio,
                packages,
                ctaData
            });
            
            setNotification({
                show: true,
                message: "গ্রাফিক ডিজাইন ডেটা সফলভাবে সেভ হয়েছে!",
                type: "success"
            });
            
            setTimeout(() => {
                setNotification({ show: false, message: "", type: "" });
            }, 3000);
        } catch (error) {
            setNotification({
                show: true,
                message: "সেভ করতে সমস্যা হয়েছে!",
                type: "error"
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-8">
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
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                            <Palette className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                গ্রাফিক ডিজাইন ম্যানেজমেন্ট
                            </h1>
                            <p className="text-gray-600 mt-1">
                                গ্রাফিক ডিজাইন সার্ভিসের সকল কন্টেন্ট এবং প্যাকেজ পরিচালনা করুন
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-6">

                {/* Features Editor */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Star className="w-6 h-6 text-purple-600" />
                            ফিচারস
                        </h2>
                        <button
                            onClick={addFeature}
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            নতুন ফিচার
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div key={feature.id} className="border-2 border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-gray-800">ফিচার #{feature.id}</h3>
                                    <button
                                        onClick={() => removeFeature(feature.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            আইকন
                                        </label>
                                        <input
                                            type="text"
                                            value={feature.icon}
                                            onChange={(e) => handleFeatureChange(feature.id, "icon", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            শিরোনাম
                                        </label>
                                        <input
                                            type="text"
                                            value={feature.title}
                                            onChange={(e) => handleFeatureChange(feature.id, "title", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            বিবরণ
                                        </label>
                                        <input
                                            type="text"
                                            value={feature.description}
                                            onChange={(e) => handleFeatureChange(feature.id, "description", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Design Tools Editor */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Palette className="w-6 h-6 text-purple-600" />
                            ডিজাইন টুলস
                        </h2>
                        <button
                            onClick={addTool}
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            নতুন টুল
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {designTools.map((tool) => (
                            <div key={tool.id} className="border-2 border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-gray-800">টুল #{tool.id}</h3>
                                    <button
                                        onClick={() => removeTool(tool.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            টুল নাম
                                        </label>
                                        <input
                                            type="text"
                                            value={tool.name}
                                            onChange={(e) => handleToolChange(tool.id, "name", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            আইকন
                                        </label>
                                        <input
                                            type="text"
                                            value={tool.icon}
                                            onChange={(e) => handleToolChange(tool.id, "icon", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            ব্যাকগ্রাউন্ড কালার
                                        </label>
                                        <select
                                            value={tool.color}
                                            onChange={(e) => handleToolChange(tool.id, "color", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        >
                                            <option value="bg-blue-50">ব্লু</option>
                                            <option value="bg-orange-50">অরেঞ্জ</option>
                                            <option value="bg-purple-50">পার্পল</option>
                                            <option value="bg-green-50">গ্রিন</option>
                                            <option value="bg-pink-50">পিঙ্ক</option>
                                            <option value="bg-indigo-50">ইন্ডিগো</option>
                                            <option value="bg-gray-50">গ্রে</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portfolio Editor */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Image className="w-6 h-6 text-purple-600" />
                            পোর্টফোলিও
                        </h2>
                        <button
                            onClick={addPortfolioItem}
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            নতুন আইটেম
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {portfolio.map((item) => (
                            <div key={item.id} className="border-2 border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-gray-800">আইটেম #{item.id}</h3>
                                    <button
                                        onClick={() => removePortfolioItem(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            নাম
                                        </label>
                                        <input
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => handlePortfolioChange(item.id, "name", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            ক্যাটাগরি
                                        </label>
                                        <input
                                            type="text"
                                            value={item.category}
                                            onChange={(e) => handlePortfolioChange(item.id, "category", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            আইকন
                                        </label>
                                        <input
                                            type="text"
                                            value={item.icon}
                                            onChange={(e) => handlePortfolioChange(item.id, "icon", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Packages Editor */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <DollarSign className="w-6 h-6 text-purple-600" />
                            প্যাকেজসমূহ
                        </h2>
                        <button
                            onClick={addPackage}
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            নতুন প্যাকেজ
                        </button>
                    </div>

                    <div className="space-y-6">
                        {packages.map((pkg) => (
                            <div key={pkg.id} className="border-2 border-gray-200 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-800">{pkg.name} প্যাকেজ</h3>
                                    <div className="flex items-center gap-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={pkg.popular}
                                                onChange={(e) => handlePackageChange(pkg.id, "popular", e.target.checked)}
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm font-semibold text-gray-700">জনপ্রিয়</span>
                                        </label>
                                        <button
                                            onClick={() => removePackage(pkg.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            নাম
                                        </label>
                                        <input
                                            type="text"
                                            value={pkg.name}
                                            onChange={(e) => handlePackageChange(pkg.id, "name", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            মূল্য
                                        </label>
                                        <input
                                            type="text"
                                            value={pkg.price}
                                            onChange={(e) => handlePackageChange(pkg.id, "price", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            সময়কাল
                                        </label>
                                        <input
                                            type="text"
                                            value={pkg.duration}
                                            onChange={(e) => handlePackageChange(pkg.id, "duration", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            ফিচারসমূহ
                                        </label>
                                        <button
                                            onClick={() => addPackageFeature(pkg.id)}
                                            className="px-3 py-1 text-sm border-2 border-dashed border-gray-300 rounded-lg text-purple-600 hover:border-purple-500 hover:bg-purple-50 transition flex items-center gap-1"
                                        >
                                            <Plus className="w-3 h-3" />
                                            যোগ করুন
                                        </button>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        {pkg.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={feature}
                                                    onChange={(e) => handlePackageFeatureChange(pkg.id, index, e.target.value)}
                                                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                                />
                                                <button
                                                    onClick={() => removePackageFeature(pkg.id, index)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            

                {/* Save Button */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <button
                        onClick={handleSave}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
                    >
                        <Save className="w-6 h-6" />
                        সব পরিবর্তন সেভ করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminGraphicDesign;