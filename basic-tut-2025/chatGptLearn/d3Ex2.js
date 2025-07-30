// Safe: Runs after SVG is loaded
const svg = d3.select("#mySvg");

// Now use attributes safely
svg
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 40)
  .attr("fill", "steelblue");
