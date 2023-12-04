// Première page, affiche les infos sur l'experience
// Demande le consentement avant de passer à la suite

// MaJ : 02/07/23
// RaF : Rien / relecture

const qualificationStartPage = {
  elements: [
    {
      maxWidth: '900px',
      type: 'html',
      html: `
        <div>
          <p style="text-align: center;">Welcome to the <b>"XAI Evaluation"</b> Experiment!</p>
          </br>
          <p>
          The experiment is conducted by the <b>Technical University of Berlin</b> to gain some understanding which features of Artificial Intelligence help humans to detect SDGs. In this study you will be asked to ESG reports and decide if they contain SDGs or not with the help of an <b>AI System</b>.
          </p>
          </br>
          <p>
          The Job is divided into two parts:
          </p>
          </br>
          <p>
          <b>1. Qualification job:</b> please read two reports carefully and answer the control questions correctly to get access to the main job (7-9min).
          </p>
          </br>
          <p>
          <b>2. Main job:</b> You will be asked to rate <b>6 reports</b> if they contain an SDG or not (1 €). If you answer <b>5</b> of the <b>6</b> control questions correctly you will receive a <b>bonus of 5 € (overall 6 €)</b>. Please pay attention to the control questions and read the companies reports carefully (15-20min).
          </p>
          </br>
          <p>
          <b>Privacy Statement:</b> You will be asked to create your personal code in the beginning based on several questions. In case you want to have your responses deleted, you have 1 month to request deletion by contacting Vera Schmitt (<a href="mailto:vera.schmitt@tu-berlin.de">vera.schmitt@tu-berlin.de</a>) and sending your personal code.
          </p>
          </br>
          <p style="text-align: center;">
          <b>Thank you for supporting our research and help to investigate on SDG Detection!</b>
          </p>
        </div>
    `,
    },
    {
      maxWidth: '900px',
      type: 'checkbox',
      name: 'confirm',
      title:
        'I have read and understood the information provided above, and I am willing to participate in the study.',
      isRequired: true,
      colCount: 0,
      choices: ['Yes'],
      hideNumber: true,
    },
  ],
};

export default qualificationStartPage;
