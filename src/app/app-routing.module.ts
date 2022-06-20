import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { TechComponent } from './tech/tech.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
{path:"" ,component:TopheadingComponent},
{path:"tech" ,component:TechComponent},
{path:"business" ,component:BusinessComponent},
{path:"health" ,component:HealthComponent},
{path:"entertainment" ,component:EntertainmentComponent},
{path:"about" ,component:AboutComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
