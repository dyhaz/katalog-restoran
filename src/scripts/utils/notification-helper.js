const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this._checkAvailability()) {
      // Notification not supported in this browser
      return;
    }

    if (!this._checkPermission()) {
      // User did not yet granted permission
      this._requestPermission();
      return;
    }

    this._showNotification({ title, options });
  },

  _checkAvailability() {
    return ('Notification' in window);
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      // Notification Denied
    }

    if (status === 'default') {
      // Permission closed
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    await serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
