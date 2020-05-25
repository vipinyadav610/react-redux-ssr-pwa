export const register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
};

export const unregister = () => {
  // eslint-disable-next-line
  if ("serviceWorker" in navigator) {
    // eslint-disable-next-line
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
};

export const initialize = () => {
  if (process.env.NODE_ENV === "development") {
    unregister();
  } else {
    register();
  }
};
