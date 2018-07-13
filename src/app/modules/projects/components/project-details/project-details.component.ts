import { Requirement } from './../../../shared/models/requirement';
import { extend } from 'lodash';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './../../../shared/models/client';
import { ClientService } from './../../../shared/services/client.service';
import { ProjectService } from '../../../shared/services/project.service';
import { Project } from '../../../shared/models';


@Component({
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  public project: Project;
  public showDeleteConfirm = false;
  public showAddRequirement = false;

  constructor(
    private projectService: ProjectService,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.project = this.route.snapshot.data.project;
  }

  save(): void {
    this.projectService.updateProject(this.project).subscribe((project: Project) => {
      this.project = project;
    });
  }

  delete(): void {
    this.projectService.delete(this.project._id).subscribe(response => {
      this.router.navigate(['/projects']);
    });
  }

  toggleDeleteConfirm(): void {
    this.showDeleteConfirm = !this.showDeleteConfirm;
  }

  onRequirementAdded(requirement: Requirement): void {
    this.project.requirements.push(requirement);
    this.showAddRequirement = false;
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
}
