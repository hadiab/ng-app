import { Class } from './../../models/class';
import { Person } from './../../models/person';


export class Pupil extends Person {
   class: Class
   grades: Record<string, number>

   constructor(id: string, fullname: string, age: number, city: string, image: string, _class: Class, grades: Record<string, number>) {
      super(id, fullname, age, city, image)
      this.class = _class
      this.grades = grades
   }
}
