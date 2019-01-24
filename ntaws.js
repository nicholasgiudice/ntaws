(function() {
	var main = function($) { 
		
		var self = $.nTAWS = new function(){};
		
		$.extend(self, {
			nTAWSImgs : [
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/1.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/2.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/3.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/4.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/5.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/6.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/7.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/8.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/9.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/10.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/11.jpg',
			'https://raw.githubusercontent.com/nicholasgiudice/ntaws/master/imgs/12.jpg',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nTAWSImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 