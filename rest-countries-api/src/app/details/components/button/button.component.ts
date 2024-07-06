import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public iconSource = ''
  @Input() public text = ''
  @Output() public clickEmitter = new EventEmitter<void>()
}
