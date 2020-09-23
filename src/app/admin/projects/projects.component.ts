import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectsService } from '../../shared/projects.service';
import { Project } from '../../model/projects';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Project[];
  createProjectForm: FormGroup;
  ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private projectSrv: ProjectsService,
              private fb: FormBuilder) { }

              searchBy: string;
              searchText: string;

  projectObj: {
    projectID: 0,
    projectName: '',
    dateOfStart: '',
    teamSize: 0
  };


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

     if (!this.createProjectForm.valid) { return false; }

     this.projectObj = {
        // projectID: this.createProjectForm.get('projectID').value,
        projectID: 0,
        projectName: this.createProjectForm.get('projectName').value,
        dateOfStart: this.createProjectForm.get('startDate').value,
        teamSize: this.createProjectForm.get('teamSize').value
    };

     this.projectSrv.createProduct(this.projectObj)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (response) => {
          console.log('[Create New Project]:', response);
          // this.projects.push(this.createProjectForm.value);
          this.createProjectForm.reset();
         },
        (error) => { console.log('[Couldnt create project]', error); }
      );
  }

  onSearchProjects(): any {
    this.projectSrv.searchProjects(this.searchBy, this.searchText)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(
      (projects: Project[]) => {
        console.log('[Projects search Result]:', projects);
      },
      (error) => { console.log('[Something went wrong]:', error); }
    );
  }

  resetForm(): void {
    this.createProjectForm.reset();
  }

  ngOnInit(): void {
    this.getProjects();

    this.createProjectForm = this.fb.group({
      // projectID: ['', Validators.required],
      projectName: ['', [Validators.required, Validators.minLength(5)]],
      startDate: ['', Validators.required],
      teamSize: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
