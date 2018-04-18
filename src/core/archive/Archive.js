/**
 * @interface ZipEntryOptions
 * @property {string|Date} modifyTime
 * @property {string} mode
 */

/**
 * @abstract
 * @class Archive
 */
export default class Archive {
    constructor(options) {
        this.options = options;
    }
    /**
     *
     * @param {string|Buffer|ReadableStream|File} data
     * @param {string} [path]
     * @param {ZipEntryOptions} options
     * @returns {Archive}
     */
    add(data, path, options) {
        if (typeof path === 'object') {
            options = path;
        }
        return this;
    }
    /**
     *
     * @param {(path:string) => string} mapper
     * @returns {Archive}
     */
    map(callbackfn = path => path ) {
        throw new Error();
        return this;
    }
    /**
     *
     * @param {(path: string) => boolean} filterfn
     * @returns {Archive}
     */
    filter(filterfn = path => true ) {
        return this;
    }
    /**
     * @param {string} destination destination file path
     * @returns {Promise<void>}
     */
    writeTo(destination) {
        return new Promise(function() {

        });
    }
    /**
     *
     * @param {string} destination
     * @returns {void}
     */
    writeAsyncTo(destination) {

    }
    /**
     *
     * @param {string} path
     * @returns {ArchiveEntry}
     */
    entry(path) {

    }
    /**
     * @returns {PassThrough}
     */
    stream() {

    }
    /**
     *
     * @param {Archive} other
     * @returns {Archive}
     */
    union(other){

    }
    close(){}

}
