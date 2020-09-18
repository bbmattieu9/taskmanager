import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as projects from '../api/projects/projects.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'taskManager';

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  projs: any = (projects as any).default;

  ngOnInit(): void {

   this.searchForm = this.fb.group({
      Search: ['', Validators.required]
     });

   console.log('[JSON File]:', this.projs);

  }
}
