import {BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import App from './Pages/Home/App'
import GlobalStyle from './GlobalStyle'

export interface IApplicationProps{} 

const RouterDOM = () => {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<App/>} />
            </Routes>
        </Router>
    )
}

export default RouterDOM