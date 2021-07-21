import Detail from '../views/pages/detail';
import Restaurants from '../views/pages/restaurants';
import WriteReview from '../views/pages/write-review';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurants, // default page
  '/search/:id': Restaurants,
  '/detail/:id': Detail,
  '/review/:id': WriteReview,
  '/like': Like,
};

export default routes;
