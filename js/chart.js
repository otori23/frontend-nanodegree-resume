
var data = [
      { "skill":"Awesomeness", "rating":10 },
	  { "skill":"Delivering Things", "rating":7 },
	  { "skill":"Cryogenic Sleep", "rating":8 },
      { "skill":"Saving the Universe", "rating":9 }
];

var barHeight = 20;

var margin = {top: 20, right: 30, bottom: 30, left: 200},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.rating; })])
    .range([0, width]);

var y = d3.scale.ordinal()
	.domain(data.map(function(d) { return d.skill; }))
	.rangeRoundBands([height, 0], .1);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chart.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);

chart.append("g")
	.attr("class", "y axis")
	.call(yAxis);

chart.selectAll(".bar")
	.data(data)
  .enter().append("rect")
	.attr("class", "bar")
	.attr("x", function(d) { return x(0); })
	.attr("y", function(d) { return y(d.skill); })
	.attr("height", y.rangeBand())
	.attr("width", function(d) { return x(d.rating); });