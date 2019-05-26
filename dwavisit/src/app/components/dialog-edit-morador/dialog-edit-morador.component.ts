import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Morador } from 'src/app/panel/moradores/morador.model';

@Component({
  selector: 'dwa-dialog-edit-morador',
  templateUrl: './dialog-edit-morador.component.html',
  styleUrls: ['./dialog-edit-morador.component.css']
})
export class DialogEditMoradorComponent implements OnInit {

  morador: Morador = {
    _id: '',
    apartamento: 0,
    bloco: '',
    cpf: 0,
    email: '',
    image: '',
    nome: '',
    possui_veiculo: false,
    placa_veiculo: '',
    modelo_veiculo: '',
    cor_veiculo: '',
    telefone: ''
  }
  constructor(
    public dialogRef: MatDialogRef<DialogEditMoradorComponent>,
    @Inject(MAT_DIALOG_DATA) public m: Morador) {
      this.morador = m;
    }


  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close();
  }

}
