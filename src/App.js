import React from 'react';
import './reset.css';
import './App.css';
import { v4 as uuidv4} from 'uuid';
import { Card } from './components/Card';

const data = [
  {
    id: uuidv4(),
    profileImg: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/syfywire_cover_media/2018/09/c-3po-see-threepio_68fe125c.jpg",
    displayName: "C-3PO",
    userName: "humancyborgrelations",
    timeStamp: "1 day ago",
    message: "I have a bad feeling about this!",
    likes: "13",
    comments: "2"
  },
  {
    id: uuidv4(),
    profileImg: "https://pmcvariety.files.wordpress.com/2018/05/unnamed10.jpg",
    displayName: "Chewie",
    userName: "YRRAANNH",
    timeStamp: "2 days ago",
    message: "Murghhhhh grrbokgh.",
    likes: "47",
    comments: "0"
  }
]

// const [cardData, setCardData] = data;

const entries = data.map(entry => {
  return (
    <Card data={entry} key={entry.id} />
  )
})


function App() {
  return (
    <div className="wrapper">
      <ul className="cards__list">
        {entries}
      </ul>
    </div>
  );
}

export default App;
