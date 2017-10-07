import { Component } from '@angular/core';
import { routerTransitionAnimation } from './animations/router-transition.animation';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [routerTransitionAnimation],
  host: { '[@routerTransitionAnimation]': "'true'",
          '[style.display]': "'block'",               //required for animation
          '[style.position]': "'absolute'",           //required for animation
          '[style.width]': "'100%'"}
})

export class SkillsComponent {
  skillsLeft: {name: string, star: string, emptyStar: string}[] = [{name:"HTML", star:"★★★", emptyStar:"☆"},
                                                                  {name:"JavaScript", star:"★★★", emptyStar:"☆"},
                                                                  {name:"Angular 2+", star:"★★★", emptyStar:"☆"},
                                                                  {name:"Express.js", star:"★★", emptyStar:"☆☆"},
                                                                  {name:"Java", star:"★★", emptyStar:"☆☆"},
                                                                  {name:"Python", star:"★★", emptyStar:"☆☆"},
                                                                  {name:"English", star:"★★★★", emptyStar:""}]

  skillsRight: {name: string, star: string, emptyStar: string}[] = [{name:"CSS", star:"★★★", emptyStar:"☆"},
                                                                    {name:"TypeScript", star:"★★", emptyStar:"☆☆"},
                                                                    {name:"Node.js", star:"★★", emptyStar:"☆☆"},
                                                                    {name:"C++", star:"★★", emptyStar:"☆☆"},
                                                                    {name:"VHDL", star:"★★", emptyStar:"☆☆"},
                                                                    {name:"ARM Assembly", star:"★", emptyStar:"☆☆☆"},
                                                                    {name:"French", star:"★★★★", emptyStar:""}]
}
