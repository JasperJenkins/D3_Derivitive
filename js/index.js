d3.csv("data/data.csv", function(data) {
  console.log(data[0]);
});

var rectDemo = d3.select("#d3_0").
  append("svg").
  attr("width", 500).
  attr("height", 500);

rectDemo.append("rect").
  attr("x", 0).
  attr("y", 0).
  attr("height", 100).
  attr("width", 100);