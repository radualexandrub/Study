package PrototypeGameExample;
import java.util.HashMap;
import java.util.Map;

// Prototype interface
interface CharacterPrototype {
    CharacterPrototype clone();

    void display();
}

// Concrete prototype 1
class Warrior implements CharacterPrototype {
    private String name;
    private int health;
    private int damage;

    public Warrior(String name, int health, int damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    @Override
    public CharacterPrototype clone() {
        return new Warrior(name, health, damage);
    }

    public void display() {
        System.out.println("Warrior - Name: " + name + ", Health: " + health + ", Damage: " + damage);
    }
}

// Concrete prototype 2
class Mage implements CharacterPrototype {
    private String name;
    private int mana;
    private int spellPower;

    public Mage(String name, int mana, int spellPower) {
        this.name = name;
        this.mana = mana;
        this.spellPower = spellPower;
    }

    @Override
    public CharacterPrototype clone() {
        return new Mage(name, mana, spellPower);
    }

    public void display() {
        System.out.println("Mage - Name: " + name + ", Mana: " + mana + ", Spell Power: " + spellPower);
    }
}

// Prototype manager
class CharacterManager {
    private Map<String, CharacterPrototype> prototypes = new HashMap<>();

    public void addPrototype(String key, CharacterPrototype prototype) {
        prototypes.put(key, prototype);
    }

    public CharacterPrototype getPrototype(String key) {
        return prototypes.get(key).clone();
    }
}

public class Game {
    public static void main(String[] args) {
        // Create prototype manager
        CharacterManager manager = new CharacterManager();

        // Create and register character prototypes
        Warrior warriorPrototype = new Warrior("Aragorn", 100, 20);
        Mage magePrototype = new Mage("Gandalf", 80, 30);

        manager.addPrototype("Warrior", warriorPrototype);
        manager.addPrototype("Mage", magePrototype);

        // Create new characters based on prototypes
        CharacterPrototype newWarrior = manager.getPrototype("Warrior");
        CharacterPrototype newMage = manager.getPrototype("Mage");

        newWarrior.display();
        newMage.display();
    }
}
