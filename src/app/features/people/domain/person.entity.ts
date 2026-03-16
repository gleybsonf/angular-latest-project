export class Person {
  id: string;
  name: string;
  lastName: string;
  email: string;
  createdAt: string;

  constructor(id: string, name: string, lastName: string, email: string, createdAt: string) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.createdAt = createdAt;
  }
}
