let barCharts = [];
let data;
let data2;
let data3;
let cleanData=[];
let cleanData2=[];
let cleanData3=[];
let numRows;
let numRows2;
let numRows3;

function preload(){
    data = loadTable("data/RIP.csv", "csv", "header");
    data2 = loadTable("data/Deaths.csv", "csv", "header");
    data3 = loadTable("data/MF.csv", "csv", "header");

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
    xPos:150,
    yPos:400,
    axisLineColour:"#d9d9d9",
    barWidth: 10,
    labelTextSize:12,
    labelPadding:10,
    labelColour:"#fc4503",
    labelRotation:45,
    title:"Total of Registered Deaths (From 2021-2023)",
    xAxisTitle:"Year and Month",
    yAxisTitle:"Death Cases",
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
      xPos: 900,
      yPos: 450,
      axisLineColour: "#d9d9d9",
      barWidth: 10,
      labelTextSize: 12,
      labelPadding: 10,
      labelColour: "#fc4503",
      labelRotation: -45,
      title: "This is a test",
      xAxisTitle: "This is also a test",
      xAxisTitle: "Death Cases",
      yAxisTitle: "Year and Month",
      title: "Total of Registered Deaths (From 2021-2023)",
      TitleSize: 12,
      labelTextSize: 12,
    };


    barCharts.push(new HorizontalBarChart(barChart02))

    let barChart03 = {
        data: cleanData3,
        xValue: "Year",
        yValues: ["Male", "Female"],
        chartWidth: 500,
        chartHeight: 361,
        xPos: 200,
        yPos: 1100,
        axisLineColour: "#d9d9d9",
        barWidth: 10,
        labelTextSize: 12,
        labelPadding: 10,
        labelColour: "#fc4503",
        labelRotation: 45,
        title: "This is a test",
        xAxisTitle: "This is also a test",
        xAxisTitle: "Year",
        yAxisTitle: "Death Cases",
        title: "Male VS Female Deaths",
        TitleSize: 12,
        labelTextSize: 12,
        colours: ["#6c173e","#f81eb1","#02cdb1"]
      };
  
  
      barCharts.push(new StackedBarChart(barChart03))
}




function draw() {
    background(50);
    barCharts.forEach(bar => bar.render())
}

