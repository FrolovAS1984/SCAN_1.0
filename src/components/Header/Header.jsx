import '../../styles/Header.css'


import {useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


import Navbar from './Navbar/Navbar.jsx';
import User from './User/User.jsx';
import {useAuth} from '../../context/AuthContext.jsx';


import useWindowSize from './useWindowSize.jsx';

import scan_logo_green from '../../images/scan_logo_green.svg';
import scan_logo_white from '../../images/scan_logo_white.svg';
import fallout_menu_icon from '../../images/fallout_menu_icon.svg';
import close_icon from '../../images/closing-icon.png';

function Header ({ isLoggedIn , userName , userPicture , setUserName , setUserPicture }) {
    const { setIsLoggedIn } = useAuth();
    const [isMenuVisible , setIsMenuVisible] = useState( false );
    const { width } = useWindowSize();
    const isMobile = width <= 1360;

    const toggleMenuVisibility = () => {
        setIsMenuVisible( !isMenuVisible );
    };

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate( '/auth' );
    };

    const handleLoginAndCloseMenu = () => {
        handleLoginClick();
        setIsMenuVisible( false );
    };

    useEffect( () => {
        const interval = setInterval( () => {

            const tokenExpire = localStorage.getItem( 'tokenExpire' );
            const now = new Date();

            if (!tokenExpire || new Date( tokenExpire ) <= now) {
                setIsLoggedIn( false );
                localStorage.removeItem( 'accessToken' );
                localStorage.removeItem( 'tokenExpire' );
            }
        } , 1000 * 60 );

        return () => clearInterval( interval );
    } , [] );

    return (
        <header className={isMenuVisible && isMobile ? 'menu-visible' : ''}>
            <div className="header-content">
                <img className="scan-logo" src={isMenuVisible && isMobile ? scan_logo_white : scan_logo_green}
                     alt="Scan logo"/>

                {!isMobile && <Navbar/>}

                {!isMobile && isLoggedIn && (
                    <div className="right-section">
                        <User
                            isLoggedIn={isLoggedIn}
                            userName={userName}
                            userPicture={userPicture}
                            setUserName={setUserName}
                            setUserPicture={setUserPicture}
                        />
                    </div>
                )}

                {isMobile && !isMenuVisible && (
                    <User
                        isLoggedIn={isLoggedIn}
                        userName={userName}
                        userPicture={userPicture}
                        setUserName={setUserName}
                        setUserPicture={setUserPicture}
                        isMenuVisible={isMenuVisible}
                        isMobile={isMobile}
                    />
                )}

                {isMobile && (
                    <img src={isMenuVisible ? close_icon : fallout_menu_icon}
                         alt="Menu" className="menu-icon"
                         onClick={toggleMenuVisibility}/>
                )}

                {!isLoggedIn && !isMobile && (
                    <div className="right-section">
                        <div className="reg-block">
                            <a href="/auth" className="reg-link login">Зарегистрироваться</a>
                            <div className="vertical-divider"></div>
                            <button className="login-button" id="loginButton" onClick={handleLoginClick}>Войти</button>
                        </div>
                    </div>
                )}
            </div>

            {isMenuVisible && isMobile && (
                <div className="dropdown-menu-page">
                    <Navbar/>
                    {isLoggedIn ? (
                        <User
                            isLoggedIn={isLoggedIn}
                            userName={userName}
                            userPicture={userPicture}
                            setUserName={setUserName}
                            setUserPicture={setUserPicture}
                            isMenuVisible={isMenuVisible}
                            isMobile={isMobile}
                        />
                    ) : (
                        <div className="reg-block">
                            <a href="/auth" className="reg-link login">Зарегистрироваться</a>
                            <button className="login-button" id="loginButton" onClick={handleLoginAndCloseMenu}>Войти
                            </button>
                        </div>
                    )}
                </div>
            )}


        </header>
    );
}


export default Header;
