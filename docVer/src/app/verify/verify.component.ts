import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit{
  finals=""
  errorMessage=''
  constructor(private data:SawtoothService) { 
    // this.finals=this.data.returnData()
    // //  this.data.returnData().then((x)=>{console.log(x)})
    // this.errorMessage=this.data.returnError()
    // console.log("The data to be displayed constructor"+this.finals)
    // console.log("THe err firm the contructor",this.errorMessage)
  }

  ngOnInit() {
    
   
  //   this.finals=this.data.returnData()
  //   this.errorMessage=this.data.returnError()
  //   console.log("The data to be displayed onit"+this.finals)
  //   console.log("THe err firm the onit",this.errorMessage)
 } 


  
}
