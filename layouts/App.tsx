import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

/* 페이지 단위 코드 스플리팅 */
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
