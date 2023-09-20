import Sentence from './sentence';

interface NewsItem {
  id: number;
  title: string;
  subtitle?: string;
  content: string;

  category?: string;
  publishingDate: string;
  xaiFeatures: {
    presence: number;
    concreatness: number;
    generalFactuality: 'easy' | 'medium' | 'hard';
    generalTense: 'past' | 'present' | 'future';
    highlightedContent: Sentence[];
    naturalLanguageExplanation: string;
  };
  controlQuestion: {
    question: string;
    correctAnswer: string;
    wrongAnswers: string[];
  };
}

export default NewsItem;
