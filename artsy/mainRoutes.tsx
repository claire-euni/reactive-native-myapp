import Home from './Home';
import Auction from './Auction';
import Info from './Account';

const mainRoutes = [
  {
    name: 'Home',
    com: Home,
    inactiveIcon: require('./Images/home-outline.png'),
    activeIcon: require('./Images/home.png'),
  },
  {
    name: 'Auction',
    com: Auction,
    inactiveIcon: require('./Images/tooltip-outline.png'),
    activeIcon: require('./Images/tooltip.png'),
  },
  {
    name: 'Info',
    com: Info,
    inactiveIcon: require('./Images/account-outline.png'),
    activeIcon: require('./Images/account.png'),
  },
];

export default mainRoutes;
