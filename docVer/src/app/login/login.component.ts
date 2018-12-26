import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SawtoothService } from '../sawtooth.service';
import { Key } from '../model';
=======
import { Router } from "@angular/router";
import { Http } from '@angular/http';
import { AuthServices } from '../auth.service';
>>>>>>> 446dde7243054c02c0533a58195324c4f0060978

@Component({
  selector: 'app-login',
    templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('myInput')
<<<<<<< HEAD
  myInputVariable:ElementRef;
  private file: any;
  private extension: any;
  private key: Key;
  constructor(private router: Router, private http: HttpClient, private log: SawtoothService) { }
=======
  myInputVariable:ElementRef; 
  
  file:any
  constructor(private router: Router,private http:Http,private check:AuthServices) { }
>>>>>>> 446dde7243054c02c0533a58195324c4f0060978

  ngOnInit() {
    this.log.clearLogin();
  }

fileChanged(e) {
    this.file = e.target.files[0];
    this.extension = e.target.files[0].name.split('.').pop().toLowerCase();
}

<<<<<<< HEAD
login(data){
  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    if (this.extension === 'json') {
      this.key = JSON.parse(fileReader.result.toString());
      const deprt = data.value.loginFormDep;
      const id = data.value.loginFormId;
      const deprtHash = this.log.hash(deprt).substr(0, 32);
      const idHash = this.log.hash(id).substr(0, 32);
      const tmpKey = deprtHash + idHash;
      console.log('keys ->', tmpKey, this.key.priKey);
      if ( tmpKey === this.key.priKey) {
        this.log.setCurrentTransactor(this.key.priKey);
        if (this.log.publicKey === this.key.pubKey) {
          console.log('logedin');
        }
      }
    }
  };
  fileReader.readAsText(this.file);
}

=======

  // buttonClick(event){
  //   event.preventDefault();
  //   console.log("clicked!!!!");
  //   this.http.get("/home/mycomputer/Desktop/arg.json", "{ responseType: 'json' }").subscribe(data => {
  //     console.log(data.text());
  // })
  //   let router = this.router;
  //   router.navigate(['docList'])

  // }

//   reset() {
//     console.log(this.myInputVariable.nativeElement.files);
//     this.myInputVariable.nativeElement.value = "";
//     console.log(this.myInputVariable.nativeElement.files);
// }

  onSubmit(form){
    console.log(form.value.userName)
    console.log(form.value.passWord)
    this.check.checker(form.value.userName,form.value.passWord)
    this.router.navigate(['docList'])
  }
   
>>>>>>> 446dde7243054c02c0533a58195324c4f0060978


}
