import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getTeamMembersSummary(): any[] {
    let teamMembersSummary = [
      { Region: 'East', TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
      { Region: 'West', TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
      { Region: 'North', TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
      { Region: 'South', TeamMembersCount: 16, TemporarilyUnavailableMembers: 6 },
    ];
    return teamMembersSummary;
  }
}
