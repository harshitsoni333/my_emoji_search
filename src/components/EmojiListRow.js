import React from "react"
import PropTypes from "prop-types"
import "./EmojiListRow.css"

export default class EmojiListRow extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string,
        symbol: PropTypes.string
    }

    render() {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

        return(
            <div
                className="component-emoji-list-row copy-to-clipboard"
                data-clipboard-text={this.props.symbol}
            >
                <img src={src} alt={this.props.title} />
                <span className="emoji-title"> {this.props.title} </span>
                <span className="info">Click to copy emoji</span>
            </div>
        )
    }
}