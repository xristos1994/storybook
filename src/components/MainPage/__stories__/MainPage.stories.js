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
import { MainPage } from './../MainPage';

const story = {
  title: 'MainPage',
  component: MainPage,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Main Page Story</Title>
          <Subtitle>Main Page</Subtitle>
          <Description>This is the story of the Main Page!</Description>
          <Primary name="Default Main Page" />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title="Other Stories" includePrimary={false} />
        </>
      ),
    },
  },
};

export default story;

export const DefaultMainPage = () => (
  <MainPage />
);

DefaultMainPage.parameters = {
  controls: { hideNoControlsWarning: true },
}



