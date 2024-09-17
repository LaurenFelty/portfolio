import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route to HomeComponent
  { path: 'about', component: AboutComponent }, // About page route
  { path: 'projects', component: ProjectsComponent }, // Projects page route
  { path: 'contact', component: ContactComponent }, // Contact page route
  { path: '**', redirectTo: '' }, // Wildcard route to redirect to HomeComponent for undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
