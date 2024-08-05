
import { useAuth } from '../../../../context/AuthContext.jsx';
import '../../../../styles/UserInfo.css';


const UserInfo = ({ userName, userPicture}) => {
    const { setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpire');
    };

    return (
        <div className="user-info">
            <div className="user-details">
                <div className="user-name">{userName}</div>

                <a href="#" className="logout-link" onClick={handleLogout}>Выйти</a>
            </div>

            <img src={userPicture} alt="User" className="user-picture" />
        </div>
    );
};

export default UserInfo;