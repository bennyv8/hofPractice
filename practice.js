// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var counter = 0;

  _.each(numbers, function (number) {
    if (number % 5 === 0) {
      counter++;
    }
  });
  return counter;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var desiredFruits = _.filter(fruits, function (fruit) {
    if (fruit === targetFruit) {
      return true;
    } else {
      return false;
    }
  });

  return desiredFruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'. should Caps matter?
var startsWith = function(fruits, letter) {
  var desiredFruits = _.filter(fruits, function(fruit) {
    if (fruit[0].toLowerCase() === letter.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  });

  return desiredFruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var desiredDesserts = _.filter(desserts, function (dessert) {
    if (dessert.type === 'cookie') {
      return true;
    } else {
      return false;
    }
  });

  return desiredDesserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  var totalPrice = _.reduce(products, function(sumCost, product) {
    return sumCost + Number(product.price.slice(1));
  }, 0);

  return totalPrice;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

//I: an array of objects with each object having a type,
//O: an oject that has each desert type as a key and a count of how many times
//C: none constraints
//E: if input objects doesnt have those keys

var dessertCategories = function(desserts) {
  //create a return object
  var dessertTypes = {};
  //pluck all the values key 'type' into an array
  _.reduce(desserts, function(dessertTypes, dessert) {
    if (dessertTypes[dessert.type] === undefined) {
      dessertTypes[dessert.type] = 1;
    } else {
      dessertTypes[dessert.type]++;
    }
    return dessertTypes;
  }, dessertTypes);

  return dessertTypes;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var desiredMovies = [];
  _.reduce(movies, function(desiredMovies, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      desiredMovies.push(movie.title);
    }
    return desiredMovies;
  }, desiredMovies);
  return desiredMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var possibleMovie = false;
  _.reduce(movies, function(movies, movie) {
    if (movie.runtime < timeLimit) {
      possibleMovie = true;
    }
    return movies;
  }, movies);

  return possibleMovie;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var result = _.map(fruits, function (fruitString) {
    return fruitString.toUpperCase();
  });
  return result;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var addedGlutenFree = _.map(desserts, function (dessert) {
    if (dessert.ingredients.indexOf('flour') === -1) {
      dessert.glutenFree = false;
    } else {
      dessert.glutenFree = true;
    }
    return dessert;
  });
  return addedGlutenFree;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var addedSalePrice = _.map(groceries, function(item) {
    var originalPrice = Number(item.price.slice(1));
    item.salePrice = '$' + (originalPrice * (1 - coupon)).toFixed(2);
    return item;
  });
  return addedSalePrice;
};
