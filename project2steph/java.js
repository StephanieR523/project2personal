$(document).ready(function () {
  console.log("the page is ready!");
  
  
// $("#author").on("keyup", function (event){
//     var authorString = $("#author").val().trim();
  
//   if (authorString.length<3){
//     // alert("keep typing");
//     // $("#message").text("keep typing");
//     return;
//   }
//   console.log(authorString)
//   apicall(authorString);
// });


$(document).on("click", "#submit", function(event) {
event.preventDefault()
console.log("clicked")
  
    // var newAuthorString = authorString.split(' ').join('+');
    // console.log("newAuthorString: " + newAuthorString)
    // // API Calls to Last.FM
  
    // var title = newAuthorString
  
    var apiKey = "Wm15w21AfNUkV2KWZOm9uw"

    var userInput = $("#author").val().trim().replace("'", "%27").replace(" ", "+");
    console.log(userInput)

    var queryURL = "https://www.goodreads.com/search/index.xml?key=" + apiKey + "&q="+ userInput
    console.log("queryURL: " + queryURL)

    $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {

    console.log(response)
    $("#body").html(response)
  })
  })
})