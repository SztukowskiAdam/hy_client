import { Component, OnInit, OnDestroy } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { ProductsService } from './products.service';
import { Observable, Subscription } from "rxjs";
import { Product } from "./products.interface";

@Component({
	selector: "Products",
	moduleId: module.id,
	templateUrl: "./products.component.html",
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
	private subscribtions: Subscription = new Subscription();
	products: Product[] = [];
	
	constructor(
		private page: Page,
		private productsService: ProductsService,
	) {
		this.page.actionBarHidden = true;
		const productsSubscribtion = this.productsService.all().subscribe((res: Product[]) => {
			this.products = res;
		});

		this.subscribtions.add(productsSubscribtion);
	}
	
	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.subscribtions.unsubscribe();
	}
}
