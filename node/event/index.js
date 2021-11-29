const { EventEmitter } = require('events');

class Human extends EventEmitter {
    constructor(name) {
        super();

        this.name = name;
        this.anger = 0;
    }

    async decreaseAnger() {
        await new Promise(res => setTimeout(res, (Math.random() * 1000) + 200));

        this.anger--;

        if (this.anger > 0) this.decreaseAnger();
        else console.log(`${this.name}'s anger vanished somehow`);
    }
}

const shisui = new Human("Shisui");

shisui.on('anger', async (reason, intensity) => {
    console.log(`Bruh who get's angry for a reason like "${reason}"\nCringee!!xDDD\n\n`);

    await new Promise(res => setTimeout(res, Math.random() * (intensity * 1000)));

    shisui.decreaseAnger();
})

shisui.emit('anger', "Because he can't code", 69 / 6.9);