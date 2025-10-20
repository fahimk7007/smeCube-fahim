import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Trash2, Plus, Edit } from 'lucide-react';

const AdminFacebookBoosting = () => {
  // State for hero section
  const [heroData, setHeroData] = useState({
    title: 'ফেসবুক বুস্টিং সেবা',
    description: 'আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যান — লক্ষ্যভিত্তিক গ্রাহকদের কা�ছে পৌঁছান সহজেই।',
    cta1: 'এখনই শুরু করুন',
    cta2: 'বিস্তারিত জানুন'
  });

  // State for features
  const [features, setFeatures] = useState([
    {
      id: 1,
      title: 'টার্গেটেড অডিয়েন্স',
      description: 'সঠিক কাস্টমারদের কাছে পৌঁছান',
      icon: '<path d="M12 2L2 7h20L12 2z" /><path d="M2 7v7a10 10 0 0020 0V7" />'
    },
    {
      id: 2,
      title: 'এনালিটিক্স রিপোর্ট',
      description: 'বিস্তারিত পারফরমেন্স ট্র্যাকিং',
      icon: '<circle cx="12" cy="12" r="9" /><path d="M8 15l3-3 2 2 3-3" />'
    },
    {
      id: 3,
      title: 'বাজেট অপটিমাইজেশন',
      description: 'সর্বোচ্চ ROI নিশ্চিত করুন',
      icon: '<path d="M12 1v22M3 8h18" />'
    },
    {
      id: 4,
      title: 'দ্রুত রেজাল্ট',
      description: '১-২ দিনে ফলাফল দেখুন',
      icon: '<path d="M13 10V3L4 14h7v7l9-11h-7z" />'
    }
  ]);

  // State for form labels
  const [formLabels, setFormLabels] = useState([
    { id: 1, name: 'budget', label: 'বাজেট ($)', placeholder: 'উদাহরণ: 10', type: 'number' },
    { id: 2, name: 'mobile', label: 'মোবাইল নাম্বার', placeholder: '০১৭xxxxxxxx', type: 'tel' },
    { id: 3, name: 'pageLink', label: 'পেইজ লিংক', placeholder: 'https://facebook.com/yourpage', type: 'url' },
    { id: 4, name: 'postLink', label: 'পোস্ট লিংক', placeholder: 'https://facebook.com/yourpage/posts/...', type: 'url' },
    { id: 5, name: 'location', label: 'লোকেশন', placeholder: 'ঢাকা, বাংলাদেশ', type: 'text' },
    { id: 6, name: 'minAge', label: 'মিনিমাম বয়স', placeholder: '', type: 'number' },
    { id: 7, name: 'maxAge', label: 'ম্যাক্সিমাম বয়স', placeholder: '', type: 'number' },
    { id: 8, name: 'days', label: 'কত দিন', placeholder: '', type: 'select' }
  ]);

  // State for editing
  const [editingHero, setEditingHero] = useState(false);
  const [editingFeature, setEditingFeature] = useState(null);
  const [editingLabel, setEditingLabel] = useState(null);

  // Handle hero section update
  const handleHeroChange = (e) => {
    setHeroData({ ...heroData, [e.target.name]: e.target.value });
  };

  // Handle feature CRUD
  const addFeature = () => {
    const newFeature = {
      id: features.length + 1,
      title: '',
      description: '',
      icon: ''
    };
    setFeatures([...features, newFeature]);
    setEditingFeature(newFeature.id);
  };

  const updateFeature = (id, updatedData) => {
    setFeatures(features.map(f => f.id === id ? { ...f, ...updatedData } : f));
    setEditingFeature(null);
  };

  const deleteFeature = (id) => {
    setFeatures(features.filter(f => f.id !== id));
  };

  // Handle form label CRUD
  const addFormLabel = () => {
    const newLabel = {
      id: formLabels.length + 1,
      name: '',
      label: '',
      placeholder: '',
      type: 'text'
    };
    setFormLabels([...formLabels, newLabel]);
    setEditingLabel(newLabel.id);
  };

  const updateFormLabel = (id, updatedData) => {
    setFormLabels(formLabels.map(l => l.id === id ? { ...l, ...updatedData } : l));
    setEditingLabel(null);
  };

  const deleteFormLabel = (id) => {
    setFormLabels(formLabels.filter(l => l.id !== id));
  };

  // Save changes (mock API call)
  const saveChanges = () => {
    console.log('Saving changes:', { heroData, features, formLabels });
    alert('Changes saved successfully!');
    setEditingHero(false);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen font-hind">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      <h1 className="text-3xl font-bold text-gray-800 mb-8 font-hind">Facebook Boosting Admin Panel</h1>

      {/* Hero Section Editor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 font-hind text-gray-700">Hero Section</h2>
        {editingHero ? (
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1 font-hind">Title</label>
              <input
                type="text"
                name="title"
                value={heroData.title}
                onChange={handleHeroChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 font-hind">Description</label>
              <textarea
                name="description"
                value={heroData.description}
                onChange={handleHeroChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                rows="4"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 font-hind">CTA 1</label>
                <input
                  type="text"
                  name="cta1"
                  value={heroData.cta1}
                  onChange={handleHeroChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 font-hind">CTA 2</label>
                <input
                  type="text"
                  name="cta2"
                  value={heroData.cta2}
                  onChange={handleHeroChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={saveChanges}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
              >
                <Save size={18} /> Save
              </button>
              <button
                onClick={() => setEditingHero(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <h3 className="font-semibold font-hind">Preview</h3>
              <p className="text-lg font-bold font-hind">{heroData.title}</p>
              <p className="text-gray-600 font-hind">{heroData.description}</p>
              <div className="flex gap-4 mt-2">
                <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-hind">{heroData.cta1}</button>
                <button className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-hind">{heroData.cta2}</button>
              </div>
            </div>
            <button
              onClick={() => setEditingHero(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
            >
              <Edit size={18} /> Edit Hero
            </button>
          </div>
        )}
      </motion.section>

      {/* Features Editor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 bg-white p-6 rounded-2xl shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold font-hind text-gray-700">Features</h2>
          <button
            onClick={addFeature}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
          >
            <Plus size={18} /> Add Feature
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="border border-gray-200 p-4 rounded-lg">
              {editingFeature === feature.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Title</label>
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => updateFeature(feature.id, { ...feature, title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Description</label>
                    <input
                      type="text"
                      value={feature.description}
                      onChange={(e) => updateFeature(feature.id, { ...feature, description: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Icon SVG Path</label>
                    <textarea
                      value={feature.icon}
                      onChange={(e) => updateFeature(feature.id, { ...feature, icon: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      rows="3"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => updateFeature(feature.id, feature)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                    >
                      <Save size={18} /> Save
                    </button>
                    <button
                      onClick={() => setEditingFeature(null)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteFeature(feature.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d={feature.icon} />
                    </svg>
                    <h3 className="font-semibold font-hind">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 font-hind">{feature.description}</p>
                  <button
                    onClick={() => setEditingFeature(feature.id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                  >
                    <Edit size={18} /> Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Form Labels Editor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-2xl shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold font-hind text-gray-700">Form Labels</h2>
          <button
            onClick={addFormLabel}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
          >
            <Plus size={18} /> Add Form Label
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formLabels.map((label) => (
            <div key={label.id} className="border border-gray-200 p-4 rounded-lg">
              {editingLabel === label.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Name</label>
                    <input
                      type="text"
                      value={label.name}
                      onChange={(e) => updateFormLabel(label.id, { ...label, name: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Label</label>
                    <input
                      type="text"
                      value={label.label}
                      onChange={(e) => updateFormLabel(label.id, { ...label, label: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Placeholder</label>
                    <input
                      type="text"
                      value={label.placeholder}
                      onChange={(e) => updateFormLabel(label.id, { ...label, placeholder: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Type</label>
                    <select
                      value={label.type}
                      onChange={(e) => updateFormLabel(label.id, { ...label, type: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="tel">Telephone</option>
                      <option value="url">URL</option>
                      <option value="select">Select</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => updateFormLabel(label.id, label)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                    >
                      <Save size={18} /> Save
                    </button>
                    <button
                      onClick={() => setEditingLabel(null)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteFormLabel(label.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold font-hind">{label.label}</h3>
                  <p className="text-gray-600 font-hind">Name: {label.name}</p>
                  <p className="text-gray-600 font-hind">Placeholder: {label.placeholder}</p>
                  <p className="text-gray-600 font-hind">Type: {label.type}</p>
                  <button
                    onClick={() => setEditingLabel(label.id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                  >
                    <Edit size={18} /> Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AdminFacebookBoosting;