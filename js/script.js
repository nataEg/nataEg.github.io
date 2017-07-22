jQuery( document ).ready(function() {
var d = document; 
var wrap = d.querySelector('.wrap'); 
var items = d.querySelector('.items'); 
var sticky = d.querySelector('.item-sticky');	
var itemCount = d.querySelectorAll('.item').length; 
var scroller = d.querySelector('.scroller'); 
var pos = 0; 
var transform = Modernizr.prefixed('transform'); 
//my	
var slideSticky = 1;
var slideStickyCount = d.querySelectorAll('.item-sticky').length;
//end my	

function setTransform() { 
	items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)'; 
} 

function prev() { 
	$('.item-sticky').eq(pos).fadeTo(300, 0);		
	pos = Math.max(pos - 1, 0); 
	setTransform(); 
	$('.item-sticky').eq(pos).fadeTo(1800, 1);	
} 

function next() { 
	$('.item-sticky').eq(pos).fadeTo(300, 0);		
	pos = Math.min(pos + 1 , itemCount - 1); 
	setTransform(); 
	$('.item-sticky').eq(pos).fadeTo(1800, 1);	
} 

$("#prev").click(function() {
	prev();
});
	
$("#next").click(function() {
	next();
});	
	
window.addEventListener('resize', setTransform);
});	