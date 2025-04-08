'use client';

import { useState } from 'react';
import { categories, verses } from '@/data/verses';
import { Category } from '@/types/verse';
import VerseCard from '@/components/VerseCard';
import CategoryCard from '@/components/CategoryCard';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredVerses = selectedCategory
    ? verses.filter(verse => verse.categories.includes(selectedCategory))
    : verses;

  const handleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const handleShare = async (verse: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${verse.surah} - Verse ${verse.verseNumber}`,
          text: `${verse.arabic}\n\n${verse.english}`,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Quranic Verses of Motivation
        </h1>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(
                selectedCategory === category.id ? null : category.id
              )}
            />
          ))}
        </div>

        {/* Verses */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVerses.map(verse => (
            <VerseCard
              key={verse.id}
              verse={{
                ...verse,
                isFavorite: favorites.includes(verse.id)
              }}
              onFavorite={handleFavorite}
              onShare={handleShare}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
