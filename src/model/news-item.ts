import Sentence from './sentence';

interface NewsItem {
  id: number;
  title: string;
  subtitle?: string;
  content: string;

  category?: string;
  publishingDate: string;
  xaiFeatures: {
    presence: boolean;
    concreatness: number;
    generalFactuality: 'low' | 'medium' | 'high';
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
