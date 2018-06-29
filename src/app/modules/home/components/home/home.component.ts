import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from './../../../shared/services/project.service';
import { ActivityService } from './../../../shared/services/activity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects$: Observable<any>;
  public activities$: Observable<any>;

  constructor(
    private projectService: ProjectService,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
    this.activities$ = this.activityService.getActivities();
  }
}
