import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    return this.userservice.getUsers()
    .subscribe(
      users => {
        console.log(users);
        this.users = users
      }
    );
  }


}
