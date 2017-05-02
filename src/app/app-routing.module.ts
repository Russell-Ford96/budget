import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AffordabilityComponent } from './affordability/affordability.component';
import { InterestComponent } from './interest/interest.component';
import { Invest101Component } from './invest101/invest101.component';
import { ResourcesComponent } from './resources/resources.component';
import { LoginFormComponent } from './login/login.component';
import { RegisterFormComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './profile/logout.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'affordability', component: AffordabilityComponent },
    { path: 'interest', component: InterestComponent },
    { path: 'investment-101', component: Invest101Component },
    { path: 'resources', component: ResourcesComponent },
    { path: 'login', component: LoginFormComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterFormComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'logout', component: LogoutComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
