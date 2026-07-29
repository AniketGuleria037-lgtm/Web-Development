<h1>Box Model</h1>

1) A box is anything which holds contebt in it.
2) Any HTML tag can act as a box. For eg:- div, span etc.
3) Content is anything inside the box (para, heading, image, video).
4) Padding is the spacing between content and box border.
5) Border is the boundary of the box separating it from the outer content.
6) Margin is the minimum spacing of the box from the outer content.

7) Total size of box = Content + Padding + Border

8) When we set the height and the width properties of a box. We actually resize the content.
9) There is a css property -> box-sizing:border-box in which
Content + Padding + Border = Height, Width (CSS property)

<h2>Margin-Collapse</h2>
When we have two boxes near each other(Both have a margin set).
The spacing between the two boxes will be maximum of the margin of the two boxes.