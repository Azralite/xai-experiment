interface Sentence {
  text: string;
  factuality: 'easy' | 'medium' | 'hard';
  tense: 'past' | 'present' | 'future';
}

export default Sentence;
