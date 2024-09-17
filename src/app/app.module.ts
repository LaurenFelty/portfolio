import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for form handling

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for template-driven forms
    AppRoutingModule, // Include routing in the main module
  ],
  providers: [],
  bootstrap: [AppComponent], // Root component
})
export class AppModule {}
