# Frontend Mentor - Interactive pricing component

![Design preview for the Interactive rating component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers



### Links

- Live Site URL: [Live Demo](https://interactive-pricing-component-o.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned
- Styling Range Input

```css

.price-card__slider-wrapper{
    width: 100%;
    padding: 2rem 2.5rem;
    position: relative;
    margin-bottom: 1.2rem;
  }
  
  .price-card__slider-bar {
    -webkit-appearance: none;
    width: 100%;
    height: 0.5rem;
    border-radius: 5px;
    background: -webkit-gradient(linear, left top, right top, from(#a5f3eb), color-stop(50%, #a5f3eb), color-stop(0%, #eaeefb), to(#eaeefb));
    background: linear-gradient(to right, #a5f3eb 0%, #a5f3eb 50%, #eaeefb 0%, #eaeefb 100%);
  }
  
  .price-card__slider-bar::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #10d5c2;
    cursor: pointer;
    -webkit-box-shadow: 0px 20px 30px #1fead6;
            box-shadow: 0px 20px 30px #1fead6;
    background-image: url(/images/icon-slider.svg);
    background-size: 55%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  
  .price-card__slider-bar::-webkit-slider-thumb:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
    background-color: #0b8e81;
  }

```


## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@iyoha_osaro](https://www.twitter.com/yourusername)
