const BASE_URL = "http://localhost:9000"; // replace for production

class BaseApi {
  static async fetch(endpoint: string) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default BaseApi;
