import { Teacher } from './models/teacher';
import { Injectable } from '@angular/core';
import { TEACHERS } from 'src/app/teachers/models/dummy-data-teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() {}

  getTeachers(): Teacher[] {
    return TEACHERS
  }
}
