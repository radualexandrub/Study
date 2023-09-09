class Settings {
  static instance;
  mode = "dark";

  // prevent instanciation with "new" keyword
  // by using a private constructor
  constructor() {}

  static getInstance() {
    // check if instance has already been created
    // if not, create a new instance
    // to ensure only one object can be created
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}

// const settings = new Settings();
// will raise "Constructor of class 'Settings'
// is private and only accessible within the class declaration"

const settings = Settings.getInstance();
const settings2 = Settings.getInstance();
console.log(settings); // Settings { mode: 'dark' }
console.log(settings2); // Settings { mode: 'dark' }

settings.mode = "light";
console.log(settings); // Settings { mode: 'light' }
console.log(settings2); // Settings { mode: 'light' }
