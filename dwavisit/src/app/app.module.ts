import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
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
import { ListaMoradoresComponent } from './components/lista/lista-moradores/lista-moradores.component';
import { CadastroMoradoresComponent } from './cadastro/cadastro-moradores/cadastro-moradores.component';
import { ListaVisitantesComponent } from './components/lista/lista-visitantes/lista-visitantes.component';
import { CadastroVisitantesComponent } from './cadastro/cadastro-visitantes/cadastro-visitantes.component';
import { DialogEditMoradorComponent } from './components/dialog-edit-morador/dialog-edit-morador.component';
import { MatDialogModule } from '@angular/material';

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
    ListaMoradoresComponent,
    CadastroMoradoresComponent,
    ListaVisitantesComponent,
    CadastroVisitantesComponent,
    DialogEditMoradorComponent
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
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  entryComponents: [
    DialogEditMoradorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
