import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';

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
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';

const  routes: Routes  = [
{ path:  'admin', component:  AdminComponent,
children: [
    { path: 'home', component:  HomeComponent, canActivate: [AdminGuard] },
    { path: 'login', component:  LoginComponent},
    { path: 'project', component:  ProjectComponent, canActivate: [AdminGuard] },
    { path: 'list', component:  ProjectListComponent, canActivate: [AdminGuard] },
    { path: 'create', component:  ProjectCreateComponent, canActivate: [AdminGuard] },
    { path: 'update', component:  ProjectUpdateComponent, canActivate: [AdminGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
    { path: 'new-user', component: NewUserComponent, canActivate: [AdminGuard] },
    { path: 'details/:id', component: EditUserComponent, resolve: {data : EditUserResolver}, canActivate: [AdminGuard] }
]
}
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export  class  AdminRoutingModule { }
