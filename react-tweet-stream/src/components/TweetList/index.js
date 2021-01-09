import React from 'react'
import Tweet from '../Tweet'


const TweetList = (props) => {

    const renderTweets = (tweet,idx) =>{
        return <li key={idx}><Tweet text={tweet.text}/></li>
    }

    return (
      props.tweets && <div>
          <span>Latest 10 Tweets for <span className="highlight">@{props.topic}</span></span>
          {props.tweets.map(renderTweets)}</div>
    )
}



export default TweetList;