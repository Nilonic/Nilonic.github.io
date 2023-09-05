function showDesktopNotification(title, message, iconUrl) {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notifications");
      return;
    }
  
    // Check if the user has granted permission to show notifications
    if (Notification.permission === "granted") {
      // Create and show the notification
      var notification = new Notification(title, {
        body: message,
        icon: iconUrl,
      });
    } else if (Notification.permission !== "denied") {
      // Request permission from the user
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          // Create and show the notification
          var notification = new Notification(title, {
            body: message,
            icon: iconUrl,
          });
        } else {
          console.log("Permission for notifications denied");
        }
      });
    }
  }
  
  // Example usage:
  showDesktopNotification("Hello!", "This is a desktop notification.", "https://example.com/icon.png");
  