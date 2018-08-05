import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/Service';
import { Issue } from 'src/app/Models';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];


  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested ... ');
      console.log(this.issues);
    });
  }

}
