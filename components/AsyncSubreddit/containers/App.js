/**
 * Created by zhangyatao on 2016/12/23.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
class AsycApp extends Component {
    static propTypes = {
        selectedSubreddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.refreshClick = this.refreshClick.bind(this);
    }

    componentDidMount() {
        const {fetchPostsIfNeeded, selectedSubreddit} = this.props;
        console.log('[componentDidMount] 在组件装载DOM后请求ajax;   dispatch(fetchPostsIfNeeded(selectedSubreddit)) \n\n');
        fetchPostsIfNeeded(selectedSubreddit);
    }

    componentWillReceiveProps(nextProps) {
        console.log('[componentWillReceiveProps] 组件更新props; nextProps:  ', nextProps, '  ;this.props:  ', this.props, ' \n\n');
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const {fetchPostsIfNeeded, selectedSubreddit}=nextProps;
            fetchPostsIfNeeded(selectedSubreddit);
        }
    }

    change(nextSubreddit) {
        console.log('[change] nextSubreddit:  ', nextSubreddit);
        this.props.selectSubreddit(nextSubreddit);
    }

    refreshClick(e) {
        e.preventDefault();
        const {invalidateSubreddit, fetchPostsIfNeeded, selectedSubreddit}=this.props;
        console.log('[refreshClick]:  dispatch(invalidateSubreddit(selectedSubreddit));  dispatch(fetchPostsIfNeeded(selectedSubreddit)); \n\n');
        invalidateSubreddit(selectedSubreddit);
        fetchPostsIfNeeded(selectedSubreddit);
    }

    render() {
        const {selectedSubreddit, posts, isFetching, lastUpdated}=this.props;
        console.log('render');
        return (
            <div>
                <Picker value={selectedSubreddit} onChange={this.change} options={['reactjs','frontend']}/>
                <p>
                    {
                        lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {'    '}
                        </span>
                    }
                    {
                        isFetching &&
                        <a href="#" onClick={this.refreshClick}>Refresh</a>
                    }
                </p>
                {
                    isFetching && posts.length === 0 && <h2>Loading...</h2>
                }
                {
                    isFetching && posts.length !== 0 && <h2>Empty</h2>
                }
                {
                    posts.length > 0 && <div style={{opacity:isFetching?0.5:1}}>
                        <Posts posts={posts}/>
                    </div>
                }
            </div>
        )
    }
}
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
export default connect(mapStateToProps, mapDispatchToProps)(AsycApp);