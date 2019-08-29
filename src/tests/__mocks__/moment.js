// To ensure that a manual mock and its real implementation stay in sync, it might be useful to require the real module using 
// jest.requireActual(moduleName) in your manual mock and amending it with mock functions before exporting it.
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
   return moment(timestamp);
}; 