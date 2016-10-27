$("document").ready(function() {
	console.log("ready!");

	// $("#homeless-profile").ready(function() {
	// 	console.log("made it in!");

	//  //  $.getJSON("?q=kieth",function(data) {
	//  //    var person = data;
	//  //    console.log(data);
	// 	// });
	// })



	$("#submit").click(function(){
		console.log("clicked!");
		var user = {
			First : $("#first_name").val(),
			Last : $("#last_name").val(),
			Email : $("#email").val(),
			Image : $("#img_url").val()
		}
    var userStr = JSON.stringify(user);
		console.log(user);
		console.log(userStr);


    var url = "/create-account";
    $.ajax({
        url: url,
        type: "POST",
        data: userStr,
        dataType: "text",
        success: submitSuccess()
    });
	});

	var submitSuccess = function() {
		console.log("success!");
		document.location.href = "/donate";
	};

});