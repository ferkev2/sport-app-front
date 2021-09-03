import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'team/:id', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
