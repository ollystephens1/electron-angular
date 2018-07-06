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
  public showAddComponent: boolean = false;
  public ready: boolean = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
    this.projects$.subscribe((projects: Project[]) => (this.ready = true));
  }

  cancelAddProject() {
    this.showAddComponent = false;
  }
}
