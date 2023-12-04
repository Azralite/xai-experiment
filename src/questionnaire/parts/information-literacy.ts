// Deuxième partie du questionnaire d'intro
// MaJ : 02/07/23
// RaF : Valider le questionnaire avec Vera

import { likelihoodLikert7 } from '@/helper/likert-scales';

const informationLiteracy = {
  title: 'Survey Part 1: General Background of Reading and Searching about SDG',
  description:
    'In the following we ask you several questions regarding your ability to identify SDGs in texts. Please answer the following questions as truthfully as possible.',
  elements: [
    {
      type: 'matrix',
      name: 'information-literacy',
      title: 'I think...',
      alternateRows: true,
      hideNumber: true,
      isAllRowRequired: true,
      columns: likelihoodLikert7,
      rows: [
        {
          value: 'identify-sdg',
          text: '... I can identify a SDG in a text',
        },

        {
          value: 'identify-authentic-sources',
          text: '... I can identify the best authentic sources of information',
        },
        {
          value: 'research-level-skilss',
          text: '... I have research-level skills',
        },
        {
          // We can keep this one
          value: 'have-it-skills',
          text: '... I have skills in Information Technology (IT)',
        },
        {
          value: 'familiarity-sdgs',
          // value: 'access-relevant-literature',
          text: '..., before the start of the experiment, I was familiar with the 17 Sustainable Development Goals outlined by the United Nations?',
          // text: '... I have the skill to access information resources for finding relevant literature, about topics I want to verify (e.g. looking up information about climate change and its effect on our everyday life)',
        },

        // {
        //   value: 'efficiently-use-subscribed-and-openaccess',
        //   text: '... the private sector is actively engaged and contributing to the achievement of the SDGs?',
        //   // text: '... I can efficiently use subscribed and openaccess information resources when I am looking for information',
        // },
        // {
        //   value: 'companies-act',
        //   text: '... sustainable development requires that companies act responsibly towards their employees, customers and suppliers?',
        // },
        // {
        //   value: 'SCQ-S-A1',
        //   text: ' ... that everyone ought to be given the opportunity to aquire the knowledge, values and skills that are necessary to live sustainably.',
        // },
        // {
        //   value: 'SCQ-S-A2',
        //   text: ' ... that we who are living now should make sure that people in the future enjoy the same quality of life as we do today',
        // },
        // {
        //   value: 'SCQ-S-A18',
        //   text: ' ... that women and men throughout the world must be given the same opportunities for education and employment.',
        // },
      ],
    },
  ],
};

export default informationLiteracy;
