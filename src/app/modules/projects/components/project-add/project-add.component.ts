import { Project } from './../../../shared/models/project';
import { Component, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../../../shared/services/project.service';

@Component({
  selector: 'project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
  @Output() onCancel = new EventEmitter();

  public project: Project = new Project();

  constructor(private projectsService: ProjectService) {}

  save(): void {
    this.projectsService.addProject(this.project).subscribe(response => {
      this.cancel();
    });
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
