import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  api_key = "23a1dc1a155f45fab50d958ef5930628";

  constructor(private http: HttpClient) {}


  getArticles(countryCode: string,page: number) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&page=${page}&apiKey=` +
        this.api_key
    );
  }

  searchArticles(keyword:string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?q=${keyword}&language=en&apiKey=` +
        this.api_key
    );
  }




}
