From: https://www.adventofjs.com/

**Live Site:** https://advent-js-tip-calc.netlify.app/

# Creation notes

I'm learning React now, so that's what I used. I also thought it made sense to use controled input to get live results. This caused lots of problems because input had to be checked on the fly. There is still a problem where you can have two decimals in the price, which causes a NaN problem. It was also easier to force a minimum of 1 person so there weren't other calculation problems. But it should probably start with an empty field so you don't have to remove the 1.

I did the css, html and js from scratch.

# Extra stuff
* Since there was no need for a Calculate button, I changed it to a Clear button.
* Since any tip less than 20% should be though over very carefully, there are some prompts to get the user to reconsider.

