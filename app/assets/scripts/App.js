import MobileMenu 		from './modules/MobileMenu';
import RevealOnScroll 	from './modules/RevealOnScroll';
import $ 				from 'jquery';


var mobileMenu = new MobileMenu();

new RevealOnScroll($(".featured-item"), "90%");
new RevealOnScroll($(".testimonial"), "60%");
