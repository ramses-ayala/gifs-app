import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SideMenuComponent } from "../../components/sideMenu/side-menu.component";

@Component ({
    selector: 'dashboard-page-component',
    imports: [RouterOutlet, SideMenuComponent],
    templateUrl: './dashboard-page.component.html'
})

export default class DashboardPageComponent {}