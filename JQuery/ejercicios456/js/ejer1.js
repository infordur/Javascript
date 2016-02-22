$(document).ready(function() {
	var checkboxs = $(".check:checked");
	var cadena="";
	var cadena2="";
	var radios = $(".radio");

	for (var i = 0; i < checkboxs.length; i++) {
		cadena += checkboxs[i].value+",";
		if ($(checkboxs[i]).attr("checked")==true) {
			cadena2 += checkboxs[i].value+" , ";
		};
	}
	$("#msjChk").html("</br>.check:checked: "+cadena);
	$("#msjChkAttr").html("$(checkboxMarcados[i])attr(\"checked\")==true: "+ cadena);

	cadena = ""; 
	cadena2="";
	for (var i = 0; i < radios.length; i++) {
		if ($(radios[i]).prop("checked")==true) {

		cadena += radios[i].value+",";
		};
	}
	$("#msjRadio").html("</br>$(\".radio\").prop(\"checked\") == true: "+cadena);

	$("#msjRadioVal").html("</br>$(\".radio:checked\").val();: "+$("input:radio:checked").val());
	$("#msjSelect").html("$(\"#selector option:selected\").text(): "+ $("#selector option:selected").text());
});