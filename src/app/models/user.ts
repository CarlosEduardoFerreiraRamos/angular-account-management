export class User {
  id: number;
  name: string;
  email: string;
  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
    }
  }
}
