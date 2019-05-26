import { Component, OnInit } from '@angular/core';
import { MongoService } from 'src/app/services/mongo.service';
import { Observable } from 'rxjs';
import { Morador } from './morador.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogEditMoradorComponent } from 'src/app/components/dialog-edit-morador/dialog-edit-morador.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'dwa-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent {

  //moradoresReq: Observable<Morador[]>;
  moradoresList: Morador[];

  constructor(private mongoService: MongoService, private dialog: MatDialog, public overlay: Overlay) {
    this.retrieveMoradores();
   }

  retrieveMoradores() {
    this.mongoService.getMoradores()
      .subscribe((moradores) => {
        this.moradoresList = moradores;
      });
  }

  listMoradoresToEdit() {
    this.mongoService.getMoradores()
      .subscribe((moradores) => {
        this.moradoresList = moradores;
        this.retrieveMoradores();
      });
  }

  editMorador(morador: Morador){
    const newMorador: Morador = {...morador};
    const dialogConf = new MatDialogConfig();

    dialogConf.width = '500px';
    dialogConf.data = newMorador;
    dialogConf.scrollStrategy = this.overlay.scrollStrategies.noop();

    const dialogRef = this.dialog.open(DialogEditMoradorComponent, dialogConf);

    dialogRef.afterClosed().subscribe((res: Morador) => {
      if (res) {
        this.retrieveMoradores();
        this.mongoService.patchMorador(res).subscribe(
          (resp) => {
            const i = this.moradoresList.findIndex(mor => mor._id === resp._id);
            if (i >= 0) {
                this.moradoresList[i] = resp;
            }
          },
          (err) => {
            console.log(err);
          },
        );
      }
    });

  };

  deleteMorador(morador: Morador) {
    if (confirm('Deseja excluir o morador ?')) {
      this.listMoradoresToEdit();
      this.mongoService.deleteMorador(morador)
      .subscribe(
        (resp) => {
          const i = this.moradoresList.findIndex(mor => mor._id === resp._id);
          if (i >= 0) {
            this.moradoresList.splice(i, 1);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
