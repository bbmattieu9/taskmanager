import { Component, OnInit } from '@angular/core';

import * as projects from '../api/projects/projects.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'taskManager';

  projs: any = (projects as any).default;

  ngOnInit(): void {
      console.log('[JSON File]:', this.projs);

  }
}
