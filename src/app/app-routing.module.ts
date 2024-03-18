import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'infinitescrollexample',
    loadChildren: () => import('./infinitescrollexample/infinitescrollexample.module').then( m => m.InfinitescrollexamplePageModule)
  },
  {
    path: 'progressbar-users',
    loadChildren: () => import('./progressbar-users/progressbar-users.module').then( m => m.ProgressbarUsersPageModule)
  },
  {
    path: 'qrgenerator',
    loadChildren: () => import('./qrgenerator/qrgenerator.module').then( m => m.QrgeneratorPageModule)
  },
  {
    path: 'admin-formulario',
    loadChildren: () => import('./admin-formulario/admin-formulario.module').then( m => m.AdminFormularioPageModule)
  },
  {
    path: 'admin-respuestas',
    loadChildren: () => import('./admin-respuestas/admin-respuestas.module').then( m => m.AdminRespuestasPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'conwaygame',
    loadChildren: () => import('./conwaygame/conwaygame.module').then( m => m.ConwaygamePageModule)
  },
  {
    path: 'algoritmos',
    loadChildren: () => import('./algoritmos/algoritmos.module').then( m => m.AlgoritmosPageModule)
  },
  {
    path: 'memorama',
    loadChildren: () => import('./memorama/memorama.module').then( m => m.MemoramaPageModule)
  },
  {
    path: 'covertidor',
    loadChildren: () => import('./covertidor/covertidor.module').then( m => m.CovertidorPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
