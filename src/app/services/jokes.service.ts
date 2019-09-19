import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class JokesService {

  constructor(private http: Http) { }
//con versiones de angular superiores a la 6 hay que poner pipe(map("loQueSeaAqui"))
  getRandom(): Observable<string> {
    return this.http.get('http://api.icndb.com/jokes/random')
    .pipe(map((res: Response) => res.json()))
   
  }
}