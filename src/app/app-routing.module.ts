import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'photo-upload',
    loadChildren: () => import('./school/photo-upload/photo-upload.module').then( m => m.PhotoUploadPageModule)
  },
  {
    path: 'persons-registor',
    loadChildren: () => import('./school/persons-registor/persons-registor.module').then( m => m.PersonsRegistorPageModule)
  },
  {
    path: 'childrens',
    loadChildren: () => import('./school/childrens/childrens.module').then( m => m.ChildrensPageModule)
  },  {
    path: 'childrens-list',
    loadChildren: () => import('./school/childrens-list/childrens-list.module').then( m => m.ChildrensListPageModule)
  },
  {
    path: 'workers-list',
    loadChildren: () => import('./school/workers-list/workers-list.module').then( m => m.WorkersListPageModule)
  },
  {
    path: 'management-list',
    loadChildren: () => import('./school/management-list/management-list.module').then( m => m.ManagementListPageModule)
  },
  {
    path: 'divers-list',
    loadChildren: () => import('./school/divers-list/divers-list.module').then( m => m.DiversListPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
