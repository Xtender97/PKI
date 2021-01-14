import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kupac-proizvodi',
  templateUrl: './kupac-proizvodi.component.html',
  styleUrls: ['./kupac-proizvodi.component.scss']
})
export class KupacProizvodiComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToDetails(event){
    let imgUrl = event.target.attributes.src.textContent;
    let name = event.target.parentElement.nextSibling.textContent;
    let cena = event.target.parentElement.nextSibling.nextSibling.textContent;
    this.router.navigate(['detalji'], { queryParams: {imgUrl: imgUrl, name:name, cena:cena}});
  }


}
