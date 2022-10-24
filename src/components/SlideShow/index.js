import styles from './SlideShow.module.scss';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

const settings = {
    dots: true,
    dotsClass: cx('slick-btn slick-dots'),
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: cx('slick-item'),
};

const SlideShow = ({ SlideData }) => {
    return (
        <Slider {...settings}>
            {SlideData.map((data, index) => {
                return (
                    <div key={index}>
                        <div className={cx('slider')}>
                            <div className={cx('Slideshow-left')}>
                                <h2>{data.title}</h2>
                                <p>{data.content}</p>
                                <a href="/">{data.btnTitle}</a>
                            </div>
                            <div className={cx('Slideshow-right')}>
                                <img src={data.image} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
};

export default SlideShow;
