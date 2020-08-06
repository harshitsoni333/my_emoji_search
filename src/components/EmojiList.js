import React from "react"
import PropTypes from "prop-types"
import Clipboard from "clipboard"

import EmojiListRow from "./EmojiListRow"
import "./EmojiList.css"

export default class EmojiList extends React.PureComponent {
    
    static propTypes = {
        emojiData: PropTypes.array
    }

    componentDidMount() {
        this.clipboard = new Clipboard(".copy-to-clipboard")
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    render() {
        return(
            <div className="component-emoji-list">
                {this.props.emojiData.map(emojiData => (
                    <EmojiListRow 
                        key={emojiData.title}
                        symbol={emojiData.symbol}
                        title={emojiData.title}
                    />
                ))}                
            </div>
        )
    }
}