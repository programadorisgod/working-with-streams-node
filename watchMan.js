import fs from 'fs/promises'

const controller = new AbortController()
const { signal } = controller;

(async () => {

    try {
        const watcher = fs.watch('data.txt', { signal })

        for await (const event of watcher) {
            console.log(`File ${event.filename} tiene un evento de tipo ${event.eventType}`);
        }
    } catch (error) {

        if (error.name === 'AbortError') return

        console.log('Se produjo un error', error);

    }

})();



(async () => {

    try {
        const watcher = fs.watch('data2.txt', { signal })

        for await (const event of watcher) {
            console.log(`File ${event.filename} tiene un evento de tipo ${event.eventType}`);
        }
    } catch (error) {

        if (error.name === 'AbortError') return

        console.log('Se produjo un error', error);

    }

})();