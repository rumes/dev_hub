import { provideRouter, RouterConfig } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

export const routes: RouterConfig = [
  	{ path: '', component: AppComponent },
	{ path: 'user', component: UserComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
