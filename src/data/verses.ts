import { Category, CategoryData, Verse } from '@/types/verse';

export const categories: CategoryData[] = [
  {
    id: 'peace',
    title: 'Peace & Tranquility',
    description: 'Verses that bring inner peace and tranquility',
    icon: '🕊️'
  },
  {
    id: 'hope',
    title: 'Hope & Mercy',
    description: 'Verses that inspire hope and remind of Allah\'s mercy',
    icon: '🌟'
  },
  {
    id: 'guidance',
    title: 'Guidance',
    description: 'Verses that provide divine guidance',
    icon: '🕌'
  },
  {
    id: 'gratitude',
    title: 'Gratitude',
    description: 'Verses about being thankful',
    icon: '🙏'
  },
  {
    id: 'patience',
    title: 'Patience',
    description: 'Verses about perseverance and patience',
    icon: '⏳'
  },
  {
    id: 'success',
    title: 'Success & Achievement',
    description: 'Verses about success and achievement',
    icon: '🏆'
  },
  {
    id: 'family',
    title: 'Family & Relationships',
    description: 'Verses about family and relationships',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 'knowledge',
    title: 'Knowledge & Wisdom',
    description: 'Verses about seeking knowledge and wisdom',
    icon: '📚'
  }
];

export const verses: Verse[] = [
  {
    id: '1',
    arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ',
    english: 'And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.',
    surah: 'Al-Baqarah',
    verseNumber: 186,
    categories: ['peace', 'hope']
  },
  {
    id: '2',
    arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ',
    english: 'And whoever fears Allah - He will make for him a way out and will provide for him from where he does not expect.',
    surah: 'At-Talaq',
    verseNumber: 2,
    categories: ['hope', 'success']
  },
  {
    id: '3',
    arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    english: 'Indeed, with hardship will be ease.',
    surah: 'Ash-Sharh',
    verseNumber: 6,
    categories: ['hope', 'patience']
  },
  {
    id: '4',
    arabic: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ',
    english: 'And do not despair of the mercy of Allah. Indeed, no one despairs of the mercy of Allah except the disbelieving people.',
    surah: 'Yusuf',
    verseNumber: 87,
    categories: ['hope', 'guidance']
  }
]; 