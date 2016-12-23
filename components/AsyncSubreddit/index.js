/**
 * Created by zhangyatao on 2016/12/23.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './actions';
import App from './containers/App';
function mapStateToProps(state) {
    console.log('[mapStateToProps] state:  ', state);
    const {selectedSubreddit, postsBySubreddit}=state;
    const {
        isFetching,
        lastUpdated,
        items:posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    };
    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);