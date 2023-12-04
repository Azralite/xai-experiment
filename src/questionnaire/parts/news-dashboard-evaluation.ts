import { agreementLikert7, satisfactionLikert7 } from '@/helper/likert-scales';

const newsDashboardEvaluation = {
  title: 'Survey Part 2: Overall News Dashboard Evaluation',
  description:
    'In the following we ask you several questions about the overall usefulness of the provided News Dashboard. Please answer as truthfully as possible.',
  elements: [
    {
      type: 'matrix',
      name: 'news-dashboard-evaluation',
      hideNumber: true,
      columns: agreementLikert7,
      alternateRows: true,
      titleLocation: 'hidden',
      isAllRowRequired: true,
      rows: [
        {
          text: 'Using the XAI Dashboard would increase my effectiveness in detecting SDG.',
          value: 'increase-effectiveness-SDG-detection',
        },
        {
          text: 'Using the XAI Dashboard will help me detect SDG faster in the future',
          value: 'help-detect-SDG-faster',
        },
        {
          text: 'Overall, I understand how this XAI Dashboard assists me with decisions I have to make',
          value: 'assist-decisions',
        },
        {
          text: 'Overall, I think the explanations given by the AI-System in the XAI Dashboard for the company reports are useful',
          value: 'useful-explanations-news',
        },
        {
          text: 'It takes too long to learn how to use the XAI Dashboard to make it worth the effort',
          value: 'long-learning-time-not-worth',
        },
        {
          text: 'Overall, the presented explanations in the XAI Dashboard are comprehensible and help me with assessing the company reports',
          value: 'comprehensible-explanations-help-assess-news-articles',
        },
        {
          text: 'The presented explainability features in the XAI Dashboard seem too complicated',
          value: 'complicated-explainability-features',
        },
      ],
    },
    {
      type: 'matrix',
      name: 'news-dashboard-evaluation',
      hideNumber: true,
      columns: satisfactionLikert7,
      alternateRows: true,
      titleLocation: 'hidden',
      isAllRowRequired: true,
      rows: [
        {
          text: 'How satisfied are you with the explanatory quality of the XAI Dashboard?',
          value: 'satisfied-with-explanatory-quality',
        },
      ],
    },
  ],
};

export default newsDashboardEvaluation;
