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

class Instructors extends Person{
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

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this. favSubjects = attrs.favSubjects;
    }
    listsSubjects(){
        console.log(`===== Favorite Subjects =====`);
        this.favSubjects.forEach((item, index, arr) => {
            console.log(this.favSubjects[index]);
        });
    }
    PRAssignmnent(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructors{
    constructor(attrs){
        super(attrs)
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel}`;
    };
    dubugsCode(student, subject){
        return `${student.name} debugs {student.name}'s code on ${subject}`;
    }
}


