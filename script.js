var myEmail=document.getElementById("email_field").value;
var myForm = document.getElementById("myForm");
		    	// 		function showDiv() {
		    	// 			var myEmail=document.getElementById("email_field");
		    	// 			if (validateEmail(email_field) == true){
   				// 			document.getElementById('thanksDiv').style.display = "block";}
							// }
				//document.getElementById("submit_button").addEventListener("click", function(event){
   								//event.preventDefault()});
						function validateEmail(myEmail)  {  
							var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
							if(myEmail.value.match(mailformat))  {  
								document.myForm.email.focus();  
								return true;  
								}  
							else  {  
								  
								document.myForm.email.focus();  
								return false;  
							}  
						}  

						function alertEmail(myEmail){
							event.preventDefault();
							if (validateEmail(myEmail)==false)
								alert("Please enter a valid email address");

						}


myForm.addEventListener("submit", alertEmail);
