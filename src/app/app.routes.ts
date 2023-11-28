import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UserDetailsComponent } from './main-features/user-details/user-details.component';
import { LeaveDetailsComponent } from './main-features/leave-details/leave-details.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user-details', component: UserDetailsComponent},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'leave', component: LeaveComponent},
    {path: 'leave/:id/name', component: LeaveDetailsComponent},//
    {path: 'analytics', component: AnalyticsComponent}

    //In order to define a route through url we 
];

//define all components
//define all Router links in our side-nav
//define the path for all tabs in our app.router.ts