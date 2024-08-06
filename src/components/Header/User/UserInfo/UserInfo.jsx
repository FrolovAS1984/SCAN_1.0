
import { useAuth } from '../../../../context/AuthContext.jsx';
import '../../../../styles/UserInfo.css';
import user_pic_example from '../../../../images/avatar.jpg';

const UserInfo = () => {
    const { setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpire');
    };

    return (
        <div className="user-info">
            <div className="user-details">
                <div className="user-name">Антон Ф.</div>

                <a href="#" className="logout-link" onClick={handleLogout}>Выйти</a>
            </div>

            <img src={user_pic_example} alt="User" className="user-picture" />
        </div>
    );
};

export default UserInfo;