import logger from './logger';
import WritableArchive from './core/archive/WritableArchive';
import ReadableArchive from './core/archive/ReadableArchive';
import { transformToBuffer } from './utilities';

logger.info('ENVIRONMENT SETUP SUCCESS!');

export default new class {
    /**
     * create en empty achive
     * @param {object} options
     * @returns {WritableArchive}
     */
    create(options) {
        return new WritableArchive(options);
    }
    /**
     * @param {string|Buffer|TypedArray|ReadableStream} data file path or data buffer
     * @returns {ReadableArchive}
     */
    async read(data) {
        const buffer = await transformToBuffer(data);
        return new ReadableArchive(buffer);
    }
    /**
     * @param {string|Buffer|TypedArra|ReadableStream} data file path or data buffer
     * @return {WritableArchive}
     */
    async open(data) {
        const buffer = await transformToBuffer(data);
        return new WritableArchive(buffer);
    }
}();
