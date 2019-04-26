import { Component, OnInit } from '@angular/core';
import { XmlService } from './xml.service';
import {NgxXml2jsonService} from "ngx-xml2json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 xml;
 obj;
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private xmlService:XmlService
 ){}

  ngOnInit(){
   this.xmlService.getData().subscribe(xmlRes=>{
   this.xml=xmlRes;
   })

   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
   },10); 
  }
}
