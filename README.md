# Tsamagotchi
## A Typescript digital pet implementation.

`Tsamagotchi` is a digital pet class that you can include for your projects. I started this project to learn how to publish `node packages`.

### Install

Install the `tsamagotchi` package to your project by using

```shell
npm install --save tsamagotchi
```

### Usage

You can include the `Tsamagotchi` in your `node` project by `requiring` the package like so:

```javascript
const { Tsamagotchi } = require('tsamagotchi');

var myTsamagotchi = new Tsamagotchi("Cutie π");
```

### How to play nice with your Tsamagotchi

A `Tsamagotchi` does not abide the laws of time, thus you can mature it in any way you seem fit. The only (human understandable) time unit is its `birthDate`, which is a javascript `Date` object created on the time of creation of the `Tsamagotchi` instance.

There are many ways to interact with your `Tsamagotchi`:

- Create a Tsamagotchi
- Ask it about its information (instance variables)
- Feed it
- Let it mature
- Let it digest
- Heal it
- Love it
- Decrease its happiness
- Decrease its health
- Kill it :<

### Creating a Tsamagotchi

A `Tsamagotchi` can be created without supplying parameters to its constructor, but you can supply 2 optional ones:

```javascript
// Create a Tsamagotchi with default values: name = "Your new Tsamagotchi", foodLimit = 100
var defaultTsamagotchi = new Tsamagotchi();

// Create a Tsamagotchi with default food limit: foodLimit = 100
var namedTsamagotchi = new Tsamagotchi("Cutie π");

// Create a Tsamagotchi with custom name and food limit
var customTsamagotchi = new Tsamagotchi("Cutie π", 100000);
```

### Ask it about its information

The `Tsamagotchi` class has a few instance variables but these are the ones you can ask it about:

1. Its name

```javascript
var name = myTsamagotchi.name; // e.g. Cutie π
```

> This instance variable can be updated.   

2. Its age

The age of the `Tsamagotchi` is the amount of time it has been matured.

```javascript
var age = myTsamagotchi.age; // e.g. 25
```

> This instace variable can only be retrieved, not updated.

3. Its Birtdate

```javascript
var birthDate = myTsamagotchi.birthDate // Will return a javascript Date object
```

> This instace variable can only be retrieved, not updated.

4. Its health 

If the `Tsamagotchis` health reaches zero, it will die. The health has no upper limit.

```javascript
var health = myTsamagotchi.health // e.g. 75
```

> This instace variable can only be retrieved, not updated.

5. Its satiety

The satiety of the `Tsamagotchi` represents how satiated it is. If its satiety reaches zero, it will lose health. You can increase the satiety level by feeding your `Tsamagotchi`.

```javascript
var satiety = myTsamagotchi.satiety; // e.g. 40
```

> This instace variable can only be retrieved, not updated.

6. Its happiness

If your `Tsamagotchis` happiness reaches zero, it will lose health.

```javascript
var happiness = myTsamagotchi.happiness; // hopefully a high number
```

> This instace variable can only be retrieved, not updated.

7. Whether its alive or not

Your `Tsamagotchi` will contain a boolean value that represents whether it is alive or not.

```javascript
var areYouAlive = myTsamagotchi.isAlive; // Hopefully true
```

> This instace variable can only be retrieved, not updated.

8. Its food limit

A `Tsamagotchi` has a limit on how much it can be fed. If you feed it above its food level, it will lose health.

```javascript
var foodLimit = myTsamagotchi.foodLimit; e.g. 100
```

> This instace variable can only be retrieved, not updated.

### Feed it

Feed your `Tsamagotchi` a certain amount, which it can digest when it matures:

```javascript
// Feed it the default value of 1
myTsamagotchi.feed();

// Feed it a whole lot at once
myTsamagotchi.feed(20);
```

If you feed your `Tsamagotchi`, its satiety goes up by the amount you fed it. If the satiety level reaches more than the `foodLimit` value, your `Tsamagotchi` will lose health.

### Let it mature

You created your `Tsamagotchi` to raise it. Therefore, you need a way to let it mature. When it matures, its happiness and satiety decreases but its age goes up. Try to age it as much as you can for bragging rights.

```javascript
// Let it mature the default amount of 1
myTsamagotchi.mature();

// Mature it a whole lot at once
myTsamagotchi.mature(33);
```

### Let it digest

Your `Tsamagotchi` will digest the food you gave it all the way untill its satiety level reaches zero. If it does, it will lose health.

```javascript
// Let it digest the default amount of 1
myTsamagotchi.digest();

// Let it digest a whole lot at once
myTsamagotchi.digest(75);
```

### Heal it

Increase the health level by healing your `Tsamagotchi`, because if its health reaches zero, it will die.

```javascript
// Heal it the default amount of 1
myTsamagotchi.heal();

// Heal it a whole lot at once
myTsamagotchi.heal(666);
```

### Love it

You want your pet to be happy, so you can increase its happiness level by loving it. If its happiness level reaches zero, it will lose health.

```javascript
// Love it the default amount of 1
myTsamagotchi.love();

// Heal it a whole lot at once
myTsamagotchi.love(69);
```

### Decrease its happiness

You can also decrease its happiness. I don't know why you would want that but I exposed the function anyway. If its happiness reaches zero, it will lose health.

```javascript
// Make it sad for the default amount of 1
myTsamagotchi.decreaseHappiness();

// Decrease its happiness a whole lot at once
myTsamagotchi.love(9001);
```

### Decrease its health

You can also decrease its health. Again, this function should be private but I included it anyway. If its health reaches zero, it will die.

```javascript
// Decrease its health by the default amount of 1
myTsamagotchi.decreaseHealth();

// Decrease its health a whole lot at once
myTsamagotchi.decreaseHealth(400);
```

### Kill it :<

As with all `objects`, it will eventually have to be destroyed. You monster!

```javascript
// Goodnight, sweet prince
myTsamagotchi.die();
```