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

  clients: string[];
  projects: string[];
  years: number[] = [];
  teamMembersSummary = [];

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

    this.clients = [
      'Sterling Bank Plc',
      'Software Business Solution Consulting',
      'Flutterwave',
      'NIPS Systems'
    ];

    this.projects = [
      'EdInvest',
      'Edubanc',
      'EdPay',
      'EdClub'
    ];

    for (let year = 2020; year >= 2010; year--)
     {
      this.years.push(year);
     }

    this.teamMembersSummary = [
       { Region: 'East', TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
       { Region: 'West', TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
       { Region: 'North', TeamMembersCount: 17, TemporarilyUnavailableMembers: 1},
       { Region: 'South', TeamMembersCount: 16, TemporarilyUnavailableMembers: 6},
     ];


  }

}
