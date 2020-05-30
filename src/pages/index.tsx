import { NextPage } from 'next';
import * as React from 'react';
import GoogleLoginButton from '~/components/google-login-button';
import { useDispatch } from 'react-redux';

import InputForm from '~/components/input-form';
import Layout from '~/components/layout';
import { useBookState } from '~/ducks/book/selectors';
import bookSlice from '~/ducks/book/slice';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const bookState = useBookState().book;

  const onSubmit = () => {
    dispatch(bookSlice.actions.updateBook({ ...bookState, title: 'hoge' }));
  };

  return (
    <>
      <Layout title="🥺">
          <InputForm />
          <GoogleLoginButton />
        {bookState.title}
      </Layout>
    </>
  );
};

export default Home;
