import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { Timer } from './../Timer';

const story = {
  title: 'Timer',
  component: Timer,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Timer Story</Title>
          <Subtitle>Timer</Subtitle>
          <Description>This is the story of the Timer!</Description>
          <Primary name="Default Timer" />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title="Other Stories" includePrimary={false} />
        </>
      ),
    },
  },
};

export default story;

export const DefaultTimer = () => (
  <Timer />
);


DefaultTimer.parameters = {
  controls: { hideNoControlsWarning: true },
}

