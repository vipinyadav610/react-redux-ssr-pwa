import fetch from "isomorphic-fetch";
class FetchBase {
  get jsonHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  serialize(obj = {}) {
    return Object.keys(obj).length
      ? "?" +
          Object.keys(obj)
            .map(
              (k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`
            )
            .join("&")
      : "";
  }

  // this will construct the API url
  constructUrl(url) {
    return "https://hn.algolia.com/api/v1" + url;
  }

  get(url, data) {
    return fetch(this.constructUrl(url) + this.serialize(data), {
      method: "GET",
    }).then((response) => response.json());
  }
}
export default new FetchBase();
