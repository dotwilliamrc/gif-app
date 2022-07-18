import { Component } from '@angular/core'
import { GifsService } from 'src/app/gifs/services/gifs.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor (
    private readonly gifService: GifsService
  ) { }

  public get historial (): string[] {
    return this.gifService.historial
  }
}
