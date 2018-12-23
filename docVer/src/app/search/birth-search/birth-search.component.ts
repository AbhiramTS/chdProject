import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SawtoothService } from 'src/app/sawtooth.service';
import { Http, Response } from '@angular/http'
// const {TextEncoder, TextDecoder} = require('text-encoding/lib/encoding')
//import { TextDecoder} from 'text-encoding'

@Component({
  selector: 'app-birth-search',
  templateUrl: './birth-search.component.html',
  styleUrls: ['./birth-search.component.css']
})
export class BirthSearchComponent implements OnInit {
  private action
  private href
  private address
  private transaction_id
  //private decoder=TextDecoder

  constructor( private addBlock:SawtoothService,private route: ActivatedRoute,private http:Http) { }

  ngOnInit() {
    this.href=this.route.url
    this.action=this.href.value[0].path
    console.log(this.action)

    // this.route.params.subscribe(params => {
    //   this.action = params['action'];
    // });
  }

  onSubmit(bform) {
    // $event.preventDefault()
    const data = bform.value;
    const imp = [0, 1, 2, 3, 4];
    const docType = 'birthForm';
    data['imp'] = imp;
    data['docType'] = docType;
    const strData = JSON.stringify(data);
    const tmp = JSON.parse(strData);
    const keys = Object.keys(tmp);
    console.log(tmp[keys[imp[0]]]);
    this.addBlock.sendData(this.action, strData);
    this.address=this.addBlock.addresser()
    this.onGet()
    
  }
  getServer(){
    return this.http.get('http://localhost:4200/api/state/'+this.address)
  }

  onGet(){
    this.getServer()
      .subscribe(
        (response:Response)=>{
          console.log("In the response conponent of state"+response)
          const data = response.json()
          const txn_idenc=data.data
          console.log("The data is :"+txn_idenc)
          const txn_id=atob(txn_idenc)
          console.log("The decoded data is"+txn_id)
          var noQuotes = txn_id.split('"').join('');
          this.transaction_id=noQuotes
          console.log("No quotes string"+noQuotes)
          this.afterOnGet()
        },
        (error)=>console.log(error)
      )
  }

  getTransaction(){
    return this.http.get('http://localhost:4200/api/transactions/'+this.transaction_id)
  }

  afterOnGet(){
    this.getTransaction()
      .subscribe(
        (response:Response)=>{
          console.log("In the response conponent" + response)
          const data = response.json()
          const txn_idenc=data.data
          console.log("The data is :"+data)
          console.log(JSON.stringify(data))
          const payloadenc=data.data.payload
          console.log(payloadenc)
          var noQuotes = payloadenc.split('"').join('');
          const payload=atob(noQuotes)
          console.log("The decoded data is"+payload)
          
          // this.transaction_id=noQuotes
          // console.log("No quotes string"+noQuotes)
        },
        (error)=>console.log(error)
      )
  }
  

  // decodeTx(txn_id){
  //   let temp=this.decoder.decode(txn_id)
  //   console.log("Yoooooooo")
  //   return temp
  // }
  
}
