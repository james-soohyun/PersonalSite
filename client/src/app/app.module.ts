import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing components
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FilterPipe } from './filter.pipe';
import { ResumeComponent } from './content/resume/resume.component';
import { ContactComponent } from './content/contact/contact.component';
import { BlogComponent } from './content/blog/blog.component';

// Importing routing rules, HTTP Service, and required Angular dependencies
import { AppRoutingModule } from './app-routing.module'; // Routing rules imported
import {HttpService} from './http.service';
import {FormsModule} from '@angular/forms'; // Importing FormsModule
import {HttpModule} from '@angular/http';
import { HeaderComponent } from './header/header.component'; // Importing HttpModule

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FilterPipe,
    ResumeComponent,
    ContactComponent,
    BlogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Include module in our AppModules
    HttpModule // Include module in our AppModules
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
