function validateForm(){
     		var fname = document.getElementById("fname").value;
     		var lname = document.getElementById("lname").value;
     		var email = document.getElementById("email").value;
     		var pass = document.getElementById("password").value;
     		var r1 = document.getElementById("r1").checked;
     		var r2 = document.getElementById("r2").checked;
     		if(fname==''){
     			document.getElementById("efname").innerHTML="request to enter information";
     		}
     		else document.getElementById("efname").innerHTML="";
     		if(lname==''){
     			document.getElementById("elname").innerHTML="request to enter information";
     		}
     		else document.getElementById("elname").innerHTML="";
     		if(email==''){
     			document.getElementById("eemail").innerHTML="request to enter information";
     		}
     		else document.getElementById("eemail").innerHTML="";
     		if(pass==''){
     			document.getElementById("epass").innerHTML="request to enter information";
     		}
     		else document.getElementById("epass").innerHTML="";
     		if (r1==false && r2==false) {
     			document.getElementById("egender").innerHTML="request to enter information";
     		}else{
     			document.getElementById("egender").innerHTML="";
     		}
     	}

