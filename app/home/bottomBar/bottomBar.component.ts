import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, Input} from "@angular/core";
import { screen } from "tns-core-modules/platform";
import { setTimeout } from "tns-core-modules/timer";
import {AnimationCurve} from "tns-core-modules/ui/enums";
import {Router} from "@angular/router";
import {ios} from "tns-core-modules/ui/styling/background";
declare var UITableViewCellSelectionStyle;

@Component({
	selector: "BottomBar",
	moduleId: module.id,
	templateUrl: "./bottomBar.component.html",
	styleUrls: ['./bottomBar.component.css']
})
export class BottomBarComponent implements OnInit {

	@Input() row: number;
	@ViewChild('tabHighlight', { static: false }) tabHighlight: ElementRef;
	selectedTab: number = 0;

	@ViewChild('image1', { static: false }) image1: ElementRef;
	@ViewChild('image2', { static: false }) image2: ElementRef;
	@ViewChild('image3', { static: false }) image3: ElementRef;
	@ViewChild('image4', { static: false }) image4: ElementRef;
	@ViewChild('image5', { static: false }) image5: ElementRef;

	@Output() tabSelected = new EventEmitter<number>();


	constructor(private router: Router) {
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		setTimeout(() => { this.animateCurrentImage(this.image1); }, 100);
	}

	selectTab(index: number) {
		let previousTab = this.selectedTab;
		if (index != this.selectedTab) {
			this.selectedTab = index;
			this.tabHighlight.nativeElement.animate({
				translate: { x: index * screen.mainScreen.widthDIPs / 5, y: 0 },
				curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
				duration: 300
			});
			this.animateCurrentImage(this.getImage(index));
			this.animatePreviousImage(this.getImage(previousTab));
			this.tabSelected.emit(index);
		}
	}

	getImage(index) {
		let currentImage;
		switch (index) {
			case 0:
				currentImage = this.image1;
				break;
			case 1:
				currentImage = this.image2;
				break;
			case 2:
				currentImage = this.image3;
				break;
			case 3:
				currentImage = this.image4;
				break;
			case 4:
				currentImage = this.image5;
				break;
			default:
				break;
		}
		return currentImage;
	}

	animateCurrentImage(arg: any) {
		arg.nativeElement.animate({
			scale: { x: 1.2, y: 1.2 },
			curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			duration: 300
		});
	}

	animatePreviousImage(arg: any) {
		arg.nativeElement.animate({
			scale: { x: 1, y: 1 },
			curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			duration: 300
		})
	}
	onItemLoading(args: any) {
		if (ios) {
			const cell = args.ios;
			cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
		}
	}

}
