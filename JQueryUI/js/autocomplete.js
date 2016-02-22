$(document).ready(function() {
	  $.widget( "custom.catcomplete", $.ui.autocomplete, {
	    _create: function() {
	      this._super();
	      this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
	    },
	    _renderMenu: function( ul, items ) {
	      var that = this,
	        currentCategory = "";
	      $.each( items, function( index, item ) {
	        var li;
	        if ( item.category != currentCategory ) {
	          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
	          currentCategory = item.category;
	        }
	        li = that._renderItemData( ul, item );
	        if ( item.category ) {
	          li.attr( "aria-label", item.category + " : " + item.label );
	        }
	      });
	    }
	  });

    var data = [
      { label: "Chorizo", category: "Carnes" },
      { label: "Salchichón", category: "Carnes" },
      { label: "Jamon York", category: "Carnes" },
      { label: "Plátano", category: "Frutas" },
      { label: "Pomelo", category: "Frutas" },
      { label: "Kiwi", category: "Frutas" },
      { label: "Doritos", category: "Snacks" },
      { label: "Pelotazos", category: "Snacks" },
      { label: "Patatas Fritas", category: "Snacks" }
    ];
 
    $( "#search" ).catcomplete({
      delay: 0,
      source: data
    });
});