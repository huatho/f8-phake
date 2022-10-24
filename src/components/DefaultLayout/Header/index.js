import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faBell, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { HeaderImages } from '~/Assets/Image';
import Menu from '~/components/Menu';
import MyCourses from './MyCourses';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={HeaderImages[0]} />
                <h4>Học Lập Trình Để Đi Làm</h4>
            </div>

            <Tippy
                render={(attrs) => (
                    <Menu>
                        <h2>HEllo</h2>
                        <h2>HEllo</h2>
                        <h2>HEllo</h2>
                        <h2>HEllo</h2>
                    </Menu>
                )}
                interactive
                visible={false}
            >
                <div className={cx('search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
                    <input placeholder="Tìm kiếm khóa học, bài viết, video, ..." />
                    <FontAwesomeIcon icon={faXmark} className={cx('icon')} />
                </div>
            </Tippy>

            <div className={cx('action')}>
                <Tippy
                    render={(attrs) => (
                        <Menu>
                            <div className={cx('menu-courses')}>
                                <h3 className={cx('abc')}>Khóa học của tôi</h3>
                                <ul className={cx('list')}>
                                    {MyCourses.map((course, index) => (
                                        <li key={index} className={cx('list-item')}>
                                            <img src={course.image} />
                                            <div className={cx('info')}>
                                                <h5>{course.title}</h5>
                                                <p>{course.time}</p>
                                                <div className={cx('completed')}>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Menu>
                    )}
                    trigger="click"
                    interactive
                    placement="bottom-end"
                >
                    <div className={cx('menu-btn')}>Khóa học của tôi</div>
                </Tippy>

                <Tippy
                    render={(attrs) => (
                        <Menu>
                            <div className={cx('notification-menu')}>
                                <div className={cx('notification-header')}>
                                    <h5>Thông báo</h5>
                                    <FontAwesomeIcon icon={faEllipsis} className={cx('icon')} />
                                </div>
                                <ul className={cx('notification-content')}>
                                    <li>
                                        <img src={HeaderImages[0]} />
                                        <div>
                                            <p>
                                                Chào mừng Hứa Thọ đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi
                                                mục tiêu tới cùng bạn nhé !{' '}
                                            </p>
                                            <span>một năm trước</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Menu>
                    )}
                    interactive
                    placement="bottom-end"
                    trigger="click"
                >
                    <FontAwesomeIcon icon={faBell} className={cx('icon')} />
                </Tippy>

                <img src={HeaderImages[1]} className={cx('avata')} />
            </div>
        </header>
    );
}

export default Header;
