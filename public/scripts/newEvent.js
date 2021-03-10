// import event_info from './app.js';
// console.log(event_info.data);

// var event = require('./app.js');
// console.log(event);
// document.getElement

// console.log(event_info);
// function createEvent(){
//     var title;
//     var location;

//     var eventMonth;
//     var eventDay;
//     var description;

//     var title = document.getElementById("newEventTitle");
//     var location = document.getElementById("newEventLocation")
//     var eventMonth = document.getElementById("newEventMonth");
//     var eventDay = document.getElementById("newEventDay");
//     var description = document.getElementById("newEventDescription");

//     console.log(title);
// }

// // var form = document.querySelector('form');
// // var data = new FormData(form);
// // var req = new XMLHttpRequest();
// // req.send(data);


// /*!
//  * Serialize all form data into an array
//  * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
//  * @param  {Node}   form The form to serialize
//  * @return {String}      The serialized form data
//  */
// var serializeArray = function (form) {

// 	// Setup our serialized data
// 	var serialized = [];

// 	// Loop through each field in the form
// 	for (var i = 0; i < form.elements.length; i++) {

// 		var field = form.elements[i];

// 		// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
// 		if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

// 		// If a multi-select, get all selections
// 		if (field.type === 'select-multiple') {
// 			for (var n = 0; n < field.options.length; n++) {
// 				if (!field.options[n].selected) continue;
// 				serialized.push({
// 					name: field.name,
// 					value: field.options[n].value
// 				});
// 			}
// 		}

// 		// Convert field data to a query string
// 		else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
// 			serialized.push({
// 				name: field.name,
// 				value: field.value
// 			});
// 		}
// 	}

// 	return serialized;

//     console.log(serialized);
// };

// function newEvent(){
//     var title = document.getElementById("newEventTitle").value;
//     document.getElementById("info").innerHTML = title;
// }

// function addRow() {
//     for (i = 0; i < newEvent.length; i++) {
//         var row = event_table.insertRow(1);
//         var title = event_row.insertCell(1);
//         var date = event_row.insertCell(1);

//         title.innerHTML = "add title";
//         date.innerHTML = "add date";
//         console.log("new event");
//     };
// };

// document.getElementById("event_table").addEventListener("load", myFunction);

// function myFunction() {
//     for (var i = 0; i < 2; i++) {
//         $('#event_table').append('<tr><td>hello</td><td>hello</td></tr>');
//     }
// }
// require(["app"], function () {

// });

// console.log(event);

// function myFunction() {
//     for (var i = 0; i < 20; i++) {
//         $('#event_table').append('<tr><td>hello</td><td>hello</td></tr>');
//     }
// }

// function x() {

//     var x = document.getElementById("newEventDescription").value;
//     for (var i = 0; i <= x.length; i++) {

//         alert(i);
//     }

// }
