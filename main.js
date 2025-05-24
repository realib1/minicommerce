class Person{
    constructor(name, age, gender, isStudent) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isStudent = isStudent;
    }
    
    studentCheck() {
        // this.isStudent ? 'Yes' : 'No';
        console.log(`Name: ${this.name}\nGender: ${this.gender}\nStudent: ${this.isStudent ? 'Yes' : 'No'}`)

    }
}



let student = new Person("John Doe", 18, 'Male', false)


student.studentCheck()


fruitItems = []