/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(args){
//     this.createdAt = args.createdAt;
//     this.name = args.name;
//     this.dimensions = args.dimensions;
//   }
  
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`;
//   }

class GameObject{
    constructor(attrs){
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage.`;
//   }
  
//   function CharacterStats(args){
//     GameObject.call(this, args);
//     this.healthPoints = args.healthPoints;
//   }

class CharacterStats extends GameObject{
    constructor(attrs){
        super(attrs);
        this.healthPoints = attrs.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}
  
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
//   function Humanoid(args){
//     CharacterStats.call(this, args);
//     this.team = args.team;
//     this.weapons = args.weapons;
//     this.language = args.language;
    
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function(){
//     return `${this.name} offers a greeting in ${this.language}`;
//   }
  
  class Humanoid extends CharacterStats{
      constructor(attrs){
        super(attrs);
    
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
      }

      greet(){
          return   `${this.name} offers a greeting in ${this.language}`;
      }
  }
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage);

    console.log(mage.createdAt); // Today's date
    
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    // my hero and villan will have a powerBuilder function that roles a random number
    // this random number will determine the characters power level, if power level above threshhold
    // use character attack on enemy;
    // Start Villian
  //   function Villian(args){
  //     Humanoid.call(this, args);
      
  //   }
  
  //   Villian.prototype = Object.create(Humanoid.prototype);
  
  //   Villian.prototype.eyeBeam = function(pwr, target){
  //     console.log(`${this.name} launched Eye Beam Attack against ${target}`);
  //     target.healthPoints - pwr;
  //     console.log(`${target} took ${pwr} damage!`)
  //     if(target.healthPoints <= 0){
  //       target.destroy();
  //     }
  //   }
  //   Villian.prototype.pwrBuilder = function(target){
  //     var power = Math.floor((Math.random() * 10) + 1);
  //     if(power > 4){
  //       this.eyeBeam(target);
  //     }else{
  //       console.log(`${this.name} built ${power} power`);
  //       console.log(`${this.name} misses with their attack`);
  //     }
  //   }
  
  //   // Villian.prototype.takeDamage = function(dmg, target){
  //   //   return `${this.name} took ${dmg} damage .`;
  //   //   if(target.healthPoints <= 0){
  //   //     target.destroy();
  //   //   }
  //   // }
    
  // // Start Hero
  //   function Hero(args){
  //     Humanoid.call(this, args);
  //   }
  
  //   Hero.prototype = Object.create(Humanoid.prototype);
  
  //   Hero.prototype.nutPunch = function(pwr, target){
  //     console.log(target);
  //     console.log(`${this.name} launched Nut Punch against ${target}`);
  //     console.log(this.healthPoints);
  //     target.healthPoints - pwr;
  //     console.log(`${target} took ${pwr} damage!`)
  //     if(target.healthPoints <= 0){
  //       target.destroy();
  //     }
  //   }
  //   Hero.prototype.pwrBuilder = function(target){
  //     var power = Math.floor((Math.random() * 10) + 1);
  //     if(power > 4){
  //       this.nutPunch(target);
  //     }else{
  //       console.log(`${this.name} built ${power} power`);
  //       console.log(`${this.name} misses with their attack`);
  //     }
  //   }
  //   // Hero.prototype.takeDamage = function(dmg, target){
  //   //   return `${this.name} took ${dmg} damage .`;
  //   //   if(target.healthPoints <= 0){
  //   //     target.destroy();
  //   //   }
  //   // }
  
  //   const archEnemy = new Villian({
  //     createdAt: new Date(),
  //     dimensions: {
  //       length: 2,
  //       width: 1,
  //       height: 1,
  //     },
  //     healthPoints: 100,
  //     name: 'MrCheeks',
  //     team: 'Guild Of Aholes',
  //     weapons: [
  //       'Shades of Thrownin Shade',
  //     ],
  //     language: 'Javascript',
  //   });
  //   console.log(archEnemy);
  
  //   const heroGuy = new Hero({
  //     createdAt: new Date(),
  //     dimensions: {
  //       length: 2,
  //       width: 1,
  //       height: 1,
  //     },
  //     healthPoints: 100,
  //     name: 'Magnuson',
  //     team: 'Team Lambda',
  //     weapons: [
  //       'Brass knuckles of nut destruction',
  //     ],
  //     language: 'Bad',
  //   });
  //   console.log(heroGuy);
  
  
  //   var rounds = 0;
  //   // 10 rounds, each round is a chance to attack
  // function battle(){
  //   var attackTime = Math.floor((Math.random() * 10) + 1);
    
  //   //console.log(attackTime);
  //   function fight(){
  //     if(attackTime > 5){
  //       archEnemy.pwrBuilder(heroGuy);
  //     }else if(attackTime < 5){
  //       heroGuy.pwrBuilder(archEnemy);
  //     }else if(attackTime == 5){
  //       console.log("Simultanious attacks!");
  //       heroGuy.pwrBuilder(archEnemy);
  //       archEnemy.pwrBuilder(heroGuy);
  //     }
  //     rounds++;
  //   }
  //   fight();
  // }
  
  // // Let them battle
  // if(rounds < 10){
  //   var battleTimer = setInterval(battle, 4000);
  // }
  