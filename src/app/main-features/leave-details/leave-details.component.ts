import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.scss'
})
export class LeaveDetailsComponent implements OnInit{
  leaveId = '';
  createdBy = '';
  leave: any;
  constructor(
    private route: ActivatedRoute,
    private leaveService: LeaveService
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.leaveId = param["id"];
      this.createdBy = param["name"];
    })
  }

  //We will call this function when the url changes
  getMyLeaveById(id: number){
    this.leaveService.getLeaveById(id).subscribe(response => {
      this.leave = response;
      this.getMyLeaveById(parseInt(this.leaveId));
    });
  }
}
