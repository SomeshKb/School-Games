import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MyErrorStateMatcher } from 'src/app/services/my-error-state-matcher.service';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss'],
})
export class ContinentComponent implements OnInit {
  playerDetailForm;
  timerRef;
  timeLapsed: number;
  currentTime;
  running: boolean = false;
  noOfClick=0;
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;

  continent = [
    { name: 'ASIA' },
    { name: 'EUROPE' },
    { name: 'AFRICA' },
    { name: 'SOUTH AMERICA' },
    { name: 'NORTH AMERICA' },
    { name: 'ANTARCTICA' }
  ];

  gameVariable = {
    gameStarted:false,
    data:[],
    currentItem: '',
    currentIndex:0,
    leftItem: 6,
  };
  result=null;
  constructor(
    private formBuilder: FormBuilder,
    public matcher: MyErrorStateMatcher,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.playerDetailForm = this.formBuilder.group({
      name: [null, [Validators.required]],
    });
  }

  getArea(area) {
    if(this.gameVariable.data[this.gameVariable.currentIndex].name==area){
      if( this.gameVariable.currentIndex==5){
        let dialogRef = this.dialog.open(this.callAPIDialog,{ disableClose: true });
        this.clearTimer();
      } else {
        this.result="That's the correct answer."
        this.gameVariable.currentIndex +=1;
        this.gameVariable.currentItem=this.gameVariable.data[this.gameVariable.currentIndex];
      }
    } else {
      this.noOfClick+=1;
      this.result="That's not the correct answer."
    }
  }
  startGame() {
    if (this.playerDetailForm.valid) {
      this.startTimer();
      this.gameEngine();
    }
  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      const startTime = Date.now() - (this.timeLapsed || 0);
      this.timerRef = setInterval(() => {
        this.timeLapsed = (Date.now() - startTime) / 1000;

        this.currentTime = this.timeLapsed.toFixed(1);
      });
    } else {
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.timeLapsed = undefined;
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

  gameEngine() {
  if(!this.gameVariable.gameStarted){
    this.gameVariable.data= this.shuffle(this.continent);
    this.gameVariable.currentIndex = 0;
    this.gameVariable.currentItem=this.gameVariable.data[this.gameVariable.currentIndex];
    this.gameVariable.gameStarted=true;
  }
   
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  reset(){
    this.noOfClick=0;
    this.playerDetailForm.reset();
    this.timerRef=null;
    this.timeLapsed=null;
    this.currentTime=null;
    this.running = false;
  
    this.gameVariable = {
      gameStarted:false,
      data:[],
      currentItem: '',
      currentIndex:0,
      leftItem: 6,
    };

    this.result=null;
  }

}
