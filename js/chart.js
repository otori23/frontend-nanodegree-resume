
var data = [
      { "skill":"Awesomeness", "rating":10 },
	  { "skill":"Delivering Things", "rating":7 },
	  { "skill":"Cryogenic Sleep", "rating":8 },
      { "skill":"Saving the Universe", "rating":9 }
];

var margin = {top: 20, right: 30, bottom: 30, left: 200},
	maxWidth = parseInt(d3.select('#skillsChart').style('max-width'), 10),
	maxHeight = parseInt(d3.select('#skillsChart').style('max-height'), 10);
	/*
	width = parseInt(d3.select('#skillsChart').style('width'), 10),
	height = width * (maxHeight/maxWidth),
    width = width - margin.left - margin.right,
    height = height - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.rating; })])
    .range([0, width]);

var y = d3.scale.ordinal()
	.domain(data.map(function(d) { return d.skill; }))
	.rangeRoundBands([height, 0], .1, .1);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chart.append("g")
	.attr("class", "y axis")
	.call(yAxis);

var bar = chart.selectAll(".bar")
    .data(data)
  .enter().append("g")
  .attr("transform", function(d) { return "translate(" + x(0) + "," + y(d.skill) + ")"; });

bar.append("rect")
    .attr("class", "bar")
	.attr("height", y.rangeBand())
	.attr("width", function(d) { return x(d.rating); });

bar.append("text")
	.attr("class", "bar-text")
    .attr("x", function(d) { return x(d.rating) - 30; })
    .attr("y", y.rangeBand() / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d.rating; });

*/

function drawChart() {
	d3.select('.chart')
	  .selectAll('*')
		.remove();

	var width = parseInt(d3.select('#skillsChart').style('width'), 10),
		height = width * (maxHeight/maxWidth),
		width = width - margin.left - margin.right,
		height = height - margin.top - margin.bottom;

	var x = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.rating; })])
    .range([0, width]);

	var y = d3.scale.ordinal()
		.domain(data.map(function(d) { return d.skill; }))
		.rangeRoundBands([height, 0], .1, .1);

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left");

	var chart = d3.select(".chart")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	  .append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	chart.append("g")
		.attr("class", "y axis")
		.call(yAxis);

	var bar = chart.selectAll(".bar")
		.data(data)
	  .enter().append("g")
	  .attr("transform", function(d) { return "translate(" + x(0) + "," + y(d.skill) + ")"; });

	bar.append("rect")
		.attr("class", "bar")
		.attr("height", y.rangeBand())
		.attr("width", function(d) { return x(d.rating); });

	bar.append("text")
		.attr("class", "bar-text")
		.attr("x", function(d) { return x(d.rating) - 30; })
		.attr("y", y.rangeBand() / 2)
		.attr("dy", ".35em")
		.text(function(d) { return d.rating; });
}

d3.select(window).on('load', drawChart);
d3.select(window).on('resize', drawChart);
