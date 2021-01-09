import { actions } from "../actions";

const tweetReducer = (state = [], { type, data }) => {
    switch (type) {
        case actions.RECEIVE_TWEETS:
            return data.data;

        default:
            return state;
    }
}

export default tweetReducer;