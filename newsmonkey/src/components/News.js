import React, { Component } from 'react'
import Neswitem from './Neswitem'

export default class News extends Component {
  articles =[
    {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Biden's week of reckoning at the Nato summit",
      "description": "The gathering of leaders will inflict more scrutiny on the president. Will it be a reprieve or his last stand?",
      "url": "https://www.bbc.co.uk/news/articles/c0471nye4lko",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7b52/live/594090f0-3dc5-11ef-96a8-e710c6bfc866.jpg",
      "publishedAt": "2024-07-09T08:37:18.4307164Z",
      "content": "Mr Biden faces an even taller task this week domestically.\r\nThe president has pointed to buttressing and expanding Nato in the face of Russian aggression as one of his key accomplishments. \r\nThis is … [+2004 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "How Canada became a car theft capital of the world",
      "description": "From installing bollards to hiring private security, fed up Canadians are trying new ways to safeguard their cars.",
      "url": "https://www.bbc.co.uk/news/articles/cy79dq2n093o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11fa/live/69c107a0-3d54-11ef-9e1c-3b4a473456a6.jpg",
      "publishedAt": "2024-07-09T01:07:16.8498503Z",
      "content": "Nauman Khan, who lives in Mississauga, a city just outside Toronto, started a bollard-installation business after he and his brother were both victims of car thefts.\r\nIn one attempt, Mr Khan said the… [+3062 chars]"
  }
  ]
  constructor(){
    super();
    console.log('Hello i am a constryctor from news components')
    this.state ={
      articles: this.articles
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top headline</h2>
        <div className="row">

         <div className="col-md-4">

           <Neswitem title="mytitle" description="desc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/11fa/live/69c107a0-3d54-11ef-9e1c-3b4a473456a6.jpg"/>
         </div>

         <div className="col-md-4">

           <Neswitem title="mytitle" description="desc" imageUrl ="https://ichef.bbci.co.uk/news/1024/branded_news/11fa/live/69c107a0-3d54-11ef-9e1c-3b4a473456a6.jpg"/>
         </div>
         
         <div className="col-md-4">

           <Neswitem title="mytitle" description="desc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/11fa/live/69c107a0-3d54-11ef-9e1c-3b4a473456a6.jpg"/>
         </div>
         

        </div>
       
        
      </div>
    )
  }
}
