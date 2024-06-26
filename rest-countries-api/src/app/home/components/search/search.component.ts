import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input() public search = new FormControl('')
}
