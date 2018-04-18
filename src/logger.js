import log4js from 'log4js';
import log4jsConfiguration from './log4js.config';

log4js.configure(log4jsConfiguration);

export default log4js.getLogger('uniarch');
