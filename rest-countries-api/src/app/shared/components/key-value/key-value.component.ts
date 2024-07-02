import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrl: './key-value.component.scss',
})
export class KeyValueComponent {
  @Input() key: string
  @Input() value: string
}
