$(document).ready(function() {
  $('#taskForm').submit(function(e) {
    e.preventDefault();
    var taskName = $('#addTask').val();
    $.post('addTask', { taskName: taskName }, postCallback);
  });
});

function postCallback(res) {
  $('.taskList').append('' + res + ''); 
 $('#addTask').val('');
}