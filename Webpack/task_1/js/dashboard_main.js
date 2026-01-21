const $ = require('jquery');
const _ = require('lodash');

let count = 0;

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}
$('button').on('click', _.debounce(updateCounter, 500));
