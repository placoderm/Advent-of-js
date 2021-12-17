- Live Site: https://star-rating-advent-js.netlify.app/
  \*Repository: https://github.com/placoderm/Advent-of-js/tree/main/star-rating-advent-js#readme
- From: https://adventofjs.com

# How I made it

So, I really didn't like the behaviour of the ui as given in the challenge. I don't think I've ever seen a rating system that only worked by hover. To my recollection, there always has to be a click. However, seeing the stars light up on hover does make sense, so that's what I did.

The whole thing is done in React, just because that's what I'm learning now. And honestly I may be doing things in the most complicated way possible, so any feedback is welcome.

I create a state array called `starRatings` that contains a `true`/`false` value for each star. In retrospect, this is kind of ridiculous. It did give me some experience working with arrays. ¯\\\_(ツ)\_/¯

I map over the array to generate the html stars on the page. Starts with three stars selected.

There are three events, `onClick`, `onMouseEnter`, and `onMouseLeave`. The click event does the real work changing the `starRatings` array values. Then there is a `useEffect` with a function `matchScreenToArray()` that changes the class of the stars (selected, i.e. yellow, or not) to match the array. One tricky thing was toggling the star if it was already the highest one clicked.

The hovering behaviour is taken care of in the `onMouseEnter` event. This is done through changing the class of the stars but not the array `starRatings`. Then the `onMouseLeave` action calls the `matchScreenToArray()` function so if nothing is clicked while hovering, all goes back to the way it should be.

I shall never look at a star rating ui the same way again. 🤪

# Additions

- checkout the favicon
