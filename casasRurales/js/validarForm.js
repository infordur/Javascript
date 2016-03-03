$(document).ready(function() {

	$( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });


	$.validator.methods.email=function( value, element ){
		return this.optional( element ) || /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+/.test( value.trim());
	}

	$.validator.methods.date=function( value, element ){
		return this.optional( element ) || /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test( value.trim());
	}

	$.validator.methods.solotexto=function( value, element ){
		return this.optional( element ) || /^[A-záéíóúÁÉÍÓÚñÑ]{2,}([\s]+[A-záéíóúÁÉÍÓÚñÑ]{2,})*$/.test( value.trim());
	}

	$("#enviar").click(function() {

		var comprobarFormulario=$("#formval").validate({
			rules: {
				nombre:{
					required: true,	
					minlength: 3,
					solotexto: true
				},
				apellidos:{
					required: true,
					minlength: 3,
					solotexto: true
				},
				email:{
					required: true,
					email: true
				},
				telefono:{
					required: true,
					number: true,
					minlength:9,
					maxlength: 9
				},
				npersonas:{
					required: true,
					number: true,
					min:1
				},
				fechaE:{
					required: true,
					date: true
				},
				fechaS:{
					required: true,
					date: true
				},
				checkbox:{
					required: true
				}
			},
			messages:{
				nombre:{
					required: "Rellene el campo",
					minlength: "Mínimo 3 caracteres",
					solotexto: "Sólo letras"
				},
				apellidos:{
					required: "Rellene el campo",
					minlength: "Mínimo 3 caracteres",
					solotexto: "Sólo letras"
				},
				email:{
					required: "Rellene el campo",
					email: "email inválido"
				},
				telefono:{
					required: "Rellene el campo",
					number: "Número de teléfono inválido",
					minlength: "Debe contener 9 dígitos",
					maxlength: "Debe contener 9 dígitos"
				},
				npersonas:{
					required: "Rellene el campo",
					number: "Número de teléfono inválido",
					min: "Mínimo 1 persona"
				},
				fechaE:{
					required: "Rellene el campo",
					date: "Fecha no válida"
				},
				fechaS:{
					required: "Rellene el campo",
					date: "Fecha no válida"
				},
				checkbox:{
					required: "Acepte las condiciones"
				}
			}
		});

		if(comprobarFormulario.form()){
			$.cookie('Nombre', $("#nombre").val(), { expires: 365 });
			$.cookie('Apellidos', $("#apellidos").val(), { expires: 365 });
			$.cookie('Correo', $("#email").val(), { expires: 365 });
			$.cookie('Telefono', $("#telefono").val(), { expires: 365 });
			$.cookie('Npersonas', $("#npersonas").val(), { expires: 365 });
			$.cookie('FEntrada', $("#from").val(), { expires: 365 });
			$.cookie('FSalida', $("#to").val(), { expires: 365 });
		}

	});

	if($.cookie()!=""){
		$("#nombre").val($.cookie('Nombre'));
		$("#apellidos").val($.cookie('Apellidos'));
		$("#email").val($.cookie('Correo'));
		$("#telefono").val($.cookie('Telefono'));
		$("#npersonas").val($.cookie('Npersonas'));
		$("#from").val($.cookie('FEntrada'));
		$("#to").val($.cookie('FSalida'));
	}
});