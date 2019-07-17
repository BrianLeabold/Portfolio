import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, ProjectComponent, ProjectListComponent, ProjectCreateComponent,
    ProjectUpdateComponent, UsersComponent, EditUserComponent, AvatarDialogComponent,
    NewUserComponent, AdminComponent, LoginComponent],
  imports: [
    CommonModule, AdminRoutingModule
  ]
})
export class AdminModule { }
