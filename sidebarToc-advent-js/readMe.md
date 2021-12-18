- **Live Site**: toc-advent-js.netlify.app
- **Repository**:
- **From**: https://adventofjs.com

# How I made it

I've never done anything with scroll listening before. But when I googled it, I read that `IntersectionObserver` is considered a better option, so that's what I researched.

I had the (in retrospect kind of wacky) idea to use the `innerText` of the `h3` items and the `li` items to match them up. Problem with this was that they were not completely identical (e.g. saavy instead of savvy). But since I was already invested, I fixed the typos and continued.
