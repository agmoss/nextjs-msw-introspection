import React from 'react';

import {Main} from '../../layouts/main';
import {Section} from '../../components/organisms/Section';
import {withLayout} from '../../layouts/main/withLayout';
import { Rockets } from './components/rockets';
import { Multiple } from './components/multiple-rockets';

const _HomeView = (): JSX.Element => {
  return (
    <>
      <Section>
        <Rockets/>
      </Section>
      <Section>
        <Multiple/>
      </Section>
    </>
  );
};

export const HomeView =  withLayout({ Layout: Main })(_HomeView);
