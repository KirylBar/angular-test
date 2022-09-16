import { Component, OnInit } from '@angular/core';
import { TypeUser } from './models/userData';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  users: TypeUser[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe((users) => {
      this.users = users;
    });
  }
}
