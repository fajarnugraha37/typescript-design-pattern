class Singleton {
    private static instance: Singleton;
    private constructor() {
        console.log(Singleton.name, ": ", "constructor");
        
    }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
    public someBusinessLogic() {
        // ...
    }
}

export function singletonExample() {
    const $singleton = Singleton.getInstance();
    Singleton.getInstance();
    Singleton.getInstance();
    Singleton.getInstance();
    Singleton.getInstance();
}