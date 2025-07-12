import { Link } from "react-router-dom";
function NotFound(){
    return(
        <>
        <h3>The page does not exist</h3>
        <Link to={'/'}>Back to Home Page</Link>
        </>
    )
}
export default NotFound;