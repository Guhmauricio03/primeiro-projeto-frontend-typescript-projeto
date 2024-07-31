import {Routes, Route} from 'react-router-dom' 
import Main from "./pages/main"
import SignIn from './pages/signIn'

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/main' element={<Main />}/>
        </Routes>
    )
}

export default MainRoutes;