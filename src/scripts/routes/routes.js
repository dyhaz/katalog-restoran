import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Restaurants from '../views/pages/restaurants';
import WriteReview from '../views/pages/write-review';

const routes = {
  '/': Restaurants, // default page
  '/search/:id': Restaurants,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/review/:id': WriteReview,
};

export default routes;
