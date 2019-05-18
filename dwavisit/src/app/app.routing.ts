import {RouterModule, Routes} from '@angular/router';
import { VisaoGeralComponent } from './panel/visao-geral/visao-geral.component';
import { MoradoresComponent } from './panel/moradores/moradores.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { VisitantesComponent } from './panel/visitantes/visitantes.component';
import { InfoComponent } from './panel/info/info.component';
import { CadastroMoradoresComponent } from './cadastro/cadastro-moradores/cadastro-moradores.component';
import { AppModule } from './app.module';
import { CadastroVisitantesComponent } from './cadastro/cadastro-visitantes/cadastro-visitantes.component';
import { AppComponent } from './app.component';


const APP_ROUTES: Routes = [
  {path: '', component: VisaoGeralComponent},
  {path: 'visao-geral', component: VisaoGeralComponent},
  {path: 'moradores', component: MoradoresComponent},
  {path: 'visitantes', component: VisitantesComponent},
  {path: 'info', component: InfoComponent},
  {path: 'cadastro-morador', component: CadastroMoradoresComponent},
  {path: 'cadastro-visitante', component: CadastroVisitantesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
