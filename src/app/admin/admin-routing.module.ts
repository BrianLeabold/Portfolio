import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';

const  routes: Routes  = [
{ path:  'admin', component:  AdminComponent,
children: [
    { path:  'home', component:  HomeComponent },
    { path:  'project', component:  ProjectComponent },
    { path:  'list', component:  ProjectListComponent },
    { path:  'create', component:  ProjectCreateComponent },
    { path:  'update', component:  ProjectUpdateComponent },
    { path: 'users', component: UsersComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: 'details/:id', component: EditUserComponent, resolve: {data : EditUserResolver} }
]
}
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export  class  AdminRoutingModule { }
