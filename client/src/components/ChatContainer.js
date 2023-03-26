import ChatHeader from './ChatHeader';
import MatchesDisplay from './MatchesDisplay';
import ChatDisplay from './ChatDisplay';
import { useState } from 'react';


const ChatContainer = ({user}) => {

    const [clickedUser, setClickedUser] = useState(null)

    return(
        <div className="chat-container">
            <ChatHeader user={user}/>
            
            <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
                <button className="option" disabled={!clickedUser}>Chat</button>
            </div>

            {/* If no match has been clicked, show the list of matches. If one of them has been clicked, show their chat */}
            {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser}/>}
            {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}
        </div>
    )

}

export default ChatContainer;