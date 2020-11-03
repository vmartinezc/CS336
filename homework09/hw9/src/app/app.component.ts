import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css']
})

export class AppComponent {

  //declaration of variables needed
  target: number;
  accuracy: number;
  totalGuess: number;
  feedback: any;
  isCorrectAnswer: boolean;


  //Constructor for variables
  constructor() {
    this.feedback = [];
    this.target = 100;
    this.accuracy = 1;
    this.guess = '';
    this.isCorrectAnswer = false;
    this.totalGuess = 0;
  }

  public guess = '';
  title = 'hw9'; //app title


  /* submit()
  *  @param: none
  *  checks the conditions for the submitted values
  * returns feedback accordingly
  */ 
  submit(){
    //Super advanced test-driven development:
    // console.log("iS THIS WORKINGGGG");
    // console.log("Your guess was: " + this.guess)
    const correctAnswer = Math.sqrt(this.target);
    const guess = Number(this.guess);
    if (Math.abs(guess - correctAnswer) / correctAnswer <= this.accuracy / 100) {
      this.totalGuess++; 

      //if the answer is correct, we push the feedback to the array with the guess and the corresponding feedback
      this.isCorrectAnswer = true;
      this.feedback.push({
        guess,
        feedback:`That was close enough! Your answer was ${guess}. Correct Answer is ${correctAnswer}. Total number of guesses: ${this.totalGuess}`
      });
    } else if (guess < correctAnswer) {
      this.totalGuess++;
      this.feedback.push({
        guess,
        feedback:`That was too low! Your answer was ${guess}. Try again`
      });
      
    } else {    // answer is too high.
      this.totalGuess++;
      this.feedback.push({
        guess,
        feedback:`That was too high! Your answer was ${guess}. Try again!`
      });
    }
  }


  /* generateNum()
  * @param: none
  * generates a random number between 50 and 250
  */
  generateNum(){
    this.target = (Math.floor(Math.random()*250)+50)
    console.log("Your number is now: " + this.target);
  }



  /* resetEverything()
  * @param: none
  * resets values so that the user has a clean slate
  */
  resetEverything(){
    this.guess = '';
    this.feedback = [];
    this.isCorrectAnswer = false;
    this.totalGuess = 0;
  }
}


