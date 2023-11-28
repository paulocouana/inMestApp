import { Injectable } from '@angular/core';
import { of } from 'rxjs';/*This way we are subscribing to a service using js - 
Asyncronous means an activity doesn't stops other ones from moving when it is not working

- To simulate this, we are using the { of }
*/

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private leavesDB = [
  {
    id: 1, 
    leave_type: "Maternity", 
    start_date: "Dec 20, 2023", 
    end_date: "Mar 20, 2024", 
    created_by: "Paulo", 
    status: "PENDING", 
    data_created: "Nov 27, 2023", 
    last_modified: "Nov 27, 2023", 
    status_changed_by: "Paulo"
  },

  {
    id: 2, 
    leave_type: "Maternity", 
    start_date: "Feb 20, 2023", 
    end_date: "May 01, 2024", 
    created_by: "Suad", 
    status: "PENDING", 
    data_created: "Nov 27, 2023", 
    last_modified: "Nov 27, 2023", 
    status_changed_by: "Olivia"
  }];
  
  constructor() { }

  /*observable are strings of events that people subscribe to it. We can also say that we can see observable as a mailing list that people subscribe to it.
      We can use observable when we don't know when the result will be returned or will be completed.*/
  
    
  /*
  This function gets all leaves
  */
  getLeaves(){
    return of(
      this.leavesDB      
    );
  }

  getLeaveById(id: number){
    const leaveData = this.leavesDB.find(element => element.id === id);
    return of(leaveData);
  }
}