import { User } from './user';

export class Account extends User {
  account: string;
  agency: string;
  documentId: string;
  balancy: number;
  admin: boolean;
  constructor(data?: any) {
    super(data);
    if (data) {
      this.account = data.account;
      this.agency = data.agency;
      this.documentId = data.documentId;
      this.balancy = data.balancy;
      this.admin = !!data.admin;
    }
  }
}
