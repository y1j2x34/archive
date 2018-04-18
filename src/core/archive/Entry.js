import { PassThrough } from 'stream';
import path from 'path';

export default class Entry {
    constructor(buffer, epath, options) {
        this.buffer = buffer;
        this.path = epath;
        this.name = path.basename(epath);
        this.init(options);
    }
    /**
     * @protected
     * @param {object} options
     * @param {string} options.mode
     * @param {string|Date} options.modifyTime
     */
    init(options = {}) {
        this.mode = options.mode;
        this.modifyTime = options.modifyTime;
    }
    stream() {
        const bufferStream = new PassThrough();
        bufferStream.end(this.buffer);
        return bufferStream;
    }
}
