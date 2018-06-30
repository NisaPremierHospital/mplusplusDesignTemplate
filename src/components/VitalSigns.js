import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const optionsTemp = {
  chart: {
    type: 'area',
    zoomType: 'x',
    panning: true,
    panKey: 'shift',
    scrollablePlotArea: {
      minWidth: 600
    },
    height: (9 / 16 * 70) + '%' // 16:9 ratio
  },
  
  title: {
    text: `<b>PATIENT'S BODY TEMPERATURE</b>`
  },
  
  subtitle: {
    text: 'Click and drag in the plot area to zoom in'
  },
  
  
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      day: '%b %d'    //ex- 01 Jan 2016
    },
    startOnTick: true
  },
  
  yAxis: {
    min: 36,
    max: 38,
    startOnTick: true,
    allowDecimals: false,
    title: {
      text: 'Temperature'
    },
    tickInterval: 2
  },
  
  plotOptions: {
    series: {
      marker: {
        enabled: false
      }
    }
  },
  
  series: [{
    name:"Temperature",
    data: [36, 36.1, 36.7, 36.2,36,36,36,36,36,36],
    pointStart: Date.UTC(2018, 0, 16),
    pointIntervalUnit: 'month'
  }]
};

const optionBlood = {
  chart: {
    height: (9 / 16 * 70) + '%' // 16:9 ratio
  },
  
  title: {
    text: '<b>PATIENTS BLOOD PRESSURE</b>'
  },
  
  subtitle: {
    text: 'Click and drag in the plot area to zoom in'
  },
  
  yAxis: {
    title: {
      text: 'Blood Pressure'
    },
    tickInterval: 200,
    startOnTick: true,
    min: 40,
    max: 200,
  },
  
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      day: '%b %d'    //ex- 01 Jan 2016
    },
    startOnTick: true,
  },
  
  plotOptions: {
    series: {
      marker: false
    }
  },
  
  series: [{
    name: 'Systolic',
    data: [47, 52, 57, 69, 97, 119, 137, 154],
    pointStart: Date.UTC(2018, 0, 16),
    pointIntervalUnit: 'month'
  }, {
    name: 'Diabolic',
    data: [44, 45, 49, 50, 52, 50, 58, 69],
    pointStart: Date.UTC(2018, 0, 16),
    pointIntervalUnit: 'month'
  }],
  
}

class VitalSigns extends Component {
  render() {
    return (
      <section className="uk-grid-small uk-child-width-1-1@s" data-uk-grid>
        <div className="uk-grid-small" data-uk-grid data-uk-height-match>
          <div className="uk-width-3-4@s">
            <div className="uk-card uk-card-default">
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsTemp}
              />
            </div>
          </div>
          <div className="uk-width-1-4@s">
            <div className="uk-flex uk-flex-middle uk-card uk-card-default uk-height-1-1">
              <div className="uk-card-body">
                <div className="uk-flex uk-flex-middle uk-flex-wrap uk-text-center uk-child-width-1-1@s">
                  <p>Last Temperature Reading</p>
                  <p className="uk-text-large">36.3<sup>o</sup>C</p>
                  <p>on 2017/08/17 5:05pm</p>
                  <p><a href="#" className="rem-under">Take New Reading</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-grid-small" data-uk-grid data-uk-height-match>
          <div className="uk-width-3-4@s">
            <div className="uk-card uk-card-default">
              <HighchartsReact
                highcharts={Highcharts}
                options={optionBlood}
              />
            </div>
          </div>
          <div className="uk-width-1-4@s">
            <div className="uk-flex uk-flex-middle uk-card uk-card-default uk-height-1-1">
              <div className="uk-card-body">
                <div className="uk-flex uk-flex-middle uk-flex-wrap uk-text-center uk-child-width-1-1@s">
                  <p>Last Blood Pressure Reading</p>
                  <p className="uk-text-large">36.3<sup>o</sup>C</p>
                  <p>on 2017/08/17 5:05pm</p>
                  <p><a href="#" className="rem-under">Take New Reading</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VitalSigns;
