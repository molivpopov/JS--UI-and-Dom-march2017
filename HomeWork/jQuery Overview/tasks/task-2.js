/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 
*/

function solve() {
    return function (selector) {
        $(".button").html("hide");
        if (typeof selector !== 'string' || !($(selector).length)) {
            throw Error("Must be a string or Jquery object");
        }
        var sibling = $("")
        $(".button").click(function () {
            var $this = $(this);
            var nextSibling = $this.next();
            while (nextSibling) {
                if (nextSibling.attr("class") === "content" && nextSibling.next().attr("class") === "button") {
                    if (nextSibling.attr("display") === none) {
                        nextSibling.attr("display", "");
                        $this.html("hide");
                        break;
                    } else {
                        nextSibling.attr("display", "none");
                        $this.html("show");
                        break;
                    }
                }
                nextSibling = nextSibling.next();
            }
        });
    };
};

module.exports = solve;