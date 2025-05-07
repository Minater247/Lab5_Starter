1. It is important because you will be interacting with the IDs and classes throughout multiple parts of the code - in HTML you must ensure they don't collide and are reasonably separate, in CSS you must be able to access them well to do styling, and in JS you must be able to access individual elements or groups where necessary.

2. They provide an in-DOM method to present per-element data information via the dataset attribute to JS code. They are very useful when you want to apply different JS code to different elements of otherwise indistinguishable nature - otherwise, you'd have to use IDs or add more classes, which can be cumbersome. These aren't related to microdata as far as I can find, they're a separate thing altogether - microdata is more semantic and parsable by accessibility helpers or SEO, data attributes are mainly just used to signal JS. Using data attributes instead of microdata can reduce the semanticness of your code,

3. A smaller DOM element that acts like a pointer to reference som DOM elements temporarily. This allows you to directly manipulate the DOM without actually affecting it immediately, so the browser doesn't have to redraw and reprocess everything as you run it. It's like the "Run without screen refresh" block in Scratch.

4. An optimized representation of the DOM in memory which doesn't actually touch the DOM until flushed. This eats up a good bit of memory and might have some performance impact on navigation, but the reduced number of DOM manipulations and redraws make this appealing.

5. `class` is a JS keyword. If you put it there, the parser would be unhappy, so they used `className`.

6. `addEventListener` can handle multiple events with multiple event types, allowing you to set up and remove events at will. `onClick`, on the other hand, has one allowed element, since it is actually part of the DOM element. A lot less powerful to use `onClick`, but the syntax is also confusing, so really you don't win.
