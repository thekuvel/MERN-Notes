# CSS 3

## Basic

justify-content : for horizontal alignment.
align-items : for vertical alignment.

## Flex

container
justify-content - for horizontal alignment.
align-items - for vertical alignment.
flex-wrap : wrap - by default all the child elements will try to fit into the single row,
by using this wrap it will allow child elements to move to other rows automatically if the
no of child elements increases
align-content - only works when the flex-wrap is enabled and it aligns elements vertically.
gap - gap between rows and column.

child element
	flex-grow - it will allow the element to grow if it has space to grow.
	flex-shrink - it will allow to element to shrink if value is greater than 0 or refuse to shrink if value is set to 0.
	flex-basis - it will overwrite the width of the element.
	align-self - allow specific child element to vertically align.
	