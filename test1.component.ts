import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

dis=false;
 WK=["Dhoni","T Latham","D kartik","T Blundel"];
 BAT=["Kohli","dhavan","Rohit","Pandya","K williamson","R taylor","S dhawan","L Rahul", "V shankar"];
 BALL=["Bh","KL Rahul","chal","yadav","L freguson","T southee","M shami","B kumar"];
 ALLR=["Pandya","Kedar","J neesham","M santner","R jadeja"];
 points_wk=["12","56","89","12"];
 credit_point= ["0","0","0","0"];
 grnd=[];
 display1="none";
 display2="none";
  display3="none";
 display4="none";
 icon="fa fa-plus-circle";
 no1=0;
no2=0;
no3=0;
no4=0;
 team={
 	"wicket":[],
 	"batsman":[],
 	"bowler":[],
 	"allrounder":[]
 }

  constructor() { }

  ngOnInit() {
  }

  wicket(){
    this.display1="block";
	this.display2="none";
	this.display3="none";
	this.display4="none";
  }
batsman(){
	this.display1="none";
	this.display2="block";
	this.display3="none";
	this.display4="none";
}
ball(){
	this.display1="none";
	this.display2="none";
	this.display3="block";
	this.display4="none";

}
allr(){
    this.display1="none";
	this.display2="none";
	this.display3="none";
	this.display4="block";
}
addground(data){
	
	this.grnd.push(data);
	this.icon="fa fa-times";
}

addwicket(data){
   this.team.wicket.push(data);
   this.no1=1+this.team.wicket.lastIndexOf(data);
   this.icon="fa fa-times";

}

addbatsman(data){
	this.team.batsman.push(data);
	this.no2=1+this.team.batsman.lastIndexOf(data);
	this.icon="fa fa-times";
}
addbowler(data){
	this.team.bowler.push(data);
	this.no3=1+this.team.bowler.lastIndexOf(data);
	this.icon="fa fa-times";
}
addALLR(data){
	this.team.allrounder.push(data);
	this.no4=1+this.team.allrounder.lastIndexOf(data);
	this.icon="fa fa-times";
}

remove(){
	this.icon="fa fa-plus-circle";
}
removeteam_wicket(data){
	let index=this.team.wicket.indexOf(data);
   this.team.wicket.splice(index,1);
   this.no1=this.no1-1;
}

removeteam_batsman(data){
	let index=this.team.batsman.indexOf(data);
   this.team.batsman.splice(index,1);
   this.no2=this.no2-1;
}

removeteam_bowler(data){
	let index=this.team.bowler.indexOf(data);
   this.team.bowler.splice(index,1);
   this.no3=this.no3-1;
}

removeteam_ALLR(data){
	let index=this.team.allrounder.indexOf(data);
   this.team.allrounder.splice(index,1);
   this.no4=this.no4-1;
}
}
