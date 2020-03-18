import React, { useState } from 'react';
import './reset.css';
import './App.css';
import { Card } from './components/Card';

const data = {
  id: "",
  profileImg: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/syfywire_cover_media/2018/09/c-3po-see-threepio_68fe125c.jpg",
  displayName: "C-3PO",
  userName: "humancyborgrelations",
  timeStamp: "1 day ago",
  message: "I have a bad feeling about this!",
  likes: "13",
  comments: "2"
}

// const [cardData, setCardData] = data;




function App() {
  return (
    <div className="wrapper">
      <ul className="cards__list">
        <Card data={data} />
      </ul>
    </div>
  );
}

export default App;
