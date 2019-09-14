import { Component, OnInit } from "@angular/core";
import {Page} from "tns-core-modules/ui/page";

@Component({
	selector: "Search",
	moduleId: module.id,
	templateUrl: "./search.component.html",
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	constructor(
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}
	ngOnInit(): void {
	}
}
