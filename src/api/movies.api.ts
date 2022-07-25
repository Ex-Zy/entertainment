import type IMovie from "@/types/movie";
import BaseApi from "./base.api";

class MoviesApi extends BaseApi {
  static async getAll(): Promise<IMovie[]> {
    const data = await this.fetch("/movies");

    return data;
  }
}

export default MoviesApi;
