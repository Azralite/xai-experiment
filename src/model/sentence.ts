interface Sentence {
  text: string;
  factuality: 'low' | 'medium' | 'high';
  tense: 'past' | 'present' | 'future';
}

export default Sentence;
