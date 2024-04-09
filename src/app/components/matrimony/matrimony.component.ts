import { Component } from '@angular/core';
// import { FormGroup,FormBuilder } from '@angular/forms';

interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  occupation: string;
}

@Component({
  selector: 'app-matrimony',
  templateUrl: './matrimony.component.html',
  styleUrls: ['./matrimony.component.css']
})
export class MatrimonyComponent {
  users: User[] = [];
  newUser: User = {} as User;
  editedUser: User = {} as User;
  isEditing = false;
  searchKeyword = '';

  // userForm:FormGroup;

  addUser(): void {
    this.users.push(this.newUser);
    this.newUser = {} as User;
    console.log(this.users)
    console.log(this.newUser)
  }

  editUser(user: User): void {
  }

  saveEditedUser(): void {
  }

  cancelEdit(): void {
  }

  deleteUser(user: User): void {
    // console.log(user)
    this.users = this.users.filter(u => u.id !== user.id);
  }

  get filteredUsers(): User[] {
    return [];
  }
  
}
