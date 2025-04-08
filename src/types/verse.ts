export type Category = 
  | 'peace'
  | 'hope'
  | 'guidance'
  | 'gratitude'
  | 'patience'
  | 'success'
  | 'family'
  | 'knowledge';

export interface Verse {
  id: string;
  arabic: string;
  english: string;
  surah: string;
  verseNumber: number;
  categories: Category[];
  isFavorite?: boolean;
}

export interface CategoryData {
  id: Category;
  title: string;
  description: string;
  icon: string;
} 