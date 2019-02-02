// Business Logic
// pass in the size of pizza
function Order() {
  this.toppings = [],
  this.cost = 0,
  this.eachTopping = 0;
}

Order.prototype.addSize = function (sizePizza) {
  if (sizePizza === 'small') {
    this.cost = 13;
  } else if (sizePizza === 'medium') {
    this.cost = 18;
  } else if (sizePizza === 'large') {
    this.cost = 23;
  }
};

Order.prototype.toppingsCalc = function (toppings) {
  this.toppings.push(toppings);
};

Order.prototype.toppingsCalcCost = function () {
  // could take toppings array as arguement and each one checked gets +1
  if (document.getElementById('cheese').checked) { this.eachTopping += 1; }
  if (document.getElementById('pineapple').checked) { this.eachTopping += 1; }
  if (document.getElementById('pepperoni').checked) { this.eachTopping += 1; }
  if (document.getElementById('mushrooms').checked) { this.eachTopping += 1; }
  if (document.getElementById('goatcheese').checked) { this.eachTopping += 1; }
  if (document.getElementById('spinach').checked) { this.eachTopping += 1; }
  if (document.getElementById('jalapenos').checked) { this.eachTopping += 1; }
  if (document.getElementById('siracha').checked) { this.eachTopping += 1; }
};


Order.prototype.price = function () {
  this.cost += this.eachTopping;
};

Order.prototype.output = function () {
  var stringCost = `That\'ll  be $ ${this.cost}`;
  return stringCost;
};






// User Interface Logic
$(document).ready(function () {

  $('form#newPizza').submit(function (event) {
    event.preventDefault();

    // on submit of the form, check the vals of radio buttons with name sizePizza
    var sizePizza = $('input:radio[name=sizePizza]:checked').val();

    // array exists to push toppings into
    var toppings = [];

    // each val checked gets pushed into the array
    $('input:checkbox[name=toppings]:checked').each(function () {
      toppings.push($(this).val());
    });

    // create instance of a pizza with the size variable and toppings variable
    var newOrder = new Order(sizePizza, toppings);

    // pass size into addSize prototype
    newOrder.addSize(sizePizza);

    // pass toppings into toppingsCalc prototype
    newOrder.toppingsCalc(toppings);

    // calc cost of topoings
    newOrder.toppingsCalcCost();

    // determine price
    newOrder.price();
    $('#output').text(newOrder.output());
    $('#output').show();

  });
});
