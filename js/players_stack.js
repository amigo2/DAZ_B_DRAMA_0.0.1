	// Mini Player buttons and actions
//*******************************************Intro Player	
	$('#beginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		//audioElement.currentTime = 0;
		window.location= 'http://bretonlabs.sandbag.uk.com/Store/DisplayItems-1-0-0.html';
		console.log('link');
    });
	
	
	
	$('#littleplayer').button({

        icons: { primary: 'ui-icon-play' }
		
    })
    .bind('touchstart click', function(e) {
        e.preventDefault();
		// Do something ...
		
		window.location= 'http://bretonlabs.sandbag.uk.com/Store/DisplayItems-1-0-0.html';
		console.log('link');
    });
	
	
	
	$('#littlestop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
        e.preventDefault();
		// Do something ...
		audioElement.pause();
    });
	
	$('#end').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click',function(e) {
        e.preventDefault();
		// Do something ...
		audioElement.stop();
    });
//********************************************************************


//*******************************************Rayban Player	
	$('#raybanbeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioConfessor.currentTime = 0;
    });
	
	
	
	$('#raybanlittleplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
	   // Do something ...
		audioConfessor.play();
		//stop movie here
		video.pause();
    });
	
	
	
	$('#raybanlittlestop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioConfessor.pause();
    });
	
	$('#raybanend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioConfessor.stop();
    });
//********************************************************************

//*******************************************Wall Player	
	$('#wallbeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioWall.currentTime = 0;
    });
	
	
	
	$('#walllittleplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioWall.play();
		video.pause();
    });
	
	
	
	$('#walllittlestop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioWall.pause();
    });
	
	$('#wallend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioWall.stop();
    });
//********************************************************************

//*******************************************Wood Player	
	$('#woodenbeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioWooden.currentTime = 0;
    });
	
	
	
	$('#woodenlittleplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioWooden.play();
		video.pause();
    });
	
	
	
	$('#woodenlittlestop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioWooden.pause();
    });
	
	$('#woodenend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioWooden.stop();
    });
//********************************************************************

//*******************************************Number Two Player	
	$('#twobeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioNumberTwo.currentTime = 0;
    });
	
	
	
	$('#twoplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioNumberTwo.play();
		video.pause();
    });
	
	
	
	$('#twostop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioNumberTwo.pause();
    });
	
	$('#twoend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioNumberTwo.stop();
    });
//********************************************************************

//*******************************************Stickers Player	
	$('#stickerbeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioStickers.currentTime = 0;
    });
	
	
	
	$('#stickerplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioStickers.play();
		video.pause();
    });
	
	
	
	$('#stickerstop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioStickers.pause();
    });
	
	$('#stickerend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioStickers.stop();
    });
//********************************************************************

//*******************************************Commission Player	
	$('#commissionbeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioComission.currentTime = 0;
    });
	
	
	
	$('#commissionplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioComission.play();
		video.pause();
    });
	
	
	
	$('#commissionstop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioComission.pause();
    });
	
	$('#commissionend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioComission.stop();
    });
//********************************************************************

//*******************************************Sunglitters Player	
	$('#sunglittersbeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioSunglitters.currentTime = 0;
    });
	
	
	
	$('#sunglittersplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioSunglitters.play();
		video.pause();
    });
	
	
	
	$('#sunglittersstop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioSunglitters.pause();
    });
	
	$('#sunglittersend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioSunglitters.stop();
    });
//********************************************************************

//*******************************************Painting Player	
	$('#paintingbeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioPainting.currentTime = 0;
    });
	
	
	
	$('#paintingplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioPainting.play();
		video.pause();
    });
	
	
	
	$('#paintingstop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioPainting.pause();
    });
	
	$('#paintingend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioPainting.stop();
    });
//********************************************************************

//*******************************************Ghost Player	
	$('#ghostbeginning').button({
        text: false,
        icons: { primary: 'ui-icon-seek-start' }
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		//audioGhost.pause();
		
		audioGhost.currentTime = 0;
    });
	
	
	
	$('#ghostplayer').button({
        text: false,
        icons: { primary: 'ui-icon-play' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioGhost.play();
		video.pause();
    });
	
	
	
	$('#ghoststop').button({
        text: false,
        icons: { primary: 'ui-icon-pause' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioGhost.pause();
    });
	
	$('#ghostend').button({
        text: false,
        icons: { primary: 'ui-icon-stop' }
		
    })
    .bind ('touchstart click', function(e) {
		e.preventDefault();
        // Do something ...
		audioGhost.stop();
    });
//********************************************************************
	
	
	
	
	
	
	
	
	
	
	
