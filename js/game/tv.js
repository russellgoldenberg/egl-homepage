(function(){
	var	_canvas = null,
		_ctx = null,
		_drawing = false,
		_started = false,
		_doneTimer = null;

	var tv = $game.tv = {
		ready: false,

		init: function() {
			var tele = document.createElement('div'),
				img = new Image();
		
			img.onload = function() {
				tele.setAttribute('id', 'tele'); 
				
				$(tele).css({
					position: 'absolute',
					top: 23,
					left: 2467,
					width: 160,
					height: 120,
					backgroundImage: 'url(' + img.src + ')'
				});
				$GAMEBOARD.append(tele);

				_loadPanda();
			}
			img.src = 'http://engagementgamelab.org/labGifs/fresh.gif';
			console.log('tv ready');
			tv.ready = true;
		}
	};
	tv.init();
})();

function _loadPanda() {
	var img = new Image();
	img.src = 'http://engagementgamelab.org/labGifs/fresh.gif';
}