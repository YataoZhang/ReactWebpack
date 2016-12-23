/**
 * Created by zhangyatao on 2016/12/23.
 */
import React, {Component, PropTypes} from 'react';
export default class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    render() {
        return (
            <ul>
                {
                    this.props.posts.map((post, index) => <li key={index}>{post.title}</li>)
                }
            </ul>
        )
    }
}