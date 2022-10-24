import DefaultLayout from '~/components/DefaultLayout';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SlideShow from '~/components/SlideShow';
import SlideData from '~/Assets/data/SlideData';

const cx = classNames.bind(styles);

function Home() {
    return (
        <DefaultLayout>
            <div className={cx('wrapper')}>
                <SlideShow SlideData={SlideData} />
            </div>
        </DefaultLayout>
    );
}

export default Home;
