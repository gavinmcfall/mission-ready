console.log ('connected');


document.addEventListener('DOMContentLoaded', (event) => {
  let modal = document.getElementById("contactModal");
  let btn = document.getElementsByClassName("contact-button")[0];
  let span = document.getElementsByClassName("close")[0];

  btn.addEventListener('click', function() {
    modal.style.display = "block";
  });

  span.addEventListener('click', function() {
    modal.style.display = "none";
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

function submitForm() {
  let name = document.getElementById('contactName').value;
  let email = document.getElementById('contactEmail').value;
  let message = document.getElementById('contactMessage').value;

  let subject = 'Contact Form Submission from ' + name;
  let body = 'Name: ' + name + '\n' +
             'Email: ' + email + '\n' +
             'Message: ' + message;

  window.location.href = 'mailto:gavin@nerdz.co.nz?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

function clearForm() {
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactMessage').value = '';
}