import { agreementLikert7 } from "@/helper/likert-scales";

const expectations = {
  title: "Expectations",
  description:
    "In this part you should answer some questions about your expectation regarding AI based Fake News Detection",
  elements: [
    {
      type: "matrix",
      name: "expectations",
      titleLocation: "hidden",
      hideNumber: true,
      alternateRows: true,
      columns: agreementLikert7,
      rows: [
        {
          value: "new-tech",
          text: "My typical approach is to trust new technologies until they prove to me that I shouldn’t trust them.",
        },
        {
          value: "benefit-of doubt",
          text: "I generally give technology the benefit of the doubt when I first use it.",
        },
        {
          value: "ai-intimidates",
          text: "AI intimidates me",
        },
        {
          value: "understand-ai",
          text: "I feel unsure of my ability to understand AI",
        },
        {
          value: "ai-for-fake-news",
          text: "I think it's a good idea to rely on AI for Fake News Detection",
        },
      ],
    },
  ],
};

export default expectations;
