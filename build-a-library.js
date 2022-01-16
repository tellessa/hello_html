class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  getAverageRating () {
    const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
    return average(this._ratings);
  }
  toggleCheckOutStatus () {
    if (this._isCheckedOut === true) {
      this._isCheckedOut = false;
    }
    else if (this._isCheckedOut === false) 
    {this._isCheckedOut = true;}
  }
  set isCheckedOut (newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }
  addRating (rating) {
    this._ratings.push(rating);
  }
}

class Movie extends Media {
  constructor (director, title, runTime) {
  super(title);
  this._director = director;
  this._title = title;
  this._runTime = runTime;
  }
  get director () {
    return this._director;
  }
  get runTime () {
    return this._runTime;
  }
}

class Book extends Media {
    constructor (author, title, pages) {
    super(title);
    this._author = author;
    this._title = title;
    this._pages = pages;
    }
    get author () {
      return this._author;
    }
    get pages () {
      return this._pages;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
// Item 19:
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
