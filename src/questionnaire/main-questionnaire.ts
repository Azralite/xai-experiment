import { XAIFeatureLevel } from '@/model/xai-feature-level';
import mainStartPage from './parts/main-start-page';
import experimentPages from './parts/experiment';
import aiSystemEvaluation from './parts/ai-system-evaluation';
import demographics from './parts/demographics';
import almostDone from './parts/almost-done';
import tutorial from './parts/tutorial';
import youAreReady from './parts/you-are-ready';
import NewsItem from '@/model/news-item';
import newsDashboardEvaluation from './parts/news-dashboard-evaluation';
import bonusInfo from './parts/bonus-info';
import learning from './parts/learning';
import expectations from './parts/expectations';
import informationLiteracy from './parts/information-literacy';
import informationSeekingBehaviour from './parts/information-seeking-behaviour';

export const mainQuestionnaire = (
  newsItems: NewsItem[],
  xaiFeatures: XAIFeatureLevel
) => {
  // check if experimentOnly is set to true in query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const experimentOnly = urlParams.get('experimentOnly') === 'true';

  const questionnaire = {
    firstPageIsStarted: true,
    showPageNumbers: false,
    showProgressBar: 'top',
    pages: [
      mainStartPage,
      // ...tutorial(xaiFeatures),
      // youAreReady,
      ...experimentPages(newsItems, xaiFeatures, 'main'),
      almostDone,
      expectations,
      informationLiteracy,
      ...informationSeekingBehaviour,
      ...aiSystemEvaluation(xaiFeatures),
      newsDashboardEvaluation,

      demographics,
      bonusInfo,
    ],
    completedHtml: `
      <div>
        <p>
          Loading...
        </p>
      </div>
    `,
  };

  if (experimentOnly) {
    questionnaire.firstPageIsStarted = false;
    questionnaire.pages = [...experimentPages(newsItems, xaiFeatures, 'main')];
  }

  return questionnaire;
};
