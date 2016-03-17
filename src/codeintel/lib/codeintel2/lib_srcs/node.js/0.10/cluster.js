/**
 * A single instance of Node runs in a single thread. To take advantage of
 * multi-core systems the user will sometimes want to launch a cluster of
 * Node processes to handle the load.
 * @base {events.EventEmitter}
 */
var cluster = {};

/**
 * setupMaster is used to change the default &#39;fork&#39; behavior. Once
 * called, the settings will be present in cluster.settings.
 * @param settings {Object}
 */
cluster.setupMaster = function(settings) {}

/**
 * Spawn a new worker process.
 * @param env {Object}
 */
cluster.fork = function(env) {}

/**
 * Calls .disconnect() on each worker in cluster.workers.
 * @param callback {Function}
 */
cluster.disconnect = function(callback) {}

/**
 * A Worker object contains all public information and method about a
 * worker.
 * @constructor
 */
cluster.Worker = function() {}
cluster.Worker.prototype = new events.EventEmitter();

/**
 * This function is equal to the send methods provided by
 * child_process.fork(). In the master you should use this function to send
 * a message to a specific worker.
 * @param message {Object}
 * @param sendHandle {Handle}
 */
cluster.Worker.prototype.send = function(message, sendHandle) {}

/**
 * This function will kill the worker. In the master, it does this by
 * disconnecting the worker.process, and once disconnected, killing with
 * signal. In the worker, it does it by disconnecting the channel, and then
 * exiting with code 0.
 * @param signal {String}
 */
cluster.Worker.prototype.kill = function(signal) {}

/**
 * In a worker, this function will close all servers, wait for the
 * &#39;close&#39; event on those servers, and then disconnect the IPC
 * channel.
 */
cluster.Worker.prototype.disconnect = function() {}

/**
 * Each new worker is given its own unique id, this id is stored in the id.
 */
cluster.Worker.prototype.id = 0;

/**
 * All workers are created using child_process.fork(), the returned object
 * from this function is stored as .process. In a worker, the global
 * process is stored.
 */
cluster.Worker.prototype.process = 0;

/**
 * Set by calling .kill() or .disconnect(), until then it is undefined.
 */
cluster.Worker.prototype.suicide = 0;

/** @__local__ */ cluster.Worker.__events__ = {};

/**
 * This event is the same as the one provided by child_process.fork(). In a
 * worker you can also use process.on(&#39;message&#39;). As an example,
 * here is a cluster that keeps count of the number of requests in the
 * master process using the message system:
 */
cluster.Worker.__events__.message = function() {};

/**
 * Similar to the cluster.on(&#39;online&#39;) event, but specific to this
 * worker. It is not emitted in the worker.
 */
cluster.Worker.__events__.online = function() {};

/**
 * Similar to the cluster.on(&#39;listening&#39;) event, but specific to
 * this worker. It is not emitted in the worker.
 */
cluster.Worker.__events__.listening = function() {};

/**
 * Similar to the cluster.on(&#39;disconnect&#39;) event, but specfic to
 * this worker.
 */
cluster.Worker.__events__.disconnect = function() {};

/**
 * Similar to the cluster.on(&#39;exit&#39;) event, but specific to this
 * worker.
 */
cluster.Worker.__events__.exit = function() {};

/**
 * This event is the same as the one provided by child_process.fork(). In a
 * worker you can also use process.on(&#39;error&#39;).
 */
cluster.Worker.__events__.error = function() {};

/**
 * After calling .setupMaster() (or .fork()) this settings object will
 * contain the settings, including the default values.
 */
cluster.settings = 0;

/**
 * True if the process is a master. This is determined by the
 * process.env.NODE_UNIQUE_ID. If process.env.NODE_UNIQUE_ID is undefined,
 * then isMaster is true.
 */
cluster.isMaster = 0;

/**
 * True if the process is not a master (it is the negation of
 * cluster.isMaster).
 */
cluster.isWorker = 0;

/**
 * A reference to the current worker object. Not available in the master
 * process.
 */
cluster.worker = 0;

/**
 * A hash that stores the active worker objects, keyed by id field. Makes
 * it easy to loop through all the workers. It is only available in the
 * master process.
 */
cluster.workers = 0;

var events = require('events');

exports = cluster;

