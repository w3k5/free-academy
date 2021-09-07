import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@pages/auth-page/auth-page.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('@pages/profile-page/profile-page.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('@pages/course-page/course-main-page.module').then((m) => m.CourseMainPageModule),
  },
  {
    path: '',
    loadChildren: () => import('@pages/main-page/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: '404',
    loadChildren: () => import('@pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
  // How to implement page
  // {
  //   path: 'example',
  //   loadChildren: () => import('@pages/_example-page/example-page.module').then((m) => m.ExamplePageModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
