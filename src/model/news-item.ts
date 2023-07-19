interface NewsItem {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  source: string;
  category?: string;
  publishingDate: string;
  label: 'fake' | 'true';
  xaiFeatures: {
    sdg5: number;
    sdg7: number;
    factuality: 'easy' | 'medium' | 'hard';
    tense: string;
    highlightedContent: string;
    naturalLanguageExplanation: string;
  };
  controlQuestion: {
    question: string;
    correctAnswer: string;
    wrongAnswers: string[];
  };
}

export default NewsItem;
