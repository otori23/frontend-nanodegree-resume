
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
      "images": [
        "https://lh3.ggpht.com/23-sqOpOGqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr21-\
	      PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080",
        "https://lh3.ggpht.com/23-sqOpOGqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr21-\
		  PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080"
      ]
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
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]););
  }
}

// Work
for(job in work.jobs) {
	var employerTemplate = HTMLworkEmployer.slice(0);
	var formattedEmployer = employerTemplate.replace("%data%", work.jobs[job].employer);

	var titleTemplate = HTMLworkTitle.slice(0);
	var formattedTitle = titleTemplate.replace("%data%", work.jobs[job].title);

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(formattedEmployer + formattedTitle);
}