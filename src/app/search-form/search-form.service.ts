import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {

  constructor() { }

  async searchTitle(s: string, type: string): Promise<Response> {
    const response = await fetch('http://www.omdbapi.com/?apikey=' + environment.apiKey + '&s=' + s + '&type=' + type);
    return await response.json();
  }
}
