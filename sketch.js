let barCharts = [];
let data;
let data2;
let data3;
let data4;
let data5;
let cleanData = [];
let cleanData2 = [];
let cleanData3 = [];
let cleanData4 = [];
let cleanData5 = [];
let numRows;
let numRows2;
let numRows3;
let numRows4;
let numRows5;

function preload() {
  data = loadTable("data/RIP.csv", "csv", "header");
  data2 = loadTable("data/Deaths.csv", "csv", "header");
  data3 = loadTable("data/MF.csv", "csv", "header");
  data4 = loadTable("data/MDeaths.csv", "csv", "header");
  data5 = loadTable("data/FDeaths.csv", "csv", "header");
}

function setup() {
  noLoop();
  background(50);
  createCanvas(3000, 7000);


  //normal bar chart
  numRows = data.rows.length;
  for (let i = 0; i < numRows; i++) {
    cleanData.push(data.rows[i].obj);
  }

  let barChart01 = {
    data: cleanData,
    yValue: "VALUE",
    xValue: "Month",
    chartWidth: 650,
    chartHeight: 350,
    xPos: 150,
    yPos: 400,
    axisLineColour: "#d9d9d9",
    barWidth: 10,
    labelTextSize: 15,
    labelPadding: 12,
    labelColour: "#03BAFC",
    labelRotation: 45,
    titleTextSize: 20,
    title: "Total of Registered Deaths (From 2021-2023)",
    xAxisTitle: "Year and Month",
    yAxisTitle: "Death Cases",
  };

  barCharts.push(new BarChart(barChart01));

  //second normal bar chart 
  numRows4 = data4.rows.length;
  for (let i = 0; i < numRows4; i++) {
    cleanData4.push(data4.rows[i].obj);
  }

  let barChart04 = {
    data: cleanData4,
    yValue: "VALUE",
    xValue: "Month",
    chartWidth: 650,
    chartHeight: 350,
    xPos: 1050,
    yPos: 400,
    axisLineColour: "#d9d9d9",
    barWidth: 10,
    labelTextSize: 15,
    labelPadding: 12,
    labelColour: "#03BAFC",
    labelRotation: 45,
    titleTextSize: 20,
    title: "Male Registered Deaths from 2019-2021",
    xAxisTitle: "Year and Month",
    yAxisTitle: "",
  };

  barCharts.push(new BarChart(barChart04));


// second horizontal bar chart 
  numRows2 = data.rows.length;
  for (let i = 0; i < numRows; i++) {
    cleanData2.push(data.rows[i].obj);
  }

  let barChart02 = {
    data: cleanData2,
    xValue: "Month",
    yValue: "VALUE",
    chartWidth: 500,
    chartHeight: 361,
    xPos: 1000,
    yPos: 1100,
    axisLineColour: "#d9d9d9",
    barWidth: 10,
    // labelTextSize: 20,
    // labelPadding: 10,
    labelColour: "#03BAFC",
    titleTextSize: 200,
    // xyTitleSize: ,
    xAxisTitle: "Year and Month",
    yAxisTitle: "Death Cases",
    title: "Total of Registered Deaths (From 2021-2023)",
    textTitleSize: 20,
    labelTextSize: 12,
  };

  barCharts.push(new HorizontalBarChart(barChart02));

//  first horizontal bar chart 
numRows5 = data5.rows.length;
for (let i = 0; i < numRows5; i++) {
  cleanData5.push(data5.rows[i].obj);
}

let barChart05 = {
  data: cleanData5,
  xValue: "Month",
  yValue: "VALUE",
  chartWidth: 500,
  chartHeight: 361,
  xPos: 200,
  yPos: 1100,
  axisLineColour: "#d9d9d9",
  barWidth: 10,
  labelTextSize: 12,
  labelPadding: 10,
  labelColour: "#03BAFC",
  labelRotation: -45,
  title: "This is a test",
  xAxisTitle: "Year and Month",
  yAxisTitle: "Death Cases",
  title: "Total of Registered Female Deaths (From 2019-2021)",
  TitleSize: 12,
  labelTextSize: 12,
};

  barCharts.push(new HorizontalBarChart(barChart05));



  // stacked bar chart
  numRows3 = data3.rows.length;
  for (let i = 0; i < numRows3; i++) {
    cleanData3.push(data3.rows[i].obj);
  }
  let barChart03 = {
    data: cleanData3,
    xValue: "YEAR",
    yValues: ["MALE", "FEMALE"],
    chartWidth: 550,
    chartHeight: 361,
    xPos: 200,
    yPos: 1700,
    axisLineColour: "#d9d9d9",
    barWidth: 10,
    labelTextSize: 12,
    labelPadding: 10,
    labelColour: "#fc4503",
    xAxisTitle: "Year",
    yAxisTitle: "Death Cases",
    title: "Male VS Female Deaths",
    TitleSize: 20,
    colours: ["#6c173e", "#02cdb1"],
  };

  barCharts.push(new StackedBarChart(barChart03));
}

function draw() {
  background(50);
  barCharts.forEach((bar) => bar.render());
}
