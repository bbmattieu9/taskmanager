import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../shared/projects.service';
import { Project } from '../../model/projects';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  createProjectForm: FormGroup;

  constructor(private projectSrv: ProjectsService,
              private fb: FormBuilder) { }


  // tslint:disable-next-line: typedef
  getProjects() {
    return this.projectSrv.getAllProjects()
    .subscribe(
      (projects: Project[]) => {
        console.log('[Projects]:', projects);
        this.projects = projects;
    },
      (projectException) => { console.log('[An error occured]:', projectException); }
    );
  }

  // tslint:disable-next-line: typedef
  onCreateProject() {
     console.log('[onCreateProject Not Yet Implemented!!]');

     if (!this.createProjectForm.valid) { return false; }

     console.log('[New Project Created]', this.createProjectForm.value);
  }

  resetForm(): void {
    this.createProjectForm.reset();
  }

  ngOnInit(): void {
    this.getProjects();

    this.createProjectForm = this.fb.group({
      projectID: ['', Validators.required],
      projectName: ['', [Validators.required, Validators.minLength(5)]],
      startDate: ['', Validators.required],
      teamSize: ['', Validators.required]
    });
  }

}
