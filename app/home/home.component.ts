import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { ios } from "tns-core-modules/application";
import {SearchComponent} from "~/home/search/search.component";
import {ScannerComponent} from "~/home/scanner/scanner.component";
import {RankComponent} from "~/home/rank/rank.component";
import {ProductsComponent} from "~/home/products/products.component";
import {AuthComponent} from "~/home/auth/auth.component";
declare var UITableViewCellSelectionStyle;

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    @ViewChild('componentContainer', {read: ViewContainerRef, static: true}) componentContainer;

    constructor(
        private page: Page,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.tabSelected(0);
    }


    onItemLoading(args: any) {
        if (ios) {
            const cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    }

    tabSelected(args: number) {
        let factory;
        switch(args) {
            case 0: {
                factory = this.componentFactoryResolver.resolveComponentFactory(ScannerComponent);
                break;
            }
            case 1: {
                factory = this.componentFactoryResolver.resolveComponentFactory(SearchComponent);
                break;
            }
            case 2: {
                factory = this.componentFactoryResolver.resolveComponentFactory(ProductsComponent);
                break;
            }
            case 3: {
                factory = this.componentFactoryResolver.resolveComponentFactory(RankComponent);
                break;
            }
            case 4: {
                factory = this.componentFactoryResolver.resolveComponentFactory(AuthComponent);
                break;
            }
            default: {
                factory = this.componentFactoryResolver.resolveComponentFactory(ScannerComponent);
                break;
            }
        }

        this.componentContainer.clear();
        const componentRef = this.componentContainer.createComponent(factory);
        componentRef.changeDetectorRef.detectChanges();
    }
}
