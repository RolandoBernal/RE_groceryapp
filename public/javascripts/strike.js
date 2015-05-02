$('.strike_button').change(function() {
   if ( this.checked) {
     $(this).parent().parent().addClass("strikeout");
   } else {
     $(this).parent().parent().removeClass("strikeout");
   }
});
