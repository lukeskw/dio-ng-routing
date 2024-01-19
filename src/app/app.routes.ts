import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent, children: [
    { path: ':id', component: PortfolioComponent },
  ]},
  { path: '**', redirectTo: ''},
];
