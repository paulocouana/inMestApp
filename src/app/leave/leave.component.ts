import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})
export class LeaveComponent implements OnInit{
  //create a variable as to mimic as it comes from a server
  leaves: any[] = [];              //array or list of leaves
  
  //Below is our constructor injector - why? Because we are using the constructor to inject code
  constructor(
    private leaveService: LeaveService // this is what we call constructor injection
  ){}

  ngOnInit(): void {
    this.getMyLeaves();
  }
  //This function is within the context of the class LeaveComponent
  getMyLeaves(){
    this.leaveService.getLeaves().subscribe((response: any) => {
      this.leaves = response;//gest the response from the "server" and assigns it to the leaves
    });
  }
}
