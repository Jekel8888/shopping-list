(.submit[eventData], handler) is an event handler 
Handler: A function to execute each time the event is triggered.
(eventData): ([eventHandler], handler): An object containing data that will be passed to the event handler. 
(handler): ([eventHandler], Handler): A function to execute each time the event is triggered. 

event.preventDefault() is a method that stops the page from resetting


.toggleClass(className, (state(maybe use this if you want to know the state of the toggle)))
className: One or more class names (separated by spaces) to be toggled for each element in the matched set.
State: A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
.toggleClass(className [, state])
Function: A function that returns class names to be toggled in the class attribute of each element in the matched set.
Receives the index position of the element in the set, the old class value, and the state as arguments.
State: A boolean value to determine whether the class should be added or removed.


.closest(selector)
Selector: A string containing a selector expression to match elements against.
.closest(selector[, context]) 
Selector: A string containing a selector expression to match elements against.
Context: A DOM element within which a matching element may be found.
.closest(selection)
Selection: A jQuery object to match elements against.
.closest(element)
Element: An element to match elements against.















the purpose of this code is to enter items by entering text and hitten 'Return' OR click the 'add item' BUTTON
check and uncheck items on the list by clicking the 'Check' button
and permanently remove items from the list


You must use a CDN-hosted version of jQuery. put the application code in a file called 'index.js' and link to it in 'index.html'
Be sure to put both script elements at the bottom of the <body> element.
Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.

(look up).submit(), preventDefault(), toggleClass(), and closest().
(look up CDN-hosted version of jQuery)

google cdn?



enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
check and uncheck items on the list by clicking the "Check" button
permanently remove items from the list