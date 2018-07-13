import { extend } from 'lodash';
import { Component, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { Client } from './../../../shared/models/client';
import { ClientService } from './../../../shared/services/client.service';
import { Project } from './../../../shared/models/project';
import { ProjectService } from '../../../shared/services/project.service';


@Component({
  selector: 'project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
  @Output() onCancel = new EventEmitter();
  @Output() onAdded = new EventEmitter();

  public project: Project = new Project();
  public changing = false;

  constructor(private projectsService: ProjectService, private clientService: ClientService) {}

  save(): void {
    this.projectsService.addProject(this.project).subscribe(response => {
      this.onAdded.emit();
      this.cancel();
    });
  }

  cancel(): void {
    this.onCancel.emit();
  }

  searchClients(): any {
    return query => {
      return this.clientService.getClients()
        .pipe(map((clients: Client[]) => {
          return clients.map((client: Client) => {
            return extend(client, { label: client.name, value: client._id });
          });
        }));
    };
  }

  setClient(client: Client): void {
    this.project.client = client;
    this.changing = false;
  }
}
