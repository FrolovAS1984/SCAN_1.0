import {useState , useEffect} from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {useAuth} from './context/AuthContext.jsx';

import './styles/App.css';


import './fonts/ferry.otf';
import './fonts/InterRegular.ttf';
import './fonts/InterMedium.ttf';
import './fonts/InterBold.ttf';

import Header from './components/Header/Header.jsx';
import AuthMenu from "./components/AuthMenu/AuthMenu.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from './components/Main/Main.jsx';

import Search from './components/Search/Search.jsx';
import Result from "./components/Result/Result.jsx";
// import user_pic_example from './assets/user_pic_example.png';

function App () {
    const { isLoggedIn , checkAuthStatus } = useAuth();
    const [userTariff , setUserTariff] = useState( 'beginner' );
    const [userName , setUserName] = useState( '' );
    const [userPicture , setUserPicture] = useState( '' );


    useEffect( () => {
        checkAuthStatus();
    } , [checkAuthStatus] );

    return (
        <Router>
            <div className="app-container">
                <Header isLoggedIn={isLoggedIn} userName={userName} setUserName={setUserName} userPicture={userPicture}
                        setUserPicture={setUserPicture}/>
                <Routes>
                    <Route path="/" element={<Main isLoggedIn={isLoggedIn} userTariff={userTariff} />}/>
                    <Route path="/auth" element={<AuthMenu/>}/>
                    <Route path="/search" element={isLoggedIn ? <Search/> : <AuthMenu redirectBack="/search"/>}/>
                    <Route path="/results" element={isLoggedIn ? <Result/> : <AuthMenu redirectBack="/results"/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
