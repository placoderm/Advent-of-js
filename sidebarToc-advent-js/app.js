const tocItems = document.querySelectorAll("li");

// new IntersectionObserver object with screen as root element
var observer = new IntersectionObserver(
  entries => {
    alert(entries);
  },
  { root: null, threshold: [1], rootMargin: "0px 0px -300px 0px" }
);

// add observers on all headings
const headings = document.querySelectorAll("h3");
headings.forEach(heading => {
  observer.observe(heading);
});

// action to do when a heading enters the root
function alert(entries) {
  const currentHeadingInnertext = entries[0].target.innerText;
  const currentHeadingIntersecting = entries[0].isIntersecting; //boolean
  tocItems.forEach(tocItem => {
    if ((tocItem.innerText == currentHeadingInnertext) & (currentHeadingIntersecting === true)) {
      tocItems.forEach(tocItemToRemove => tocItemToRemove.classList.remove("selected"));
      tocItem.classList.add("selected");
    }
  });
}
