$(document).ready(function() {
  $('#taskForm').submit(function(e) {
    e.preventDefault();

    console.log('wat');

    var taskName = $('#addTask').val();
    $.post('addTask', { taskName: taskName }, postCallback);
  });
});

function postCallback(res) {
  $('.taskList').append('<li>' + res + '</li>'); 
 $('#addTask').val('');
}