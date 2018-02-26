$.ajax("https://swapi.co/api/people/5", {
  crossDomain: true,
  method: "get",
  success: function(json, status, jqXHR){
    console.log(json);
    console.log(status);

    buildCharacterBio(json, function(bioString){
      var p = $("<p>");
      p.html(bioString);
      $("#content").append(p);
      var films = json.films;
      for(var i = 0; i < films.length; i++){
        getFilmTitles(films[i],function(aUrl, aFilmTitle) {
          var p = $("<p>");
          var a = $('<a>');
          p.append(a);
          console.log(aUrl);
          a.attr('href', aUrl);
          a.text(aFilmTitle);
          $("#content").append(p);
          console.log(typeof aFilmTitle);
          if (aFilmTitle == 'A New Hope'){
            $("#newHope").append(p);
          }else if (aFilmTitle == 'Revenge of the Sith'){

            $("#revengeSith").append(p);
          } else if (aFilmTitle == 'Return of the Jedi'){

            $("#returnJed").append(p);
          } else if (aFilmTitle == 'The Empire Strikes Back'){

            $("#EmpireStrikes").append(p);
          } else if (aFilmTitle == 'The Force Awakens'){

            $("#forceAwakens").append(p);
          }
        });
      }
/*
      var releaseDate = json.release_date;

     getRelDate(releaseDate, function(aUrl , aReleaseDate){
        var p = $("<p>");
        p.text(aReleaseDate);
        if (aReaseDate == '1983-05-25'){
        $("#rJ").text(aReleaseDate);
      }else if (aReaseDate == '1977-05-25') {
        $("#nH").text(aReleaseDate);
      }else if (aReaseDate == '2005-05-19') {
        $("#rS").text(aReleaseDate);
      }else if (aReaseDate == '1980-05-17') {
        $("#eS").text(aReleaseDate);
      }else if (aReaseDate == '2015-12-11') {
        $("#fA").text(aReleaseDate);
      }
      });
*/

      var species = json.species[0];

     getSpecies(species, function(aUrl , aSpeciesTitle){
        var p = $("<p>");
        var a = $('<a>');
        p.html(a);
        console.log(aUrl);
        a.attr('href', aUrl);
        a.text(aSpeciesTitle);
        $("#species").text(aSpeciesTitle);
      });

      var vehicles = json.vehicles[0];

     getVehicles(vehicles, function(aUrl , aVehicleTitle){
        var p = $("<p>");
        var a = $('<a>');
        p.html(a);
        console.log(aUrl);
        a.attr('href', aUrl);
        a.text(aVehicleTitle);
        $("#vehicle").text(aVehicleTitle);
      });

      var homeworld = json.homeworld;
     getHomeworld(homeworld, function(aUrl , aHomeworldTitle){
        var p = $("<p>");
        var a = $('<a>');
        p.html(a);
        console.log(aUrl);
        a.attr('href', aUrl);
        a.text(aHomeworldTitle);
        $("#homeworld").text(aHomeworldTitle);
      });
    });


  }
});
        // var p = $("<p>");
        // var a = $('<a>');
        // p.append(a);
        // console.log(aUrl);
        // a.attr('href', aUrl);
        // a.text(aFilmTitle);
        // $("#content").append(p);
        // });



/*
function that creates a bio for a character like:
  "Luke Skywalker was born in 19BBY, has Blond hair and is 172cm tall."
*/
function buildCharacterBio(aPerson, callback){
  var result = aPerson.name + " is a female <a id='species' href='" + aPerson.species[0] + "'></a> was born in "
                +  aPerson.birth_year + " on the homeworld of <a id='homeworld' href='" + aPerson.homeworld + "' ></a> has "
                + aPerson.hair_color + " hair and is " + aPerson.height + "cm tall. To find out more about this character browse the Gallery below and explore the adventures they have engaged in! ";
  console.log(result);
  callback(result);
}

function getFilmTitles(aUrl, callback){
  var data;

  $.ajax(aUrl, {
    crossDomain: true,
    method: "get",
    success: function(json, status, jqXHR){
      callback(aUrl,json.title);
    }
  });


}

function getSpecies(aUrl, callback){
  var json;
  $.ajax(aUrl, {
    crossDomain: true,
    method: "get",
    success: function(json, status, jqXHR){
      console.log(json);
      callback(aUrl, json.name);
    }
  });

}

function getVehicles(aUrl, callback){
  var json;
  $.ajax(aUrl, {
    crossDomain: true,
    method: "get",
    success: function(json, status, jqXHR){
      console.log(json);
      callback(aUrl, json.name);
    }
  });

}

function getHomeworld(aUrl, callback){
  var json;
  $.ajax(aUrl, {
    crossDomain: true,
    method: "get",
    success: function(json, status, jqXHR){
      console.log(json);
      callback(aUrl, json.name);
    }
  });

}

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//function getRelDate( )
