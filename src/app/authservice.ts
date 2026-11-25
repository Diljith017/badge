import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Authservice {

  private loggedIn=new BehaviorSubject<boolean>(false);

 isloggedIn=this.loggedIn.asObservable();



login(username:string,password:string){
  if(username==="admin" && password==="123"){
    this.loggedIn.next(true);
  }
  return true;
}


logout(){
  this.loggedIn.next(false);
}

isAuthenticated():boolean{
   return this.loggedIn.value ;
}



}