import { Component } from '@angular/core';
import { SearchFormService } from '../search-form/search-form.service';
import { Subscription } from 'rxjs';
import { Response } from '../definitions';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  pages: number[] = [];
  subscription: Subscription;
  response!: Response | null;

  constructor(private searchFormService: SearchFormService) {
    this.subscription = this.searchFormService.onMessage().subscribe(data => {
      if (data) {
        this.response = data;
        let counter = Math.ceil(Number(data.totalResults) / 10);
        this.pages = [];
        for (let i = 0; i < counter; i++) {
          this.pages.push(i + 1);
        }
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  changePage(p: number) {
    console.log(p);
    this.searchFormService.changePage(p);
  }
}
