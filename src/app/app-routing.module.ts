import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_Services/auth.guard';
const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { 
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) ,
    canActivateChild:[AuthGuard]
  },
  
  // { path: 'Layout', loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule) },
  // { path: 'Job', loadChildren: () => import('./pages/job/job.module').then(m => m.JobModule) },
  // { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
  // { path: 'Mag', loadChildren: () => import('./pages/mag-info/mag-info.module').then(m => m.MagInfoModule) },
  // { path: 'log', loadChildren: () => import('./pages/log/log.module').then(m => m.LogModule) },
  // { path: 'parameter', loadChildren: () => import('./pages/parameter/parameter.module').then(m => m.ParameterModule) },
  // { path: 'plc-setting', loadChildren: () => import('./pages/plc-setting/plc-setting.module').then(m => m.PlcSettingModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
