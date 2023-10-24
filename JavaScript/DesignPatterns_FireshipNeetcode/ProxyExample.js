// Real subject: Represents a sensitive file
class SensitiveFile {
  constructor(filename) {
    this.filename = filename;
  }
  access() {
    console.log(`Accessing sensitive file: ${this.filename}`);
  }
}

// Proxy: Controls access to the sensitive file based on user permissions
class FileProxy {
  constructor(filename, user) {
    this.filename = filename;
    this.user = user;
    this.file = null;
  }

  access() {
    if (this.file === null) {
      if (this.user.hasPermission(this.filename)) {
        this.file = new SensitiveFile(this.filename);
      } else {
        console.log(`Access denied for file: ${this.filename}`);
        return;
      }
    }
    this.file.access();
  }
}

// User class to manage permissions
class User {
  constructor(name) {
    this.name = name;
    this.permissions = new Set();
  }
  grantPermission(filename) {
    this.permissions.add(filename);
  }
  hasPermission(filename) {
    return this.permissions.has(filename);
  }
}

// Example usage
const user1 = new User("User1");
const user2 = new User("User2");

user1.grantPermission("sensitive_data.txt");

const file1 = new FileProxy("sensitive_data.txt", user1);
const file2 = new FileProxy("confidential_info.txt", user2);

file1.access(); // Accessing sensitive file: sensitive_data.txt
file2.access(); // Access denied for file: confidential_info.txt
