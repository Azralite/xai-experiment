import NewsItem from '@/model/news-item';
import React from 'react';
import { Question, Serializer, ElementFactory } from 'survey-core';
import { SurveyElementBase, ReactQuestionFactory } from 'survey-react-ui';
import NewsItemComponent from './NewsItemComponent';

const QUESTION_TYPE = 'newsitem';

export const registerMyQuestion = () => {
  ElementFactory.Instance.registerElement(QUESTION_TYPE, (name) => {
    return new NewsItemQuestionModel(name);
  });
};

export class NewsItemQuestionModel extends Question {
  getType() {
    return QUESTION_TYPE;
  }

  get text() {
    return this.getPropertyValue('text', '');
  }
  set text(newValue) {
    this.setPropertyValue('text', newValue);
  }
}

export class NewsItemQuestion extends SurveyElementBase<
  {
    question: {
      newsitem: NewsItem;
      xaiFeatures: 'none' | 'basic';
      isInput: boolean;
      isPresent: boolean;
      isTutorialMode: boolean;
      tutorialTooltip: string;
      value?: number;
      hasVisibleErrors: boolean;
    };
  },
  {
    value?: number;
  }
> {
  constructor(props: any) {
    super(props);
  }

  get value() {
    return this.question.value;
  }

  get question() {
    return this.props.question;
  }

  render() {
    if (!this.question) return null;
    return (
      <NewsItemComponent
        newsItem={this.question.newsitem}
        xaiFeatures={this.question.xaiFeatures}
        isInput={this.question.isInput}
        isPresent={this.question.isPresent}
        onPresentChange={(isPresent) => {
          if (!isPresent) this.question.value = -1;
        }}
        onRatingChange={(value) => {
          this.question.value = value;
        }}
        isTutorialMode={this.question.isTutorialMode}
        tutorialTooltip={this.question.tutorialTooltip as any}
        defaultRatingValue={this.question.value}
        showError={this.question.hasVisibleErrors}
      />
    );
  }
}

Serializer.addClass(
  QUESTION_TYPE,
  [
    'newsitem:object',
    'xaiFeatures:string',
    'isInput:boolean',
    'isPresent:boolean',
    'isTutorialMode:boolean',
    'tutorialTooltip:string',
  ],
  () => new NewsItemQuestionModel(''),
  'question'
);

ReactQuestionFactory.Instance.registerQuestion(QUESTION_TYPE, (props) => {
  return React.createElement(NewsItemQuestion, props);
});
