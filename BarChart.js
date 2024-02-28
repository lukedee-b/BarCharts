class BarChart {
  constructor(obj) {
    this.data = obj.data;
    this.yValue = obj.yValue;
    this.xValue = obj.xValue;
    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
    this.xPos = obj.xPos;
    this.yPos = obj.yPos;
    this.axisLineColour = obj.axisLineColour;
    this.labelTextSize = obj.labelTextSize;
    this.labelPadding = obj.labelPadding;
    this.labelColour = obj.labelColour;
    this.labelRotation = obj.labelRotation;
    this.barWidth = obj.barWidth;
    this.title = obj.title;
    this.titleTextSize = obj.titleTextSize
    this.yAxisTitle = obj.yAxisTitle;
    this.xAxisTitle = obj.xAxisTitle;
  }

  render() {
    push();

    // rotate(89.525)
    // translate(100,-1500)

    // Chart Title
    textAlign(CENTER);
    textSize(this.titleTextSize);
    fill(this.labelColour);
    text(
      this.title,
      this.chartWidth / 2 + this.xPos,
      this.yPos - this.yPos * 0.9
    );

    // xAxisTitle
    textAlign(CENTER);
    textSize(this.labelTextSize);
    fill(this.labelColour);
    text(
      this.xAxisTitle,
      this.chartWidth / 2 + this.xPos,
      this.yPos + this.yPos * 0.3
    );

    // yAxisTitle
    textAlign(CENTER);
    textSize(this.labelTextSize);
    fill(this.labelColour);
    text(
      this.yAxisTitle,
      this.xPos - 500 + this.yPos,
      this.xPos + this.yPos * 0.2
    );

    translate(this.xPos, this.yPos); // sets up where 0,0 is
    stroke(this.axisLineColour);
    line(0, 0, 0, -this.chartHeight);
    line(0, 0, this.chartWidth, 0);

    let gap =
      (this.chartWidth - this.data.length * this.barWidth) /
      (this.data.length + 1); // sets up the gaps
    let labels = this.data.map((d) => d[this.xValue]); // maps out the data
    let scale = this.chartHeight / max(this.data.map((d) => d[this.yValue])); // scales the height
    // console.log(scale);

    //this loop draws the horizontal elements bars and labels
    push();
    translate(gap, 0);
    for (let i = 0; i < this.data.length; i++) {
      fill("#fc4503");
      noStroke();
      rect(0, 0, this.barWidth, -this.data[i][this.yValue] * scale);

      // textSize(20);
      fill(this.labelColour);
      noStroke();
      textSize(this.labelTextSize);
      textAlign(LEFT, CENTER);
      push();
      translate(this.barWidth / 2, this.labelPadding);
      rotate(this.labelRotation);

      text(labels[i], 0, 0);
      pop();

      translate(gap + this.barWidth, 0);
    }
    pop();

    //this draws the vertical elements
    let tickGap = this.chartHeight / 5; // splits the y axis into 5 different sections
    let tickValue = max(this.data.map((d) => d[this.yValue])) / 5;
    for (let i = 0; i <= 5; i++) {
      stroke("fff");
      line(0, -i * tickGap, -20, -i * tickGap);

      fill(this.labelColour);
      noStroke();
      textSize(this.labelTextSize);
      textAlign(RIGHT, CENTER);
      text(tickValue * i, -20, -i * tickGap);
    }

    pop();
  }
}

class HorizontalBarChart {
  constructor(obj) {
    this.data = obj.data;
    this.xValue = obj.xValue;
    this.yValue = obj.yValue;
    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
    this.xPos = obj.xPos;
    this.yPos = obj.yPos;
    this.axisLineColour = obj.axisLineColour;
    this.labelPadding = obj.labelPadding;
    this.labelColour = obj.labelColour;
    this.barWidth = obj.barWidth;
    this.labelTextSize = obj.labelTextSize;
    this.xAxisTitle = obj.yAxisTitle;
    this.yAxisTitle = obj.xAxisTitle;
    this.title = obj.title;
    this.textTitleSize = obj.textTitleSize;
    this.xyTitleSize = obj.xyTitleSize;
  }

