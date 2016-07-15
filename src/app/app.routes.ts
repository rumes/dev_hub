import { provideRouter, RouterConfig } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: RouterConfig = [
  	{ path: '', component: AppComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'login', component: LoginComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
