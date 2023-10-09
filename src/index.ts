import interaction from './user-interfaces/interaction';

import './user-interfaces/css/theme.css';
import './user-interfaces/css/index.css';



const ErrorStackParser = require('error-stack-parser');
const StackTrace = require('stacktrace-js');

window.onerror = async function (message, source, lineno, colno, error) {
  StackTrace.fromError(error).then(function (stackTrace) {
    var parsedStackTrace = stackTrace.map(function (frame) {
      return {
        functionName: frame.functionName,
        fileName: frame.fileName,
        lineNumber: frame.lineNumber,
        columnNumber: frame.columnNumber,
      };
    });
    console.log('%c ----------', "color: #888;")
    parsedStackTrace.forEach(e => {
      console.log(`%c func: ${e.functionName}\npath: ${e.fileName}\nlocation: L${e.lineNumber} C${e.columnNumber}`, "color: rgba(255,0,0,1); background-color: rgba(255,0,0,0.09);");
    });
  });
};

window.clock = function () {
  //initialize
};

export default window.clock;
