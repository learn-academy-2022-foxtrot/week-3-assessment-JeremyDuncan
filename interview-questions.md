# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as 
if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have 
answered the question completely, there is always something more to learn. Write 
your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
* I like to think of JSX as the marriage betwwen HTML and JavaScript. JSX is 
 a language syntax used in React to create web applications.
 * In the return statement of a React component you need to use JSX fragments 
 ("<> </>") to encompase all the code you wish to be displayed in the DOM. These
 fragments can be empty, or contain other elements inside them such as a div or 
 even a table with nested data(as long as all the data is nested inside that 
 fragment)
 * Another intersting note about JSX is that it defaults to display HTML in the 
component return, unless you use the {} to denote JavScript variables, and 
functions, or React state.
* One syntax difference is that with styles that use the "-" to denote 
multi-word keys. In JSX you do not use "-" but instead combine words with 
camelCase. 
  * example: font-size = fontSize
* Another syntax difference is you have to use "onClick" instead of "onclick" 
for event listeners on mouse click events.

Researched answer:
According to: https://reactjs.org/docs/introducing-jsx.html,
* JSX is a syntax extension of JavaScript which produce React elements. It also 
mentions that JSX is not required to create React apps, but it is recomended.

---
<!-- ----------------------------------------------------------------------- -->
2. What is yarn? What file(s) are modified in a React application when you run 
yarn?

Your answer:
* Yarn is a package manager that allows developers to easily deploy, manage, 
install, and keep uo to date on the latest versions of software and their 
dependancies.
* Yarn's main competitor is NPM, which has been around longer, offers developers 
essentially the same functionality. The biggest difference being that Yarn is 
faster and more secure than NPM. 
* When you run run Yarn on a React application it checks your app directory and 
verifies your applications dependencies. It will download any that are missing. 

Researched answer:
According to: https://classic.yarnpkg.com/en/docs/getting-started,
* Yarn is a package manager for code that gives developers the ability to share 
code with others. The code that's stored by Yarn is refered to as a Package or a
Module. Yarn also uses a file called package.json to describe everything that is 
in a particular package.

---
<!-- ----------------------------------------------------------------------- -->
3. What is an anonymous function in JavaScript?

Your answer:
* An anonymous function is a function that does not have a name. It can't be 
called except for on the line of code it was created on. 

Researched answer:
* According to https://www.javascripttutorial.net/javascript-anonymous-functions/
An anonymous function is a function that does not have a name.

Examples:
```javascript
let example = function() {
  console.log("This is an anonymous function");
}
```
```javascript
(function() {
  console.log("This is an immediatly invoked anonymous function");
})();
```
```javascript
let example = () => {console.log("This is a shortened version")};
```
---
<!-- ----------------------------------------------------------------------- -->
4. What is the difference between state values and props in React?

Your answer:
* The difference between state values and props in React is that a state value 
is created to represent data to be manipulated. Everytime a state value is 
updated, React compares the difference of the Virtual DOM and actual DOM and 
makes changes to only the affected nodes that changed. 
* Props are used to access the value of state from other components. 

Researched answer:
According to: https://www.geeksforgeeks.org/what-are-the-differences-between-props-and-state/#:~:text=Props%20are%20used%20to%20pass,be%20passed%20to%20other%20components.
* State is the part of the application that changes. any component can have a 
state, and the state is mutable.
Props are properties that are used to pass data thats unmutable from one 
component to another.  
---
<!-- ----------------------------------------------------------------------- -->
5. What is the DOM?

Your answer: 
* The DOM is known as the Document Object Model and is a visual 
representaion of the code inside a webpage thats created by a web browser.

Researched answer:
According to: https://frontend.turing.edu/lessons/module-1/js-intro-to-the-dom.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517671727591&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJuq0hVzqEMjsv45Z-vMONxGC3orsxivCMoA2-xD94FqykOaqV7UJLEUaAr5iEALw_wcB,
* The DOM is the interface for HTML. The DOM is created after the web browser 
interpets the HTML code. When the DOM is created it produces a DOM tree thats 
logically organized. The DOM can be accessed by using the document call.

examples:
```html
<!-- Accessing the DOM with code -->
document.getElementById("main-section")
document.getElementsByTagName("a")[0]
document.getElementsByTagName("button")
```
---
<!-- ----------------------------------------------------------------------- -->
6. STRETCH: Which is the difference between a div and a span?

Your answer:
* A div is used to group large sections of code logically which can then be used 
too apply Classes or IDs. This logical seperation can then be manipulated in CSS
which will allow you to position and style your sections of code the way you 
would like.
* A span is similar to how a div works, but it is used to select small sections 
of code, verses large sections that like a.

Researched answer:
According to : https://blog.hubspot.com/website/span-vs-div#:~:text=Span%20and%20div%20are%20both,for%20inline%20organization%20and%20styling.
* Div and Span are generic elements in HTML that group together related data in 
a webpage. 
* It goes on to say that div's are often used to group paragraphs, 
images, and headings, while Span is used to apply styling to a small portion of
code. 
* It states that Span is generally used for small segments of text and other
elements that are inline with web page content.
---
<!-- ----------------------------------------------------------------------- -->
## Looking Ahead: Terms for Next Week

1. Object-oriented programming: 
* OOP is the one of the most popular programming 
  paradigm used by many languages. With OOP everything is essentially designed 
  around Object's, their data, and methods.
  
2. Ruby: 
* An object oriented language that is very flexible and easy to 
understand due to it't easy to read and understand methods. If you think there
would be a great method to be created to make your life easier...Ruby probably
has it.

3. Implicit return: 
* Ruby and Python are two languaged that i can think of that 
utilize this. This essentially means that you if you don't provide a return
in your code, then it will return the last line of code for you.

4. Ruby blocks: 
* Ruby blocks are lines of code that perform a sequence of
operations. they can be placed inside methods ans then called to run those 
blocks of code as well.  

5. Ruby hashes: 
* A hash is based on Key/Value pairs and is the equivalent of an 
Object in JavaScript with some differences in sytax and name. 
