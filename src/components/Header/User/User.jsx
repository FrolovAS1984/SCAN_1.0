import {useState} from 'react';


import UserActions from './UserAction/UserAction.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import '../../../styles/User.css';



function User ({ isLoggedIn, isMobile, isMenuVisible }){
    const [isLoadingActions , setIsLoadingActions] = useState( true );


    return (
        <div className="user-blocks">

            {isMobile && isLoggedIn && !isMenuVisible && (
                <UserActions isLoading={isLoadingActions}/>
            )}

            {isMobile && isLoggedIn && isMenuVisible && (
                <UserInfo
                    isLoading={isLoadingActions}
                />
            )}

            {!isMobile && isLoggedIn && (
                <>
                    <UserActions isLoading={isLoadingActions}/>
                    <UserInfo isLoading={isLoadingActions}/>
                </>
            )}

        </div>


    );
}

export default User;