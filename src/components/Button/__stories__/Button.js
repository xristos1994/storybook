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
import { Button } from './../Button';

const story = {
  title: 'Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['mouseover', 'click button'],
    },
    argTypes: {
      children: { control: 'text' },
    },
    docs: {
      page: () => (
        <>
          <Title>Button Story</Title>
          <Subtitle>Button</Subtitle>
          <Description>This is thr description of the story!</Description>
          <Primary name="Primary Button" />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title="Other Stories" includePrimary={true} />
        </>
      ),
    },
  },
};

export default story;

export const ButtonWithControls = (args) => (
  <Button
    disabled={args.disabled}
    type={args.type}
    fullWidth={args.fullWidth}
    onClick={() => console.log('Button Clicked')}
    >
      {args.children}
  </Button>
);

ButtonWithControls.args = {
  children: 'Test Button'
};

ButtonWithControls.parameters = { controls: { exclude: ['onClick'] } }


export const PrimaryButton = () => (
  <Button
    disabled={false}
    type={"primary"}
    fullWidth={true}
    onClick={() => console.log('Button Clicked')}
    >
    Primary
  </Button>
);

export const SecondaryButton = () => (
  <Button
    disabled={false}
    type="secondary"
    fullWidth={true}
    onClick={() => console.log('Button Clicked')}
    >
    Secondary
  </Button>
);
