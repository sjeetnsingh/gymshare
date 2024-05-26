import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  items = [
    { title: 'AI Generated Plan', description: 'Let our AI create a custom plan for you' },
    { title: 'Select Existing Plan', description: 'Attach a plan you\'ve already created' },
    { title: 'Create New Plan', description: 'Build a new workout plan from scratch' }
  ];

}
