// import any system modules we want to use
import path from 'path'; // useful for getting filenames from the system

/**
 * A simple class that represents a restaurant
 * In Javascript, classes are just functions... but luckily, you can write them in a way that makes them look more like class definitions in other languages.
**/
class Rectangle {

    // the constructor function
    constructor(height, width) {
        // set the instance properties... 
        // there is no such thing as truly private properties in Javascript
        // as a convention, properties that *should* be treated as private are named with an underscore
        this._height = height;
        this._width = width;
    }

    // typical instance method
    calcArea() {
        // calculate the area of the rectangle
        return this._height * this._width;
    }

    // instance method
    toString() {
        // return something directly from this module
        let filename = path.basename(__filename); // get just the filename of this file, without the full path
        let message = `Hello - this message comes from ${filename}. This rect's is ${this.width} X ${this.height} with an area of ${this.area}`;
        return `${message}`;
    }

    // a getter method for a property of this instance... but notice that there actually is no property called area even though this is a getter
    // you can act like there is such a property... referring elsewhere in the code to this.area, which will call this function
    get area() {
        // get the area from the calcArea method
        return this.calcArea();
    }

    // a 'regular' getter and setter method for the _width property of this instance...
    get width() { 
        return this._width;
    }
    set width(width) {
        this._width = width;
    }

    // a 'regular' getter and setter method for the _height property of this instance...
    get height() { 
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
    
}

// make the Rectangle class the default export of this file
export default Rectangle;
