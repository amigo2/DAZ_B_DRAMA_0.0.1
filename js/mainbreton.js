
			/* ------- VARS ------- */

			// Grab a handle to the video (used throughout the functions)
			var video = document.getElementById('video');
			// Turn off the default controls
			video.controls = true;
			

			
			// Event Listening
			// Listens for the 'timeupdate' event to be raised by the video, and calls the updateProgress() function to update the progress bar
			video.addEventListener("timeupdate", updateProgress, false);
			
			// Listens for the 'play' event to be raised and changes the play/pause button's text to 'pause'
			video.addEventListener('play', function() {
			
				var playpause = document.getElementById("playpause");
				//playpause.title = "pause";

				//playpause.innerHTML = "pause";
			}, false);
			// Listens for the 'pause' event to be raised and changes the play/pause button's text to 'play'
			video.addEventListener('pause', function() {
				var playpause = document.getElementById("playpause");
				//playpause.title = "play";
				//playpause.innerHTML = "play";

				
			}, false);
			// Listens for the 'ended' event to be raised and pauses the video (which has the effect of updating the play/pause button's text to 'play')
			video.addEventListener("ended", function() { this.pause() }, false);	
			
			
			init();

			function init()
			{	
				//$('.activeZone').css({'opacity': '0'});
				
				pulseEffect();
				
				//var JQminicircle = $("<div class='dot'></div>");
				console.log('init');
				$('#playerstackleft').hide();
				//$('#playerrayban').hide();
				$('#playerwall').hide();
				$('#playerwooden').hide();
				$('#playertwo').hide();
				$('#playersticker').hide();
				$('#playercommission').hide();
				$('#playersunglitters').hide();
				$('#playerpainting').hide();
				$('#playerghost').hide();
				

			}
			
			
			
		
			

			function pulseEffect()
			{
				var properties = {
				color : '#ff6600'
				};

				var alertintro = $('.alert');
				alertintro.pulse(properties, { pulses : 10000 });
				
			
			
			}

	
			var showHotspots = false;
			
			/*var opacity = document.getElementById('.click-opacity');
			var $opacity = $(opacity);
			$opacity.on('touchstart', clickOpacity);
			$opacity.on('click', clickOpacity);*/
			
			//$('.click-opacity').click(function() 
			$('.click-opacity').bind( 'touchstart click',function(e) 
		
			{
				e.preventDefault();
				
				showHotspots = !showHotspots;
				if (!showHotspots){ // check opacity
					$('.activeZone').css({'opacity': '0.5'});
				}
				else
				{
					$('.activeZone').css({'opacity': '0.5'});
				}
			});
			
			
			
			$('.click-reload').bind('touchstart click',function(e)
			{
				e.preventDefault();
				// Reset the player
				location.reload();
			
			});
			
			/*$('pausevideo').click (function()
			{
				video.pause();
				$('#redcircle').pauseKeyframe();
				$('#yellowcircle').pauseKeyframe();
				$('#wall').pauseKeyframe();
				$('#wooden').pauseKeyframe();
				$('#numbertwo').pauseKeyframe()
				$('#stickers').pauseKeyframe()
				$('#comission').pauseKeyframe()
				$('#sunglitters').pauseKeyframe()
				$('#painting').pauseKeyframe()
				$('#ghost').pauseKeyframe()
				
			});*/

			//catch both click and touch start (more responsive for iPad)
			//$('#playpause').on('touchstart', togglePlayPause);
			//$('#playpause').on('click', togglePlayPause);
			
			// Functions
			// togglePlayPause - toggles the play/pause button
			function togglePlayPause() 
			{
				// Grab a handle to the play/pause button
				var playpause = document.getElementById("playpause");
				// If the video is currently paused or has ended
				
				

				
				
				if (video.paused || video.ended) 
				{	
					//Trigger all animations.
					//moveRedCircle();

					// Change the title and the text of the button to "pause"
					playpause.title = "Pause";
					
					//$('.alert').fadeIn();
					
	
					// Start playing the video
					video.play();	
					
					pauseAllAudio();
					
					pulseEffect();
					
				}
			
				// Otherwise it must currently be playing
				else 
				{
					// Change the title and the text of the button to "play"
					playpause.title = "Play";
				
					// Pause the video
					video.pause();
					pauseAllAnimations();
					
					

				}
			}
			
			function pauseAllAnimations()
			{
				/*$('#redcircle').pauseKeyframe();
				$('#yellowcircle').pauseKeyframe();
				$('#wall').pauseKeyframe();
				$('#wooden').pauseKeyframe();
				$('#numbertwo').pauseKeyframe();
				$('#stickers').pauseKeyframe();
				$('#comission').pauseKeyframe();
				$('#sunglitters').pauseKeyframe();
				$('#painting').pauseKeyframe();
				$('#ghost').pauseKeyframe();
				$('.alert').pauseKeyframe();
				$('.alertrayban').pauseKeyframe();
				$('.alertwall').pauseKeyframe();
				$('.alertwooden').pauseKeyframe();
				$('.alertnumbertwo').pauseKeyframe();
				$('.alertstickers').pauseKeyframe();
				$('.alertcomission').pauseKeyframe();
				$('.alertsunglitters').pauseKeyframe();
				$('.alertpainting').pauseKeyframe();
				$('.alertghost').pauseKeyframe();*/
			
			}
			
			function pauseAllAudio()
			{
				audioElement.pause();
				audioConfessor.pause();
				audioWall.pause();
				audioWooden.pause();
				audioNumberTwo.pause();
				audioStickers.pause();
				audioComission.pause();
				audioSunglitters.pause();
				audioPainting.pause();
				audioGhost.pause();
			}
			
			// setVolume - sets the video's volume
			function setVolume() {
				// Grab a handle to the volume slider
				var volume = document.getElementById("volume");
				video.volume = volume.value;
			}
			
			// toggleMute - mutes or unmutes the video's sound
			function toggleMute() {
				video.muted = !video.muted;
			}
			
			
			
			
			// updateProgress - updates the video's progress bar******************************************************here
			function updateProgress() {
				var progress = document.getElementById("progress");
				var value = 0;
				if (video.currentTime > 0) {
					value = Math.floor((100 / video.duration) * video.currentTime);
				}
				progress.style.width = value + "%";
				
				//console.log(video.currentTime);
				
				//var yellowcircle =document.getElementById('#redcircle');
				//yellowcircle.style.animation = video.currentTime;
				
				//var redcircleX = document.getElementById("redcircle");
				
				//var initPosX = 0;
				//var finalPosX = 600;
				//var speed = 100;
				//redcircleX.style.left =  value + "%";
				//*****************************************************************************************Bezier
				
				
				//redcircleX.style.left =  value + "%";
					
					//$("#redcircle").animate({"left": "+=20px"}, value);
					//$("#redcircle").animate({path: Paths[type][i] }, 3000)
					
					//console.log(redcircleX.style.left);
					
				/*var bezier_params = {
						start: { 
						  x: 185, 
						  y: 400, 
						  angle: 10
						},  
						end: { 
						  x:600,
						  y:400, 
						  angle: -10, 
						  length: 1.25
						}
					  }
				
				$("#redcircle").animate({path : new $.path.bezier(bezier_params)}, value + "%" )*/
			}
						
			function playlistClick(file) {
				// Create a new video element
				var v = document.createElement("video");
				// Check which type the browser can play and change the video's source file to the appropriate filename
				if (v.canPlayType("video/mp4") != "") changeSource(file + ".mp4");
				//else if (v.canPlayType("video/webm") != "") changeSource(file + ".webm");
				// Prevent the default action for the link by returning false
				return false;
			}
			
			function changeSource(src) {
				// Reset the player
				resetPlayer();
				// Change the video source
				video.src = src;
				// Load the video (required by Safari)
				video.load();
			}
			
			function resetPlayer() {
			
				//$('#redcircle').remove();
				// Reset the play/pause button's text
				var playpause = document.getElementById("playpause");
				//playpause.title = "play";
				//playpause.innerHTML = "play";
				// Reset the video's currentTime
				if (video.currentTime > 0) video.currentTime = 0;
				// Update the progress (i.e. reset it)
				//$('#redcircle').resetKeyframe();
				//$('#yellowcircle').resetKeyframe();
				
				updateProgress();
			}
			//input disable attributes
			//$('#inputtest').attr('disabled','disabled');//disable input
				//$("#inputtest").removeAttr('disabled');//re-enable input

			//**********************************************************************************animation.js

