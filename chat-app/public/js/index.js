var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('The first message: ', message);

  var li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  $('#messages').append(li);
});

socket.on('createLocationMessage', function(message) {
  console.log('location message: ', message);
  var li = $('<li></li>');
  var a = $('<a target="_blank">My current location</a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);

  $('#messages').append(li);
});

$('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit(
    'createMessage',
    {
      from: 'user',
      text: $('[name=message]').val()
    },
    function() {}
  );
});

var locationButton = $('#send-location');
locationButton.on('click', function() {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser');
  }

  navigator.geolocation.getCurrentPosition(
    function(position) {
      socket.emit('createLocationMessage', {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    },
    function() {
      alert('Unable to fetch location');
    }
  );
});

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position);
});
