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
 fragments can be empty, or contain other elements inside them sich as a div or 
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
it is a syntax extension of JavaScript which produce React elements. It also 
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
Yarn is a package manager for code that gives developers the ability to share 
code with others. The code that's stored by Yarn is refered to as a Package or a
Module. Yarn also uses a file called package.json to describe everything that is 
in a particular package.

---
<!-- ----------------------------------------------------------------------- -->
3. What is an anonymous function in JavaScript?

Your answer:

Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
4. What is the difference between state values and props in React?

Your answer:

Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
5. What is the DOM?

Your answer:

Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
6. STRETCH: Which is the difference between a div and a span?

Your answer:

Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

2. Ruby:

3. Implicit return:

4. Ruby blocks:

5. Ruby hashes:
