import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, render }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Menu;
