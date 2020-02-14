$(function () {
$('#btnSun').click(get_data_start1);
function get_data_start1()
{
  $('#Container1').highcharts().redraw();
}
var graph_series = []
var graph_option1 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'CSS811 CO2'},
  series:[{name:'GRAPH 1',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'ppm'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option2 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'CSS811 TVOC'},
  series:[{name:'GRAPH 2',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'TVOC VALUE'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option3 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'MQ7'},
  series:[{name:'GRAPH 3',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'ppm'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option4 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'NDIR CO2'},
  series:[{name:'GRAPH 4',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'ppm'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option5 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'SHT1x TEMPERATURE'},
  series:[{name:'GRAPH 5',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'C'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option6 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'SHT1x HUMIDITY'},
  series:[{name:'GRAPH 6',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'%'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option7 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'EZO pH'},
  series:[{name:'GRAPH 7',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'pH'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option8 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'LIGHT SENSOR'},
  series:[{name:'GRAPH 8',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'Lux'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option9 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'SOIL MH 1'},
  series:[{name:'GRAPH 9',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'Volumetric water content'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option10 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'SOIL MH 2'},
  series:[{name:'GRAPH 10',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'Volumetric water content'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option11 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'SOIL MH 3'},
  series:[{name:'GRAPH 11',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'Volumetric water content'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option12 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'BME680 TEMPERATURE'},
  series:[{name:'GRAPH 12',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'C'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option13 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'BME680 PRESSURE'},
  series:[{name:'GRAPH 13',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'hpa'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option14 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'BME680 HUMIDITY'},
  series:[{name:'GRAPH 14',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'%'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option15 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'BME680 GAS'},
  series:[{name:'GRAPH 15',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'TVOC'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option16 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'BME680 ALTITUTE'},
  series:[{name:'GRAPH 16',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'ALTITUTE VALUE'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option17 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'DS18B20'},
  series:[{name:'GRAPH 1',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'C'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var graph_option18 = {
  chart: {
    renderTo: 'container',
    type: 'spline',
    animation:Highcharts.svg,
    marginRight: 10,
    events:{
      load: function () {
        graph_series.push(this.series[0]);
      }
    }
  },
  title:{ text:'PAR Sensor'},
  series:[{name:'GRAPH 1',}],
  xAxis:{
    type:'datetime',
    dateTimeLabelFormats:{
      hour: '%e-%b %H:%M',
      minute: '%e-%b%H:%M',
      day: '%e-%b %H:%M',
      week: '%e-%b %H:%M',
      month: '%e-%b %H:%M',
    },
    title:{text:'TIMESTAMP'}
  },
  yAxis:{
    title:{text:'uMol(photons)'},
    plotLines: [{
      value: 0,
      width:3,
      color: '#808080'}]
  },
  tooltip:{
    formatter: function (){
      return 'TIME:'+Highcharts.dateFormat('%e-%b-%Y %H:%M:%S',this.x)+'<br/>VALUE:'+this.y;
    }
  },
  legend: {enabled: false},exporting: {enabled: false}
}
var target = document.getElementById('foo'); // your canvas element
var target1 = document.getElementById('foo1'); // your canvas element
var target2 = document.getElementById('foo3'); // your canvas element
var target3 = document.getElementById('foo4'); // your canvas element
var target4 = document.getElementById('foo5'); // your canvas element
var target5 = document.getElementById('foo6'); // your canvas element
var target6 = document.getElementById('foo7'); // your canvas element
var target7 = document.getElementById('foo8'); // your canvas element
var target8 = document.getElementById('foo9'); // your canvas element
var target9 = document.getElementById('foo10'); // your canvas element
var target10 = document.getElementById('foo11'); // your canvas element
var target11 = document.getElementById('foo12'); // your canvas element
var target12 = document.getElementById('foo13'); // your canvas element
var target13 = document.getElementById('foo14'); // your canvas element
var target14 = document.getElementById('foo15'); // your canvas element
var target15 = document.getElementById('foo16'); // your canvas element
var target16 = document.getElementById('foo17'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); 
var gauge1 = new Gauge(target1).setOptions(opts);
var gauge2 = new Gauge(target2).setOptions(opts);
var gauge3 = new Gauge(target3).setOptions(opts);
var gauge4 = new Gauge(target4).setOptions(opts);
var gauge5 = new Gauge(target5).setOptions(opts);
var gauge6 = new Gauge(target6).setOptions(opts);
var gauge7 = new Gauge(target7).setOptions(opts);
var gauge8 = new Gauge(target8).setOptions(opts);
var gauge9 = new Gauge(target9).setOptions(opts);
var gauge10 = new Gauge(target10).setOptions(opts);
var gauge11 = new Gauge(target11).setOptions(opts);
var gauge12 = new Gauge(target12).setOptions(opts);
var gauge13 = new Gauge(target13).setOptions(opts);
var gauge14 = new Gauge(target14).setOptions(opts);
var gauge15 = new Gauge(target15).setOptions(opts);
var gauge16 = new Gauge(target16).setOptions(opts);
//Set max values
gauge.maxValue = 300; // set max gauge value
gauge1.maxValue = 300; // set max gauge value
gauge2.maxValue = 300; // set max gauge value
gauge3.maxValue = 300; // set max gauge value
gauge4.maxValue = 300; // set max gauge value
gauge5.maxValue = 300; // set max gauge value
gauge6.maxValue = 300; // set max gauge value
gauge7.maxValue = 300; // set max gauge value
gauge8.maxValue = 300; // set max gauge value
gauge9.maxValue = 300; // set max gauge value
gauge10.maxValue = 300; // set max gauge value
gauge11.maxValue = 300; // set max gauge value
gauge12.maxValue = 300; // set max gauge value
gauge13.maxValue = 300; // set max gauge value
gauge14.maxValue = 300; // set max gauge value
gauge15.maxValue = 300; // set max gauge value
gauge16.maxValue = 300; // set max gauge value
gauge.set(0); // set actual value
gauge1.set(0); // set actual value
gauge2.set(0); // set actual value
gauge3.set(0); // set actual value
gauge4.set(0); // set actual value
gauge5.set(0); // set actual value
gauge6.set(0); // set actual value
gauge7.set(0); // set actual value
gauge8.set(0); // set actual value
gauge9.set(0); // set actual value
gauge10.set(0); // set actual value
gauge11.set(0); // set actual value
gauge12.set(0); // set actual value
gauge13.set(0); // set actual value
gauge14.set(0); // set actual value
gauge15.set(0); // set actual value
gauge16.set(0); // set actual value
//***************************************************************************************
//***************************************************************************************
//***************************************************************************************
//MAIN FUNCTION START HERE
//MAIN FUNCTION START HERE
//MAIN FUNCTION START HERE
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//REGURAL FETCH DATA
function set_data_refresh() {
setInterval(function () {
start_location = window.localStorage.getItem('limit');
limit = parseInt(start_location) + 1;
$.ajax({
url: "http://127.0.0.1:5000/fetch_data?start="+start_location+"&stop="+limit,
type: "GET",
processData: false,
contentType: false,
success: function (result, event) {
if (result["error"] == "0")
{
var data = result['data']
//console.log(data)
if (data.length > 0)
{
console.log('Data Fetched: '+start_location+"-"+(limit-1));
data.forEach(element => {
time = ((moment(element[0]+' '+element[1],"DD-MM-YYYY HH:mm")).toDate()).getTime();
graph_series[0].addPoint([ time , parseFloat(element[2])], true, true);
graph_series[1].addPoint([ time , parseFloat(element[3])], true, true);
graph_series[2].addPoint([ time , parseFloat(element[4])], true, true);
graph_series[3].addPoint([ time , parseFloat(element[5])], true, true);
graph_series[4].addPoint([ time , parseFloat(element[6])], true, true);
graph_series[5].addPoint([ time , parseFloat(element[7])], true, true);
graph_series[6].addPoint([ time , parseFloat(element[8])], true, true);
graph_series[7].addPoint([ time , parseFloat(element[9])], true, true);
graph_series[8].addPoint([ time , parseFloat(element[10])], true, true);
graph_series[9].addPoint([ time , parseFloat(element[11])], true, true);
graph_series[10].addPoint([ time , parseFloat(element[12])], true, true);
graph_series[11].addPoint([ time , parseFloat(element[13])], true, true);
graph_series[12].addPoint([ time , parseFloat(element[14])], true, true);
graph_series[13].addPoint([ time , parseFloat(element[15])], true, true);
graph_series[14].addPoint([ time , parseFloat(element[16])], true, true);
graph_series[15].addPoint([ time , parseFloat(element[17])], true, true);
graph_series[16].addPoint([ time , parseFloat(element[18])], true, true);
gauge.set(element[2]); // set actual value
document.getElementById('valfoo').innerHTML = element[2];
gauge1.set(element[3]); // set actual value
document.getElementById('valfoo1').innerHTML = element[3];
gauge2.set(element[4]); // set actual value
document.getElementById('valfoo3').innerHTML = element[4];
gauge3.set(element[5]); // set actual value
document.getElementById('valfoo4').innerHTML = element[5];
gauge4.set(element[6]); // set actual value
document.getElementById('valfoo5').innerHTML = element[6];
gauge5.set(element[7]); // set actual value
document.getElementById('valfoo6').innerHTML = element[7];
gauge6.set(element[8]); // set actual value
document.getElementById('valfoo7').innerHTML = element[8];
gauge7.set(element[9]); // set actual value
document.getElementById('valfoo8').innerHTML = element[9];
gauge8.set(element[10]); // set actual value
document.getElementById('valfoo9').innerHTML = element[10];
gauge9.set(element[11]); // set actual value
document.getElementById('valfoo10').innerHTML = element[11];
gauge10.set(element[12]); // set actual value
document.getElementById('valfoo11').innerHTML = element[12];
gauge11.set(element[13]); // set actual value
document.getElementById('valfoo12').innerHTML = element[13];
gauge12.set(element[14]); // set actual value
document.getElementById('valfoo13').innerHTML = element[14];
gauge13.set(element[15]); // set actual value
document.getElementById('valfoo14').innerHTML = element[15];
gauge14.set(element[16]); // set actual value
document.getElementById('valfoo15').innerHTML = element[16];
gauge15.set(element[17]); // set actual value
document.getElementById('valfoo16').innerHTML = element[17];
gauge16.set(element[18]); // set actual value
document.getElementById('valfoo17').innerHTML = element[18];

});

}
window.localStorage.setItem('limit',limit)
}
},
error: function (result, event) {},
});
}, 1000);
}
function get_data_start()
{
  console.log('Start');
  $.ajax({
  url: "http://127.0.0.1:5000/fetch_data?start=0&stop=10",
  type: "GET",
  processData: false,
  contentType: false,
  success: function (result, event) {
  if (result["error"] == "0") {
  preprocess_data(result)
  }
  },
  error: function (result, event) {},
  });
}
//INITIAL DATA DISPLAY ON GRAPH
function preprocess_data(result) {
  data = result['data'];
  data1 = [],data2 = [],data3 = [],data4 = [],data5 = [],data6 = [],data7 = [],data8 = [],data9 = [],data10 = [],data11 = [],data12 = [],data13 = [],data14 = [],data15 = [],data16 = [],data17 = [],data18 = [];
data.forEach(element => {
  time = ((moment(element[0]+' '+element[1],"DD-MM-YYYY HH:mm")).toDate()).getTime();
  data1.push({x: time,y: parseFloat(element[2])})
  data2.push({x: time,y: parseFloat(element[3])})
  data3.push({x: time,y: parseFloat(element[4])})
  data4.push({x: time,y: parseFloat(element[5])})
  data5.push({x: time,y: parseFloat(element[6])})
  data6.push({x: time,y: parseFloat(element[7])})
  data7.push({x: time,y: parseFloat(element[8])})
  data8.push({x: time,y: parseFloat(element[9])})
  data9.push({x: time,y: parseFloat(element[10])})
  data10.push({x: time,y: parseFloat(element[11])})
  data11.push({x: time,y: parseFloat(element[12])})
  data12.push({x: time,y: parseFloat(element[13])})
  data13.push({x: time,y: parseFloat(element[14])})
  data14.push({x: time,y: parseFloat(element[15])})
  data15.push({x: time,y: parseFloat(element[16])})
  data17.push({x: time,y: parseFloat(element[17])})
  data18.push({x: time,y: parseFloat(element[18])})
});
//PLOTTING INITIAL GRAPH
graph_option1.series[0].data = data1;
graph_option2.series[0].data = data2;
graph_option3.series[0].data = data3;
graph_option4.series[0].data = data4;
graph_option5.series[0].data = data5;
graph_option6.series[0].data = data6;
graph_option7.series[0].data = data7;
graph_option8.series[0].data = data8;
graph_option9.series[0].data = data9;
graph_option10.series[0].data = data10;
graph_option11.series[0].data = data11;
graph_option12.series[0].data = data12;
graph_option13.series[0].data = data13;
graph_option14.series[0].data = data14;
graph_option15.series[0].data = data15;
graph_option17.series[0].data = data17;
graph_option18.series[0].data = data18;
//*******************************************
//*******************************************
//DISPLAY GRAPH IN HTML CONTAINER'S
//*******************************************
//*******************************************
Highcharts.chart('Container1', graph_option1);
Highcharts.chart('Container2', graph_option2);
Highcharts.chart('Container3', graph_option3);
Highcharts.chart('Container4', graph_option4);
Highcharts.chart('Container5', graph_option5);
Highcharts.chart('Container6', graph_option6);
Highcharts.chart('Container7', graph_option7);
Highcharts.chart('Container8', graph_option8);
Highcharts.chart('Container9', graph_option9);
Highcharts.chart('Container10', graph_option10);
Highcharts.chart('Container11', graph_option11);
Highcharts.chart('Container12', graph_option12);
Highcharts.chart('Container13', graph_option13);
Highcharts.chart('Container14', graph_option14);
Highcharts.chart('Container15', graph_option15);
Highcharts.chart('Container17', graph_option17);
Highcharts.chart('Container18', graph_option18);
window.localStorage.setItem('limit',10);
// activate data refresh
set_data_refresh();
}
$(document).ready(function () {
Highcharts.setOptions({
global: {
useUTC: false
}
});
get_data_start();
});
});
