import { Component } from '@angular/core'
import { Gif } from '../interfaces/GifsResponse.interface'
import { GifsService } from '../services/gifs.service'

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {
  constructor (
    private readonly gifsService: GifsService
  ) { }

  public get result (): Gif[] {
    return [...this.gifsService.result]
  }
}
