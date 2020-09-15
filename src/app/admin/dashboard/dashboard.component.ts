import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/dashboard.service';

@Component({
  selector: './app-dashboard',
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
  teamMembers = [];

  constructor(private dashboardSrv: DashboardService) { }

  onProjectChanged($event): void {
    if ($event.target.innerHTML === 'EdPay') {
      this.projectCost = 30000;
      this.currentExpenditure = 96000;
      this.availableFunds = 200000;
    } else if ($event.target.innerHTML === 'EdInvest') {
      this.projectCost = 20000;
      this.currentExpenditure = 91000;
      this.availableFunds = 205000;
    } else if ($event.target.innerHTML === 'Edubanc') {
      this.projectCost = 19000;
      this.currentExpenditure = 82000;
      this.availableFunds = 230000;
    } else if ($event.target.innerHTML === 'EdClub') {
      this.projectCost = 88000;
      this.currentExpenditure = 82000;
      this.availableFunds = 230000;
    }
  }


  capitalizeFirstLetter = (str) => {
    return str.toString().replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase();
    });
  }

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'Adeleke Adeyemi';
    this.noOfTeamMemners = 100;
    this.totalCostOfAllProjects = 300;
    this.pendingTasks = 15;
    this.upComingProjects = 0.2;
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

    for (let year = 2020; year >= 2010; year--) {
      this.years.push(year);
    }

    this.teamMembersSummary = this.dashboardSrv.getTeamMembersSummary();

    this.teamMembers = [
      {
        Region: 'East', Members: [
          { ID: 1, Name: 'Tosin Lasisi', Status: 'Available' },
          { ID: 2, Name: 'Folaranmi D', Status: 'Available' },
          { ID: 3, Name: 'Babatoonday Mattieu', Status: 'Available' },
          { ID: 4, Name: 'Michael Mensah', Status: 'Available' }
        ]
      },

      {
        Region: 'West', Members: [
          { ID: 1, Name: 'Tosin Aribisala', Status: 'Busy' },
          { ID: 2, Name: 'Folaranmi Dogo', Status: 'Busy' },
          { ID: 3, Name: 'Ahmed Dlaw', Status: 'Available' },
          { ID: 4, Name: 'Kola Stanbic', Status: 'Available' }
        ]
      },

      {
        Region: 'North', Members: [
          { ID: 1, Name: 'Kafayat Afolake', Status: 'Available' },
          { ID: 2, Name: 'Dele Dudu', Status: 'Busy' },
          { ID: 3, Name: 'Bimpe Mattieu', Status: 'Available' },
          { ID: 4, Name: 'Moliki Alao', Status: 'Busy' }
        ]
      },

      {
        Region: 'South', Members: [
          { ID: 1, Name: 'Bolaji Mobile', Status: 'Available' },
          { ID: 2, Name: 'Phebe Durojaye', Status: 'Available' },
          { ID: 3, Name: 'Bola Amos', Status: 'Busy' },
          { ID: 4, Name: 'Michael Sukurat', Status: 'Busy' }
        ]
      }
    ];

  }


}
