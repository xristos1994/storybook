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
import { Counter } from './../Counter';

const story = {
  title: 'Counter',
  component: Counter,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Counter Story</Title>
          <Subtitle>Counter</Subtitle>
          <Description>This is the story of the Counter!</Description>
          <Primary name="Counter" />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title="Other Stories" includePrimary={true} />
        </>
      ),
    },
  },
};

export default story;

export const CounterWithControls = (args) => (
  <Counter
    initialValue={args.initialValue}
    minValue={args.minValue}
    maxValue={args.maxValue}
    step={args.step}
  >
      {args.children}
  </Counter>
);

CounterWithControls.args = {
  initialValue: 6,
  minValue: 4,
  maxValue: 10,
  step: 2
};

CounterWithControls.parameters = {
  controls: { exclude: ['initialValue'] },
  argTypes: {
    initialValue: { control: 'number' },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    step: { control: 'number' }
  },
}


export const DefaultCounter = () => (
  <Counter />
);

