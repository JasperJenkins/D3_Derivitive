alert('HALP')

var rectDemo = d3.select("#d3_0").
  append("svg").
  attr("width", 400).
  attr("height", 300);

rectDemo.append("rect").
  attr("x", 100).
  attr("y", 100).
  attr("height", 100).
  attr("width", 200);