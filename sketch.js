let barCharts = [];
let data;
let data2;
let cleanData=[];
let cleanData2=[];
let numRows;
let numRows2;

function preload(){
    data = loadTable("data/RIP.csv", "csv", "header");
    data2 = loadTable("data/Deaths.csv", "csv", "header");
}

function setup(){
    noLoop()
    background(50)
    createCanvas(3000,7000)

    numRows = data.rows.length;
    for(let i=0; i<numRows; i++){
        cleanData.push(data.rows[i].obj)
    }


    let barChart01 = {
    data:cleanData,
    yValue:"VALUE",
    xValue:"Month",
    chartWidth:500,
    chartHeight:350,
    xPos:50,
    yPos:400,
    axisLineColour:"#d9d9d9",
    barWidth: 10,
    labelTextSize:12,
    labelPadding:10,
    labelColour:"#fc4503",
    labelRotation:45,
    title:"this is a test",
    xAxisTitle:"this is also a test"
    }


    barCharts.push(new BarChart(barChart01))


    numRows2 = data.rows.length;
    for(let i=0; i<numRows2; i++){
        cleanData2.push(data.rows[i].obj)
    }


    let barChart02 = {
      data: cleanData2,
      xValue: "Month",
      yValue: "VALUE",
      chartWidth: 500,
      chartHeight: 361,
      xPos: 1050,
      yPos: 400,
      axisLineColour: "#d9d9d9",
      barWidth: 10,
      labelTextSize: 12,
      labelPadding: 10,
      labelColour: "#fc4503",
      labelRotation: -45,
      title: "This is a test",
      xAxisTitle: "This is also a test",
      xTitle: "string",
      yTitle: "string",
      chartTitle: "string",
      chartTitleTextSize: 20,
      xyTitleSize: 20,
    };


    barCharts.push(new HorizontalBarChart(barChart02))
}




function draw() {
    background(50);
    barCharts.forEach(bar => bar.render())
}

