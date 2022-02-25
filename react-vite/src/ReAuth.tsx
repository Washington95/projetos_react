import { Navigate } from'react-router-dom';


type Props = {
    children: JSX.Element
}

export const ReAuth = ( {children} : Props ) => {
    const  Aut = false;

    if(!Aut){
        return <Navigate to={"/login"} />
    }

    return children
    

}