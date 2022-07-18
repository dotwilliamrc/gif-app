import { Component, ElementRef, ViewChild } from '@angular/core'
import { GifsService } from '../services/gifs.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
  constructor (
    private readonly gifService: GifsService
  ) { }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement> // Not-null assertion operator

  public buscar (): void {
    const valor = this.txtBuscar.nativeElement.value
    this.gifService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = ''
  }
}
