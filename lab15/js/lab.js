//var myUrl = "http://numbersapi.com/42/math";
//var myUrl = "https://api.kanye.rest/";
var myUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

$("#activate").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // Any data to send
      // data: { id: 123},
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      $("#output").html(JSON.stringify(data.message));


  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);

	})

}
