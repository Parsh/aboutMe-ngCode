import { Injectable } from "@angular/core"
import { Http , Response} from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class DataService {

  constructor(private http : Http){}


  getHomeData() {
    return this.http.get("http://parsh.herokuapp.com/data/homeData.json")
             .map( ( response: Response ) => response.json())
  }

  getMLData() {
    return this.http.get("http://parsh.herokuapp.com/data/mlData.json")
             .map( ( response: Response ) => response.json())
  }



  getMLInformation() {
    return this.http.get("http://parsh.herokuapp.com/data/mlCardInfo.json")
             .map( ( response: Response ) => response.json())
  }


  getWebDevInformation() {
    return this.http.get("http://parsh.herokuapp.com/data/webCardInfo.json")
             .map( ( response: Response ) => response.json())
  }


  getAboutInformation(){
    return this.http.get("http://parsh.herokuapp.com/data/aboutCardInfo.json")
             .map( ( response: Response ) => response.json())
  }

}
