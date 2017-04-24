import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AffordabilityComponent } from './affordability/affordability.component';
import { InterestComponent } from './interest/interest.component';
import { Invest101Component } from './invest101/invest101.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'affordability', component: AffordabilityComponent },
    { path: 'interest', component: InterestComponent },
    { path: 'investment-101', component: Invest101Component },
    { path: 'resources', component: ResourcesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
