function instructions()
{
	this.JQInstructions = $("<div class='instructionsClass'></div>");

}

instructions.prototype.init  = function()
{


}



//launch instruction click function
$('#instructionsButton').bind('touchstart click', function(e)
{  
			e.preventDefault();
			alert("DAZ Metro Instructions:" + "\n" + "\n" +"1. Play/Pause movie. " + "\n" + "2. Click on hotspot area to next level."+"\n"+"3. You don't need to be that accurate!!."+"\n"+"4. Toggle visibility on/off."+"\n"+"5. Enjoy it!!!.");
			


			});
