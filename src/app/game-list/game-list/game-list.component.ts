import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Game } from 'src/app/model/game';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games$: Observable<Game[]>;
  displayedColumns = ['name', 'genre', 'actions'];

  constructor(
    private gamesService: GamesService,
    public dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {

    this.games$ = this.gamesService.findAllGames()
     .pipe(
       catchError(() => {
          this.onError("Loading failed");
          return of([]);
       })
     ) ;
  }
 onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onDelete(id: string) {
    this.gamesService.delete(id).subscribe({
      next: () => {
        setTimeout(() => location.reload(), 1000);
        this.snackBar.open("Game Deleted",'', {duration: 1000} );
      }
    })
  }


  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['/game-form']);
  }

}
