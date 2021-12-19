# Password Generator

- **Live Site**: https://password-generator-advent-js.netlify.app/
- **Repository**:
- **From**: https://adventofjs.com

# How I made it

I used React since that is what I am learning right now.

# Feedback sought

Regarding the `refresh` button: Each of the check boxes and the slider have a state variable. When any of those change, an new password is generated using a `useEffect`. (That's why you get a new password at each increment of the slider) So for the refresh button, I couldn't figure out how to trigger that `useEffect` without creating a state variable for the refresh button. So I ended up making a boolean state variable that toggles each time the button is clicked. The value has no meaning of course. But I could add that variable to the list of refreshes that triggered the `useEffect`. So my question is, **how to trigger that `useEffect` without creating a new state variable**

# Additions

- added a refresh button
- when unchecking would mean that _no_ password was generated, then all four are re-checked
- added a copy button with text at the bottom for folks who may not recognize the symbol
- added mobile styling

# Thanks to Amy and James at adventofjs.com
