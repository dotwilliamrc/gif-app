import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { GifApi } from '../interfaces/GifApi'
import { Gif, SearchGifsResponse } from '../interfaces/GifsResponse.interface'

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor (
    private readonly httpClient: HttpClient
  ) {
    this._historial = JSON.parse(localStorage.getItem('historial') ?? '[]')
    this.result = JSON.parse(localStorage.getItem('ultimo') ?? '[]')
  }

  private readonly request: GifApi = {
    link: 'https://api.giphy.com/v1/gifs',
    api_key: 'SRam9HP8Njt3NLG3satyOvAZRN9AXaJT',
    q: '',
    limit: 10
  }

  public result: Gif[] = []

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
    // localStorage
    localStorage.setItem('historial', JSON.stringify(this.historial))
    const r = { ...this.request }
    r.q = value
    const parametros = new HttpParams()
      .set('api_key', r.api_key)
      .set('q', r.q)
      .set('limit', r.limit)

    this.httpClient.get<SearchGifsResponse>(`${this.request.link}/search`, { params: parametros })
      .subscribe((resp: SearchGifsResponse) => {
        this.result = [...resp.data]
        localStorage.setItem('ultimo', JSON.stringify(this.result))
      })
  }
}
