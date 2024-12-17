import { Category } from '@quiz-app/types';

export const CATEGORIES: Category[] = [
  { subcategory: null, value: 'Any Category' },
  { subcategory: null, value: 'General Knowledge' },
  { subcategory: 'Entertainment', value: 'Books' },
  { subcategory: 'Entertainment', value: 'Film' },
  { subcategory: 'Entertainment', value: 'Music' },
  { subcategory: 'Entertainment', value: 'Musicals & Theatres' },
  { subcategory: 'Entertainment', value: 'Video Games' },
  { subcategory: 'Entertainment', value: 'Board Games' },
  { subcategory: 'Entertainment', value: 'Comics' },
  { subcategory: 'Entertainment', value: 'Japanese Anime & Manga' },
  { subcategory: 'Entertainment', value: 'Cartoon & Animations' },
  { subcategory: null, value: 'Science & Nature' },
  { subcategory: 'Science', value: 'Computers' },
  { subcategory: 'Science', value: 'Mathematics' },
  { subcategory: 'Science', value: 'Gadgets' },
  { subcategory: null, value: 'Mythology' },
  { subcategory: null, value: 'Sports' },
  { subcategory: null, value: 'Geography' },
  { subcategory: null, value: 'History' },
  { subcategory: null, value: 'Politics' },
  { subcategory: null, value: 'Art' },
  { subcategory: null, value: 'Celebrities' },
  { subcategory: null, value: 'Animals' },
  { subcategory: null, value: 'Vehicles' },
];

export const SUBCATEGORIES: string[] = ['Entertainment', 'Science'];
