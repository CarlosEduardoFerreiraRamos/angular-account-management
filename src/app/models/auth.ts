import { User } from './user';

export class AuthUser extends User {
  token: string;
  constructor(data?: any) {
    super(data);
    if (data) {
      this.token = data.token;
    }
  }
}
