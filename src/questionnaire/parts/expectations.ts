// MaJ : 02/07/23
// RaF : Valider le questionnaire avec Vera

import { agreementLikert7 } from '@/helper/likert-scales';

const expectations = {
  title:
    'Survey Part 1: Your General Thoughts about using Artificial Intelligence (AI) for Fake News Detection',
  description:
    'In the following several questions will be asked about your general perception of Artificial Intelligence and its use for detecting SDG in company reports. Please answer the following questions as truthfully as possible.',
  elements: [
    {
      type: 'matrix',
      name: 'expectations',
      titleLocation: 'hidden',
      isAllRowRequired: true,
      hideNumber: true,
      alternateRows: true,
      columns: agreementLikert7,
      rows: [
        {
          value: 'trust-new-tech',
          text: "My typical approach is to trust new technologies until they prove to me that I shouldn't trust them",
        },
        {
          value: 'benefit-of-doubt',
          text: 'I generally give technology the benefit of the doubt when I first use it',
        },
        {
          value: 'trust-ai',
          text: 'In general do you trust AI?',
        },
        {
          value: 'sceptical-about-ai',
          text: 'In general, are you sceptical about AI?',
        },
        {
          // On a modifié le value, peut etre un risque que ca pete quelque part
          value: 'rely-on-ai-for-sdg-detection',
          text: 'How willing are you to rely on information provided by an AI system in the context of SDG detection?',
        },
      ],
    },
  ],
};

export default expectations;
