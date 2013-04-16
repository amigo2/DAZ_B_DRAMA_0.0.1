

//**************************************************************Main PLayer
	$('.click-opacity').button({
        text: true,
        icons: { primary: 'ui-icon-gear' }
    })
    .click(function() {
        // Do something ...
    });
	
	$('.click-reload').button({
		text: true,
		icons: { primary: 'ui-icon-refresh' }
	});
	$('#instructionsButton').button({
		text: true,
		icons: { primary: 'ui-icon-info' }
	});
	$('#pausevideo').button({
		text: true,
		icons: { primary: 'ui-icon-pause' }
	});
	
	

	
	//Player Itself*************************************************************
	
	$(function() {

//******************************Play Pause

$( "#playpause" ).button({	
			text: true,
			icons: {primary: "ui-icon-play"}
			})
			.click(function() {
				var options;
				if ( $( this ).text() === "Play" ) {
				options = {
				label: "Pause",
				icons: {
				primary: "ui-icon-play"
				}
				};
				
				} 
				
				else {
				options = {
				label: "Play",
				icons: {
				primary: "ui-icon-pause"
				}
				};
				}
				$( this ).button( "option", options );

		});



});