import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', 
      component: HomeComponent,
      data: { animationState: 'One' }
      },
      {path: 'Events', 
      component: EventsComponent,
      data: { animationState: 'Two' }
      },
      {path: 'Team', 
      component: TeamComponent,
      data: { animationState: 'Three' }
      },
      {
				path: '**',
				redirectTo: ''
			}
    ]
  },
  {
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
