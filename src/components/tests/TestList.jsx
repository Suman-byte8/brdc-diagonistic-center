"use client";

import { useState } from 'react';
import { testsData } from '@/app/data/testsData';
import { Search, TestTube, HeartPulse, Brain, Wind, Baby, Stethoscope, ScanLine } from 'lucide-react';

// Icon per category (rendered inside a uniform gradient badge)
const categoryIcons = {
  "General": Stethoscope,
  "Specialized": TestTube,
  "Diagnostics": Stethoscope,
  "Imaging": ScanLine,
  "Cardiology": HeartPulse,
  "Neurology": Brain,
  "Pulmonology": Wind,
  "Gastroenterology": Stethoscope,
  "Pathology": TestTube,
  "Obstetrics": Baby,
  "Pediatrics": Baby,
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
      <div className="mb-10 sm:mb-14 space-y-6">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="text-brdc-text-secondary w-5 h-5" />
          </div>
          <input
            type="text"
            aria-label="Search tests"
            className="block w-full pl-13 pr-4 py-4 border border-brdc-border rounded-xl bg-white shadow-[0_10px_30px_-18px_rgba(15,77,58,0.35)] placeholder-brdc-text-secondary focus:outline-none focus:ring-2 focus:ring-brdc-gold/60 focus:border-brdc-gold text-sm sm:text-base transition text-brdc-text"
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
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-[13px] font-bold uppercase tracking-wide transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-brdc-primary to-brdc-secondary text-white shadow-[0_8px_18px_-8px_rgba(15,77,58,0.6)]'
                  : 'bg-white text-brdc-text-secondary hover:text-brdc-primary hover:border-brdc-primary/40 border border-brdc-border'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredTests.map((test) => {
          const Icon = categoryIcons[test.category] || TestTube;
          return (
            <article
              key={test.id}
              className="group h-full flex flex-col rounded-xl border border-brdc-border bg-gradient-to-br from-white to-brdc-pale p-6 shadow-[0_8px_30px_-18px_rgba(15,77,58,0.25)] hover:-translate-y-1 hover:border-brdc-primary/30 hover:shadow-[0_18px_40px_-18px_rgba(15,77,58,0.35)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="w-11 h-11 rounded-full bg-gradient-to-br from-brdc-soft to-brdc-mint text-brdc-primary flex items-center justify-center group-hover:from-brdc-primary group-hover:to-brdc-secondary group-hover:text-brdc-gold transition-colors">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <span className="text-[10px] font-bold text-brdc-gold-dark bg-brdc-gold/10 border border-brdc-gold/30 px-3 py-1 rounded-full uppercase tracking-widest">
                  {test.category}
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug text-brdc-forest mb-2">
                {test.name}
              </h3>
              <p className="text-sm leading-6 text-brdc-text-secondary line-clamp-3">
                {test.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredTests.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brdc-soft to-brdc-mint mb-5">
            <Search className="w-7 h-7 text-brdc-primary" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-brdc-forest mb-3">No tests found</h3>
          <p className="text-brdc-text-secondary max-w-md mx-auto text-sm sm:text-base leading-7">
            We couldn&apos;t find any tests matching your search. Try adjusting your search terms or category filter.
          </p>
          <button
            type="button"
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-brdc-primary border-b border-brdc-gold pb-1 hover:text-brdc-gold-dark transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
