import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';


class Vehiculo {
  public _id: any;
  public patente: string;
  public marca: string;
  public modelo: string;
  public ano: string;
}

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
})


export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  vehiculo: any
  visible: boolean;



  constructor(
    private api: ApiService,
    private messageService: MessageService
  ) {
    this.vehiculo = new Vehiculo

  }

  vehiculoForm = new FormGroup({
    // name: new FormControl('', Validators.required),
    _id: new FormControl('', Validators.required),
    patente: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    ano: new FormControl(),
  });



  ngOnInit() {
    this.getVehiculos()

  }


  getVehiculos() {

    this.api.get('vehiculos').subscribe((r: any) => {

      if (r.success) {
        this.vehiculos = r.data
      }
    },
      (error) => {

      }
    );
  }


  showDialog(vehiculo?: Vehiculo) {

    if (vehiculo) {
      this.vehiculo = vehiculo
      this.vehiculoForm.setValue(this.vehiculo)
    } else {
      this.vehiculo = {
        _id: 0,
        patente: '',
        marca: '',
        modelo: '',
        ano: '',
      }

      this.vehiculoForm.patchValue(this.vehiculo)
    }

    this.visible = true;
  }

  guardarDatos() {

    this.vehiculo = this.vehiculoForm.value

    const { _id, ano, marca, modelo, patente } = this.vehiculo

    const data = { ano, marca, modelo, patente }

    if (this.vehiculo._id != 0) {


      // actualiza
      this.api.put(`vehiculos/${this.vehiculo._id}`, data).subscribe((r: any) => {
        if (r.success) {
          this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'El registro se actualizó correctamente' });
          this.limpiar()
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: r.data, });
        }
      })
    } else {
      // crea


      this.api.post('vehiculos', data).subscribe((r: any) => {
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
    console.log('invocado');

    this.vehiculoForm.patchValue(this.vehiculo)

    this.vehiculo = {
      _id: 0,
      patente: '',
      marca: '',
      modelo: '',
      ano: '',
    }

    this.visible = false
    this.getVehiculos()
  }
}
