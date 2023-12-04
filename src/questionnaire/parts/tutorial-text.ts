// MaJ : 02/07/2023
// RaF : Valider avec Vera

import { XAIFeatureLevel } from '@/model/xai-feature-level';

const tutorialText = (xaiFeatures: XAIFeatureLevel) => {
  return {
    name: 'tutorial-text',
    elements: [
      {
        maxWidth: '900px',
        type: 'html',
        html: `
        <div>
          <p>
            <b>Explanations for the SDG detect task</b>
          </p>
          </br>
          <p>
            In the following, you will receive eight company's reports which you should rate the presence of SDG 5. The company's reports are presented in the <b>News Dashboard</b>, consisting of several <b>AI-system components</b>. Which will be described later in more detail. Your tasks, rating the presence of SDG 5 in a text is divided into <b>three steps</b>: 
          </p>
          </br>
          <p>
            <b>Step 1 -  Read and Rate:</b> Read the company report and rate it for SDG 5
          </p>
          </br>
          <p>
            <b>Step 2 - Inform:</b> Additional information will show up, which you can take into account for your rating
          </p>
          </br>
          <p>
            <b>Step 3 - Repeat Rating:</b> You are asked to repeat your ratings
          </p>
          </br>
          </br>
          <p>
            In the following an introduction to the task will be shown, with more detailed descriptions for each step. Please read it carefully, before the actual task starts.
          </p>
        `,
      },
    ],
  };
};

export default tutorialText;
