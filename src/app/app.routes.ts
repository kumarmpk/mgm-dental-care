import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { ServicesComponent } from './screens/services/services.component';
import { PatientsComponent } from './screens/patients/patients.component';
import { TeamComponent } from './screens/team/team.component';
import { ContactComponent } from './screens/contact/contact.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "services", component: ServicesComponent },
    { path: "patients", component: PatientsComponent },
    { path: "team", component: TeamComponent },
    { path: "contact", component: ContactComponent }
];
