
const actions = { 
    REQUEST_TWEETS: "REQUEST_TWEETS", 
    RECEIVE_TWEETS: "RECEIVE_TWEETS"
}


const requestTweets = (topic) => {
    console.log("Requesting Tweets ...")
    return { type: actions.REQUEST_TWEETS ,topic}
}
const receiveTweets = (data) => {
    return { type: actions.RECEIVE_TWEETS, data }
};


export { actions, requestTweets, receiveTweets }