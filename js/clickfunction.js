		//All click function	
			
			//$('#redcircle').click(function()
			
			function redClicked()
			{
				console.log('red circle clicked');
				//$('#redcircle').hide();
				//$('.alert').hide();
				//$('#'+hotSpotID).hide();
				
				
				
				video.pause();	
				//audioElement.play();
				$('#playerstackleft').fadeIn();
				//$('.alert').hide();
				pauseAllAnimations();
				return;	
			}
			
			
			function yellowClicked()
			{
				console.log('yellow circle clicked');
				$('alert').hide();
				audioConfessor.play();
				video.pause();	
				$('#playerrayban').fadeIn();
		
				pauseAllAnimations();
				
				return;
			
			}
			
			
			function wallClicked()
			{
				video.pause();	
				audioWall.play();
				$('#wall').hide();
				$('#playerwall').fadeIn();
		
				pauseAllAnimations();
				return;	
			
			}
			
			
			function woodenClicked()
			{
				video.pause();	
				audioWooden.play();
				$('#wooden').hide();
				$('#playerwooden').fadeIn();
	
				pauseAllAnimations();
				return;	
			
			}
			
			function numberTwoClicked()
			{
				video.pause();	
				audioNumberTwo.play();
				$('#numbertwo').hide();
				$('#playertwo').fadeIn();
		
				pauseAllAnimations();
				return;	
			
			}
			
			function stickersClicked()
			{
				video.pause();	
				audioStickers.play();
				$('#stickers').hide();
				$('#playersticker').fadeIn();
	
				pauseAllAnimations();
				return;	
			
			}
			
			function comissionClicked()
			{
				video.pause();	
				audioComission.play();
				$('#comission').hide();
				$('#playercommission').fadeIn();

				pauseAllAnimations();
				return;	
			
			}
			
			function sunglittersClicked()
			{
				video.pause();	
				audioSunglitters.play();
				$('#sunglitters').hide();
				$('#playersunglitters').fadeIn();
	
				pauseAllAnimations();
				return;	
			
			}
			function paintingClicked()
			{
				video.pause();	
				audioPainting.play();
				$('#painting').hide();
				$('#playerpainting').fadeIn();
			
				pauseAllAnimations();
				return;	
			
			}
			function ghostClicked()
			{
				video.pause();	
				audioGhost.play();
				$('#ghost').hide();
				$('#playerghost').fadeIn();

				pauseAllAnimations();
				return;	
			
			}