import React from 'react';
import cl from './Home.module.css'

const Home = (props) => {

  let Lang = props.state.settings.ui.map((count) => {
    if (count.lang === "ru") {
      return ('Домой ');
    } else if (count.lang === "en") {
      return ('Home');
    }// else {// неадекватно работает
    //   return (' error');
    // }
    return null;// убрал ворнинг - обязателен return в map()
  })
  // let MyRender = () => {
  //   return Lang
  // }

  return (
    <div className={cl.home}>
      <h1>{Lang}</h1>
    </div>
  );
}

export default Home;