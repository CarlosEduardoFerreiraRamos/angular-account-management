import { User } from './user';

export class AuthUser extends User {
  token: string;
  admin: boolean;
  constructor(data?: any) {
    super(data);
    if (data) {
      this.token = data.token;
      this.admin = !!data.admin;
    }
  }
}
