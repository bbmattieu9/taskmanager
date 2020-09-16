import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../shared/projects.service';
import { Project } from '../../model/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private projectSrv: ProjectsService) { }


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

  ngOnInit(): void {
    this.getProjects();
  }

}
