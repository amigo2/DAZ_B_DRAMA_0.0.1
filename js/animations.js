
		
		/* ------- VARS ------- */
		var video,
			position, //position from Brightcove player ... probably better way of getting this directly from Brightcove
			level = 1,	//start from level 1
			score = 0,	//keeping the score  
			lastKeyFrameTime = 0,    
			scoreDiv = document.getElementById("score"), 	// to hold the context of div used to display score and level 
			controlDiv = document.getElementById("control"),
			FF = !(window.mozInnerScreenX == null);
		//var hotspot1 = document.getElementById('#redcircle');
			
		
		var allAnimations = {
		
		
		
			first : {
			
					/* >>> this bit needs a bit more thought as it's sharing the same space as the keyframe data - problematic later on maybe?
						
						maybe something like:

						options: {
							image: 'something.png',
							shape: 'round/rect/whatever', //suggestion
							id: 'whatever', //could just store ID in here and not use the property names like redcircle, and then this can be in an array rather than object...?
							clickaction: 'do something?',
							noclickaction: 'do something if the user did not click?',
						}
					 */
					//image: 'something.png',
					image: 'redcircle',
					shape: 'round/rect/whatever', //suggestion
					id: 'whatever', //could just store ID in here and not use the property names like redcircle, and then this can be in an array rather than object...?
					clickaction: 'redClicked',
					noclickaction: 'do something if the user did not click?',
					/* and then the keyframe data below... */
					
					
					quote:'firsttttttttttt',
					start:{height: 0.1,width: 0.1,top: 200,left: 600,},

					17500: {left:600, top:200, width:0.1, height:0.1, fontSize:10},
					17600: {left:600, top:200, width:200, height:140, fontSize:100},
					33400: {left:600, top:200, width:200, height:140, fontSize:100},
					33500: {left:600, top:200, width:0.1, height:0.1, fontSize:10},
	
					50000: {left:600, top:200, width:0.1, height:0.1, fontSize:10},
			},
			
			shouldI : {
					image: 'something.png',
					clickaction: 'yellowClicked',
					quote:'shouldI',
					start:{height: 0.1,width: 0.1,top: 280,left: 420,},
					34000: {left:220, top:160, width: 0.1, height:0.1},
					34500: {left:220, top:160, width: 180, height:120},
					37000: {left:220, top:160, width: 180, height:120},
					37100: {left:220, top:160, width: 0.1, height:0.1},
					39000: {left:220, top:160, width:0.1, height:0.1},
				},
				

			deep : {
					image: 'something.png',
					clickaction: 'wallClicked',
					quote:'deep',
					start:{height: 0.1,width: 0.1,top: 170,left: 180,},
					46000: {left:580, top:170, width: 0.1, height:0.1},
					46100: {left:580, top:170, width: 180, height:100},
					49500: {left:580, top:170, width: 180, height:100},
					49800: {left:580, top:170, width: 0.1, height:0.1},
					51000: {left:580, top:170, width: 0.1, height:0.1},
				
				},
					
				

			why : {
					image: 'something.png',
					clickaction: 'woodenClicked',
					quote:'here',
					start:{height: 0.1,width: 0.1,top: 150,left: 450,},
					56700: {left:450, top:150, width: 0.1, height:0.1},
					56800: {left:450, top:150, width: 180, height:100},
					58500: {left:450, top:150, width: 180, height:100},
					58600: {left:450, top:150, width: 0.1, height:0.1},
					
					61000: {left:450, top:150, width: 0.1, height:0.1},
					
					//65000: {left:450, top:370, width:0.1, height:0.1},

				},
				
			noBack: {
			
					image: 'something.png',
					clickaction: 'numberTwoClicked',
					quote:'here',		
					start:{height: 0.1,width: 0.1,top: 350,left: 260,},
					91000: {left:260, top:350, width: 0.1, height:0.1},
					91100: {left:260, top:350, width: 300, height:150},
					93500: {left:260, top:350, width: 300, height:150},
					93510: {left:260, top:350, width: 0.1, height:0.1},
					
					125500: {left:260, top:350, width: 0.1, height:0.1},
					126000: {left:260, top:350, width: 300, height:150},
					128000: {left:260, top:350, width: 300, height:150},
					128100: {left:260, top:350, width: 0.1, height:0.1},
					
					162000: {left:260, top:350, width: 0.1, height:0.1},
					162100: {left:260, top:350, width: 300, height:150},
					163900: {left:260, top:350, width: 300, height:150},
					164000: {left:260, top:350, width: 0.1, height:0.1},
					
					202000: {left:260, top:350, width: 0.1, height:0.1},
					202100: {left:260, top:350, width: 300, height:150},
					204000: {left:260, top:350, width: 300, height:150},
					204100: {left:260, top:350, width: 0.1, height:0.1},
					
					270000: {left:260, top:350, width:0.1, height:0.1},
			
			},
			
			OhhS: {
			
					image: 'something.png',
					clickaction: 'stickersClicked',
					quote:'here',
					start:{height: 0.1,width: 0.1,top: 270,left: 230,},
					106000: {left:230, top:270, width: 0.1, height:0.1},
					106100: {left:230, top:270, width: 150, height:150},
					107700: {left:230, top:270, width: 150, height:150},
					107800: {left:230, top:270, width: 0.1, height:0.1},
					
					127800: {left:230, top:270, width: 0.1, height:0.1},
			
			},
			
			noText: {
			
					image: 'something.png',
					clickaction: 'comissionClicked',
				
					quote:'here',
					start:{height: 0.1,width: 0.1,top: 150,left:170,},
					114000: {left:170, top:150, width: 0.1, height:0.1},
					114100: {left:170, top:150, width: 450, height:400},
					118700: {left:170, top:150, width: 450, height:400},
					118800: {left:170, top:150, width: 0.1, height:0.1},
					
					140000: {left:170, top:150, width: 0.1, height:0.1},
			
			},
			
			thiIsIt: {
			
					image: 'something.png',
					clickaction: 'sunglittersClicked',
					quote:'here',
					start:{height: 0.1,width: 0.1,top: 150,left: 170,},
					133000: {left:170, top:150, width: 0.1, height:0.1},
					133100: {left:170, top:150, width: 450, height:400},
					135300: {left:170, top:150, width: 450, height:400},
					135400: {left:170, top:150, width: 0.1, height:0.1},
					
					136000: {left:170, top:270, width: 0.1, height:0.1},
			
			},
			
			carefull: {
			
					image: 'something.png',
					clickaction: 'paintingClicked',
					quote:'here',		
					start:{height: 0.1,width: 0.1,top: 170,left: 600,},
					135400: {left:600, top:170, width: 0.1, height:0.1},
					135500: {left:600, top:170, width: 200, height:400},
					136500: {left:600, top:170, width: 200, height:400},
					137000: {left:600, top:170, width: 0.1, height:0.1},
					
					137700: {left:600, top:270, width: 0.1, height:0.1},
			
			},
			
			ghostHotspot: {
			
					image: 'something.png',
					clickaction: 'ghostClicked',
					quote:'ghostHotspot',
					start:{height: 0.1,width: 0.1,top: 230,left: 550,},
					210000: {left:550, top:230, width: 0.1, height:0.1},
					210100: {left:550, top:230, width: 150, height:300},
					212500: {left:550, top:230, width: 150, height:300},
					212600: {left:550, top:230, width: 0.1, height:0.1},
				
					212800: {left:550, top:270, width: 0.1, height:0.1},
			
			},
			
			
			
			
			
			
			}
			
			
			var allKeyFrameTimes = [];
			var allHotspotIDs = [];
			//var all

			//initialisation - put this somewhere that makes sense...
			var n = 0;
			for (var k in allAnimations){
				//add the elements programmatically (i.e. these will be the hotspots)
				var activeZone = document.createElement('div');
				document.body.appendChild(activeZone); //this should probably go in another element wrapper?
				//add the id
				activeZone.id = k;
				
				//var q = '';

				
				//q += '<p>pepe dale ar mocho</p>';

				//wrap with jQuery if you want to do CSS stuff
				var $activeZone = $(activeZone);
				 
				$activeZone.addClass('activeZone');
				$activeZone.css({ background: "white", 'z-index' : 100000+n, position : "absolute", left : 0, top : 0, width:0, height:100, 'text-align':'center', fontSize:10, });
				//$activeZone.html(k);
				
				
				$activeZone.on('touchstart', activeZoneClick);
				$activeZone.on('click', activeZoneClick);
				
				//$activeZone.css({visibility:hidden;});
				
				

				//console.log(q);
				

				//other stuff....
				var keyframesForThisActiveZone = allAnimations[k]; //this gets you the "keyframes" object as above

				//get the key frame times for this hotspot and store in an array of arrays
				var keyFrameTimes = [];
				var keyFrames = allAnimations[k];
				for (var f in keyFrames){
					keyFrameTimes.push(f);
				}
				allKeyFrameTimes.push(keyFrameTimes); 

				//store the IDs
				allHotspotIDs.push(k);

				//console.log(k, keyframesForThisActiveZone );

				n++;
			}
				
			//console.log(allHotspotIDs);
			
			
			/*---------TEXT IN HERE-----------*/////////////////////////////////////////////////*******************************************
			
		

	
			
			for (var q in allHotspotIDs){

					var quotes = allHotspotIDs[q];
					var elements = allAnimations[quotes];
					
					
					
					for (var quotes in elements){
						console.log(elements.quote);
						
						//allAnimations[quotes];
						for (var i=0; i< quotes.length; ++i){
						var html= "";
					
						html += '<p>' +elements.quote+'</p>'; 
						//html += '<p>feeeeeeeeer</p>'; 
							
						$('.activeZone').html(elements.quote);
						}
						
					}
					
					
					
			}
			
	

			
			

			function activeZoneClick(ev){ 
			
				event.preventDefault();
			
				//var hotspots = document.getElementById('activeZone');
				//var $hotspots = $(hotspots);
				
				var id = ev.target.id;
				
				$id = $(id);
				
				console.log("so...." + id + " was clicked at the time of..." + video.currentTime); // * 1000?
				//get the element properties from allAnimations
				console.log("click action is: ", allAnimations[id].clickaction); //or whatever - this gets the clickaction
				
			
				if (allAnimations[id].clickaction  =='redClicked'){
				redClicked();
				//$hotspots.css({width:500});
				//console.log($hotspots);
				//$activeZone.hide();
				
				//$('.activeZone').css({'opacity': '0'});
				
				//$('#'+id).css({'opacity': '0'});
				$('#'+id).hide();
				
				
				
				
				
				
				
				}
				
				if (allAnimations[id].clickaction  =='yellowClicked'){
				yellowClicked();
				$('#'+id).hide();
				}
				
				if (allAnimations[id].clickaction  =='wallClicked'){
				wallClicked();
				$('#'+id).hide();
				}
				
				if (allAnimations[id].clickaction  =='woodenClicked'){
				woodenClicked();
				$('#'+id).hide();
				}
				
				
				if (allAnimations[id].clickaction  =='numberTwoClicked'){
				numberTwoClicked();
				$('#'+id).hide();
				}
				
				if (allAnimations[id].clickaction  =='stickersClicked'){
				stickersClicked();
				$('#'+id).hide();
				}
				
				if (allAnimations[id].clickaction  =='comissionClicked'){
				comissionClicked();
				$('#'+id).hide();
				}
				
				if (allAnimations[id].clickaction  =='sunglittersClicked'){
				sunglittersClicked();
				$('#'+id).hide();
				}
				
				if (allAnimations[id].clickaction  =='paintingClicked'){
				paintingClicked();
				$('#'+id).hide();
				}
				
				
				if (allAnimations[id].clickaction  =='ghostClicked'){
				ghostClicked();
				$('#'+id).hide();
				}
				
			}
			
			

			/* ------- DEBUGGING ------- */

			//for debugging
			window.onmousemove = handleMouseMove;

			function handleMouseMove(event) {
				event = event || window.event; // IE-ism
				// event.clientX and event.clientY contain the mouse position
				$('#coords').css({	'left': event.clientX,
									'top': event.clientY + 50,
									'position': 'absolute',
									'z-index': 2000  } );

				$('#coords').html(event.clientX + ' , ' + event.clientY + ' time: ' + Math.round(video.currentTime*1000));
			}
			
			
			
			
			
			
			
			
			
			
			/* ------- ANIMATION ------- */

			//request animation frame - all animations handled by this
			window.requestAnimFrame = (function(){
			  return  window.requestAnimationFrame       ||
					  window.webkitRequestAnimationFrame ||
					  window.mozRequestAnimationFrame    ||
					  window.oRequestAnimationFrame      ||
					  window.msRequestAnimationFrame     ||
					  function( callback ){
						window.setTimeout(callback, 1000/60);
					  };
			})();

			//animate callback
			function animate() {
				//choke to frame rate - 60 fps
				setTimeout(function(){ 
					requestAnimFrame(animate);
					updateProgress(); //render
				}, 1000/60);	
			};
			
			/* ------- VIDEO PLAYER ------- */

			function defineVideoPlayer() {
				// Grab a handle to the video (used throughout the functions)
				video = document.getElementById('video');
				
				// Listens for the 'play' event to be raised and changes the play/pause button's text to 'pause'
				video.addEventListener('play', function() {
				
					var playpause = document.getElementById("playpause");
					//playpause.title = "pause";
					//playpause.innerHTML = "pause";
				}, false);

				video.addEventListener('timeupdate', updateVideoProgress);
				video.addEventListener('progress', updateLoadingProgress);
				
				// Listens for the 'pause' event to be raised and changes the play/pause button's text to 'play'
				video.addEventListener('pause', function() {
					var playpause = document.getElementById("playpause");
					//playpause.title = "Play";
					//playpause.innerHTML = "Pppplay";
					
					
					
				}, false);
				// Listens for the 'ended' event to be raised and pauses the video (which has the effect of updating the play/pause button's text to 'play')
				video.addEventListener("ended", function() { this.pause() }, false);	

			}
			
			function readyToPlay()
			{

				//thingys here
				$('.loader').hide();
				$('#video').fadeIn();
				$('.dazlogo').fadeIn();
				$('#progressBar').fadeIn();
				$('#controls').fadeIn();	

			}
			
			function updateVideoProgress( ev ) {

				var progress = document.getElementById("progress");
				var value = 0;
				//console.log(video.currentTime);
				if (video.currentTime > 0) {
					value = Math.floor((100 / video.duration) * video.currentTime);	
				}
				
				
				progress.style.width = value + "%";

				//************************************************************Buffer.****************
				var percent = null;
				// FF4+, Chrome
				if (video && video.buffered && video.buffered.length > 0 && video.buffered.end && video.duration) {
					percent = video.buffered.end(0) / video.duration;
				} 
				// Some browsers (e.g., FF3.6 and Safari 5) cannot calculate target.bufferered.end()
				// to be anything other than 0. If the byte count is available we use this instead.
				// Browsers that support the else if do not seem to have the bufferedBytes value and
				// should skip to there. Tested in Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8.
				else if (video && video.bytesTotal != undefined && video.bytesTotal > 0 && video.bufferedBytes != undefined) {
					percent = video.bufferedBytes / video.bytesTotal;
				}

				if (percent !== null) {
					percent = 100 * Math.min(1, Math.max(0, percent));

					

				} else {
					percent = 100;
				}

				
					
	
				
			}
			
			function updateLoadingProgress( ev ) {


				//************************************************************Buffer.****************
				var percent = null;
				// FF4+, Chrome
				if (video && video.buffered && video.buffered.length > 0 && video.buffered.end && video.duration) {
					percent = video.buffered.end(0) / video.duration;
				} 
				// Some browsers (e.g., FF3.6 and Safari 5) cannot calculate target.bufferered.end()
				// to be anything other than 0. If the byte count is available we use this instead.
				// Browsers that support the else if do not seem to have the bufferedBytes value and
				// should skip to there. Tested in Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8.
				else if (video && video.bytesTotal != undefined && video.bytesTotal > 0 && video.bufferedBytes != undefined) {
					percent = video.bufferedBytes / video.bytesTotal;
				}

				if (percent !== null) {
					percent = 100 * Math.min(1, Math.max(0, percent));

					

				} else {
					percent = 100;
				}

				


			}
			
			
			
			
			// updateProgress - updates the video's progress bar**************
			function updateProgress( ev ) {


				var redCircle = document.getElementById("redcircle");
				var yellowCircle = document.getElementById("yellowcircle");
				var videoPlayer = window.videoPlayer;
				var videoTimeMS;
				

		
				videoTimeMS = video.currentTime*1000;

				
				
				
				

				if(!isNaN(videoTimeMS)){

					//browser weirdness - webm seemed to be 900ms fast or mp4 slow
					if(FF) videoTimeMS-=900;
					if(window.opera) videoTimeMS-=900;

					var showAlert = false;

					//loop through all hotspots
					for (var hotspot in allHotspotIDs){

						var hotSpotID = allHotspotIDs[hotspot];
						var keyFrames = allAnimations[hotSpotID];

						/* by the way this bit should really go in a separate function do you think for the sake of clean code...? 
						function loopKeyFrames( hotSpotID, keyFrames ){
							//paste the below and loop and move out of this function
						}
						*/

						var $keyFrames = $(keyFrames);
						var lastPos = keyFrames.start;

						

						// Loop through keyframes til the video time is less than the next keyframe (so we know we're within the keyframe/s boundaries)
						for (var k in keyFrames){

							if(videoTimeMS < k){

								//get the differences in time and distance
								var pos 							= keyFrames[k],
									timeBetweenKeyFrames 			= parseInt(k) - lastKeyFrameTime,
									timeBetweenLastKeyAndVideoTime 	= videoTimeMS - lastKeyFrameTime,
									posBetweenKeyFrames 			= timeBetweenLastKeyAndVideoTime/timeBetweenKeyFrames;

								var distLeft 			= pos.left-lastPos.left,
									distTop 			= pos.top-lastPos.top,
									diffWidth 			= pos.width-lastPos.width,
									diffHeight 			= pos.height-lastPos.height,
									diffFontSize        = pos.fontSize-lastPos.fontSize,
									interpolatedLeft 	= lastPos.left + (distLeft * posBetweenKeyFrames),
									interpolatedTop 	= lastPos.top + (distTop * posBetweenKeyFrames),
									interpolatedWidth 	= lastPos.width + (diffWidth * posBetweenKeyFrames),
									interpolatedHeight 	= lastPos.height + (diffHeight * posBetweenKeyFrames),
									interpolateFontSize = lastPos.fontSize + (diffFontSize * posBetweenKeyFrames);
								
								if(pos.left) $('#' + hotSpotID).css('left', interpolatedLeft);
								if(pos.top) $('#' + hotSpotID).css('top', interpolatedTop);
								if(pos.width) $('#' + hotSpotID).css('width', interpolatedWidth);
								if(pos.height) $('#' + hotSpotID).css('height', interpolatedHeight);
								if(pos.width) $('#' + hotSpotID).css('border-radius', interpolatedWidth/2);
								if(pos.width) $('#' + hotSpotID).css('fontSize', interpolateFontSize);
								
								
								//var display = (pos.left == -1) ? 'none' : 'block';
								//$('#'+hotSpotID).css('display',display);
								//$('#'+hotSpotID).css('opacity',0);
								
								//Here aswell we can hide or show the chivato hotspot in area
								//if (pos.width > 10 && pos.height > 10)
								//{
								
									//showAlert = true;
								//}
								
								//if($('#'+hotSpotID).is(':visible'))
								//if(lastPos.width != 0.1)
								if($('#'+hotSpotID).is(':visible') && lastPos.width != 0.1)
								{
									showAlert = true;
									//$('.alert').css({'opacity': '0.5'});
									
								}
								
						
								
								break;
							} else {
								//set the last position
								lastKeyFrameTime = parseInt(k);
								lastPos = keyFrames[k];
								//$('.alert').css({'opacity': '0'});
								//$('.alert').hide();
								
								
						

								
							
							}	

						}

					}

					if(showAlert){
						$('.alert').css({'opacity': '0.5'});
						//$('.alert').fadeIn();
					} else {
						$('.alert').css({'opacity': '0'});
						//$('.alert').hide();
					}	
				}
				
				

			}
			
			defineVideoPlayer();
			animate();
