import React from "react";
import PropTypes from "prop-types"

import "./SearchBar.css";

export default class SearchBar extends React.PureComponent {

    static propTypes = {
        textChange: PropTypes.func
    }

    handleChange = event => {
        this.props.textChange(event)
    }

    render() {
        return(
            <div className="search-bar">
                <div>
                    <input type="text" onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}