import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-com-post',
  templateUrl: './com-post.component.html',
  styleUrls: ['./com-post.component.css']
})
export class ComPostComponent implements OnInit {
@Input()  title : string= 'jihug';
@Input()  content:string='ooko';
@Input()  loveIts: number=0;
@Input()  created_at: Date =new Date();

  constructor() { }

  ngOnInit() {
  }

 loveIt()
 {
  this.loveIts=this.loveIts+1;
  console.log(this.loveIts);
 }
 dontLoveIt(){

  this.loveIts=this.loveIts-1;
  console.log(this.loveIts);

 }
 getColor()
 {
   if(this.loveIts>0)
   {
     return '#99ff99';
   }else if(this.loveIts==0)
   {
     return 'white';
   }else{
     return '#ff7f7f';
   }
 }
}
