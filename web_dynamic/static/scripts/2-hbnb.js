$( document ).ready(() => {
  let x = [];
  let amen = [];
  console.log("hola mundo");
  //$.getJSON("http://0.0.0.0:5001/api/v1/status/", function(data) {
    $.getJSON("http://b41de8df0b4c.19.hbtn-cod.io:34196/api/v1/status/", function(data) {
      console.log("dataaaaaaaaaaa");
    if(data["status"] == "OK") {
	console.log("dentroooo");
	$('#api_status').addClass('available');
    } else {
      if($('DIV#api_status available')) {
        $('DIV#api_status').removeClass('available');
      }
    }
  });

  $("input[type='checkbox']").change(function(){
    if(this.checked){
      //console.log($(this).attr("data-name"));
      x.push($(this).attr("data-id"));
      amen.push($(this).attr("data-name"));
      $(".amenities h4").text(amen);
    }
    else {
      let index = x.indexOf($(this).attr("data-id"));
      //console.log(index);
      x.splice(index, 1);
      amen.splice(index, 1);
      if (amen.length > 0) {
        $(".amenities h4").text(amen);
      } else {
        $(".amenities h4").html('&nbsp;');  
      }
    }
  //console.log(x, amen);
  });

});
