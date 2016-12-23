/**
 * Created by zhangyatao on 2016/12/23.
 */
import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from './actions'
export function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}
function posts(state = {isFetching: false, disInvalidate: false, items: []}, action) {
    switch (action.type) {
        case  INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                disInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                disInvalidate: false
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                disInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}
export function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                    [action.subreddit]: posts([state[action.subreddit]], action)
                }
            );
        default:
            return state;
    }
}
