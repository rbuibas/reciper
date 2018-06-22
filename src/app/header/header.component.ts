import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersistenceService } from '../shared/persistence.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedPane = new EventEmitter<string>();

  constructor(private persist: PersistenceService) { }

  ngOnInit() {
  }

  onSave() {
    this.persist.storeData()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetch() {
    this.persist.fetchData();
  }
}
