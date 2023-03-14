import { agreementLikert7 } from "@/helper/likert-scales";
import { XAIFeatureLevel } from "@/model/xai-feature-level";

const postQuestionnaire = (xaiLevel: XAIFeatureLevel) => {
  const featureChoices = [
    {
      value: "credibility-assessment",
      text: "Credibility assessment from the AI system",
    },
    {
      value: "information-about-the-source",
      text: "Information about the source",
    },
    { value: "publishing-date", text: "Publishing date" },
  ];

  if (xaiLevel === "salient") {
    const salientFeaures = [
      {
        value: "text-highlights",
        text: "Text highlights",
      },
      {
        value: "sentiment-highlights",
        text: "Emotion detection text highlights",
      },
      {
        value: "readability",
        text: "Readability",
      },
    ];

    featureChoices.push(...salientFeaures);
  }

  if (xaiLevel === "explanations") {
    const explanationFeatures = [
      {
        value: "natural-language-explanation",
        text: "Natural language explanation",
      },
    ];

    featureChoices.push(...explanationFeatures);
  }

  return {
    title:
      "Final Questions about the Usefulness of the AI System and Explanations Given",
    description:
      "In the following we ask you several questions about what you think about the AI system. Please answer as truthfully as possible.",
    elements: [
      {
        type: "boolean",
        name: "journalist",
        title: "Are a journalist by profession?",
        valueTrue: "Yes",
        valueFalse: "No",
        renderAs: "radio",
        hideNumber: true,
      },
      {
        title: "What was the most useful explanation feature for you?",
        type: "radiogroup",
        name: "most-useful-explanation-feature",
        hideNumber: true,
        choices: featureChoices,
      },
      {
        title:
          "What other information would you like to obtain to better assess the credibility of an article?",
        type: "text",
        name: "other-information",
        hideNumber: true,
      },
      {
        title:
          "What do you value more in terms of information - speed or comprehensiveness?",
        type: "radiogroup",
        name: "value-speed-or-comprehensiveness",
        hideNumber: true,
        choices: [
          { value: "speed", text: "Speed" },
          { value: "comprehensiveness", text: "Comprehensiveness" },
        ],
      },
      {
        title:
          "What criteria do you use to judge whether a news/article is reliable?",
        type: "text",
        name: "criteria-to-judge-reliability",
        hideNumber: true,
      },
      {
        type: "matrix",
        name: "expectations-after-exp",
        titleLocation: "hidden",
        hideNumber: true,
        alternateRows: true,
        columns: agreementLikert7,
        rows: [
          {
            value: "ai-intimidates-after-exp",
            text: "AI intimidates me",
          },
          {
            value: "understand-ai-after-exp",
            text: "I feel unsure of my ability to understand AI",
          },
          {
            value: "ai-for-fake-news-after-exp",
            text: "I think it's a good idea to rely on AI for Fake News Detection",
          },
          {
            value: "system-helpful-after-exp",
            text: "For my everyday consumption of news this system is helpful",
          },
          {
            value: "everyday-work-helpful-after-exp",
            text: "For my everyday work assessing information the system is helpful",
            visibleIf: "{journalist}='Yes'",
          },
          {
            value: "system-has-functionality-for-work-after-exp",
            text: "The System has the functionality I need for my work",
            visibleIf: "{journalist}='Yes'",
          },
        ],
      },
      {
        title:
          "You stated that the system is not helpful for your everyday work. Why?",
        type: "text",
        name: "why-not-helpful-for-everyday-work",
        hideNumber: true,
        visibleIf:
          "{expectations-after-exp.everyday-work-helpful-after-exp} < 4",
      },
      {
        title: "What functionality would be a good addition?",
        type: "text",
        name: "additional-functionality",
        hideNumber: true,
      },
    ],
  };
};

export default postQuestionnaire;
