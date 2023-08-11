import {Link} from "react-router-dom";

export default function sidebar() {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // 根据 username 和 password 是否存在来判断是否渲染按钮
        const shouldRenderButtons = storedUsername && storedPassword;
        return (
            <>
                    {/* Sidebar */}
                    <div className="sidebar" id="sidebar">
                            <div className="sidebar-inner slimscroll">
                                    <div id="sidebar-menu" className="sidebar-menu">
                                            <ul>
                                                    <li className="menu-title">
                                                            <span>Main Menu</span>
                                                    </li>
                                                    <li>
                                                            <Link to="/" className="nav-link">
                                                                    <i className="fas fa-th-large"/>
                                                                    <span>Homepage</span>
                                                            </Link>
                                                            </li>
                                                    <li>
                                                            {shouldRenderButtons && (
                                                                <>
                                                                        <Link to="/locationlist" className="nav-link">
                                                                                <i className="fas fa-th-large" />
                                                                                <span>Location SongList</span>
                                                                        </Link>
                                                                        <Link to="/timelist" className="nav-link">
                                                                                <i className="fas fa-th-large" />
                                                                                <span>Time SongList</span>
                                                                        </Link>
                                                                        <Link to="/myprofile" className="nav-link">
                                                                                <i className="fas fa-th-large" />
                                                                                <span>Profile Detail</span>
                                                                        </Link>
                                                                </>
                                                            )}
                                                    </li>
                                            </ul>
                                    </div>
                            </div>
                    </div>
            </>

        );
}