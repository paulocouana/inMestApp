import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  userId = '';
  /*We are bringing our constructor to inject the class activated route.
  Gives a lot of information about the routes that have been loaded - any meta information about the activated route*/
  constructor(private route: ActivatedRoute){}//ActivatedRoute is a service that gives me information about the activated url
  ngOnInit():void {
    //this queryParams gives me access to all the changes in the url
    this.route.queryParams.subscribe(param =>{//the => means I am passing a function that doesn't have a name. Anytime there is an event this function calls itself. So we don't have to call it.
      console.log(param, 'query param');
      this.userId = param["id"];
    });
  }
}
