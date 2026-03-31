import propTypes from "prop-types";
function UserGreeting({isLoggedIn = false,username = "Guest" }){
    const welcomeMesssage = <h2 className="welcome-message">Welcome {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please Login to continue</h2>
    return isLoggedIn ? welcomeMesssage : loginPrompt ;
}
UserGreeting.propTypes = {
    isLoggedIn:propTypes.bool,
    username:propTypes.string,
}

export default UserGreeting