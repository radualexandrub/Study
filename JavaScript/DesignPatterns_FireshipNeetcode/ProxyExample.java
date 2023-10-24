import java.util.Objects;

// Subject: Represents the bank account
class BankAccount {
    private int accountNumber;
    private double balance;

    public BankAccount(int accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited $" + amount + " into account " + accountNumber);
    }
    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn $" + amount + " from account " + accountNumber);
        } else {
            System.out.println("Insufficient balance in account " + accountNumber);
        }
    }
    public double getBalance() {
        return balance;
    }
}

// Proxy: Controls access to the bank account
class Bank {
    private BankAccount account;
    private String username;
    private String password;

    public Bank(String username, String password, BankAccount account) {
        this.username = username;
        this.password = password;
        this.account = account;
    }
    public void authenticate(String username, String password) {
        if (Objects.equals(this.username, username) && Objects.equals(this.password, password)) {
            System.out.println("Authentication successful.");
        } else {
            System.out.println("Authentication failed.");
        }
    }
    public void deposit(double amount) {
        if (account != null) {
            account.deposit(amount);
        } else {
            System.out.println("Please authenticate to access your account.");
        }
    }
    public void withdraw(double amount) {
        if (account != null) {
            account.withdraw(amount);
        } else {
            System.out.println("Please authenticate to access your account.");
        }
    }
    public double getBalance() {
        if (account != null) {
            return account.getBalance();
        } else {
            System.out.println("Please authenticate to access your account.");
            return 0.0;
        }
    }
}

public class ProxyExample {
    public static void main(String[] args) {
        BankAccount bankAccount = new BankAccount(12345, 1000);
        Bank bank = new Bank("user123", "password123", bankAccount);

        // Access without authentication (Proxy controls access)
        bank.deposit(500.0);
        bank.withdraw(200.0);
        System.out.println("Balance: $" + bank.getBalance());
        /* Output:
         * Please authenticate to access your account.
         * Please authenticate to access your account.
         * Please authenticate to access your account.
         * Balance: $0.0
         */

        // Authenticate and access the bank account
        bank.authenticate("user123", "password123");
        bank.deposit(500.0);
        bank.withdraw(200.0);
        System.out.println("Balance: $" + bank.getBalance());
        /* Output:
         * Authentication successful.
         * Deposited $500.0 into account 12345
         * Withdrawn $200.0 from account 12345
         * Balance: $1300.0
        */
    }
}