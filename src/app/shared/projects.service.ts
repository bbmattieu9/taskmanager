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

  getAllProjects(): Observable<Project[]> {
    return this.httpSrv.get<Project[]>(this.projectsUrl);
  }
}

