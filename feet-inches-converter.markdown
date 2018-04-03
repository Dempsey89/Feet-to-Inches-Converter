Feet/inches converter
---------------------
So I decided to make a feet to inches/inches to feet converter because I I like numbers, and wanted to get practice creating a calculation app, and because those conversions are way too hard to do without it. 
I started out with the HTML, just added a couple radio buttons for whether you were converting to feet or inches or visa versa, then I created 2 different input areas for each radio button with a prompt saying to enter feet or enter inches. I finished off the HTML with a button to convert and a button to clear the entry. 
Next I added some very basic CSS just to make it so only one input area displays at a time, and gave the 2 buttons different colors and different colors on hover. 
Then I got into the meat of the project and started working on the JavaScript. 
First thing I tackled in the JS was to give the radio buttons functions. I made it so that when you clicked one radio button the corresponding input area would show and the other input area would be hidden. I also set the values of each input to null by using .val(“”); so that the user could start a new conversion every time they clicked a radio button. Then I added a .focus(); to each buttons function so that when you click the radio button the cursor automatically went to that input area.
Next I made it so that only numbers could be typed into the input areas. To do this, I added onkeyup and onkeydown functions to each inputs HTML, and then created a function  using a regular expression that only accepted characters 0-9.  Any other value entered in the input was replaced with “”. 

Next I created the function that would take place once the convert button was clicked. Doing so for converting inches to feet was basic enough. I just had to create a variable for the entry, and then a new variable that equaled the entries variable times 12, then I added some text to say x inches = y feet. Then changed the val() of that input to this variable, and that was all for inches to feet. 
Feet to inches took a couple more steps since all answers wont be whole numbers. 
Started similar to before, creating a variable for the input value, and then adding anew variable, this time dividing the input by 12. Then I made a new variable that took the parseInt value of that quotient so that it would equal a whole number (int). Then a variable that took the remainder of the input value. 
Then made an if then statement, so if the value was a whole number the original quotient variable would become the new value of the input, else the value would become the quotient + the remainder. And again added some text to the variables to make it communicate the answer back. 

Next I created the function for the clear button, sense there is no defined function to clear input I did have to make one myself, but it was simple. Just set values of the 2 inputs to “” like I did for the radio button functions and I was done there. 

And lastly, I wanted to make it so that the user could hit enter instead of having to scroll over and click the convert button if they so chose. To do this I just created a keyup function that stated if the parameter entered was 13(which is the number code for the enter key) then the convert function would run.


A [Pen](https://codepen.io/Dempsey85/pen/EmzNJE) by [Max Dempsey](https://codepen.io/Dempsey85) on [CodePen](https://codepen.io).

[License](https://codepen.io/Dempsey85/pen/EmzNJE/license).