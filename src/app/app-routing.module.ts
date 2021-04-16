import { AddContactComponent } from './components/contactos/add-contact/add-contact.component';
import { ScheduleComponent } from './components/contactos/schedule/schedule.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component'; // Add this


const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'test', component: TestComponent },           // Add this
  { path: 'task-list', component: TaskListComponent },           // Add this
  { path: 'contact-list', component: ScheduleComponent },   
  { path: 'add-contact', component: AddContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'contact-list' } 
           // Add this


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],//para que funcione el modulo routes en el html
  exports: [RouterModule]
})
export class AppRoutingModule { }