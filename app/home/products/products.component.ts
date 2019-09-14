import { Component, OnInit } from "@angular/core";
import {Page} from "tns-core-modules/ui/page";

@Component({
	selector: "Products",
	moduleId: module.id,
	templateUrl: "./products.component.html",
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	constructor(
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}
	ngOnInit(): void {
	}
}
