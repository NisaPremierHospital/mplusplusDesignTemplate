import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Icon } from 'semantic-ui-react'
// import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'area',
    zoomType: 'x',
    panning: true,
    panKey: 'shift',
    scrollablePlotArea: {
      minWidth: 600
    }
  },
  
  title: {
    text: `PATIENT'S BODY TEMPERATURE`
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
      text: 'Temperature(<sup>o</sup>C)'
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
    data: [36, 36.1, 36.7, 36.2,36,36,36,36,36,36],
    pointStart: Date.UTC(2018, 0, 16),
    pointIntervalUnit: 'month'
  }]
}

class VitalSigns extends Component {
  render() {
    return (
      <section className="uk-grid-small" data-uk-grid data-uk-height-match>
        <div className="uk-width-3-4@s">
            <div className="uk-card uk-card-default">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
        </div>
        <div className="uk-width-1-4@s">
          <div className="uk-card uk-card-default uk-height-1-1">
            <div className="uk-card-body">
              Last Body Temperature
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VitalSigns;
