"use client";

import { useState } from 'react';
import { testsData } from '@/app/data/testsData';
import { FaSearch, FaVial, FaHeartbeat, FaBrain, FaLungs, FaBaby, FaStethoscope } from 'react-icons/fa';

const categoryIcons = {
  "General": <FaStethoscope className="text-blue-500" />,
  "Specialized": <FaVial className="text-purple-500" />,
  "Diagnostics": <FaStethoscope className="text-indigo-500" />,
  "Imaging": <FaSearch className="text-cyan-500" />,
  "Cardiology": <FaHeartbeat className="text-red-500" />,
  "Neurology": <FaBrain className="text-pink-500" />,
  "Pulmonology": <FaLungs className="text-teal-500" />,
  "Gastroenterology": <FaStethoscope className="text-green-500" />,
  "Pathology": <FaVial className="text-fuchsia-500" />,
  "Obstetrics": <FaBaby className="text-rose-500" />,
  "Pediatrics": <FaBaby className="text-amber-500" />
};

export default function TestList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(testsData.map(test => test.category))];

  const filteredTests = testsData.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">
      {/* Search and Filter Section */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-2xl leading-5 bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-lg transition duration-200 ease-in-out"
            placeholder="Search for tests (e.g., MRI, Blood Sugar...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out shadow-sm
                ${selectedCategory === category 
                  ? 'bg-green-600 text-white ring-2 ring-green-600 ring-offset-2' 
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTests.map((test) => (
          <div 
            key={test.id} 
            className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden flex flex-col h-full"
          >
            <div className="p-6 flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center p-2 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300 ease-out">
                  {categoryIcons[test.category] || <FaVial className="text-gray-500" />}
                </span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {test.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                {test.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {test.description}
              </p>
            </div>
            
            {/* <div className="px-6 py-4 border-t border-gray-50 bg-gray-50/50 group-hover:bg-green-50 transition-colors duration-300 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 group-hover:text-green-700">Learn more</span>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div> */}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTests.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <FaSearch className="text-2xl text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No tests found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We couldn&apos;t find any tests matching your search. Try adjusting your search terms or category filter.
          </p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="mt-6 text-green-600 font-medium hover:text-green-700 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
