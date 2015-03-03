
var bio = {
  "name": "John Doe",
  "role": "Web Developer",
  "contacts": {
    "mobile": "650-55-5555",
    "email": "john@example.com",
    "github": "johndoe",
    "tiwtter": "@johndoe",
    "location": "San Francisco"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
  "skills": [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ],
  "bioPic": "images/fry.jpg"
};

var education = {  
  "schools": [
      {
        "name": "Nove Southeastern University",
        "city": "Fort Lauderdale, FL",
        "degree": "Masters",
        "major": ["CS"],
        "dates": 2013,
        "url": "http://example.com"
      },
      {
        "name": "Exkerd College",
        "city": "Saint Petersburg, FL",
        "degree": "BA",
        "major": ["CS"],
        "dates": 2003,
	"url": "http://example.com"
      }
    ],
    "onlineCourses":
    {
      "title": "JavaScript Crash Course",
      "school": "Udacity",
      "dates": 2014,
      "url": "http://www.udaclty.com/course/ud804"
	}
};

var work = {
  "jobs": [
    {
      "employer": "Planet Express",
      "title": "Delivery Boy",
      "dates": "January 3000 - Future",
	  "location": "Chicago, IL",
      "description": "Who moved my cheese cheesy feet cauliflower\
        cheese. Queso taleggio when the cheese comes out everybody\
        happy airedale ricotta cheese and wine paneer camebert de\
        normandie. Swiss mozzarella cheese slices feta fromage frais\
        airedale swiss cheesecake. Hard cheese blue castello halloumi\
        parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Panucci's Pizza",
      "title": "Delivery Boy",
      "dates": "1998 - December 31, 1999",
	  "location": "San Fracisco, CA",
      "description": "Who moved my cheese cheesy feet cauliflower\
        cheese. Queso taleggio when the cheese comes out everybody\
        happy airedale ricotta cheese and wine paneer camebert de\
        normandie. Swiss mozzarella cheese slices feta fromage frais\
        airedale swiss cheesecake. Hard cheese blue castello halloumi\
        parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "Who moved my cheese cheesy feet cauliflower\
        cheese. Queso taleggio when the cheese comes out everybody\
        happy airedale ricotta cheese and wine paneer camebert de\
        normandie. Swiss mozzarella cheese slices feta fromage frais\
        airedale swiss cheesecake. Hard cheese blue castello halloumi\
        parmesan say cheese stinking bishop jarlsberg.",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    }
  ] 
};


var formattedName = HTMLheaderName.replace("%data%", "Jane Doette");
var formattedRole = HTMLheaderRole.replace("%data%", "Artistic Director");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Skills
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++) { 
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

// Work
var displayWork= function() {
	for(job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLoc);
		$(".work-entry:last").append(formattedDesc);
	}
};
displayWork();

// Internationalize Button
$("#main").append(internationalizeButton);

// Projects
projects.display = function() {
  for(project in projects.projects) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDesc);
    for(image in this.projects[project].images)
    {
	  formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	  $(".project-entry:last").append(formattedImage);
    }
  }
};
projects.display();

// Add Map
$("#mapDiv").append(googleMap);