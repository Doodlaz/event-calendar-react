import React from 'react';
import { Layout } from 'antd'
import { ContentWrapper, Container } from './styles'

import Home from '../../../src/components/Pages/Home'

const DashboardLayout = () => {


  return (
    <Layout>
      <ContentWrapper>
        <Container>
          <Home />
        </Container>
      </ContentWrapper>
    </Layout>
  )
};

export default DashboardLayout;
