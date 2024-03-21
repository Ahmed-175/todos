import React, { useEffect, useState } from 'react';
import LeftBar from './Components/LeftBar/LeftBar';
import RightBar from './Components/RightBar/RightBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [index , setIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/todos/api/getpro').then((res) => {
      setIndex(res.data.length);
    });
  }, []);

  const RenderRoutes = () => {
    const routes = [];

    for (let i = 0; i < index; i++) {
      routes.push(
        <React.Fragment key={i}>
          <Route path={`/${i}`} element={<RightBar materialIndex={i} />} />
        </React.Fragment>
      );
    }
    return routes;
  };

  return (
    <BrowserRouter>
      <div className='container'>
        <h1>قائمة <span>المهام</span></h1>
        <LeftBar />
        <Routes>
          {RenderRoutes()}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;