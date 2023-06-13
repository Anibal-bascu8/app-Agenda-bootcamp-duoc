import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

import { baseUrl } from 'src/environments/environments';

class Faena {
  public _id: any;
  public nombre: string;
  public fecha_inicio: Date;
  public fecha_termino: Date;
  public descripcion: string;
  public empresa: string;
  public validez: string;
  public trabajo_asociado: any[];
}

@Component({
  selector: 'app-faenas',
  templateUrl: './faenas.component.html',
})
export class FaenasComponent {
  // data

  tz = baseUrl.tz

  // booleanos
  visible: boolean;

  // datos array
  faenas: Faena[] = [];

  // objeto manipulable
  faena: any

  constructor(
    private api: ApiService,
    private messageService: MessageService
  ) {

  }

  faenaForm = new FormGroup({
    // name: new FormControl('', Validators.required),
    _id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    fecha_inicio: new FormControl('', Validators.required),
    fecha_termino: new FormControl('', Validators.required),
    descripcion: new FormControl(),
    empresa: new FormControl(),
    validez: new FormControl(),
    trabajo_asociado: new FormControl()
  });





  ngOnInit() {
    this.getFaenas()

  }

  getFaenas() {

    this.api.get('faenas').subscribe((r: any) => {

      if (r.success) {
        this.faenas = r.data
      }
    },
      (error) => {

      }
    );
  }


  showDialog(faena?: Faena) {

    if (faena) {
      this.faena = faena
      this.faenaForm.setValue(this.faena)
    } else {
      this.faena = {
        _id: 0,
        nombre: '',
        fecha_inicio: '',
        fecha_termino: '',
        descripcion: '',
        empresa: '',
        validez: '',
        trabajo_asociado: '',
      }

      this.faenaForm.patchValue(this.faena)
    }

    this.visible = true;
  }


  guardarDatos() {

    this.faena = this.faenaForm.value;

    const { _id, nombre, fecha_inicio, fecha_termino, descripcion, empresa, validez, trabajo_asociado, } = this.faena

    const data = { nombre, fecha_inicio, fecha_termino, descripcion, empresa, validez, trabajo_asociado, }







    if (this.faena._id != 0) {


      // delete this.faena._id;
      // actualiza
      this.api.put(`faenas/${this.faena._id}`, data).subscribe((r: any) => {
        if (r.success) {
          this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'El registro se actualizó correctamente' });
          this.limpiar()
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: r.data, });
        }
      })
    } else {
      // crea

      delete this.faena._id;
      // console.log(this.faena);

      this.api.post('faenas', data).subscribe((r: any) => {
        console.log(r);
        if (r.success) {
          this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'El registro se guardó correctamente' });
          this.limpiar()
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: r.data, });
        }
      })
    }
  }

  limpiar() {
    // console.log('invocado');


    this.faena = {
      _id: 0,
      nombre: '',
      fecha_inicio: '',
      fecha_termino: '',
      descripcion: '',
      empresa: '',
      validez: '',
      trabajo_asociado: '',
    }

    this.faenaForm.patchValue(this.faena)

    this.visible = false
    this.getFaenas()
  }
}
