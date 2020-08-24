import { CHANGE_SEARCH_FIELD } from "./constants"

const initialState = {
    filteredEmoji: []
}

export const searchEmojis = (state = initialState, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default: 
            return state
    }
}