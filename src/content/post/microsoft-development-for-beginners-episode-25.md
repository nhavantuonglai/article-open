---
pubDatetime: 2006-04-04T10:10:00Z
title: Microsoft | Development for beginners (Episode 35)
description: This lesson covers the basics of GitHub, a platform to host and manage changes to your code.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0425.jpg
tags:
  - developer
  - github
  - github book
  - github guide
  - microsoft
  - development for beginners
  - javascript
  - learn to code
  - training providers
  - training materials
---

# Creating a game using events

## Pre-Lecture Quiz

## Event driven programming

When creating a browser based application, we provide a graphical user interface (GUI) for the user to use when interacting with what we've built. The most common way to interact with the browser is through clicking and typing in various elements. The challenge we face as a developer is we don't know when they're going to perform these operations!

[Event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming) is the name for the type of programming we need to do to create our GUI. If we break this phrase down a little bit, we see the core word here is event. [Event](https://www.merriam-webster.com/dictionary/event), according to Merriam-Webster, is defined as "something which happens". This describes our situation perfectly. We know something is going to happen for which we want to execute some code in response, but we don't know when it will take place.

The way we mark a section of code we want to execute is by creating a function. When we think about [procedural programming](https://en.wikipedia.org/wiki/Procedural_programming), functions are called in a specific order. This same thing is going to be true with event driven programming. The difference is how the functions will be called.

To handle events (button clicking, typing, etc.), we register event listeners. An event listener is a function which listens for an event to occur and executes in response. Event listeners can update the UI, make calls to the server, or whatever else needs to be done in response to the user's action. We add an event listener by using [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), and providing a function to execute.

> NOTE: It's worth highlighting there are numerous ways to create event listeners. You can use anonymous functions, or create named ones. You can use various shortcuts, like setting the `click` property, or using `addEventListener`. In our exercise we are going to focus on `addEventListener` and anonymous functions, as it's probably the most common technique web developers use. It's also the most flexible, as `addEventListener` works for all events, and the event name can be provided as a parameter.

### Common events

There are [dozens of events](https://developer.mozilla.org/docs/Web/Events) available for you to listen to when creating an application. Basically anything a user does on a page raises an event, which gives you a lot of power to ensure they get the experience you desire. Fortunately, you'll normally only need a small handful of events. Here's a few common ones (including the two we'll use when creating our game):

– [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): The user clicked on something, typically a button or hyperlink.

– [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): The user clicked the right mouse button

– [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): The user highlighted some text

– [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): The user input some text

## Creating the game

We are going to create a game to explore how events work in JavaScript. Our game is going to test a player's typing skill, which is one of the most underrated skills all developers should have. We should all be practicing our typing! The general flow of the game will look like this:

– Player clicks on start button and is presented with a quote to type.

– Player types the quote as quickly as they can in a textbox.

– As each word is completed, the next one is highlighted.

– If the player has a typo, the textbox is updated to red.

– When the player completes the quote, a success message is displayed with the elapsed time.

Let's build our game, and learn about events!

### File structure

We're going to need three total files: index.html, script.js and style.css. Let's start by setting those up to make life a little easier for us.

– Create a new folder for your work by opening a console or terminal window and issuing the following command:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

– Open Visual Studio Code

```bash
code .
```

– Add three files to the folder in Visual Studio Code with the following names:

index.html

script.js

style.css

## Create the user interface

If we explore the requirements, we know we're going to need a handful of elements on our HTML page. This is sort of like a recipe, where we need some ingredients:

– Somewhere to display the quote for the user to type.

– Somewhere to display any messages, like a success message.
– A textbox for typing.

– A start button.

Each of those will need IDs so we can work with them in our JavaScript. We will also add references to the CSS and JavaScript files we're going to create.

Create a new file named index.html. Add the following HTML:

```html
<!  - – inside index.html -->
<html>
<head>
<title>Typing game</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Typing game!</h1>
<p>Practice your typing skills with a quote from Sherlock Holmes. Click start to begin!</p>
<p id="quote"></p> <!  - – This will display our quote -->
<p id="message"></p> <!  - – This will display any status messages -->
<div>
<input type="text" aria-label="current word" id="typed-value" /> <!  - – The textbox for typing -->
<button type="button" id="start">Start</button> <!  - – To start the game -->
</div>
<script src="script.js"></script>
</body>
</html>
```

### Launch the application

It's always best to develop iteratively to see how things look. Let's launch our application. There's a wonderful extension for Visual Studio Code called [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) which will both host your application locally and refresh the browser each time you save.

– Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) by following the link and clicking Install.

– You will be prompted by the browser to open Visual Studio Code, and then by Visual Studio Code to perform the installation.

– Restart Visual Studio Code if prompted.

– Once installed, in Visual Studio Code, click Ctrl-Shift-P (or Cmd-Shift-P) to open the command palette.

– Type Live Server: Open with Live Server.

– Live Server will start hosting your application.

– Open a browser and navigate to https://nhavantuonglai.com/.

– You should now see the page you created!

Let's add some functionality.

## Add the CSS

With our HTML created, let's add the CSS for core styling. We need to highlight the word the player should be typing, and colorize the textbox if what they've typed is incorrect. We'll do this with two classes.

Create a new file named style.css and add the following syntax.

```css
/* inside style.css */
.highlight {
background-color: yellow;
}

.error {
background-color: lightcoral;
border: red;
}
```

✅ When it comes to CSS you can layout your page however you might like. Take a little time and make the page look more appealing:

– Choose a different font.

– Colorize the headers.

– Resize items.

## JavaScript

With our UI created, it's time to focus our attention on the JavaScript which will provide the logic. We're going to break this down into a handful of steps:

– Create the constants.

– Event listener to start the game.

– Event listener to typing.

But first, create a new file named script.js.

### Add the constants

We're going to need a few items to make our lives a little easier for programming. Again, similar to a recipe, here's what we'll need:

– Array with the list of all quotes.

– Empty array to store all the words for the current quote.

– Space to store the index of the word the player is currently typing.

– The time the player clicked start.

We're also going to want references to the UI elements:

– The textbox (typed-value).

– The quote display (quote).

– The message (message).

```javascript
// inside script.js
// all of our quotes
const quotes = [
'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
'There is nothing more deceptive than an obvious fact.',
'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
'I never make exceptions. An exception disproves the rule.',
'What one man can invent another can discover.',
'Nothing clears up a case so much as stating it to another person.',
'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Go ahead and add more quotes to your game

> NOTE: We can retrieve the elements whenever we want in code by using `document.getElementById`. Because of the fact we're going to refer to these elements on a regular basis we're going to avoid typos with string literals by using constants. Frameworks such as [Vue.js](https://vuejs.org/) or [React](https://reactjs.org/) can help you better manage centralizing your code.

Take a minute to watch a video on using `const`, `let` and `var`

> 🎥 Click the image above for a video about variables.

### Add start logic

To begin the game, the player will click on start. Of course, we don't know when they're going to click start. This is where an [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) comes into play. An event listener will allow us to listen for something to occur (an event) and execute code in response. In our case, we want to execute code when the user clicks on start.

When the user clicks start, we need to select a quote, setup the user interface, and setup tracking for the current word and timing. Below is the JavaScript you'll need to add; we discuss it just after the script block.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
// get a quote
const quoteIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[quoteIndex];
// Put the quote into an array of words
words = quote.split(' ');
// reset the word index for tracking
wordIndex = 0;

// UI updates
// Create an array of span elements so we can set a class
const spanWords = words.map(function(word) { return `<span>${word} </span>`});
// Convert into string and set as innerHTML on quote display
quoteElement.innerHTML = spanWords.join('');
// Highlight the first word
quoteElement.childNodes[0].className = 'highlight';
// Clear any prior messages
messageElement.innerText = '';

// Setup the textbox
// Clear the textbox
typedValueElement.value = '';
// set focus
typedValueElement.focus();
// set the event handler

// Start the timer
startTime = new Date().getTime();
});
```

Let's break down the code!

– Setup the word tracking.

– Using [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) and [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) allows us to randomly select a quote from the `quotes` array.

– We convert the `quote` into an array of `words` so we can track the word the player is currently typing.

– `wordIndex` is set to 0, since the player will start on the first word.

– Setup the UI.

– Create an array of `spanWords`, which contains each word inside a `span` element.

– This will allow us to highlight the word on the display.

– `join` the array to create a string which we can use to update the `innerHTML` on `quoteElement`.

– This will display the quote to the player.

– Set the `className` of the first `span` element to `highlight` to highlight it as yellow.

– Clean the `messageElement` by setting `innerText` to `''`.

– Setup the textbox.

– Clear the current `value` on `typedValueElement`.

– Set the `focus` to `typedValueElement`.

– Start the timer by calling `getTime`.

### Add typing logic

As the player types, an `input` event will be raised. This event listener will check to ensure the player is typing the word correctly, and handle the current status of the game. Returning to script.js, add the following code to the end. We will break it down afterwards.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
// Get the current word
const currentWord = words[wordIndex];
// get the current value
const typedValue = typedValueElement.value;

if (typedValue === currentWord && wordIndex === words.length – 1) {
// end of sentence
// Display success
const elapsedTime = new Date().getTime() – startTime;
const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
messageElement.innerText = message;
} else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
// end of word
// clear the typedValueElement for the new word
typedValueElement.value = '';
// move to the next word
wordIndex++;
// reset the class name for all elements in quote
for (const wordElement of quoteElement.childNodes) {
wordElement.className = '';
}
// highlight the new word
quoteElement.childNodes[wordIndex].className = 'highlight';
} else if (currentWord.startsWith(typedValue)) {
// currently correct
// highlight the next word
typedValueElement.className = '';
} else {
// error state
typedValueElement.className = 'error';
}
});
```

Let's break down the code! We start by grabbing the current word and the value the player has typed thus far. Then we have waterfall logic, where we check if the quote is complete, the word is complete, the word is correct, or (finally), if there is an error.

– Quote is complete, indicated by `typedValue` being equal to `currentWord`, and `wordIndex` being equal to one less than the `length` of `words`.

– Calculate `elapsedTime` by subtracting `startTime` from the current time.

– Divide `elapsedTime` by 1,000 to convert from milliseconds to seconds.

– Display a success message.

– Word is complete, indicated by `typedValue` ending with a space (the end of a word) and `typedValue` being equal to `currentWord`.

– Set `value` on `typedElement` to be `''` to allow for the next word to be typed.

– Increment `wordIndex` to move to the next word.

– Loop through all `childNodes` of `quoteElement` to set `className` to `''` to revert to default display.

– Set `className` of the current word to `highlight` to flag it as the next word to type.

– Word is currently typed correctly (but not complete), indicated by `currentWord` started with `typedValue`.

– Ensure `typedValueElement` is displayed as default by clearing `className`.

– If we made it this far, we have an error.

– Set `className` on `typedValueElement` to `error`.

## Test your application

You've made it to the end! The last step is to ensure our application works. Give it a shot! Don't worry if there are errors; all developers have errors. Examine the messages and debug as needed.

Click on start, and start typing away! It should look a little like the animation we saw before.

## 🚀 Challenge

Add more functionality

– Disable the `input` event listener on completion, and re-enable it when the button is clicked.

– Disable the textbox when the player completes the quote.

– Display a modal dialog box with the success message.

– Store high scores using localStorage.

## Review & Self Study

Read up on [all the events available](https://developer.mozilla.org/docs/Web/Events) to the developer via the web browser, and consider the scenarios in which you would use each one.