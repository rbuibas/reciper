import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersistenceService } from '../../shared/persistence.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedPane = new EventEmitter<string>();

  constructor(private persist: PersistenceService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSave() {
    this.persist.storeData()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetch() {
    this.persist.fetchData();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  onLogOut() {
    this.authService.signOut();
  }

}
