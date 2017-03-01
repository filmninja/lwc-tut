import $ 			from 'jquery';
import waypoints 	from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {
	
	constructor(){
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTrigger = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.createPageSectionWaypoints();
		this.headerLinks = $('.primary-nav a');
		this.addSmoothScroll();
		this.refreshWaypoints();
	}
	
	refreshWaypoints() {
		this.lazyImages.load(function() {
			Waypoint.refreshAll();
		});
	}
	
	addSmoothScroll() {
		this.headerLinks.smoothScroll();
	}
	
	createHeaderWaypoint() {
		
		var that = this;
		
		new Waypoint({
			element: this.headerTrigger[0],
			handler: function(direction) {
				
				if (direction == "down") {
				
					that.siteHeader.addClass("site-header__dark");
				
				} else {
				
					that.siteHeader.removeClass("site-header__dark");
					that.headerLinks.removeClass("is-current-link");
				
				}
			}
		});
	}
	
	createPageSectionWaypoints() {
		
		var that = this;		
		
		this.pageSections.each(function() {
			
			var currentSection = this;
			
			new Waypoint({
				element: currentSection,
				handler: function(direction) {
					
					if (direction == "down"){
						
						var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
						
					}
				},
				
				offset: "20%"
			});
			
			new Waypoint({
				element: currentSection,
				handler: function(direction) {
					
					if (direction == "up"){
						
						var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
						
					}
				},
				
				offset: "-120%"
			});
		});
	}
	
}

export default StickyHeader;