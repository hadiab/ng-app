import { Class } from "src/app/models/class"
import { Person } from "src/app/models/person"


export class Teacher extends Person {
   profession: string[]
   classes: Class[]
   experienceYears: number
   hoursPerMonth: number
   hourSalary: number

   constructor(id: string, fullname: string, age: number, city: string, image: string,
      experienceYears: number, hoursPerMonth: number, hourSalary: number, profession: string[], classes: Class[]
   ) {
      super(id, fullname, age, city, image)
      this.experienceYears = experienceYears
      this.hoursPerMonth = hoursPerMonth
      this.hourSalary = hourSalary
      this.profession = profession
      this.classes = classes
   }
}
