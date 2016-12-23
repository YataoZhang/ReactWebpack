/**
 * Created by zhangyatao on 2016/12/23.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit} from '../actions';
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
        const {dispatch, selectedSubreddit} = this.props;
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const {dispatch, selectedSubreddit}=nextProps;
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    }

    change(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    refreshClick(e) {
        e.preventDefault();
        const {dispatch, selectedSubreddit}=this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    render() {
        const {selectedSubreddit, posts, isFetching, lastUpdated}=this.props;
        console.log(posts);
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
export default connect(mapStateToProps)(AsycApp);