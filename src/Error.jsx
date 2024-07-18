import { useRouteError } from "react-router-dom"
export const Error = () =>{
    const err = useRouteError();
    return(
        <div>
            <h1>Ooops!!!!</h1>
            <h2>Something went wrong!!!!</h2>
        </div>
    )
}