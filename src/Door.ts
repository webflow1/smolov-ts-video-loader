enum Color {
    Red = 0,
    Blue = 1,
    Yellow = 2,
}

Object.keys(Color);

enum LockType {
    Key = "key",
    Card = "card",
    Retina = "retina"
}

interface Locker {
    type: LockType;

    open(): void;
    close(): void;
}

class KeyLock implements Locker {
    type: LockType = LockType.Key;

    close(): void {
        console.log("close");
    }

    open(): void {
        console.log(`open with ${this.type}`)
    }
}

class CardLock implements Locker {
    type: LockType = LockType.Card;

    close(): void {
        console.log("close");
    }

    open(): void {
        console.log(`open with ${this.type}`);
    }
}

class RetinaLock implements Locker {
    type: LockType = LockType.Retina;

    close(): void {
        console.log("close");
    }

    open(): void {
        console.log(`open with ${this.type}`);
    }
}

class Door {
    private lock: Locker;

    constructor(locktype: LockType) {
        this.lock = LockFactory.create(locktype);
    }

    open() {
        this.lock.open();
    }

    close() {
        this.lock.close();
    }
}

//Factory pattern
class LockFactory {
    public static create(locktype: LockType): Locker {
        switch (locktype) {
            case LockType.Key:
                return new KeyLock();
            case LockType.Retina:
                return new RetinaLock();
            case LockType.Card:
                return new CardLock();
            default:
                throw new Error("underfined type");
        }
    }
}

let door1 = new Door (LockType.Retina);
door1.open();

let keyLock = new KeyLock();
keyLock.open();