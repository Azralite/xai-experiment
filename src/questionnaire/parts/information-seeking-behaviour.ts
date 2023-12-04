// This page is to gather information about the user
// Especially on how he gather information

import {
  accessibilityLikert7,
  agreementLikert7,
  frequencyLikert7,
  importanceLikert7,
  seriousnessLikert7,
  truthfulnessLikert7,
} from '@/helper/likert-scales';

const informationSeekingBehaviour = [
  {
    title:
      'Survey Part 1: Your general knowingness, attitude and behavior about sustainability',
    // Here add all the question about sustainability from the questionnaire
    description:
      'In this part you should answer questions about your knowledge, attitude and behavior. Please answer as truthfully as possible.',
    elements: [
      {
        type: 'matrix',
        name: 'information-seeking.sources',
        title: 'What is your behavior about sustainability',
        hideNumber: true,
        columns: frequencyLikert7,
        alternateRows: true,
        isAllRowRequired: true,
        titleLocation: 'hidden',
        rows: [
          {
            value: 'K12',
            text: 'Sustainable development requires that companies act responsibly towards their employees, customers and suppliers.',
          },
          {
            value: 'K16',
            text: 'Sustainable development requires a fair distribution of goods and services among people in the world.',
          },
          {
            value: 'K17',
            text: 'Wiping out poverty in the world is necessary for sustainable development.',
          },
          {
            value: 'A3',
            text: 'I think that companies have a responsibility to reduce the use of packaging and disposable articles.',
          },
          {
            value: 'A7',
            text: 'I think it is important to reduce poverty.',
          },
          {
            value: 'A8',
            text: 'I think that companies in rich countries should give employees in poor nations the same conditions as in rich countries.',
          },
          {
            value: 'B6',
            text: 'I do things which help poor people.',
          },
          {
            value: 'B9',
            text: 'I often purchase second-hand goods over the internet or in a shop',
          },
          {
            value: 'B11',
            text: 'I avoid buying goods from companies with a bad reputation for looking after their employees and the environment.',
          },
        ],
      },
    ],
  },
];

export default informationSeekingBehaviour;
