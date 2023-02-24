import React from 'react';

import { Main } from '../../layouts/main';
import { Section } from '../../components/organisms/Section';
import { withLayout } from '../../layouts/main/withLayout';
import { UseQueryRdExample } from './components/use-query-rd-example';
import { Map2Example } from './components/map2-example';

const _HomeView = (): JSX.Element => {
  return (
    <>
      <Section>
        <UseQueryRdExample />
      </Section>
      <Section>
        <Map2Example />
      </Section>
    </>
  );
};

export const HomeView = withLayout({ Layout: Main })(_HomeView);
