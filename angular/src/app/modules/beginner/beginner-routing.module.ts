import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'border-radius-previewer', pathMatch: 'full'},
  {
    path: 'border-radius-previewer', 
    loadChildren: () => import('./modules/border-radius-previewer/border-radius-previewer.module').then(m => m.BorderRadiusPreviewerModule)
  },
  {
    path: 'cause-effect',
    loadChildren: () => import('./modules/cause-effect/cause-effect.module').then(m => m.CauseEffectModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./modules/calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path: 'color-cycle',
    loadChildren: () => import('./modules/color-cycle/color-cycle.module').then(m => m.ColorCycleModule)
  },
  {
    path: 'count-down-timer',
    loadChildren: () => import('./modules/count-down-timer/count-down-timer.module').then(m => m.CountDownTimerModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginnerRoutingModule { }
