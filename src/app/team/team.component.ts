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
        name: 'John Ibeth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aperiam architecto atque autem, beatae ' +
          'blanditiis consequatur cum deserunt dolore dolorem doloremque ea eaque earum eius ex excepturi explicabo fugiat fugit hic id ' +
          'iusto laudantium molestias, neque nihil nisi odio officiis perspiciatis praesentium quae quisquam rem sequi similique tempore,' +
          ' velit? A ab, accusamus ad aliquid animi asperiores at atque deserunt dolor eligendi error esse est fugiat harum inventore ' +
          'iure laudantium magnam minima molestias nam nulla odio omnis porro praesentium reprehenderit saepe sint, suscipit tempore?',
        img: 'man',
        elements: this.team0
      },
      {
        name: 'Cody Monkeyshire',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aperiam architecto atque autem, beatae ' +
          'blanditiis consequatur cum deserunt dolore dolorem doloremque ea eaque earum eius ex excepturi explicabo fugiat fugit hic id ' +
          'iusto laudantium molestias, neque nihil nisi odio officiis perspiciatis praesentium quae quisquam rem sequi similique tempore,' +
          ' velit? A ab, accusamus ad aliquid animi asperiores at atque deserunt dolor eligendi error esse est fugiat harum inventore ' +
          'iure laudantium magnam minima molestias nam nulla odio omnis porro praesentium reprehenderit saepe sint, suscipit tempore?',
        img: 'man',
        elements: this.team1
      },
      {
        name: 'Jack Dorsetson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aperiam architecto atque autem, beatae ' +
          'blanditiis consequatur cum deserunt dolore dolorem doloremque ea eaque earum eius ex excepturi explicabo fugiat fugit hic id ' +
          'iusto laudantium molestias, neque nihil nisi odio officiis perspiciatis praesentium quae quisquam rem sequi similique tempore,' +
          ' velit? A ab, accusamus ad aliquid animi asperiores at atque deserunt dolor eligendi error esse est fugiat harum inventore ' +
          'iure laudantium magnam minima molestias nam nulla odio omnis porro praesentium reprehenderit saepe sint, suscipit tempore?',
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
