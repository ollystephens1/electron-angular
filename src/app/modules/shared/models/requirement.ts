import { User } from './user';
import { Project } from './project';

export class Requirement {
  _id: string;
  title: string;
  description: string;
  project: Project;
  dueDate: Date;
  createdBy: User;
  updatedBy: User;
  createdAt: Date;
  updatedAt: Date;

  constructor(props?: any) {
    if (props) {
      this._id = props._id;
      this.title = props.name || '';
      this.description = props.description || '';
      this.project = props.project;
      this.dueDate = props.dueDate || undefined;
      this.createdAt = props.createdAt || new Date();
      this.updatedAt = props.updatedAt || new Date();
      this.createdBy = props.createdBy;
      this.updatedBy = props.updatedBy;
    }
  }
}
