$(document).ready(function(){

  $('#go, #try_again').click(function(){
    $('#numbers tbody tr').remove();
    var attempts = $('#attempts').val();
    var digitsNumber = $('#digits_number').val();
    var rows = $('#rows').val();
    for(var i=0; i<attempts; i++)
    {
      var append = '<tr id="attempt_' + i + '"><td>';
      for(var j = 0; j < rows; j++) {
        append += '<span id="hidden_'+i+j+'" class="hidden">'+ generateNumber(digitsNumber) +'</span><br />';
      }

      append += '</td><td><input type="image" src="images/play.png" class="play" alt="play"/></td><td>';

      for(var j = 0; j < rows; j++) {
        append += '<input type="text" id="hidden_input_'+i+j+'" /><br />';
      }

      append += '</td><td id="result_'+i+'"></td></tr>';
      $('table#numbers tbody').append(append);
    }

    $('.play').click(function play(event)
                    {
                      var id = $(event.currentTarget).parent().parent().attr('id');
                      var time = $('#time').val();
                      $('#'+id+' td span.hidden').show();
                      setTimeout("$('#"+id+" td span.hidden').hide();", time);
                      console.log($(event.currentTarget).parent().next());
                      var $input = $(event.currentTarget).parent().next().find('input:first-child').focus();
                    });

    $('table#numbers tr').fadeIn();
    
    $('#try_again').fadeOut();
    $('#check').fadeIn();
    $('#result').html('');
  });

  $('#check').click(function(){
      $('.play').unbind('click');
      var attempts = $('#attempts').val();
      var correct = 0;
      var rows = $('#rows').val();
      for(var i=0; i<attempts; i++)
      {
        $('#result_'+i).html( '' );
        for(var j=0; j<rows; j++)
        {
            if( $('#hidden_'+i+j).html() == $('#hidden_input_'+i+j).val())
            {
              correct++;
              $('#result_'+i).append( '<img src="images/check.png" />' );
            }
            else
            {
              $('#result_'+i).append( '<img src="images/error.png" />' );
            }
        }
      }

      var percent = (correct/(attempts*rows))*100;
      $('#result').html(percent+'% correcto');
      $('#numbers td span').fadeIn();
      $('#check').fadeOut();
      $('#try_again').fadeIn();
  });

});

function generateNumber(digits)
{
  var from=Math.pow(10, digits-1);
  to = (from*10)-1;
  return (Math.round(Math.random()*(to-from))+from);
}

function generateWord(){
var words = new Array();
words = ['entre', 'dos', 'primero', 'mismo', 'nos', 'porque', 'cuando', 'sin', 'muy', 'mucho', 'sobre', 'saber', 'deber', 'alguno', 'sólo', 'sí', 'pasar', 'país', 'ver', 'Parte', 'Oración', 'hasta', 'vez', 'Palabra', 'también', 'aquel', 'día'];
return words[Math.round(Math.random()*words.length-1)];
}
