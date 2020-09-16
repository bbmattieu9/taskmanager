import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import projects model
import { Project } from '../model/projects';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


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

  createProduct(project: Project): Observable<Project> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    project.projectID = null;
    return this.httpSrv.post<Project>(this.projectsUrl, project, { headers })
      .pipe(
        tap(data => console.log('createProject: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }




  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

