import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  noOfTeamMemners: number;
  totalCostOfAllProjects: number;
  pendingTasks: number;
  upComingProjects: number;
  projectCost: number;

  currentExpenditure: number;
  availableFunds: number;

  constructor() { }

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'Adeleke Adeyemi';
    this.noOfTeamMemners = 100;
    this.totalCostOfAllProjects = 300;
    this.pendingTasks = 15;
    this.upComingProjects = 2;
    this.projectCost = 2113507;
    this.currentExpenditure = 96788;
    this.availableFunds = 52538;
  }

}
