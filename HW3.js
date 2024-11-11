//task 1

const scores = {
  programming: 88,
  design: 74,
  jurisprudence: false,
  relational_DB: 92,
  computerGraphics: "submitted",
  patterns: 65,
  philosophy: "transferred",
  network: 81
};

for (const key in scores) {
  if (typeof scores[key] !== 'number') {
    delete scores[key];
  }
}

console.log(scores);

//task 2
 class Student
 {
    constructor (fullName, direction) 
    {
        this.fullName = fullName;
        this.direction = direction
    }

    showFullName()
    {
        return this.fullName
    }
    
    nameIncludes(data)
    {
        return this.showFullName().includes(data);
    }
    
    static studentBuilder()
    {
        return new Student (`Ihor Kohut`, `qc`)
    }

    get direction()
    {
        return this._direction
    }

    set direction (newDirection)
    {
        this._direction = newDirection
    }
 }

 const stud1 = new Student ('Ivan Petrenko', 'web')
 const stud2 = new Student ('Sergiy Koval', 'python')
 const stud3 = Student.studentBuilder()

 console.log (stud1.fullName)
 console.log(stud1.nameIncludes ('Ivan'))
 console.log(stud1.nameIncludes ('Koval'))

 console.log (stud2.fullName)
 console.log(stud2.nameIncludes ('Ivan'))
 console.log(stud2.nameIncludes ('Koval'))

 console.log (stud3.fullName)
 console.log(stud3.nameIncludes ('Ivan'))
 console.log(stud3.nameIncludes ('Koval'))
