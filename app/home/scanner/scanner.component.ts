import { Component, OnInit } from "@angular/core";
import {Page} from "tns-core-modules/ui/page";

@Component({
	selector: "Scanner",
	moduleId: module.id,
	templateUrl: "./scanner.component.html",
	styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
	constructor(
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}
	ngOnInit(): void {
	}
}
