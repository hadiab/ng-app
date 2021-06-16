import { Teacher } from "src/app/teachers/models/teacher"

export class Class {
  id: string = ""
  name: string = ""
  teacher: Teacher = new Teacher;
  studentCount: number = 0
  address: string = ""
}
