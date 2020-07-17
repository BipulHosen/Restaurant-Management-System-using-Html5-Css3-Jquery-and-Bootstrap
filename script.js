

$(window).scroll(function()
{
	var windowPosition=$(window).scrollTop();
	var pos=$('.menu').position();
	if(windowPosition>=pos.top)
	{
	     $('.menu').css({
		'position':'fixed',
		'top':'0px',
		'width':'89.8%'
	        });	
	}
	else
	{


	     $('.menu').css({
		'position':'relative',
		'top':'0px'
	        });	



	}

	
});
function checkInputfName()
{
	var fname=$("#fName").val();
 
	var reg=/^[a-zA-Z ]{2,10}$/;
	if(reg.test(fname))
	{
 
	 $('#fName1Error').text(' ');
	 return true;
	}
	else
	{
	 
		$('#fName1Error').text("Only characters and 2 to 10 characters will be taken"); 
		return false;
	}
	

}
function  checkInputlName()
{

	var lname=$("#lName").val();
 
	var reg=/^[a-zA-Z ]{2,10}$/;
	if(reg.test(lname))
	{
 
	 $('#lName1Error').text(' ');
	 return true;
	}
	else
	{
	 $('#lName1Error').text("Only characters and 2 to 10 characters will be taken"); 
	 return false;
	}

}

function checkInputlEmail()
{

	var reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	var email=$("#email").val();
	 if(reg.test(email))
	 {
		 $("#emailAddressError").text(' ');
		 return true;
	 }
	 else{

		$("#emailAddressError").text('invalid email address');
		return false;
	 }
}

function checkInputlPassword()
{

	var reg=/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
	var password=$("#password").val();
	// var checkbox=$("#checkbox").val();
	if(reg.test(password))
	{
		$("#passwordError").text(' ');
		return true;
	}
	else
	{
		$("#passwordError").text('password must have at least 1 lowercase letter 1 uppercase letter | at least 1 lower case letter and at least 1 alpha-numeric character| at least 1 Uppercase letter and at least 1 numeric charatcer and and also total at least 6 characters');
		return false;
	}

	
}

function checkConfirmPassword()
{
  var password=$("#password").val();  
  var confirmPass=$("#confirmPassword").val();
  if(password==confirmPass)
  {

	$("#confirmPasswordError").text(' ');
	return true;
  } 
  else{

	$("#confirmPasswordError").text('confirm password is not matched with password');
	return false;
  }   

}


$('#fName').keyup(function(){
	checkInputfName();

});

$('#lName').keyup(function(){
	checkInputlName();

});

$('#email').keyup(function(){
	checkInputlEmail();

});
$('#password').click(function(){
	$("#passwordError").text('password must have at least 1 lowercase letter 1 uppercase letter | at least 1 lower case letter and at least 1 alpha-numeric character| at least 1 Uppercase letter and at least 1 numeric charatcer and and also total at least 6 characters')

});

$('#password').keyup(function(){
	$("#passwordError").text(' ');

});
$('#password').blur(function(){
	checkInputlPassword();

});
$('#confirmPassword').blur(function(){

	checkConfirmPassword();
});

$('#confirmPassword').keyup(function(){

	$("#confirmPasswordError").text(' ');
});
$('#confirmPassword').click(function(){

	$("#confirmPasswordError").text(' confirm password should be same with password');
});

$("#checkbox").click(function(){
	var pass=$("#password").val();
	var attrValue=$("#password").attr('type');
	if(attrValue=='password')
	{
		$("#password").attr('type','text');
	
		$("#password").val(pass);


	}
	else{

		$("#password").attr('type','password');


	}

	
});
function checkGender()
{

	var checkValue=$('input[type="radio"]:checked').val();
	if(checkValue=='male'|checkValue=='female')
	{
		$("#genderError").text(' ');
		return true;
	}
	else{
		$("#genderError").text('Please give your gender info');
		return false;

	}
	


}


$("#btn").click(function(){
   checkGender();

});
function checkDistrictName()
{

	   var districtname=$("#districtName").val();
	   if(districtname==' ')
	   {
		   $("#districtnameError").text('Please give your District name');
		   return false;
	   }
	   else{
		$("#districtnameError").text(' ');
		return true;

	   }
}

$("#form").submit(function()
{
	if(checkInputfName())
	{

		if(checkInputlName())
		{
		  if(checkInputlEmail())
		  {
			if(checkInputlPassword())
			{
			 
				
				if(checkConfirmPassword())
				{
					if(checkGender())
					{
						if(checkDistrictName())
						{
							document.write("submitted successfully");
                           return true;

						}
						else
						{
							return false;
						}

					}
					else{
						return false;
					}
				} 
				else
				{

					return false;
				}
			} 
			else
			{

				return false;
			}    
		  }
		  else{

			return false;
		  }
		}
		else{
            return false;

		}
	}
	else{
		return false;
	}
});
