import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  idFournisseur: number;
  code: string;
  libelle: string;
  hide: boolean;
  
  constructor() {
    this.idFournisseur = 105;
    this.code = 'A104B89';
    this.libelle = 'MyTeck';
    this.hide = false;
  } 

  ngOnInit(): void {
    this.idFournisseur = 105;
    this.code = 'A104B89';
    this.libelle = 'MyTeck';
    this.hide = false;
  }  

  toggleHide() {
    this.hide = !this.hide;
    console.log('hide:', this.hide);
  }
}
