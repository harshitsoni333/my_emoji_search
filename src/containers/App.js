import { connect } from "react-redux"
import "./App.css"
import EmojiList from "../components/EmojiList"
import filterEmoji from "../components/filterEmoji"
import React from "react"
import SearchBar from "../components/SearchBar"
import TitleBar from "../components/TitleBar"

class App extends React.Component {
    

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

export default App;