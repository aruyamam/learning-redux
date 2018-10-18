import React from 'react';
import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Inspector from 'redux-devtools-inspector';
import SlideMonitor from 'redux-slider-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';

const DevTools = createDevTools(
   <DockMonitor
      toggleVisibilityKey="ctrl-h"
      changePositionKey="ctrl-q"
      defaultIsVisible={true}
      defaultPosition="bottom"
   >
      <LogMonitor theme="tomorrow" />
      {/* <Inspector /> */}
      {/* <SlideMonitor keyboardEnabled /> */}
      {/* <ChartMonitor /> */}
   </DockMonitor>,
);

export default DevTools;
