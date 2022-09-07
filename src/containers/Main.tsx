import React from 'react';
import Header from '../components/Header/Header';
import { TextDivMainPage } from './Containers.styles';

function Main() {
  return (
    <>
      <Header />
      <TextDivMainPage>
        <div>
          <h1>Main page</h1>
          <p>
            Here you can find information about Marvel characters and comics!
          </p>
        </div>
      </TextDivMainPage>
    </>
  );
}
export default Main;
