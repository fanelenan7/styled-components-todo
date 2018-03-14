### React `styled-components` Todo App

Learning [styled-components](https://www.styled-components.com/) module by building a simple app and playing with it.

This simple todo app was relatively easy to make, but there were some challenges along the way. One of them was figuring out how to nest styled components in a way that works.

Such was the case with the custom checkbox I made, because basic checkboxes are very ugly and unstylable. Can't have that, so I did what I usually do: hide checkbox itself, allow it to be handled by label that is wrapping it (always wrap your checkboxes and radio buttons in labels, don't just put them next to each other!) through ids and htmlFors and made my own checkbox.

Figuring out exactly where and how to put the styles took a bit of time, and I went to CodePen to actually quickly throw together a prototype of what I wanted using classic CSS just to wrap my head around what should be nested where.

Another little snag I had encountered was a thing that I probably knew but forgot about. It's that React watches mapped DOM elements through the use of keys only, and if your checkbox has the same key as the checkbox as the one you checked and just deleted, then it's going to be already checked. TIL, always make your keys _really_ unique.

Aside from that, I had fun styling with `styled-components`. It feels a bit cumbersome for such a tiny app as this, but I can definitely see the massive potential for a larger one. Make it once, use forever type deal. But yeah, if your app is small to medium size, I don't know if you can justify using it. Like Redux, it's value grows with the size of your codebase.

Definitely check it out if you are interested! You can find Styled Components here: [https://www.styled-components.com/](https://www.styled-components.com/), and my deployed little Todo App here: [https://styled-components-todos.surge.sh/](https://styled-components-todos.surge.sh/).
