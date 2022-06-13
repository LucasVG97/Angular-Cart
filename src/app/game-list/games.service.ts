import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../model/game';
import { delay, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private readonly API = 'api/games';

  constructor(private httpClient: HttpClient) { }

  findAllGames() {
    return this.httpClient.get<Game[]>(this.API)
      .pipe(
        first(),
        delay(500)
      );
  }

  save(save: Game) {
    return this.httpClient.post<Game>(this.API, save);
  }

  delete(id: string){
    return this.httpClient.delete<Game>(`${this.API}/${id}`);
  }
}
