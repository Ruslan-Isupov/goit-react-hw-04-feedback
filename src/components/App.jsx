import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const MyClassComponent = () => {
  const [goodComment, setGoodComment] = useState(0);
  const [neutralComment, setNeutralComment] = useState(0);
  const [badComment, setBadComment] = useState(0);

  const handleIncrement = e => {
    if (e.target.id === 'good') {
      return setGoodComment(prevState => prevState + 1);
    } else if (e.target.id === 'neutral') {
      return setNeutralComment(prevState => prevState + 1);
    } else if (e.target.id === 'bad') {
      return setBadComment(prevState => prevState + 1);
    }
  };
  const countTotalFeedback = () => {
    return goodComment + neutralComment + badComment;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (goodComment / (goodComment + neutralComment + badComment)) * 100
    );
  };

  return (
    <Section title="Please Leave Feedback">
      <FeedbackOptions onLeaveFeedback={handleIncrement} />

      <Statistics
        good={goodComment}
        neutral={neutralComment}
        bad={badComment}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};
