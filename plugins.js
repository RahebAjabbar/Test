/* here we go jquery*/

/*
#syntax
$("html element").property();
* if you want to use class instead of html element, you put dot before it's name 
$--> jQuery

* there are difference between two below codes
1- the page is load with it,s pictures then do function
window.onload = function(){
// your code
};

2- the page is load and do function.. there is no neccessary to load pictuers 
$(document).ready(function(){
// your code
});

* you can use 
   $(function(){
     // your code
     }):
	 
instead of
      $(document).ready(function(){
	  // your code
	  });
*/

/*
#event
$("button").click(function(){
$("html element").property();
});

*if you replace ''html element'' by '' this'' you will change the ''button'' not ''html element''

*using hover with the button allow you to use two function separated by ,

# hide(), show(), toggle() {toogle change hide to show and show to hide}

*all of these functions have a two properties between pharse
1- speed-->the time will take until the element take action determine by millisecond and wrote like 300, 4000, 50 (the defult is 400) also "fast" , "slow"
2- callback--> a function will happen after the speed  

# fadeIn(), fadeOut(), fadeToggle(), fadeTo()

1- fadein--> when the element is hide, it show it by opacity
2- fadeout--> reverse fadein
3- fadetoggle--> like anything toggle
4- fadeTo --> all of fades up has two value speed and callback unless fadeto has another value called "opacity" it could 0.3, 0.5, 0.7

# Slideup(), slidedown(), slidetoggle() --> is the same as fade 
*/

/*
#Animate()

syntax-->.animate({
css properties (a , between property and other.. a property putting between 'property')
}, speed, callback);

*/

/*
#Stop()

syntax-->.stope(clearQueue, goToEnd)
* stop work with button, make a button with html and call it in jquery
1- clearQueue has 2 values, neither "true" which will stop all the animates when you click on the button or "false"
2-  goToEnd has 2 values, neither "true" which will stop the operations of animate when you click and give you the final form or "false"
*/