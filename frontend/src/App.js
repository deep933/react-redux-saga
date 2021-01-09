import './App.css';
import TweetList from './components/TweetList';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestTweets } from './actions'

function App(props) {

  const topics = {
    trump: 'donaldtrump',
    hillary: 'hillaryclinton'
  }

  const [topic, setTopic] = useState(topics.trump)

  const changeTopic = (topic) => {
    setTopic(topic)
  }

  useEffect(() => {
    props.requestTweets(topic)
    const interval = setInterval(() => props.requestTweets(topic), 5000)
    return () => {
      console.log("cleaning existing interval....")
      clearInterval(interval);
    }
  }, [topic])

  return (
    <div className="App">
      <Header topic={topic} topics={topics} changeTopic={changeTopic} />
      <TweetList topic={topic} tweets={props.data} />
    </div>
  );
}

const mapStateToProps = state => ({ data: state.tweetReducer })

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
