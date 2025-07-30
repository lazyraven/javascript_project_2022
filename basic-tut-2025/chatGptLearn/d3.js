const data = [10, 35, 20, 50, 40];

const svg = d3.select("#mySvg");

// const svg = d3.select("svg"),
(margin = { top: 20, right: 20, bottom: 30, left: 40 }),
  (width = +svg.attr("width") - margin.left - margin.right),
  (height = +svg.attr("height") - margin.top - margin.bottom);

const x = d3
  .scaleBand()
  .domain(data.map((d, i) => i))
  .range([0, width])
  .padding(0.1);

const y = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .nice()
  .range([height, 0]);

const g = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

g.append("g")
  .attr("class", "axis")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x).tickFormat((i) => `Item ${i + 1}`));

g.append("g").attr("class", "axis").call(d3.axisLeft(y).ticks(5));

g.selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d, i) => x(i))
  .attr("y", (d) => y(d))
  .attr("width", x.bandwidth())
  .attr("height", (d) => height - y(d))
  .on("mouseover", function () {
    d3.select(this).attr("fill", "orange");
  })
  .on("mouseout", function () {
    d3.select(this).attr("fill", "steelblue");
  });
