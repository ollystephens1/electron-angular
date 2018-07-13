import { Component, Output, Input, EventEmitter } from '@angular/core';
import { RequirementService } from '../../services/requirement.service';
import { Requirement, Project } from '../../models';

@Component({
  selector: 'requirement-add',
  templateUrl: './requirement-add.component.html',
  styleUrls: ['./requirement-add.component.css']
})
export class RequirementAddComponent {
  public requirement: Requirement = new Requirement();

  @Input() project: Project;
  @Output() onCancel = new EventEmitter();
  @Output() onAdded = new EventEmitter();

  constructor(private requirementService: RequirementService) { }

  save(): void {
    this.requirement.project = this.project;
    this.requirementService.addRequirement(this.requirement).subscribe((requirement: Requirement) => {
      this.onAdded.emit(requirement);
    });
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
