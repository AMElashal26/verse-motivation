import { CategoryData } from '@/types/verse';

interface CategoryCardProps {
  category: CategoryData;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryCard({ category, isActive, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
        isActive
          ? 'bg-blue-500 text-white shadow-lg scale-105'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
      }`}
    >
      <span className="text-3xl mb-2">{category.icon}</span>
      <h3 className="font-semibold text-lg">{category.title}</h3>
      <p className="text-sm mt-1 opacity-80">{category.description}</p>
    </button>
  );
} 