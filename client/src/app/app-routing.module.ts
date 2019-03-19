import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Header route
import { HeaderComponent } from './header/header.component';

// Content routes
import { ResumeComponent } from './content/resume/resume.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { BlogComponent } from './content/blog/blog.component';
import { ContactComponent } from './content/contact/contact.component';

const routes: Routes = [
	{path: '', component: ResumeComponent},
	{path: 'portfolio', component: PortfolioComponent},
	{path: 'blog', component: BlogComponent},
	{path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
