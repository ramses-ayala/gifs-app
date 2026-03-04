import { Component } from "@angular/core";
import { environment } from "@env/environment";

@Component ({
    selector: 'side-menu-header-component',
    imports: [],
    templateUrl: './side-menu-header.component.html'
})

export class SideMenuHeaderComponent {
    myEnvs = environment;
}