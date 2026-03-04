import { Component } from "@angular/core";
import { SideMenuHeaderComponent } from "../menuHeader/side-menu-header.component";
import { SideMenuOptionsComponent } from "../menuOptions/side-menu-options.component";

@Component({
    selector: 'side-menu-component',
    imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
    templateUrl: './side-menu.component.html'
})

export class SideMenuComponent {}