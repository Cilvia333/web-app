import { NextPage } from 'next';
import * as React from 'react';
import styled from 'styled-components';

import GoogleLoginButton from '~/components/google-login-button';
import InputForm from '~/components/input-form';
import Layout from '~/components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="🥺">
        <Main>
          <InputForm></InputForm>
          <GoogleLoginButton />
        </Main>
      </Layout>
    </>
  );
};

const Main = styled.main`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
