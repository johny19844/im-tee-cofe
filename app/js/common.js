$(function() {

	$('.ui.dropdown').dropdown({
    	allowAdditions: true
  	});
  	$(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });

  	$('.dropdown-menu .checkbox').click(function(){
  		var $this=$(this);
  		var $this_input=$this.find('input');
  		if ($this_input.prop('checked')){
  			if ($this_input.attr('class')^='sort'){
	  			$('.filter-vibor-sort').append("<div class='"+$this_input.attr('value')+"'>"+$this.text()+"<span class='glyphicon glyphicon-remove-circle'></span></div>");
	  		} 
	  		}else {
	  			$('.filter-vibor .'+$this_input.attr('value')).remove();
	  		}
	  	});

  	$('.filter-vibor').on('click','.glyphicon.glyphicon-remove-circle', function(){
  		var $parent_value=$(this).parent().attr('class');
  		$('.dropdown-menu .checkbox .'+$parent_value).click(); //attr('checked','false'); 
  	});

  //	$('.tabular.menu .item').tab();

});
