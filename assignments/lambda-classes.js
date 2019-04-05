// CODE here for your Lambda Classes
// class GameObject{
//     constructor(attrs){
//         this.createdAt = attrs.createdAt;
//         this.name = attrs.name;
//         this.dimensions = attrs.dimensions;
//     }
//     destroy(){
//         return `${this.name} was removed from the game.`;
//     }
// }



class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;

    }
    speak(){
        `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


