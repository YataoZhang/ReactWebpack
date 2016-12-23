/**
 * Created by zhangyatao on 2016/12/23.
 */
import React, {Component, PropTypes} from 'react';
export default class Picker extends Component {
    static PropTypes = {
        options: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        const {value, onChange, options} = this.props;
        console.log('options: ',options);
        return (
            <span>
                <h1>{value}</h1>
                <select onChange={e=>onChange(e.target.value)} value={value}>
                    {
                        options.map(option=> <option value={option} key={option}>{option}</option>)
                    }
                </select>
            </span>
        )
    }
}