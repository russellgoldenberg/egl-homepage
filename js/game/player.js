//player file
(function() {
	//private vars
	var _direction,
		_currentFrame,
		_numFrames = 8,
		_idleFrame = 0,
		_idleData = [0,2,2,0,2,2,1,0,2,0,2,2,1,2,0,2,2,0,2],
		_numIdleFrames = _idleData.length,
		_walkTimeout = null,
		_speedAmplifier = 7,
		_steps,
		_preventMovement,
		_preventMovementTimeout;
	
	var player = $game.player = {
		//public vars
		ready: false,
		inTransit: false,
		id: 'player',
		class: 'character',
		x: 450,
		y: -180,
		w: 80,
		h: 160,
		offset: {
			x: 40,
			y: 80
		},
		messages: ['I am you, you are me....woah.','What?! I am inside a computer?','I am so tired of walking...','Stop clicking on me, it tickles!'],
		score: 0,
		response: {},

		init: function () {
			var file = 'player0';
			var d = document.createElement('div');
			var i = new Image();
			i.onload = function() {
				d.setAttribute('class', player.class);
				d.setAttribute('id', player.id);
				$(d).css({
					position: 'absolute',
					top: player.y,
					left: player.x,
					width: player.w,
					height: player.h,
					backgroundImage: 'url(' + i.src + ')',
					backgroundPosition: '0 0'
				});
				$GAMEBOARD.append(d);
				player.selector = $('#player');
				player.otherSelector = document.getElementById('player');
				player.ready = true;
				console.log('player ready');
			}
			i.src = '../../img/player/' + file + '.png';
		},

		entrance: function() {
			player.y = 250;
			player.selector.delay(1000).animate({
				top: 250
			},1500, function() {
				$game.input.enableMove();
			});
		},

		//figure out where to move the player and move em!
		movePlayer: function(input) {
			player.inTransit = true;
			
			//do some spatial calculations to find distance and speed
			var diffX =  input.x - player.x,
				diffY = input.y - player.y,
				absDiffX = Math.abs(diffX),
				absDiffY = Math.abs(diffY),
				distance =  Math.sqrt((diffX * diffX) + (diffY * diffY));
				speed = distance * _speedAmplifier;

			//add on speed to the input with the coords
			input.speed = speed;
			//calculate direction
			if(absDiffY / absDiffX > 1) {
				if(diffY > 0) {
					//down
					_direction = player.h * 2;
				} else {
					//up
					_direction = player.h * 1;
				}
			} else {
				if(diffX > 0) {
					//right
					_direction = player.h * 4;
				} else {
					//left
					_direction = player.h * 3;
				}
			}
			//TODO: what is this for?? come on russell...
			input.w = absDiffX + player.w;
			input.h = absDiffY + player.h;
			
			//set the z-indexes to the right value
			$game.items.setZIndex(input);
			$game.people.setZIndex(input);

			//reset the frame
			_currentFrame = 0;
			_steps = 0;


			//for hitting AND for flipping index
			$game.items.hitTest();
			$game.people.hitTest();


			//set the animation so the player moves
			player.selector.stop().animate({
				top: input.y,
				left: input.x
			}, speed, 'linear', function() {
				//on walk completion, set new coordinates and change sprite
				player.inTransit = false;
				player.x = input.x;
				player.y = input.y;
				var pos = '0 0';
				player.selector.css({
					'background-position': pos
				});
			});
			//delay this so if we have a hit right away, we don't animate
			clearTimeout(_walkTimeout);
			setTimeout(function() {
					_animateWalkCycle();
					_slideScreen(input);
			}, 51);
		},

		stopMove: function(prevMove) {
			player.inTransit = false;
			//only need to reset stuff if player started moving
			var pos = '0 0';
			player.selector.stop(true).css({
			'background-position': pos
			});
			$SCROLL_ELEMENT.stop(true);
			player.x = prevMove.x;
			player.y = prevMove.y;
			player.selector.css({
				top: prevMove.y,
				left: prevMove.x
			});
			//$game.showMessage({el: player.otherSelector, message: 'Ouch!'});
			$game.audio.playFx('thud');
		},

		idle: function() {
			if(!player.inTransit) {
				_idleFrame++;
				if(_idleFrame >= _numIdleFrames) {
					_idleFrame = 0;
				}
				var frame = _idleData[_idleFrame],
					pos = -(frame * player.w) + 'px ' + '0';
				player.selector.css('background-position', pos);
			}
		}

		// //perform a jump move!
		// jumpPlayer: function() {
		// 	inTransit = true;
		// 	player.selector.css('background-position', -720);
		// 	sound.fx.play('jump');
		// 	player.selector.animate({
		// 		top: player.y - 100
		// 	}, 250, function() {
		// 		$(this).animate({
		// 			top: player.y
		// 		},250, function() {
		// 			inTransit = false;
		// 			player.selector.css('background-position', -640);
		// 		});
		// 	});
		// },
	};
	player.init();
	//private functions
	//switch out sprite for walk cycle
	function _animateWalkCycle() {
		if(player.inTransit) {
			_steps++;
			_currentFrame++;
			if(_currentFrame >= _numFrames) {
				_currentFrame = 0;
			}
			var pos = -(_currentFrame * player.w) + 'px ' + -_direction + 'px';
			player.selector.css('background-position', pos);
			clearTimeout(_walkTimeout);
			_walkTimeout = setTimeout(_animateWalkCycle, 170);
		}
	}

	//check for page edge clicking to animate scroll!
	function _slideScreen(input) {
		//console.log('y:', input.y, 'edge:', input.edgeY, 'page', pageYOffset);
		if(player.inTransit) {
			var destX, destY;
			//make sure transition isn't too fast or too slow
			var speed = Math.max(500,input.speed);
			speed = Math.min($game.input.longest, speed);
			//check for CLICKS on edge of screen
			//left edge
			if(input.edgeX < player.w && pageXOffset > 0) {
				destX = Math.max(pageXOffset - $game.input.width / 2, 0);
			}
			//right edge
			else if( input.edgeX > $game.input.width - player.w) {
				destX = Math.min(pageXOffset + $game.input.width / 2, $game.input.maxScroll.left);
			}
			//top edge
			if(input.edgeY < player.h + NAVBAR_HEIGHT && pageYOffset > 0) {
				destY = Math.max(pageYOffset - $game.input.height / 2, 0);
				//console.log('+', destY);
			} 
			//bottom edge (was - player.h)
			else if( input.edgeY > $game.input.height - player.h / 2) {
				destY = Math.min(pageYOffset + $game.input.height / 2, $game.input.maxScroll.top);
				//console.log('-', destY);
				destY = input.y < destY ? input.y - 10 : destY;	
				//console.log('-', destY);
			}
			//must account for wall since can't click on it...
			else if(pageYOffset > 0 && input.y < WALL_HEIGHT + player.h) {
				//console.log(0);
				destY = 0;
			}

			//choose which to animate (must lump together so it doesn't halt other)
			if(destX !== undefined && destY !== undefined) {
				$game.hasScrolled = true;
				$SCROLL_ELEMENT.stop().animate({
					scrollLeft: destX,
					scrollTop: destY
				}, speed,'linear');	
			} else if(destY !== undefined) {
				$game.hasScrolled = true;
				$SCROLL_ELEMENT.stop().animate({
					scrollTop: destY
				}, speed,'linear');	
			} else if(destX !== undefined) {
				$game.hasScrolled = true;
				$SCROLL_ELEMENT.stop().animate({
					scrollLeft: destX
				}, speed,'linear');	
			}
		}
	}
})();