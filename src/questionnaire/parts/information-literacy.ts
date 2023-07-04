// Deuxième partie du questionnaire d'intro
// MaJ : 02/07/23
// RaF : Valider le questionnaire avec Vera

import { likelihoodLikert7 } from '@/helper/likert-scales';

const informationLiteracy = {
  title: 'Survey Part 1: General Background of Reading and Searching SDG',
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
          // Value changed
          value: 'identify-sdg',
          text: '... I can identify a SDG in a text',
        },
        {
          // We can keep this one
          value: 'check-reliability',
          text: '... I can check the reliability of the searched information',
        },
        {
          value: 'efficiently-use-subscribed-and-openaccess',
          text: '... the private sector is actively engaged and contributing to the achievement of the SDGs?',
          // text: '... I can efficiently use subscribed and openaccess information resources when I am looking for information',
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
          value: 'plagiarism-and-publication-ethics',
          text: '... I know about plagiarism and publication ethics',
        },
        {
          value: 'familiarity-sdgs',
          // value: 'access-relevant-literature',
          text: '... I am familiar with the 17 Sustainable Development Goals outlined by the United Nations?',
          // text: '... I have the skill to access information resources for finding relevant literature, about topics I want to verify (e.g. looking up information about climate change and its effect on our everyday life)',
        },
        {
          // We can keep this one
          value: 'have-it-skills',
          text: '... I have skills in Information Technology (IT)',
        },
        /*
            On a scale of 1 to 5, how familiar are you with the 17 Sustainable Development Goals outlined by the United Nations?

              x How would you rate your understanding of the interconnections and synergies among the different SDGs? (1 = Very Poor, 5 = Excellent)

              x To what extent do you believe the SDGs are relevant and essential for addressing global challenges? (1 = Not at all relevant, 5 = Extremely relevant)

            How well do you think the SDGs have been integrated into companies policies and strategies? (1 = Poorly integrated, 5 = Highly integrated)

              How confident are you in your knowledge of the progress made towards achieving the SDGs globally? (1 = Not confident at all, 5 = Very confident)

              On a scale of 1 to 5, how familiar are you with the indicators and targets associated with each of the 17 SDGs?

              How would you rate the level of public awareness and understanding of the SDGs in your community or country? (1 = Very low awareness, 5 = Very high awareness)

            To what extent do you believe the private sector is actively engaged and contributing to the achievement of the SDGs? (1 = Very little engagement, 5 = Significant engagement)

              How well do you think the SDGs have been communicated and translated into actionable goals and initiatives at the local level? (1 = Poorly communicated, 5 = Well communicated)

              How optimistic are you about the potential of the SDGs to bring about meaningful and sustainable change worldwide? (1 = Not optimistic at all, 5 = Very optimistic)



        */
      ],
    },
  ],
};

export default informationLiteracy;
