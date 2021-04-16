import { AddContactComponent } from './components/contactos/add-contact/add-contact.component';
import { ListContactsComponent } from './components/contactos/list-contacts/list-contacts.component';
import { ScheduleComponent } from './components/contactos/schedule/schedule.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task-list/task/task.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
     MiComponente,
    PeliculasComponent,
    HomeComponent,
    ListComponent,
    TestComponent,
    TaskComponent,
    TaskListComponent,
    ScheduleComponent,
    ListContactsComponent,
    AddContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
