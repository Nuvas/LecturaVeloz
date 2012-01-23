$(document).ready(function(){

  $('#go, #try_again').click(function(){
    $('#numbers tbody tr').remove();
    var rows = $('#rows').val();
    var digits_number = $('#digits_number').val();
    var lines = 2;
    for(var i=0; i<rows; i++)
    {
      var append = '<tr><td>';
      //for(var j = 0; j < lines; j++) {
        append += '<span id="'+i+'" style="display:none;width:100px;">'+ generateNumber(digits_number) +'</span><br />';
      //}

      append += '</td><td><img src="images/play.png" onclick="play('+i+')"/></td><td>';

      //for(var j = 0; j < lines; j++) {
        append += '<input type="text" id="input'+i+'" /><br />';
      //}

      append += '</td><td id="result'+i+'"></td></tr>';
      $('table#numbers tbody').append(append);
    }

    $('table#numbers tr').fadeIn();
    
    $('#try_again').fadeOut();
    $('#check').fadeIn();
    $('#result').html('');
    
  });

  $('#check').click(function(){
      var rows = $('#rows').val();
      var correct = 0;
      for(var i=0; i<rows; i++)
      {
        if( $('span#'+i).html() == $('#input'+i).val())
        {
          correct++;
          $('#result'+i).html( '<img src="images/check.png" />' );
        }
        else
        {
          $('#result'+i).html( '<img src="images/error.png" />' );
        }
      }
      var percent = (correct/rows)*100;

      $('#result').html(percent+'% correcto');
 
    $('#numbers td span').fadeIn();

    $('#check').fadeOut();
    
    $('#try_again').fadeIn();

  });

});

function play(id)
{
  var time = $('#time').val();
  $('#'+id).show();
    setTimeout("$('#"+id+"').hide();", time);
    $('#input'+id).focus();
}

function generateNumber(digits)
{
  var from=Math.pow(10, digits-1);
  to = (from*10)-1;
  return (Math.round(Math.random()*(to-from))+from);
}

function generateWord(){
var words = new Array();
words[1] = 'entre';
words[2] = 'dos';
words[3] = 'primero';
words[4] = 'mismo';
words[5] = 'nos';
words[6] = 'porque';
words[7] = 'cuando';
words[8] = 'sin';
words[9] = 'muy';
words[10] = 'mucho';
words[11] = 'sobre';
words[12] = 'saber';
words[13] = 'deber';
words[14] = 'alguno';
words[15] = 'sólo';
words[16] = 'sí';
words[17] = 'pasar';
words[18] = 'país';
words[19] = 'ver';
words[20] = 'Parte';
words[21] = 'Oración';
words[22] = 'hasta';
words[23] = 'vez';
words[24] = 'Palabra';
words[25] = 'también';
words[26] = 'aquel';
words[27] = 'día';

return words[(Math.round(Math.random()*(26)))];
}
