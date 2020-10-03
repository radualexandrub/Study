Notes taken from:
- [CSS Full Course - including Flexbox and CSS Grid Tutorials 1h30m from ***freeCodeCamp***](https://www.youtube.com/watch?v=ieTHC78giGQ&list=WL&index=44&ab_channel=freeCodeCamp.org)
- [w3schools - CSS Tutorial](https://www.w3schools.com/css/default.asp)
- [tutorialspoint - CSS Tutorial](https://www.tutorialspoint.com/css/index.htm)

## Basics of CSS

- There are [three ways of inserting a style sheet](https://www.w3schools.com/css/css_howto.asp): 
  - External CSS:
  ```HTML
	<head>
	<link rel="stylesheet" href="mystyle.css">
	<link href="css/styles.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css">
	</head>
  ```
  - Internal CSS: `<head><style>body{ color: gray; }</style></body>`
  - Inline CSS: `<h1 style="color:purple; text-align:center;">This a nice heading, yes</h1>`

- Use a CSS to Style ***tags***:<br/>
Change all paragraph/headers text color using a `tag`:
```CSS
p {color: red;}
h2 {
	color: blue;
	font-size: 30px;
	font-family: monospace;
}
```

- Use a CSS Class to Style ***elements***, [CSS class Selector](https://www.w3schools.com/css/css_selectors.asp):
```HTML
<style>
	.blue-text {
		color: blue;
	}
	.orange-text {
		color: orange;
		// Add borders to text/paragraph/image
		border-color: darkorange;
		border-width: 5px;
		border-style: solid;
		// Make border corners rounded
		border-radius: 10px;
	}
</style>

<p class="blue-text">Hey</p>
<h2 class="orange-text">Hey</h2>
```

- Specify that only specific HTML elements should be affected by a class
```CSS
p .center {
  text-align: center;
  color: red;
}
```

- The **CSS Universal Selector** `*` selects all HTML elements on the page/will affect every HTML element on the page:
```CSS
* {
  text-align: center;
  color: blue;
}
```

- The **CSS Grouping Selector**:
```CSS
h1, h2, p {
  text-align: center;
  color: red;
}

// is the same as
h1 {
  text-align: center;
  color: red;
}
h2 {
  text-align: center;
  color: red;
}
p {
  text-align: center;
  color: red;
}
```

- [All CSS Simple Selectors](https://www.w3schools.com/css/css_selectors.asp)

| Selector           | Example    | Example description                             |
|--------------------|------------|-------------------------------------------------|
| `.class `           | `.intro`     | Selects all elements with class="intro"         |
| `#id`               | `#firstname` | Selects the element with id="firstname"         |
| `*`                 | `*`          | Selects all elements                            |
| `element`           | `p`          | Selects all `<p>` elements                        |
| `element,element,..`| `div`, `p`     | Selects all `<div>` elements and all `<p>` elements |

- Import a [Google Font](https://fonts.google.com/)
```HTML
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
<style>
	h2 {
		font-family: 'Roboto', sans-serif;
	}
</style>
<!-- If I list multiple fonts on font-family, it will render the first one if it's available (can be loaded from server/rendered by browser), if it's not, will render the second and so on -->
```

- Sizing images:
```CSS
.large-image {
	width: 500px; // fixed size
}
<img class="large-image" src="...">
```

- Make circular images (with border) with `border-radius: 50%`:
```CSS
.circular-image {
	border-color: aqua;
	border-width: 5px;
	border-style: solid;
	border-radius: 50%;
}
<img class="circular-image" src="...">
```

- Add a background color to paragraphs, divs, etc:
```CSS
.silver-background {
	background-color: silver;
}
<div class="silver-background"><p>Lorem</p></div>
```

- **Set an Id of an element so we can reference it in JavaScript**:<br/>
Id is similar to a class except each element has its own id. We need to use a `#` for an id. Even if we attached a `blue-text` class, the Id element is prioritary => in this e.g. the h2 header will be green not blue.
```HTML
<style>
	#heading {
		color: green;
	}
</style>

<h2 class="blue-text" id="heading">CatPhotoAppp</h2>
<form id="cat-photo-form" action=".."></form>
```

- The **CSS padding** is the space all around the text, unlike the margin that's outside the border's of that text/paragraph.
```CSS
.yellow-box {
	background-color: yellow;
	padding: 10px;
}
.red-box {
	background-color: crimson;
	color: #fff;
	padding-top: 10px;
	padding-bottom: 20px;
	padding-left: 5px;
	padding-right: 5px;
}
.same-red-box {
	background-color: crimson;
	color: #fff;
	padding: 20px 40px 20px 40px; // top right bottom left
}
.brown-box {
	background-color: brown;
	color: #fff;
	margin-top: 10px;
	margin-bottom: 20px;
	margin-left: 5px;
	margin-right: 5px;
}
```
<img src="/CSS/box-model.jpg" width=600>

- **Use Attribute Selectors to Style Elements:**
```HTML
<style>
	[type='radio'] {
		margin: 20px;
	}
	[type='checkbox'] {
		margin: 10px opx 15px 0px;
	}
</style>

<form>
	<label><input type="radio" checked> Indoor</label>
	<label><input type="checkbox"> Outdoor</label>
</form>
<!-- There is a fundamental difference between radio vs checkbox. In a checkbox group, a user can select more than one option. Each checkbox operates individually, so a user can toggle each response "on" and "off" / any number of choices, including zero, one, or several. Radio buttons, however, operate as a group and provide mutually exclusive selection values /  the user must select exactly one choice-->
```

- ***Absolute vs. Relative units in CSS***: (Also [this](https://www.w3schools.com/cssref/css_units.asp) may be useful)
- **Absolute Lengths**: fixed, these will appear as exactly that size. Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.
	- cm: centimeters
	- mm: millimeters
	- in: inches (1in = 96px = 2.54cm)
	- px * : pixels (1px = 1/96th of 1in)
	- pt: points (1pt = 1/72 of 1in)
	- pc: picas (1pc = 12 pt)

- **Relative Lengths**: length relative to another length property. Relative length units scale better between different rendering medium.
	- em	Relative to the font-size of the element (2em means 2 times the size of the current font)	
	- ex	Relative to the x-height of the current font (rarely used)	
	- ch	Relative to the width of the "0" (zero)	
	- rem	Relative to font-size of the root element	
	- vw	Relative to 1% of the width of the viewport*	
	- vh	Relative to 1% of the height of the viewport*	
	- vmin	Relative to 1% of viewport's* smaller dimension	
	- vmax	Relative to 1% of viewport's* larger dimension	
	- %		Relative to the parent element

Tip: The em and rem units are practical in creating perfectly scalable layout!
* Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.

- Inherit Styles from the Body Element (that's what CSS is: Cascading = something you apply to an upper element goes to any lower element inside that upper element).<br/>
Eg. Everything you apply to `body` element will cascade/be inherited by all the other elements on the page
```HTML
<style>
	body {
		background-color: black;
		color: green; // text color
		font-family: monospace;
	}
</style>

<h1>Hello, World!</h1>
```

- Prioritize One Style over Another
```HTML
<style>
	body {
		background-color: black;
		color: green; // text color
		font-family: monospace;
	}
	.pink-text {
		color: pink;
	}
</style>

<h1 class="pink-text">Hello, World!</h1>
<!-- The color of the text will be pink, prioritized over green from body tag that is further up / prioritized because class="" is more specific -->
```

- Prioritize One Style over Another: IDs are more specific than classes. (`IDs` > `classes` > `body inheritance`)
```HTML
<style>
	body {
		background-color: black;
		color: green; // text color
		font-family: monospace;
	}
	#orange-text {
		color: orange;
	}
	.pink-text {
		color: pink;
	}
</style>

<h1 class="pink-text" id="orange-text">Hello, World!</h1>
<!-- The color of the text will be orange, prioritized over pink from class and green from body tag -->
```

- Also, inline style is "more specific" than any other way of styling (with `ids`, `classes`, `body inheritance`), therefore it's prioritized over other styles:
```CSS
<h1 class="pink-text" id="orange-text" style="color: #3AC49AFF">Hello, World!</h1>
// The text will be #3AC49AFF colored
```

- Or, you can override all other styles (`inline syle` > `ids` > `classes` > `body inheritance`) by using `!important`:
```HTML
<style>
	.pink-text {
		color: pink !important;
	}
</style>
<h1 class="pink-text blue-text" id="orange-text" style="color: white">Hello, World!</h1>
// The text will be pink
```

- Other way of writing [colors](https://www.w3schools.com/colors/default.asp). Also more info [here](https://www.w3schools.com/css/css_colors.asp).
```CSS
color: #000 // black as abbreviated hex code
color: #F00 // red as abbreviated hex code
color: #FF0000 // red
color: #00FF00 // green
color: #0000FF // blue
color: #FFA500 // orange
color: rgb(255, 255, 255) // white as rgb color instead of HEX
color: rgb(0, 255, 255) / cyan
```

- **CSS Variables:** They are declared/defined with two dashes `--` in front of their name. Variables can be accessed with `var(--var-name)`
```CSS
.penguin {
	--penguin-skin: gray;
	--penguin-belly: white;
	--penguin-beak: orange;
}

.penguin-top {
	top: 10%;
	left: 25%;
	background: var(--penguin-skin, gray);
	// the gray after writing the variable name is only for backup (if the variable can't be accessed or hasn't been declared): attached fallback values
}
```

- **Cascading CSS variables**:<br/>
Variables are available to use inside an element, e.g. bellow/within `.penguin` element (as seen above).<br/>
In order to make variables work **anywhere in the document**, you must declare your variables inside `:root` as a container for the entire HTML document:
```HTML
<style>
	:root {
		--primary: #2B627C;
		--secondary: #6c757d;
		--light: #f8f9fa;
		--dark: #343a40;
		--blue: #007bff;
		--font-family-monospace: SFMono-Regular, Menlo;
	}
	body {
		background: var(--light, #f8f9fa)
		// However you can overwrite variable's previous values
		--light: white;
	}
</style>
```

- **Using [Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) to change variables:** Eg. Change variables depending on the size of the screen:
```CSS
:root {
	--penguin-size: 300px;
	--penguin-color: gray;
}

@media (max-width: 350px) {
	:root {
		--penguin-size: 200px;
		--penguin-color: black;
	}
}
Another [link for Media Types](https://www.tutorialspoint.com/css/css_media_types.htm)
```

---


- Other great resources:
  - [CSS Crash Course For "Absolute" Beginners 1h30m - Traversy Media](https://www.youtube.com/watch?v=yfoY53QXEnI&ab_channel=TraversyMedia)
  - [CSS Flexbox Course 40min - freeCodeCamp](https://www.youtube.com/watch?v=-Wlt8NRtOpo&ab_channel=freeCodeCamp.org)


