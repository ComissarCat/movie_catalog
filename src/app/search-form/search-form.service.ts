import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Response } from '../definitions';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchFormService {
  // Observable resourse source
  public resourseSource = new BehaviorSubject<Response | null>(null);
  s!: string;
  type!: string;
  pageNumber: number = 1;
  constructor() { }

  async searchTitle(s: string, type: string): Promise<Response> {
    this.s = s;
    this.type = type;
    this.pageNumber = 1;
    let data = await this.fetchFilms();
    this.resourseSource.next(data);
    return data;
  }

  async changePage(nextPage: number): Promise<void> {
    this.pageNumber = nextPage;
    this.resourseSource.next(await this.fetchFilms());
  }

  async fetchFilms(): Promise<Response> {
    const response = await fetch('http://www.omdbapi.com/?apikey=' + environment.apiKey + '&s=' + this.s + '&type=' + this.type + '&page=' + this.pageNumber);
    return await response.json();
  }

  onMessage(): Observable<Response | null> {
    return this.resourseSource.asObservable();
  }
}
