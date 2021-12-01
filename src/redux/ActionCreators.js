import * as ActionTypes from './ActionTypes';

//define an action creator function to add a comment, notice that we're making an object
export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text,
    }
})