//complete this code
class Rectangle {
	Rectangle(width,height)
	{
    this.width=width;
	this.height=height;
	}
	get width()
	{
    console.log(this.width);
	}
	get height()
	{
    console.log(this.height);
	}
	function getArea()
	{
    return this.width*this.height;
	}
	}
class Square extends Rectangle {
	Square(side)
	{
    this.width=side;
	this.height=side;
	}
	get Perimeter()
	{
     return side*4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
