var formattedName = HTMLheaderName.replace("%data%", "Jane Doette");
var formattedRole = HTMLheaderRole.replace("%data%", "Artistic Director");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);