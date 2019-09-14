import { Component, OnInit } from "@angular/core";
import {Page} from "tns-core-modules/ui/page";

@Component({
	selector: "Auth",
	moduleId: module.id,
	templateUrl: "./auth.component.html",
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
	constructor(
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}
	ngOnInit(): void {
	}

	tabSelected(args: number) {
		console.log("tab selected: " + args);
	}

}
