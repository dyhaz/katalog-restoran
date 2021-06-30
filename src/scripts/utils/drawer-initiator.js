const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    document.addEventListener('click', (evt) => {
      const navElement = document.getElementById('drawer');
      let targetElement = evt.target; // clicked element

      if (drawer.classList.contains('open')) {
        do {
          if (targetElement === navElement) {
            // This is a click inside. Do nothing, just return.
            return;
          }
          // Go up the DOM
          targetElement = targetElement.parentNode;
        } while (targetElement);

        // This is a click outside.
        this._toggleDrawer(evt, drawer);
      }
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
