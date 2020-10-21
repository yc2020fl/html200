$(function() {
  console.log("yep")
  $('nav').hide().delay(500).show("slow")
  $('#hide').click(function(){
    $('img').hide()
  })
  $('#show').click(function(){
    $('img').show(500)
  })
  $('img').mouseenter(function(){
    $(this).fadeTo("slow", .7)
  }).mouseleave(function(){
    $(this).fadeTo("fast", 1)
  })
});