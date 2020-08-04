import React from "react"

import "./App.css"
import TitleBar from "./TitleBar"
import SearchBar from "./SearchBar"
import EmojiList from "./EmojiList"
import filterEmoji from "./filterEmoji"

export default class App extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            filteredEmoji: filterEmoji("", 30)
        }
    }

    handleSearchEvent = event => {
        this.setState({
            filteredEmoji: filterEmoji(event.target.value, 30)
        })
    }

    render () {
        return(
            <div className="App">
                <div className="titlebar-searchbar">
                    <TitleBar />
                    <SearchBar textChange={this.handleSearchEvent} />
                </div>
                <EmojiList emojiData={this.state.filteredEmoji} />
            </div>
        )
    }
}