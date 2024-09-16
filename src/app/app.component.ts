import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { MovieGalleryComponent } from './movie-gallery/movie-gallery.component';
import { Response } from './definitions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchFormComponent, MovieGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public moviesData?: Response;

  loadMovies(response: Response) {
    this.moviesData = response;
  }
}
