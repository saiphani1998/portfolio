//function to display skills
function skill(x)
{
	if(x == 1)
	{
		document.getElementById("skills").style.backgroundColor="#9933cc";
		document.getElementById("description").style.color="#ffffff";
		document.getElementById("description").innerHTML ="<ul> <li><b>HTML5 & CSS3</b></li> <li><b>JAVASCRIPT</b></li> <li><b>C Programming</b></li> <li><b>CORE JAVA</b></li> <li><b>ADV JAVA</b></li> </ul>";
	}
	else
	{
		document.getElementById("skills").style.backgroundColor="#9933cc";
		document.getElementById("description").style.color="#ffffff";
		
		document.getElementById("description").innerHTML ="<ul> <li><b>Communication Skills&emsp;</b></li> <li><b>Logical Thinking</b></li> <li><b>HardWorking Nature</b></li> </ul>";
	}
	
}
//functions to scroll_to_top
// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
	{
		document.getElementById("myBtn").style.display = "block";
	}
	else
	{
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
