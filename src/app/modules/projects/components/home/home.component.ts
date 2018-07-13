import { Project } from './../../../shared/models/project';
import { Observable } from 'rxjs';
import { ProjectService } from './../../../shared/services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public showAddComponent = false;
  public ready = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects$ = this.projectService.getProjects();
    this.projects$.subscribe((projects: Project[]) => (this.ready = true));
  }

  onProjectAdded(): void {
    this.getProjects();
  }

  cancelAddProject(): void {
    this.showAddComponent = false;
  }
}
