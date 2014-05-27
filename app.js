var code = $( '#code' ), result = $( '#result' );
var escaper = /\\|'|"|\r|\n|\u2028|\u2029/g;

$( '#head' ).on( 'click', 'button', function(e) {
  var id = this.id;
  var string = code.val().replace( escaper, '\\$&' );
  eval( 'var ret = ' + id + '("' + string + '")' );
  result.val( ret );
  return false;
});


