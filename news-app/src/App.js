import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

// /:category? : 맨 뒤에 물음표는 값이 선택적 이라는 의미 (있거나 없거나)
const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
