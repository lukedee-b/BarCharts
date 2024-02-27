class BarChart{
    constructor(obj){
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
        this.title = obj.title
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;
        // this.maxValue = max(this.data.map(d => d[this.yValue]));
        // this.scale = this.chartHeight / this.maxValue;
        // this.rounding = obj.rounding;
        // this.decimalPlaces = obj.decimalPlaces;

    }

    render(){
        push ();

        // rotate(89.525)
        // translate(100,-1500)

        // Chart Title
        textAlign(CENTER);
        textSize(this.titleTextSize);
        fill(this.labelColour);
        text(this.title, (this.chartWidth/2)+this.xPos, this.yPos-(this.yPos*0.87));

        // xAxisTitle
        textAlign(CENTER);
        textSize(this.labelTextSize);
        fill(this.labelColour);
        text(this.xAxisTitle, (this.chartWidth/2)+this.xPos, this.yPos+(this.yPos*0.3));
        
        // yAxisTitle
        textAlign(CENTER);
        textSize(this.labelTextSize);
        fill(this.labelColour);
        text(this.yAxisTitle, (this.xPos-500)+this.yPos, this.xPos+(this.yPos*0.2));
        

        translate (this.xPos,this.yPos);
        stroke(this.axisLineColour);
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length + 1)
        let labels = this.data.map(d => d[this.xValue]);
        let scale = this.chartHeight / max(this.data.map(d=> d[this.yValue]));
        // console.log(scale);

        //this loop draws the horizontal elements bars and labels
        push()
        translate(gap,0);
        for(let i=0; i<this.data.length; i++){
            fill ("#fc4503");
            noStroke()
            rect (0,0,this.barWidth, -this.data[i][this.yValue] * scale);

            // textSize(20);
            fill(this.labelColour)
            noStroke()
            textSize(this.labelTextSize)
            textAlign(LEFT, CENTER)
            push()
            translate(this.barWidth/2,this.labelPadding)
            rotate(this.labelRotation)

            text (labels[i],0,0);
            pop()
            
            translate(gap+this.barWidth,0);
        }
        pop()

        //this draws the vertical elements 
        let tickGap = this.chartHeight / 5;
        let tickValue = max(this.data.map(d=> d[this.yValue]))/5
        for(let i=0; i<=5; i++){
            stroke("fff")
            line(0,-i*tickGap,-20,-i*tickGap)

            fill(this.labelColour)
            noStroke()
            textSize(this.labelTextSize)
            textAlign(RIGHT, CENTER)
            text(tickValue*i,-20,-i*tickGap)
        }

        pop ();
    }
}


class HorizontalBarChart{
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
    this.labelRotation = obj.labelRotation;
    this.barWidth = obj.barWidth;
    this.labelTextSize = obj.labelTextSize;
    this.xAxisTitle = obj.yAxisTitle;
    this.yAxisTitle = obj.xAxisTitle;
    this.title = obj.title;
    this.TitleSize = obj.TitleSize;
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
        this.data.length) * 1.8;
   
 
    let labels = this.data.map((d) => d[this.xValue]);
    let scale = this.chartHeight / max(this.data.map((d) => d[this.yValue]));
 
    fill(this.labelColour);
    textSize(this.TitleSize);
 
    textAlign(CENTER, TOP);
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
    translate(-140, -this.chartHeight /3);
    text(this.yAxisTitle, 0, -90);
    pop();
 
    push();
    translate(1, -gap * 30);
    for (let i = 0; i < this.data.length; i++) {
      fill("#fc4503");
      noStroke();
      rect(0, i * gap, this.data[i][this.yValue] * scale, this.barWidth);
 
      fill(this.labelColour);
      textSize(this.labelTextSize);
      textAlign(RIGHT, CENTER);
      text(labels[i], -10, i * gap + this.barWidth / 2);
    }
    pop();
 
    let tickGap = this.chartWidth / 5;
    let tickValue = max(this.data.map((d) => d[this.yValue])) / 5;
 
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

class StackedBarChart{
    constructor(obj){
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
        this.title = obj.title
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;
       
    }

    render(){
        push ();

     
        // Chart Title
        textAlign(CENTER);
        textSize(this.titleTextSize);
        fill(this.labelColour);
        text(this.title, (this.chartWidth/2)+this.xPos, this.yPos-(this.yPos*0.87));

        // xAxisTitle
        textAlign(CENTER);
        textSize(this.labelTextSize);
        fill(this.labelColour);
        text(this.xAxisTitle, (this.chartWidth/2)+this.xPos, this.yPos+(this.yPos*0.3));
        
        // yAxisTitle
        textAlign(CENTER);
        textSize(this.labelTextSize);
        fill(this.labelColour);
        text(this.yAxisTitle, (this.xPos-500)+this.yPos, this.xPos+(this.yPos*0.2));
        

        translate (this.xPos,this.yPos);
        stroke(this.axisLineColour);
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length + 1)
        let labels = this.data.map(d => d[this.xValue]);
        let scale = this.chartHeight / max(this.data.map(d=> d[this.yValue]));
        // console.log(scale);

        //this loop draws the horizontal elements bars and labels
        push()
        translate(gap,0);
        for(let i=0; i<this.data.length; i++){
            fill ("#fc4503");
            noStroke()
            rect (0,0,this.barWidth, -this.data[i][this.yValue] * scale);

            // textSize(20);
            fill(this.labelColour)
            noStroke()
            textSize(this.labelTextSize)
            textAlign(LEFT, CENTER)
            push()
            translate(this.barWidth/2,this.labelPadding)
            rotate(this.labelRotation)

            text (labels[i],0,0);
            pop()
            
            translate(gap+this.barWidth,0);
        }
        pop()

        //this draws the vertical elements 
        let tickGap = this.chartHeight / 5;
        let tickValue = max(this.data.map(d=> d[this.yValue]))/5
        for(let i=0; i<=5; i++){
            stroke("fff")
            line(0,-i*tickGap,-20,-i*tickGap)

            fill(this.labelColour)
            noStroke()
            textSize(this.labelTextSize)
            textAlign(RIGHT, CENTER)
            text(tickValue*i,-20,-i*tickGap)
        }

        pop ();
    }
}
