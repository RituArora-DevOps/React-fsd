export default function Greeting({isLoggedIn, hasUnread, isAdmin}) {
    //&& is called short-circuit and ternary operator
    return (
        <div>  
            <h1>{isLoggedIn ? "Welcome Back" : "Please Log In"}</h1>
            
            {hasUnread && <p>You have unread messages</p>}
            {isAdmin && <p className = "adminMessage" >You have admin priviledges</p>}
        </div>

        // If you are an admin or not
        // if you are an admin write a message in red color that you have
        // admin priviledge
    )
}