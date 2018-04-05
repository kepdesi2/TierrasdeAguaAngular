import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  rutaObservable: Observable<any[]>;
  allCookies: any = this.cookieService.getAll();

  carrito= []
  
  constructor(private cookieService: CookieService,private db: AngularFireDatabase) { }

  ngOnInit() {
    
    this.rutaObservable = this.cookieService.get("1")['titulo'];
    for (const key in this.allCookies) {
      this.carrito.push(JSON.parse(this.cookieService.get(key)));
    }
    console.log(this.carrito);
    
  }
  
  getRutas(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}


  
