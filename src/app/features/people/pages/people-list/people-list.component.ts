import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  //styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent {
  //private authFacade = inject(AuthFacade);
  //user = this.authFacade.currentUser; // Signal do usuário logado

  logout() {
    //this.authFacade.logout();
  }
}
