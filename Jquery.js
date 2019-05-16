$(document).ready(function(){
	$("#btn").click(function(){
	var fname  = $("#fname").val();
	var lname  = $("#lname").val();
	var email  = $("#email").val();
	var pass   = $("#password").val();
	var gender = $('input[name=gender]:checked').val(); 
	if(fname=='') {
		$("#efname").text("request to enter information");
	}else $("#efname").text("");
	if(lname=='') {
		$("#elname").text("request to enter information");
	}else $("#ename").text("");
	if(email=='') {
		$("#eemail").text("request to enter information");
	}else $("#eemail").text("");
	if(pass=='') {
		$("#epass").text("request to enter information");
	}else $("#epass").text("");
	if(gender==null) {
		$("#egender").text("request to enter information");
	}else $("#egender").text("");

	});
});