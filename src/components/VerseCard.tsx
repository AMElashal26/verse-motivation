import { Verse } from '@/types/verse';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

interface VerseCardProps {
  verse: Verse;
  onFavorite: (id: string) => void;
  onShare: (verse: Verse) => void;
}

export default function VerseCard({ verse, onFavorite, onShare }: VerseCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {verse.surah} - Verse {verse.verseNumber}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onFavorite(verse.id)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <HeartIcon
              className={`w-5 h-5 ${
                verse.isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
              }`}
            />
          </button>
          <button
            onClick={() => onShare(verse)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <ShareIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-2xl font-arabic text-right leading-loose">
          {verse.arabic}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          {verse.english}
        </p>
      </div>
    </div>
  );
} 