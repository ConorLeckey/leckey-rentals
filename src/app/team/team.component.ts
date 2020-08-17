import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements AfterViewInit { // This class has no js/ts logic

  @ViewChild('team0') team0; // References each team members div (containing a header, paragraph and img)
  @ViewChild('team1') team1;
  @ViewChild('team2') team2;

  team;

  constructor() {
  }

  ngAfterViewInit() { // Called after the view completely loads
    this.team = [ // Details for each team member
      {
        name: 'John Leckey',
        description: 'Ibeth is the proud CEO of Leckey Rentals. He has a massive 30 days experience in pedalling overpriced rental cars. ' +
          'Ibeth takes great pride in his ability to sit on his butt 8 hours a day in the office. He obtained his degree in Sales from ' +
          'Totally-A-Real University in Atlantis.',
        img: 'man',
        elements: this.team0
      },
      {
        name: 'Cody Monkeyshire',
        description: 'Monkeyshire is exactly what you\'d expect from the name. His sales skills are almost as good as an adult chimp\'s. ' +
          'He has literally no past experience working in selling anything and has produced nothing for the company so far. He might' +
          ' actually be a monkey, he\'s pretty hairy and only eats bananas for lunch.',
        img: 'man',
        elements: this.team1
      },
      {
        name: 'Jack Dorsetson',
        description: 'This guy doesn\'t even speak english, we aren\'t really sure how he even got the job. As you might be able to ' +
          'tell at this point, Leckey Rentals doesnt have very high standards for employees. Makes a lot of sense considering we only ' +
          'offer to pay £2 an hour.',
        img: 'man',
        elements: this.team2
      },
    ];

    for (let i = 0; i < this.team.length; i++) { // For loop iterating through each team member setting their image data, name and desc
      this.team[i].elements.nativeElement.children[0].src = 'assets/' + this.team[i].img + '.png';
      this.team[i].elements.nativeElement.children[0].alt = this.team[i].name;
      this.team[i].elements.nativeElement.children[1].innerText = this.team[i].name;
      this.team[i].elements.nativeElement.children[2].innerText = this.team[i].description;
    }
  }

}
