import { Observable } from 'rxjs';
import { ProjectService } from './../../../shared/services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects$: Observable<any>;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }
}
