
var bio = {
  "name": "John Doe",
  "role": "Web Developer",
  "contacts": {
    "mobile": "650-555-5555",
    "email": "john@example.com",
    "github": "johndoe",
    "twitter": "@johndoe",
    "location": "San Francisco"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
  "skills": [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ],
  "bioPic": "images/fry.jpg",
  "display": function() {
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		$("#header").prepend(formattedName);
		
		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		
		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		
		var formattedPic = HTMLbioPic.replace("%data%", this.bioPic);
		$("#header").append(formattedPic);
		
		var formattedMsg = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedMsg);
		
		if(this.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for(var i = 0; i < bio.skills.length; i++) { 
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			}
		}
  }
};

var education = {  
  "schools": [
      {
        "name": "Nova Southeastern University",
        "location": "Fort Lauderdale, FL",
        "degree": "Masters",
        "majors": ["CS"],
        "dates": 2013,
        "url": "http://example.com"
      },
      {
        "name": "Eckerd College",
        "location": "Saint Petersburg, FL",
        "degree": "BA",
        "majors": ["CS"],
        "dates": 2003,
		"url": "http://example.com"
      }
  ],
  "onlineCourses": [
	{
		"title": "JavaScript Crash Course",
		"school": "Udacity",
		"date": 2014,
		"url": "http://www.udaclty.com/course/ud804"
	}
  ],
  "display": function() {
		for(var school in this.schools) {
			var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
			formattedName = formattedName.replace("#", this.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			
			var myMajors = "";
			for(var major in this.schools[school].majors) {
				myMajors = myMajors + this.schools[school].majors[major] + ", "; 
			}
			myMajors = myMajors.slice(0, -2);
			var formattedMajor = HTMLschoolMajor.replace("%data%", myMajors);
			$(".education-entry:last").append(formattedMajor);
		}
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
  ],
  "display": function() {	  
		for(job in this.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
			var formattedLoc = HTMLworkLocation.replace("%data%", this.jobs[job].location);
			var formattedDesc = HTMLworkDescription.replace("%data%", this.jobs[job].description);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLoc);
			$(".work-entry:last").append(formattedDesc);
		}
	}
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
  ],
  "display": function() {
	for(project in this.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", this.projects[project].description);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDesc);
		for(image in this.projects[project].images)
		{
			formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
  }  
};

// Biographical
bio.display();

// Work
work.display();

// Projects
projects.display();

// Education
education.display();

// Add Map
$("#mapDiv").append(googleMap);

// Internationalize Button
// $("#main").append(internationalizeButton);