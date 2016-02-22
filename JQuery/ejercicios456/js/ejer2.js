$(document).ready(function() {
	var check = $(".check");

	check.click(comprobar);

	function comprobar(){
		check.each(function(){
			if ($(this).prop("checked") ==false) {
				$(this).prop("disabled","true");
			}
		});

		if ($(".check:disabled").length == check.length){
			check.prop("disabled",false);
		}

	}
});