import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path: '', component: ContentComponent},
];
