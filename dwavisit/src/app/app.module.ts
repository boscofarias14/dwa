import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatIconModule, MatToolbarModule , MatListModule, MatGridListModule, MatDividerModule } from '@angular/material';
import { MatTableModule, MatButtonModule, MatInputModule, MatRadioModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelComponent } from './panel/panel.component';
import { VisaoGeralComponent } from './panel/visao-geral/visao-geral.component';
import { MoradoresComponent } from './panel/moradores/moradores.component';
import { VisitantesComponent } from './panel/visitantes/visitantes.component';
import { routing } from './app.routing';
import { InfoComponent } from './panel/info/info.component';
import { TableBasicExampleComponent } from './components/lista/table-basic-example';
import { CadastroMoradoresComponent } from './cadastro/cadastro-moradores/cadastro-moradores.component';
import { ListaVisitantesComponent } from './components/lista/lista-visitantes/lista-visitantes.component';
import { CadastroVisitantesComponent } from './cadastro/cadastro-visitantes/cadastro-visitantes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PanelComponent,
    VisaoGeralComponent,
    MoradoresComponent,
    VisitantesComponent,
    InfoComponent,
    TableBasicExampleComponent,
    CadastroMoradoresComponent,
    ListaVisitantesComponent,
    CadastroVisitantesComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    routing,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
