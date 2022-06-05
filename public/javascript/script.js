
var ninjaKey = "o+av+xqRbo9t4LzpYZYrTg==BIM0Nl0wB5X2Kmk1";
// var newSmoothie = {};
var ingredients = {
    fruit: ["strawberry", "banana", "apple", "blueberry", "mango"],
    base: ["almond milk","coconut milk", "orange juice"],
    ptnsupp: ["pea protein", "Peanut Butter", "Whey Protein"],
    smoothie: ["poison"],
};




var swanson = function() {
    var swansonUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

    fetch(swansonUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          $("#swanson").append(data);
        });
    });
};


// var query = '3lb carrots and a chicken sandwich'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.calorieninjas.com/v1/details?query=' + query,
//     headers: { 'X-Api-Key': ninjaKey},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

swanson();

var createIngredient = function(ingredientText, ingredientList) {
    var ingredientLi = $("<li>").addClass("list-item");
    var ingredientP = $("<span>")
        .addClass("sportevents")
        .text(ingredientText);
    ingredientLi.append(ingredientP);
    $("#list-" + ingredientList).append(ingredientLi);
};

var loadIngredients = function() {
    $.each(ingredients, function(list, arr){
        arr.forEach(function(sportevents){
            createIngredient(sportevents, list);
        });
    });
};

// $(".sportevents-list").draggable();

$(".card .sportevents-list").sortable({
    //enable across sportevents-lists
    connectWith: $("#list-smoothie"),
    scroll: false,
    tolerance: "pointer",
    helper: "clone",
    activate: function(event, ui){
        $(this).addClass("dropover");
    },
    deactivate: function(event, ui){
        $(this).removeClass("dropover");
    },
    over: function(event) {
        $(event.target).addClass("dropover-active");
    },
    out: function(event) {
        $(event.target).removeClass("dropover-active");
    },
      update: function() {
        var tempArr = [];

            // loop over current set of children in sortable list
            $(this)
                .children()
                .each(function() {
                    // save values in temp array
                    tempArr.push({
                        text: $(this)
                        .find("p")
                        .text()
                        .trim(),
                    });
                });
           ingredients[smoothie] = tempArr;
        }
});



var saveSmoothie = function() {
    localStorage.setItem("smoothie", JSON.stringify(newSmoothie))
};

loadIngredients();

