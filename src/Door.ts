interface Locker {
    open(): void;
    close(): void;
}

class KeyLock implements Locker {
    close(): void {
        console.log("close");
    }

    open(): void {
        console.log("open with key")
    }
}

class CardLock implements Locker {
    close(): void {
        console.log("close");
    }

    open(): void {
        console.log("open with card")
    }
}

class RetinaLock implements Locker {
    close(): void {
        console.log("close");
    }

    open(): void {
        console.log("open with retina")
    }
}

class Door {
    private lock: Locker;

    constructor(lock: Locker) {
        this.lock = lock;
    }

    open() {
        this.lock.open();
    }

    close() {
        this.lock.close();
    }
}


let door1 = new Door(new RetinaLock());
door1.open();

let keyLock = new KeyLock();
keyLock.open();