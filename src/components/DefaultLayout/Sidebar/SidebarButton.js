import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRoad, faLightbulb, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const SidebarButton = [
    {
        title: 'Home',
        icon: faHouse,
        to: '/',
    },

    {
        title: 'Lộ trình',
        icon: faRoad,
        to: '/learning-path',
    },

    {
        title: 'Học',
        icon: faLightbulb,
        to: '/courses',
    },

    {
        title: 'Blog',
        icon: faNewspaper,
        to: 'blog',
    },
];

export default SidebarButton;
