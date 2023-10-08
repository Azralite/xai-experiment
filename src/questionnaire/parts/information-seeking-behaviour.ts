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
      // {
      //   type: 'matrix',
      //   name: 'information-seeking.',
      //   title:
      //     'I think the private sector is actively engaged and contributing to the achievement of the SDGs?',
      //   isAllRowRequired: true,
      //   columns: agreementLikert7,
      //   rows: [{ value: 'yes', text: 'Yes' }],
      // },
      // {
      //   type: 'checkbox',
      //   name: 'information-seeking.most-used-sources',
      //   title: 'Choose the three sources from above you use most often!',
      //   hideNumber: true,
      //   isRequired: true,
      //   maxSelectedChoices: 3,
      //   validators: [
      //     {
      //       type: 'answercount',
      //       text: 'Invalid response: please select three sources',
      //       minCount: 3,
      //     },
      //   ],
      //   choices: [
      //     { value: 'newspaper', text: 'Newspaper' },
      //     { value: 'online-newspaper', text: 'Online newspaper' },
      //     { value: 'instagram', text: 'Instagram' },
      //     { value: 'twitter', text: 'Twitter' },
      //     { value: 'facebook', text: 'Facebook' },
      //     {
      //       value: 'interview',
      //       text: 'Personal Talk (Interview)',
      //       visibleIf: "{journalist}='Yes'",
      //     },
      //     { value: 'blogs-websites', text: 'Blogs/Websites' },
      //     {
      //       value: 'personal-social-networks',
      //       text: 'In personal social networks',
      //     },
      //   ],
      // },
      // {
      //   title:
      //     'How do you rate the seriousness of the source you named first in the previous question?',
      //   type: 'matrix',
      //   name: 'information-seeking',
      //   hideNumber: true,
      //   columns: seriousnessLikert7,
      //   alternateRows: true,
      //   isAllRowRequired: true,
      //   rows: [
      //     {
      //       value: 'top-source-seriousness',
      //       text: 'Seriousness of the source',
      //     },
      //   ],
      // },
      // {
      //   title:
      //     'How would you rate the truthfulness of information available from the following sources?',
      //   type: 'matrix',
      //   name: 'information-seeking.truthfulness',
      //   hideNumber: true,
      //   columns: truthfulnessLikert7,
      //   alternateRows: true,
      //   isAllRowRequired: true,
      //   rows: [
      //     { value: 'newspaper', text: 'Newspaper' },
      //     { value: 'online-newspaper', text: 'Online newspaper' },
      //     { value: 'instagram', text: 'Instagram' },
      //     { value: 'twitter', text: 'Twitter' },
      //     { value: 'facebook', text: 'Facebook' },
      //   ],
      // },
    ],
  },
  // {
  //   title: 'Survey Part 1: Your General Behaviour Searching for Information II',
  //   description:
  //     'In this part you should answer questions about the accessibility and transparency of information. Please answer as truthfully as possible.',
  //   elements: [
  //     {
  //       type: 'matrix',
  //       name: 'information-seeking',
  //       title:
  //         'How accessible is transparent and reliable information about online sources and their content for you?',
  //       hideNumber: true,
  //       columns: accessibilityLikert7,
  //       alternateRows: true,
  //       isAllRowRequired: true,
  //       rows: [
  //         {
  //           value: 'accessibility-of-information-about-transparency',
  //           text: 'Accessibility',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'How do you access the material?',
  //       type: 'matrix',
  //       name: 'information-seeking.access',
  //       hideNumber: true,
  //       columns: frequencyLikert7,
  //       alternateRows: true,
  //       isAllRowRequired: true,
  //       rows: [
  //         { value: 'personal-purchase', text: 'By personal purchase' },
  //         { value: 'google', text: 'Google' },
  //         { value: 'library', text: 'Library' },
  //         { value: 'websites', text: 'Websites' },
  //       ],
  //     },
  //     {
  //       title:
  //         'How important is it for you to receive comprehensive information?',
  //       type: 'matrix',
  //       name: 'information-seeking',
  //       hideNumber: true,
  //       columns: importanceLikert7,
  //       alternateRows: true,
  //       isAllRowRequired: true,
  //       rows: [
  //         {
  //           value: 'comprehensive-information',
  //           text: 'Receiving comprehensive information',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'What is your purpose of information seeking?',
  //       type: 'matrix',
  //       name: 'information-seeking.purpose',
  //       hideNumber: true,
  //       columns: frequencyLikert7,
  //       alternateRows: true,
  //       isAllRowRequired: true,
  //       rows: [
  //         { value: 'keep-up-to-date', text: 'Keep up-to-date' },
  //         { value: 'general-awareness', text: 'General awareness' },
  //         { value: 'preparing-research', text: 'Preparing research' },
  //       ],
  //     },
  //     /*
  //       How familiar are you with the concept of sustainable development? (1 = Not familiar at all, 5 = Very familiar)

  //       How frequently do you engage in activities or initiatives that promote environmental sustainability? (1 = Rarely or never, 5 = Very frequently)

  //       To what extent do you consider sustainability as a factor when making personal or professional decisions? (1 = Not a consideration, 5 = A significant consideration)

  //       -- How knowledgeable do you feel about the United Nations' Sustainable Development Goals (SDGs)? (1 = Not knowledgeable at all, 5 = Very knowledgeable)

  //   How often do you seek information or educate yourself about sustainable practices and solutions? (1 = Rarely or never, 5 = Very frequently)

  //       How willing are you to adopt sustainable behaviors in your daily life? (1 = Not willing at all, 5 = Very willing)

  //       How actively do you participate in community or grassroots initiatives focused on sustainability? (1 = Not active at all, 5 = Very active)

  //       How much do you prioritize sustainable consumption and minimizing waste in your lifestyle? (1 = Not a priority, 5 = A top priority)

  //       How interested are you in staying updated on advancements in renewable energy and green technologies? (1 = Not interested at all, 5 = Very interested)

  //   How likely are you to support businesses or organizations that demonstrate a strong commitment to sustainable practices? (1 = Very unlikely, 5 = Very likely)

  //     */

  //     /*
  //         Can you provide examples of sustainable practices or initiatives that you have personally implemented or supported in your daily life?

  //         What motivated you to become interested in sustainable development? Was there a specific event or experience that influenced your perspective?

  //         Have you participated in any sustainability-focused projects or campaigns in your community or workplace? If so, could you share your experiences?

  //         How do you believe sustainable development can contribute to addressing global environmental challenges, such as climate change or biodiversity loss?

  //     Are there any particular Sustainable Development Goals (SDGs) that resonate with you the most? If yes, which ones and why?

  //         Have you encountered any challenges or obstacles in adopting sustainable behaviors or promoting sustainable initiatives? How did you overcome them?

  //         What role do you believe businesses and governments should play in advancing sustainable development? How can they contribute effectively?

  //         Can you share any innovative ideas or solutions you have come across that have the potential to drive sustainable development at a larger scale?

  //         In your opinion, what are some of the key benefits that individuals and communities can gain from embracing sustainable practices and lifestyles?

  //         How do you envision the future of sustainable development? What changes or advancements do you hope to see in the coming years?

  //       */
  //   ],
  // },
];

export default informationSeekingBehaviour;
