import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export class AxiosService {
  public openseaAxios = applyCaseMiddleware(
    axios.create({
      baseURL: "https://api.opensea.io/api/v1",
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_OPENSEA_API_KEY },
    })
  );
}
