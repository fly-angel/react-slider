'use strict';

require('rc-slider/assets/index.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Slider = require('rc-slider');

var style = {width: 400, margin: 50};
var marks = ['A','B','C','D', 'E', 'F'];
var log = console.log.bind(console);

ReactDOM.render(
  <div>
    <div style={style}>
      <p>Slider with marks, `included=true`</p>
      <Slider marks={marks} defaultIndex={1} />
    </div>
    <div style={style}>
      <p>Slider with marks and steps, `included=true`</p>
      <Slider marks={marks} step={10} defaultIndex={1} />
    </div>

    <div style={style}>
      <p>Slider with marks, `included=false`</p>
      <Slider marks={marks} included={false} defaultIndex={1} />
    </div>
    <div style={style}>
      <p>Slider with marks and steps, `included=false`</p>
      <Slider marks={marks} step={10} included={false} defaultIndex={1} />
    </div>

    <div style={style}>
      <p>Range with marks</p>
      <Slider range marks={marks} onChange={log} defaultIndex={[1,2]} />
    </div>
    <div style={style}>
      <p>Range with marks and steps</p>
      <Slider range marks={marks} step={10} onChange={log} defaultIndex={[1,2]} />
    </div>
  </div>
  , document.getElementById('__react-content'));
