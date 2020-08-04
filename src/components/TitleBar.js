import React from "react"
import "./TitleBar.css"

export default class TitleBar extends React.Component {

    render() {
        return(
            <div className="title">
                
                <img 
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
                    height="30"
                    width="30" 
                    alt=""/>

                <h1>Emoji Search</h1>

                <img 
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
                    height="30"
                    width="30" 
                    alt=""/>

            </div>
        )
    }
}