import { InMemoryDbService } from 'angular-in-memory-web-api';

// import * as projects from '../../api/projects/projects.json';
import { Project } from '../model/projects';


export class InMemoryData implements InMemoryDbService {

  createDb(): { projects: Project[]} {

    const projects: Project[] = [
      {
        projectID: 1,
        projectName: 'Leaf Rake',
        dateOfStart: 'March 19, 2018',
        teamSize: 30,
      },
      {
        projectID: 2,
        projectName: 'Leaf Rake',
        dateOfStart: 'March 19, 2018',
        teamSize: 30,
      },
      {
        projectID: 3,
        projectName: 'Leaf Rake',
        dateOfStart: 'March 19, 2018',
        teamSize: 30,
      },
      {
        projectID: 4,
        projectName: 'Leaf Rake',
        dateOfStart: 'March 19, 2018',
        teamSize: 30,
      },
      {
        projectID: 5,
        projectName: 'Leaf Rake',
        dateOfStart: 'March 19, 2018',
        teamSize: 30,
      }
    ];
    return { projects };
  }
}
