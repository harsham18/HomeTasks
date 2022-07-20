import { Injectable } from '@angular/core';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  usersList: User[] = [
    {
      id: '1295',
      firstName: 'Ravi',
      lastName: 'Teja',
      age: 23,
      login: 'ravi@epam.com',
      password: '12*****',
      isDeleted: true,
    },
    {
      id: '9c25',
      firstName: 'Ram',
      lastName: 'Charan',
      age: 22,
      login: 'ramc@epam.com',
      password: '34*****',
      isDeleted: false,
    },
    {
      id: '9c26',
      firstName: 'Prabhas',
      lastName: 'Raju',
      age: 21,
      login: 'Raju123@epam.com',
      password: '88*****',
      isDeleted: true,
    },
    {
      id: '9c27',
      firstName: 'Pawan',
      lastName: 'Kalyan',
      age: 23,
      login: 'Kalyan23@epam.com',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '9c28',
      firstName: 'Varun',
      lastName: 'Tej',
      age: 23,
      login: 'varun123@epam.com',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '9c29',
      firstName: 'Sharukh',
      lastName: 'Khan',
      age: 23,
      login: 'sharukh121@epam.com',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '1299',
      firstName: 'Desskshith',
      lastName: 'Nampally',
      age: 23,
      login: 'deeksh@epam.com',
      password: '09*****',
      isDeleted: true,
    },
  ];

  toggleActivation(id: string, status: boolean) {
    let user: any = this.usersList.find((user: User) => user.id === id);
    user.isDeleted = status;
  }
}
