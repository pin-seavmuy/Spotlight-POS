// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faBell, faThLarge, faShoppingBasket, faDatabase, faListAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// library.add(faBell, faThLarge, faShoppingBasket, faDatabase, faListAlt, faUsers);

// export { FontAwesomeIcon };


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBell, faShoppingBasket, faThLarge /* Add more icons as needed */ } from '@fortawesome/free-solid-svg-icons';

export default {
  name: "AdminDashboard",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      icons: {
        bell: faBell,
        shoppingBasket: faShoppingBasket,
        thLarge: faThLarge,
        // Add other icons here
      },
    };
  },
};