  render() {
    push();
    translate(this.xPos, this.yPos);
    stroke(this.axisLineColour);

    line(0, 0, this.chartWidth, 0);
    line(0, 0, 0, -this.chartHeight);

    let gap =
      ((this.chartWidth - this.data.length * this.barWidth) /
        this.data.length) *
      1.8;

    let labels = this.data.map((d) => d[this.xValue]);
    let scale = this.chartWidth / max(this.data.map((d) => d[this.yValue]));

    fill(this.labelColour);
    textSize(this.TitleSize);

    //title
    textAlign(CENTER, TOP);
    textSize(this.titleTextSize);
    noStroke();
    textStyle(NORMAL);
    text(this.title, this.chartWidth / 2, -this.chartHeight - 70);

    //    x title
    fill(this.labelColour);
    textSize(this.xyTitleSize);
    noStroke();
    textAlign(CENTER, TOP);
    text(this.xAxisTitle, this.chartWidth / 2, 90);

    // y title
    push();
    translate(-140, -this.chartHeight / 3);
    text(this.yAxisTitle, 0, -90);
    pop();

    // draws the bars
    push();
    translate(1, -gap * 30);
    for (let i = 0; i < this.data.length; i++) {
      fill("#fc4503");
      noStroke();
      rect(0, i * gap, this.data[i][this.yValue] * scale, this.barWidth);

      // y axis labels
      fill(this.labelColour);
      textSize(this.labelTextSize);
      textAlign(RIGHT, CENTER);
      text(labels[i], -10, i * gap + this.barWidth / 2);
    }
    pop();

    let tickGap = this.chartWidth / 5;
    let tickValue = max(this.data.map((d) => d[this.yValue])) / 5;

    // labels the x axis
    for (let i = 0; i <= 5; i++) {
      stroke(255);
      line(i * tickGap, 0, i * tickGap, 20);
      textSize(this.labelTextSize);
      noStroke();
      fill(this.labelColour);
      textAlign(CENTER, TOP);
      text(round(tickValue * i), i * tickGap, 25);
    }
    pop();
  }
}

class StackedBarChart {
  constructor(obj) {
    this.data = obj.data;
    this.yValues = obj.yValues; // Array of values to stack
    this.xValue = obj.xValue;
    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
    this.xPos = obj.xPos;
    this.yPos = obj.yPos;
    this.axisLineColour = obj.axisLineColour;
    this.labelTextSize = obj.labelTextSize;
    this.labelPadding = obj.labelPadding;
    this.labelColour = obj.labelColour;
    this.labelRotation = obj.labelRotation;
    this.barWidth = obj.barWidth;
    this.title = obj.title;
    this.yAxisTitle = obj.yAxisTitle;
    this.xAxisTitle = obj.xAxisTitle;
    this.colours = obj.colours;
  }

  render() {
    push();

    // Chart Title
    textAlign(CENTER);
    textSize(this.titleSize);
    fill(this.labelColour);
    text(
      this.title,
      this.xPos + this.chartWidth / 2,
      this.yPos - this.chartHeight * 1.1
    ); // positions the chart title

    // xAxisTitle
    textAlign(CENTER);
    textSize(this.labelTextSize);
    fill(this.labelColour);
    text(
      this.xAxisTitle,
      this.xPos + this.chartWidth / 2,
      this.yPos + this.chartHeight * 0.2
    ); // positions the x axis title

    // yAxisTitle
    textAlign(CENTER);
    textSize(this.labelTextSize);
    fill(this.labelColour);
    text(this.yAxisTitle, this.xPos - 100, this.yPos - this.chartHeight / 2); // positions the y axis title

    // this sets up the graph lines
    translate(this.xPos, this.yPos);
    stroke(this.axisLineColour);
    line(0, 0, 0, -this.chartHeight);
    line(0, 0, this.chartWidth, 0);

    let gap =
      (this.chartWidth - this.data.length * this.barWidth) /
      (this.data.length + 1); // decides how big and where to put the gaps
    let labels = this.data.map((d) => d[this.xValue]);

    // Calculate the maximum value for scaling
    let maxSum = 0; //Max sum is supposed to be the maximum amount that male and female can combine to which should be 4648
    for (let i = 0; i < this.data.length; i++) {
      let sum = 0;
      for (let j = 0; j < this.yValues.length; j++) {
        console.log("Y value is :" + this.data[i][this.yValues[j]])
        sum += parseInt(this.data[i][this.yValues[j]]);
     
      }
      maxSum = max(maxSum, sum);
      console.log("sum", sum);
  
    }

    
    console.log("Max Sum:", maxSum);
    // console.log("Scale:", scale);

    let scale = this.chartHeight / maxSum;

    // Draw stacked bars
    for (let i = 0; i < this.data.length; i++) {
      // i refers to the Male deaths
      let y = 0; // Starting point for each stacked bar
      for (let j = 0; j < this.yValues.length; j++) {
        // j refers to the Female
        let value = parseInt(this.data[i][this.yValues[j]]);
        let barHeight = value * scale;
        fill(this.colours[j]); // this calls the second colour

        // console.log("Drawing rectangle at:",gap + i * (this.barWidth + gap),0,this.barWidth,-barHeight); // shows us where each bar is being placed
        rect(gap + i * (this.barWidth + gap), -y, this.barWidth, -barHeight);
        y += barHeight;
      }

      // x axis Label
      fill(this.labelColour);
      noStroke();
      textSize(this.labelTextSize);
      textAlign(LEFT, CENTER);
      text(
        labels[i],
        gap + i * (this.barWidth + gap) + this.barWidth / 2,
        this.labelPadding
      );
    }

    // Draw y-axis ticks
    let tickGap = this.chartHeight / 5;
    let tickValue = Math.round(maxSum / 5);
  
   
    for (let i = 0; i <= 5; i++) {
      stroke(this.axisLineColour);
      line(-10, -i * tickGap, 0, -i * tickGap);

      fill(this.labelColour);
      noStroke();
      textSize(this.labelTextSize);
      textAlign(RIGHT, CENTER);
      text(tickValue * i, -20, -i * tickGap);
    }

    pop();
  }
}
