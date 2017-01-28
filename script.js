var notKnights = [
  '{"name": "David Bowie", "description": "musician","date": "2003", "reason": "", "image":"https://cdn.theculturetrip.com/wp-content/uploads/2016/03/maxresdefault3.jpg"}',
  '{"name": "Peter Benenson", "description": "founder of amnesty international","date": "1980", "reason": "British government complicit in human rights abuses", "image":"https://earthpal.files.wordpress.com/2011/05/amnesty.jpg"}',
  '{"name": "", "description": "", "date": "", "reason": "", "image":""}',
  '{"name": "", "description": "", "date": "", "reason": "", "image":""}',
  '{"name": "", "description": "", "date": "", "reason": "", "image":""}',
  '{"name": "", "description": "", "date": "", "reason": "", "image":""}',
  '{"name": "", "description": "", "date": "", "reason": "", "image":""}',
  '{"name": "", "description": "", "date": "", "reason": "", "image":""}'
];

var knights = {
  name: "Lancelot",
  name: "Joan of Arc",
  name: "Richard the Lionheart",
  name: "Ian Mckellan",
};


function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
};


var jsonStr = JSON.stringify(notKnights[1]);
// debugger;
alert(jsonStr);
//var wtf = getElementById("wtf");
//document.wtf.innerHTML = jsonStr;

var nonName = knights.name;

alert(nonName)
