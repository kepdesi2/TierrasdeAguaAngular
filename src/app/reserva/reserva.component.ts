import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  rutaObservable: Observable<any[]>;
  _id: number;
  prueba: any;
  constructor( private router: Router,private cookieService: CookieService, private db: AngularFireDatabase, private route: ActivatedRoute) {  }

  ngOnInit() {
    this._id = this.route.snapshot.params["id"];
    this.rutaObservable=this.getRutasId('/rutas');
    
  }

  getRutasId( listPath){
    return this.db.list(listPath).valueChanges();
}
reservar(ident,nombre,preci,cant) {
  this.prueba = {   
    titulo: nombre.value,
    precio: preci.value,
    cantidad: cant.value
 };
  this.cookieService.set(ident.value, JSON.stringify(this.prueba)); 
  this.router.navigate(['/carrito'])
  }
}
