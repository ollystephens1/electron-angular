import { User } from './user';

export class Client {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;

  constructor(props?: any) {
    if (props) {
      this._id = props._id;
      this.name = props.name || '';
      this.description = props.description || '';
      this.createdAt = props.createdAt || new Date();
      this.updatedAt = props.updatedAt || new Date();
      this.createdBy = props.createdBy;
      this.updatedBy = props.updatedBy;
    }
  }
}
