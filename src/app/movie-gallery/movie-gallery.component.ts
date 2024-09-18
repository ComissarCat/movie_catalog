import { Component, Input } from '@angular/core';
import { Response } from '../definitions';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-movie-gallery',
  standalone: true,
  imports: [MovieCardComponent, PaginationComponent],
  templateUrl: './movie-gallery.component.html',
  styleUrl: './movie-gallery.component.scss'
})
export class MovieGalleryComponent {
  @Input() moviesData?: Response;
}
