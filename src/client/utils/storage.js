export const getItem = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  } else {
    console.log("we are running on the server");
  }
};

export const setItem = (key, value) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  } else {
    console.log("we are running on the server");
  }
};

export const removeItem = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(key);
  } else {
    console.log("we are running on the server");
  }
};
