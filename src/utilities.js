import fs from 'fs-extra';
import { Readable, Writable } from 'stream';
import pify from 'pify';

const isTypedArray = a => !!(!!a && a.buffer instanceof ArrayBuffer && a.BYTES_PER_ELEMENT);

const readBufferFromstream = stream => {
    const writable = new Writable();
    const chunks = [];

    /* eslint-disable no-underscore-dangle */
    writable._write = chunk => chunks.push(chunk);

    return new Promise((resolve, reject) => {
        writable.on('end', () => resolve(Buffer.concat(chunks)));
        writable.on('error', reject);
        stream.pipe(writable);
    });
};

/**
 *
 * @param {string|Buffer|TypedArray|ReadableStream} data
 * @return {Promise<Buffer>}
 */
const transformToBuffer = async data => {
    if (!data) {
        throw new Error('Illegal argument: data is null');
    }

    if (typeof data === 'string') {
        return pify(fs.readFile)(data);
    }
    if (data instanceof Buffer) {
        return data;
    }
    if (isTypedArray(data)) {
        return data.buffer;
    }
    if (data instanceof Readable) {
        return readBufferFromstream(data);
    }
    throw new TypeError('Unsupported data type');
};

export default {
    isTypedArray,
    readBufferFromstream,
    transformToBuffer
};
