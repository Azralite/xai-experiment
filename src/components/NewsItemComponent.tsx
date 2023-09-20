import NewsItem from '@/model/news-item';
import { TutorialTooltipStep } from '@/model/tutorial-tooltip-step';
import { XAIFeatureLevel } from '@/model/xai-feature-level';
import { useState } from 'react';
import ThuthfulnessSlider from './TruthfulnessSlider';
import TutorialTooltip from './TutorialTooltip';
import css from 'styled-jsx/css';

// C'est ici qu'on va avoir les toolTips

const NewsItemComponent = ({
  newsItem,
  xaiFeatures,
  isInput = false,
  onRatingChange = () => {},
  isTutorialMode = false,
  tutorialTooltip = null,
  defaultRatingValue = undefined,
  showError = false,
}: {
  newsItem: NewsItem;
  xaiFeatures: XAIFeatureLevel;
  isInput: boolean;
  onRatingChange: (value: number) => void;
  isTutorialMode: boolean;
  tutorialTooltip: TutorialTooltipStep | null;
  defaultRatingValue: number | undefined;
  showError: boolean;
}) => {
  const [ratingValue, setRatingValue] = useState<number | undefined>(
    defaultRatingValue
  );

  // const [sdgHovered, setSdgHoverd] = useState<number>(0);

  // Ici on remplace les balises des textes pour en faire des balises HTML
  const xaiHighlight = (content: string) => {
    return content
      .replace(/<mark>/g, "<span class='xai-highlight'>")
      .replace(/<\/mark>/g, '</span>')
      .replace(/<sentiment>/g, "<span class='sentiment-highlight'>")
      .replace(/<\/sentiment>/g, '</span>');
  };

  // Ici on récuper les phrases qui sont balisé pour les afficher sur la droite
  const getHighlightedSentences = (highlightedContent: string) => {
    const sentences = highlightedContent.match(/<mark>(.*?)<\/mark>/g);

    if (sentences) {
      return sentences.map((sentence) => {
        return sentence
          .replace(/<\/?mark>/g, '')
          .replace(/<\/?sentiment>/g, '');
      });
    } else {
      return [];
    }
  };

  const getSentimentHighlights = (highlightedContent: string) => {
    const sentences = highlightedContent.match(
      /<sentiment>(.*?)<\/sentiment>/g
    );

    if (sentences) {
      return sentences.map((sentence) => {
        return sentence
          .replace(/<\/?sentiment>/g, '')
          .replace(/<\/?mark>/g, '');
      });
    } else {
      return [];
    }
  };

  // function hoverSDG(arg0: number): void | undefined {
  //   if (sdgHovered != arg0) {
  //     setSdgHoverd(arg0);
  //   }
  //   console.log(sdgHovered);
  // }

  return (
    // La section correspond à la zone entiere
    <section
      css={{
        fontFamily: 'Inter, sans-serif',
        color: '#1D1D1F',
        whiteSpace: 'normal',

        display: 'grid',
        gridTemplateColumns: 'minmax(58%, 1fr) minmax(380px, 1fr)',
        gap: '32px',

        '@media (max-width: 1100px)': {
          gridTemplateColumns: '1fr',
        },

        '.container': {
          backgroundColor: '#FBFBFB',
          borderRadius: '8px',
          padding: '20px',
          minWidth: '380px',

          h1: {
            fontSize: '18px',
            fontWeight: 600,
          },

          h2: {
            fontSize: '14px',
            color: '#4F4F4F',
            fontWeight: 600,
            marginBottom: '8px',
          },

          '.line': {
            width: '100%',
            height: '1px',
            backgroundColor: '#E5E5E5',
            margin: '20px 0',
          },
        },
      }}
    >
      {/* Premier tool tip */}
      {tutorialTooltip === 'overview' && (
        <TutorialTooltip>
          <b> Dashboard:</b> In the following we will walk you through the
          different parts of the <b>ESG Dashboard</b> and introduce you to the
          different steps of your task. Please click next.
        </TutorialTooltip>
      )}
      {/* Ici aussi on est dans la zone de texte */}
      <article
        css={{
          position: 'relative',

          h1: {
            fontSize: '30px',
            marginBottom: '8px',
          },
          h2: {
            fontSize: '18px',
            color: '#4F4F4F',
            fontWeight: 500,
            marginBottom: '24px',
          },
          h3: {
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '24px',
          },
          p: {
            fontSize: '16px',
            lineHeight: '24px',
          },
          '.xai-highlight': {
            backgroundColor:
              // sdgHovered == 7 ? '' :
              '#EF402D',
          },
          '.sentiment-highlight': {
            backgroundColor:
              //  sdgHovered == 5 ? '' :
              '#FBC412',
          },
        }}
      >
        {tutorialTooltip === 'article' && (
          <TutorialTooltip>
            <b>Step 1 - Read and Rate:</b> During step 1 (<b>Read</b>) you are
            asked to read the news item carefully. You see here how the news
            items are presented to you, with the title and the domain (here{' '}
            {newsItem.category}) where it is written in. Please click next.
          </TutorialTooltip>
        )}
        <div
          css={{
            fontSize: '14px',
            marginBottom: '12px',
            fontWeight: 700,
            color: '#0055F6',
          }}
        >
          {newsItem.category}
        </div>
        <h1>{newsItem.title}</h1>
        <h2>{newsItem.subtitle}</h2>
        <div></div>
        <p
          dangerouslySetInnerHTML={{
            __html:
              xaiFeatures === 'salient'
                ? xaiHighlight(newsItem.content)
                : newsItem.content,
            // Question : est ce qu'on doit montrer le highlight seulement pour salient
          }}
          css={{
            textAlign: 'justify',
          }}
        ></p>
      </article>

      {/* La on est dans la zone de droite */}
      <aside
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {xaiFeatures !== 'none' && (
          <section
            className="container"
            css={{
              height: '100%',
              border: '1px solid #E5E5E5',
              background: 'transparent',
            }}
          >
            <h1>AI-System SDG Detection</h1>
            <div className="line"></div>
            <div
              css={{
                display: 'flex',
                gap: '8px',
                position: 'relative',
              }}
            >
              {tutorialTooltip === 'ai-rating' && (
                <TutorialTooltip>
                  <b>Step 2 - Inform:</b> During step 2 you see the SDG rating
                  of the <b>AI-System</b> running in the background.
                  Furthermore, you see the publishing date, the factuality and
                  the tense of the news item displayed below. Please check the{' '}
                  <b>AI-generated</b> rating and the additional information
                  carefully and click next.
                </TutorialTooltip>
              )}
              <div
                className="sliders"
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  width: '100%',
                }}
              >
                <div
                  css={{
                    // border:
                    //   sdgHovered == 5
                    //     ? '3px solid #ef402d'
                    //     : '0px solid #ef402d',
                    borderRadius: '3px',
                    boxSizing: 'content-box',
                    transition: 'all 100ms',
                  }}
                  className="test"
                  // onMouseEnter={() => hoverSDG(5) as any}
                  // onMouseLeave={() => hoverSDG(0) as any}
                >
                  <ThuthfulnessSlider
                    title="Presence of the SDG"
                    initialScore={newsItem.xaiFeatures.presence}
                  />
                </div>
                <div
                  css={{
                    // border:
                    // sdgHovered == 7
                    //   ? '3px solid #fbc412'
                    //   : '0px solid #fbc412  ',
                    borderRadius: '3px',
                    boxSizing: 'content-box',
                    transition: 'all 100ms',
                  }}
                  className="test"
                  // onMouseEnter={() => hoverSDG(7) as any}
                  // onMouseLeave={() => hoverSDG(0) as any}
                >
                  <ThuthfulnessSlider
                    title="Concreatness of the SDG"
                    initialScore={newsItem.xaiFeatures.concreatness}
                    concreate
                  />
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div
              css={{
                display: 'flex',
              }}
            >
              <div
                css={{
                  flex: 1,
                }}
              >
                <h2>Publishing date</h2> {newsItem.publishingDate}
              </div>
              <div
                css={{
                  flex: 1,
                }}
              >
                <h2>Tense</h2>

                {/* Tense part */}
                <div
                  css={{
                    display: 'flex',
                    width: '340px',
                    height: '36px',

                    '.level': {
                      flex: 1,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #E5E5E5',
                      fontSize: '14px',
                    },

                    '.selected': {
                      border: '1px solid #7F7F7F !important',
                      backgroundColor: '#F3F3F3',
                      fontWeight: 500,
                    },
                  }}
                >
                  <div
                    className={`level ${
                      newsItem.xaiFeatures.generalTense === 'past'
                        ? 'selected'
                        : ''
                    }`}
                    css={{
                      borderRight: 'none !important',
                      borderRadius: '4px 0 0 4px',
                    }}
                  >
                    Past
                  </div>
                  <div
                    className={`level ${
                      newsItem.xaiFeatures.generalTense === 'present'
                        ? 'selected'
                        : ''
                    }`}
                    css={[
                      newsItem.xaiFeatures.generalFactuality === 'easy' &&
                        'border-left: none !important',
                      newsItem.xaiFeatures.generalFactuality === 'hard' &&
                        'border-right: none !important',
                    ]}
                  >
                    Present
                  </div>
                  <div
                    className={`level ${
                      newsItem.xaiFeatures.generalTense === 'future'
                        ? 'selected'
                        : ''
                    }`}
                    css={{
                      borderLeft: 'none !important',
                      borderRadius: '0 4px 4px 0',
                    }}
                  >
                    Future
                  </div>
                </div>
              </div>
            </div>
            {xaiFeatures === 'salient' && (
              <>
                <div className="line"></div>
                <div
                  css={{
                    gap: '8px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {/* TODO : Change here, with def of factuality */}
                  {tutorialTooltip === 'readability' && (
                    <TutorialTooltip>
                      <b>Step 2 - Inform Factuality:</b> The{' '}
                      <b>explainability feature 1 - factuality</b> of the source
                      is displayed here. There are three readability categories:
                      Easy, Medium, and Hard. The <b>AI-System</b> in the
                      background automatically classifies the news article in
                      one of the categories. Please click next.
                    </TutorialTooltip>
                  )}
                  <h2>Explainability Feature 1: Factuality of the report</h2>
                  <div
                    css={{
                      display: 'flex',
                      width: '340px',
                      height: '36px',

                      '.level': {
                        flex: 1,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #E5E5E5',
                        fontSize: '14px',
                      },

                      '.selected': {
                        border: '1px solid #7F7F7F !important',
                        backgroundColor: '#F3F3F3',
                        fontWeight: 500,
                      },
                    }}
                  >
                    <div
                      className={`level ${
                        newsItem.xaiFeatures.generalFactuality === 'easy'
                          ? 'selected'
                          : ''
                      }`}
                      css={{
                        borderRight: 'none !important',
                        borderRadius: '4px 0 0 4px',
                      }}
                    >
                      Easy
                    </div>
                    <div
                      className={`level ${
                        newsItem.xaiFeatures.generalFactuality === 'medium'
                          ? 'selected'
                          : ''
                      }`}
                      css={[
                        newsItem.xaiFeatures.generalFactuality === 'easy' &&
                          'border-left: none !important',
                        newsItem.xaiFeatures.generalFactuality === 'hard' &&
                          'border-right: none !important',
                      ]}
                    >
                      Medium
                    </div>
                    <div
                      className={`level ${
                        newsItem.xaiFeatures.generalFactuality === 'hard'
                          ? 'selected'
                          : ''
                      }`}
                      css={{
                        borderLeft: 'none !important',
                        borderRadius: '0 4px 4px 0',
                      }}
                    >
                      Hard
                    </div>
                  </div>
                </div>
                <div className="line"></div>
                <div
                  css={{
                    position: 'relative',
                  }}
                >
                  {tutorialTooltip === 'text-highlights' && (
                    <TutorialTooltip>
                      <b>Step 2 - Inform Text Highlights:</b> The{' '}
                      <b>
                        explainability feature 2 - the text highlighted in red,
                      </b>{' '}
                      are the statements that support the mention of SDG 5 by
                      the <b>AI-System</b>. The <b>AI-System</b> in the
                      background automatically marks the sentences where the
                      rating is based on. Please click next.
                    </TutorialTooltip>
                  )}
                  <h2>
                    Explainability Feature 2: Text passages, where the
                    AI-System&apos;s SDG detection is based on (for SDG 5)
                  </h2>
                  <div>
                    <table
                      css={{
                        gap: '50px',
                        border: '1px solid black',

                        td: {
                          gap: '10px',
                        },

                        tr: {
                          backgroundColor: '#ccd',
                        },
                      }}
                    >
                      <thead className="head">
                        <tr>
                          <th>Sentense</th>
                          <th>Factuality</th>
                          <th>Tense</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newsItem.xaiFeatures.highlightedContent.map(
                          (sentence, index) => (
                            <tr key={index}>
                              <td>{sentence.text}</td>
                              <td>{sentence.factuality}</td>
                              <td>{sentence.tense}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <div className="line"></div> */}
                <div
                  css={{
                    position: 'relative',
                  }}
                >
                  {tutorialTooltip === 'sentiment-highlights' && (
                    <TutorialTooltip>
                      <b>Step 2 - Inform Text Highlights:</b> The{' '}
                      <b>
                        explainability feature 2 - the text highlighted in
                        yellow,
                      </b>{' '}
                      are the statements that support the mention of SDG 7 by
                      the <b>AI-System</b>. The <b>AI-System</b> in the
                      background automatically marks the sentences where the
                      rating is based on. Please click next.
                    </TutorialTooltip>
                  )}
                  {/* 
                  <h2>
                    Explainability Feature 3: Text passages, where the
                    AI-System&apos;s SDG detection is based on (for SDG 7)
                  </h2>
                  <div
                    css={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                    }}
                  >
                    {getSentimentHighlights(
                      newsItem.xaiFeatures.highlightedContent
                    ).map((sentence, index) => (
                      <blockquote
                        key={index}
                        css={{
                          borderLeft: '6px solid #FBC412',
                          padding: '8px',
                          backgroundColor: '#FBD65D',
                        }}
                      >
                        {sentence}
                      </blockquote>
                    ))}
                  </div>
                      */}
                </div>
              </>
            )}
            {xaiFeatures === 'explanations' && (
              <>
                <div className="line"></div>
                <div
                  css={{
                    position: 'relative',
                  }}
                >
                  {tutorialTooltip === 'natural-language-explanation' && (
                    <TutorialTooltip>
                      <b>Step 2 - Inform Natural Language Explanation:</b> The{' '}
                      <b>explainability feature, text highlighted in pink</b>{' '}
                      contains an explanation about the truthfulness of the news
                      item. The <b>AI-System</b> in the background automatically
                      generates this <b>natural language explanation</b>, which
                      reflects the <b>AI-generated</b> truthfulness rating.
                      Please read the explanation carefully and click next.
                    </TutorialTooltip>
                  )}
                  <h2>Explainability Feature: Natural language explanation</h2>
                  <blockquote
                    css={{
                      borderLeft: '6px solid #FF6FFF',
                      padding: '8px',
                      margin: '8px 0',
                      backgroundColor: '#FF6FFF1A',
                    }}
                  >
                    {newsItem.xaiFeatures.naturalLanguageExplanation}
                  </blockquote>
                </div>
              </>
            )}
          </section>
        )}
      </aside>

      {isInput && (
        <div
          className="container"
          css={{
            border: !showError ? '1px solid #19B394' : '1px solid #E60A3E',
            flex: 1,
            minWidth: '58%',
            position: 'relative',
          }}
        >
          {tutorialTooltip === 'your-rating' && (
            <TutorialTooltip>
              <b>Step 1 - Read and Rate:</b> During step 1 (<b>Rate</b>) you are
              asked to perform your own SDG detection based on the ESG report.
              To perform your rating you can change the slider below between 0
              and 100% of mention. Please perform your rating and click next.
            </TutorialTooltip>
          )}
          {tutorialTooltip === 'redo-your-rating' && (
            <TutorialTooltip>
              <b>Step 3 - Repeat Rating:</b> You are asked to redo your
              truthfulness rating again, by taking the{' '}
              <b>additional information</b> on the right side into account.
              Please notice, <b>there is no right and wrong</b>, feel free to
              change your original rating in accordance to the new insights you
              gained from the additional provided information. Please click
              next.
            </TutorialTooltip>
          )}
          <h1>Your rating</h1>
          <div className="line"></div>
          <div
            css={{
              display: 'flex',
              gap: '8px',
            }}
          >
            <div
              className="sliders"
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
              }}
            >
              <ThuthfulnessSlider
                title="SDG 5 : Gender Equality"
                initialScore={ratingValue}
                interactive
                onChange={(score) => {
                  setRatingValue(score);
                  onRatingChange(score);
                }}
              />
              <ThuthfulnessSlider
                title="SGD 7 : Affordable and Clean Energy"
                initialScore={ratingValue}
                interactive
                onChange={(score) => {
                  setRatingValue(score);
                  onRatingChange(score);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsItemComponent;
