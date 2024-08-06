import { User } from "./components/User"
import  UserClass  from "./components/UserClass"
export const About = () => {
    return(
        <div>
            <h1>This is Namaste React Series</h1>
        <User name={" Tharun Kumar (function)"} />
        <UserClass name = {" Tharun kumar (class)"} location={ "Hyderabad class"} />
        </div>
        
    )
}
