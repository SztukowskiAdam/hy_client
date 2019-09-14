import { Component, OnInit } from "@angular/core";
import {Page} from "tns-core-modules/ui/page";

@Component({
	selector: "Rank",
	moduleId: module.id,
	templateUrl: "./rank.component.html",
	styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
	constructor(
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}
	ngOnInit(): void {
	}
}
