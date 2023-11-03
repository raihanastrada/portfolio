document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // You can add code here to handle the form submission, for example, sending an email or saving the data to a database.
});