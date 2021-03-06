import emojiList from "./emojiList.json"

export default function filterEmoji(searchText, MaxResults) {
    
    return emojiList.filter(emoji => {
        
        if(emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
            return true
        }
        if(emoji.keywords.includes(searchText)) {
            return true
        }
        return false
    })
    .slice(0, MaxResults);
}