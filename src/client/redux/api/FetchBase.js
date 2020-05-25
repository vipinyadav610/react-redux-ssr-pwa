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
    return "https://jsonplaceholder.typicode.com" + url;
  }

  get(url, data) {
    return fetch(this.constructUrl(url) + this.serialize(data), {
      method: "GET",
      headers: this.jsonHeaders,
    }).then((response) => response.json());
  }
}
export default new FetchBase();
