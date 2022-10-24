import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import SidebarButton from './SidebarButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-more')}>
                <FontAwesomeIcon icon={faPlus} className={cx('btn-more-icon')} />
            </div>
            <ul className={cx('list')}>
                {SidebarButton.map((button, index) => (
                    <li key={index}>
                        <Link to={button.to}>
                            <FontAwesomeIcon icon={button.icon} className={cx('icon')} />
                            <p>{button.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
