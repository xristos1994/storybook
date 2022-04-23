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
import { action } from "@storybook/addon-actions";
import { linkTo } from '@storybook/addon-links';
import { Button } from './../Button';

const story = {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Button Story</Title>
          <Subtitle>Button</Subtitle>
          <Description>This is the story of the button!</Description>
          <Primary name="Button With Controls" />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title="Other Stories" includePrimary={false} />
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

ButtonWithControls.parameters = {
  controls: { exclude: ['onClick'] },
  actions: {
    handles: ['mouseover', 'click button'],
  },
  argTypes: {
    children: { control: 'text' },
  },
}


export const PrimaryButton = () => (
  <Button
    disabled={false}
    type={"primary"}
    fullWidth={true}
    onClick={() => {
      action("primary clicked")();
      linkTo('Button', 'Secondary Button')()
    }}
    >
    Primary
  </Button>
);

PrimaryButton.parameters = {
  controls: { hideNoControlsWarning: true },
}

export const SecondaryButton = () => (
  <Button
    disabled={false}
    type="secondary"
    fullWidth={false}
    onClick={() => {
      action("secondary clicked")();
      linkTo('Button', 'Primary Button')()
    }}
    >
    Secondary
  </Button>
);

SecondaryButton.parameters = {
  controls: { hideNoControlsWarning: true },
}