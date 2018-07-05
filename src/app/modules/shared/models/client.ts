import { User } from './user';

export class Client {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;

  constructor(props?: any) {
    if (props) {
      this.name = props.name || '';
      this.description = props.description || '';
      this.createdAt = props.createdAt || new Date();
      this.updatedAt = props.updatedAt || new Date();
      this.createdBy = props.createdBy;
      this.updatedBy = props.updatedBy;
    }
  }
}
