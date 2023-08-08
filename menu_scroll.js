$( document ).ready(function() {
	$(window).bind('scroll', function () {
                $('div#menu').css( { maxWidth: parseInt($('div#side').width()) + "px" } );
		if ($(window).scrollTop() > 125) {
			if(!($(window).scrollTop() > $(document).height() - $('.c_page-footer').height() -$('#menu').height() - 125 )) {
				$('#menu').css("position","fixed").css("top","20px");
			}
			else {
			$('#menu').css("position","absolute").css("top", $(document).height() - $('.c_page-footer').height() -$('#menu').height() - 125);
			}
			
		}
		else {
			$('#menu').css("position","relative");
		}
	});
        $('div#menu').css( { maxWidth: parseInt($('div#side').width()) + "px" } );
});
