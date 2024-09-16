import { Component, Output, EventEmitter } from '@angular/core';
import { SearchFormService } from './search-form.service';
import { FormsModule } from '@angular/forms';
import { Response } from '../definitions';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [FormsModule],
  providers: [SearchFormService],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  searchText: string = "";
  typeSelect: string = "";

  @Output() onLoadEvent = new EventEmitter<Response>();

  constructor(private searchFormService: SearchFormService) { }

  async action() {
    const data = await this.searchFormService.searchTitle(this.searchText, this.typeSelect);
    if (data.Response=="True") {
      this.onLoadEvent.emit(data);
    }
    else {
      //TODO:Сообщение пользователю в случае ошибки
    }
  }
}