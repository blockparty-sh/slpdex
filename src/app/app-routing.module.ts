import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OfferComponent } from './shared/offer/offer.component';
import { SLPRoutes } from './slp-routes';

const routes: Routes = [
  {
    path: SLPRoutes.landing,
    component: LandingComponent,
    data: {
      animation: 'landing',
    },
  },
  {
    path: SLPRoutes.offer,
    component: OfferComponent,
    data: {
      animation: SLPRoutes.offer,
    },
  },
  {
    path: SLPRoutes.tokens,
    loadChildren: './tokens/tokens.module#TokensModule',
    data: {
      animation: SLPRoutes.tokens,
    },
  },
  {
    path: SLPRoutes.balance,
    loadChildren: './balance/balance.module#BalanceModule',
    data: {
      animation: SLPRoutes.balance,
    },
  },

  {
    path: SLPRoutes.wallet,
    loadChildren: './wallet/wallet.module#WalletModule',
    data: {
      animation: SLPRoutes.wallet,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
