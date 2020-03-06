var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var date1='2019/12/20 23:30:30';
	var current = new Date();
	var seconds = current.getTime()-new Date(date1).getTime();
	var days =days=Math.floor(seconds/(24*3600*1000));
	
	var leave1=seconds%(24*3600*1000);
	var hours = Math.floor(leave1/(3600*1000));
	if (hours < 10) {
		hours = "0" + hours;
	}
	
	var leave2=leave1%(3600*1000);
	var minutes = Math.floor(leave2 /(60*1000));
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	var leave3=leave2%(60*1000)
	var seconds=Math.round(leave3/1000);
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
