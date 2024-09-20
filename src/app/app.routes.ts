import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { ForPatientsComponent } from './screens/for-patients/for-patients.component';
import { ServicesComponent } from './screens/services/services.component';
import { TeamComponent } from './screens/team/team.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'patients', component: ForPatientsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'team', component: TeamComponent },
];
