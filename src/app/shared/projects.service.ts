import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import projects model
import { Project } from '../model/projects';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = 'api/projects';

  constructor(private httpSrv: HttpClient) { }

  // GET all projects
  getAllProjects(): Observable<Project[]> {
    return this.httpSrv.get<Project[]>(this.projectsUrl);
  }

  // POST a new project
  createProject(newProject: Project): Observable<Project>{
    return this.httpSrv.post<Project>(this.projectsUrl, newProject);
  }
}

