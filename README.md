# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](../advice-generator-app-main/design/screenshot.jpg)




## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

During the development of this project I was able to understand the importance of using Async/await when we work with APIs.
Its use in a browser ensures that the page remains responsive and that the user experience is not affected.


```js
async function boardCreator() {
    const url = await fetch('https://api.adviceslip.com/advice')
    const retorno = await url.json()
    const idAdvice = `ADVICE # ${retorno.slip.id}`
    const description = `adviceDescription ${retorno.slip.advice}`

    adviceId.innerHTML = idAdvice
    adviceDescription.innerHTML = description
 }
```


### Continued development

I will continue my studies on the use of APIs to expand my knowledge and develop future projects skillfully making use of good programming practices.

### Useful resources

- [Introdução às Web APIs](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) - This is an amazing article that helped me understand what APIs are, how they work, how to use them in my code, and how they are structured. I recommend it to anyone who is still learning this concept.


## Author

- Frontend Mentor - [@Leonardo-Geronimo](https://www.frontendmentor.io/profile/Leonardo-Geronimo)


