import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from "../../services/gifs.service";

interface IMenuOptions {
    label: string
    subLabel: string
    icon: string
    route: string
}

@Component({
    selector: 'side-menu-options-component',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './side-menu-options.component.html'
})

export class SideMenuOptionsComponent {
    myGifService = inject(GifService);

    menuOptions: IMenuOptions[] = [
        {
            label: 'Trending',
            subLabel: 'Most trend gifs',
            icon: 'fa-solid fa-chart-line',
            route: '/dashboard/trending'
        },
        {
            label: 'Search',
            subLabel: 'Search your gifs',
            icon: 'fa-solid fa-magnifying-glass',
            route: '/dashboard/search'
        },
    ]
}