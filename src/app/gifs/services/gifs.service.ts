import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = []

  public get historial (): string[] {
    return [...this._historial]
  }

  public buscarGifs (value: string): void {
    value = value.trim().toLocaleLowerCase()
    this._historial = this._historial.filter((v): boolean => v !== value)
    this._historial = [value, ...this._historial]
    if (this._historial.length > 10) {
      this._historial.pop()
    }
  }
}
