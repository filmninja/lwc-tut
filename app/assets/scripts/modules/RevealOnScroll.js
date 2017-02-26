import $ 			from 'jquery';
import waypoints 	from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	
	constructor(elms, offset) {
		this.itemsToReveal = elms;
		this.hideInit();
		this.offsetAmt = offset;
		this.createWaypoints();
	}
	
	hideInit() {
		this.itemsToReveal.addClass("reveal-item");
	}
	
	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item__visible");
				},
				offset: that.offsetAmt
			});
		});
	}
}

export default RevealOnScroll;
