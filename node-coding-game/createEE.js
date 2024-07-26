const EventEmitter = require('events');

function createEE(opts) {
    const emitter = new EventEmitter();

    // Emit the first event immediately
    emitData();

    // Set an interval to emit data periodically
    const intervalId = setInterval(emitData, opts.interval);

    // Listen to the AbortSignal to stop emitting data
    if (opts.signal) {
        opts.signal.addEventListener('abort', () => {
            clearInterval(intervalId);
            emitter.emit('close');
        });
    }

    // Function to emit data
    function emitData() {
        try {
            const data = opts.fn();
            emitter.emit('data', data);
        } catch (error) {
            emitter.emit('error', error);
        }
    }

    return emitter;
}

// Example usage:

const { AbortController } = require('abort-controller');

const controller = new AbortController();
const signal = controller.signal;

const opts = {
    fn: () => Math.random(),
    interval: 1000,
    signal: signal
};

const ee = createEE(opts);

ee.on('data', (data) => {
    console.log('Data:', data);
});

ee.on('error', (error) => {
    console.error('Error:', error);
});

ee.on('close', () => {
    console.log('Closed');
});

// Simulate aborting after 5 seconds
setTimeout(() => {
    controller.abort();
}, 5000);
