import { Component, input } from "@angular/core";
import { IGif } from "../../../interfaces/gif.interfaces";

@Component ({
    selector: 'gif-list-item-component',
    imports: [],
    templateUrl: './gif-list-item.component.html'
})

export class GifListItemComponent {
    myGif = input.required<IGif>();
}