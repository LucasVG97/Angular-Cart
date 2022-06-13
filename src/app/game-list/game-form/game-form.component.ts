import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  form: FormGroup;
  gameValue = null;
  genreValue = null;

  constructor(
    private formBuilder: FormBuilder,
    private service: GamesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private location: Location) { 

    this.form = this.formBuilder.group({
      name: [null],
      genre: [null]
    });
    
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => {
        this.snackBar.open("Game Saved",'', {duration: 2000} );
        setTimeout(() => {this.router.navigate(['/game-list'])}, 1000);
      },
      error: () => this.onError()});
  }

  onCancel(){
    this.location.back();
  }

  private onError(){
    this.snackBar.open("Error !!! Empty fields aren't allowed",'OK', {duration: 5000} );
  }

}
