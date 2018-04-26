var margin = {top: 20, right: 20, bottom: 30, left: 30},
width = 900 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;

d3.csv("data/data.csv", function(error, data) {
  if (error) throw error;
  // format the data
  data.forEach(function(d) {
    d.x = +d.x;
    d.y = +d.y;
    });
  
    let graph = d3.select('#graph').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var x = d3.scaleLinear()
        .range([0, width])
        .domain([0, d3.max(data, function(d) { return d.x;})]);

    var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, function(d) { return d.y;})]);

    circles = graph.selectAll('circle')
      .data(data).enter().append('circle')
      .attr("cx", function(d) { return x(d.x);})
      .attr("cy", function(d) { return y(d.y);})
      .attr("r", function(d) { return 5});

    grow();

    function grow() {
      circles
      .transition().duration(1250)
        .attr("r", 5)
        .attr("fill", 'red')
      .transition().duration(1250)
        .attr("r", 3)
        .attr("fill", 'blue')
      .on("end", grow);
    };
  });