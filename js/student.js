var student ={
    nom:"ahmed",
    email:"ahmed@gmail.com",
    numModul : 0,
    coefSum:0,
    moyenSum:0,
    notes : {
        module: [],
        coefs : [],
        note: [],
        moy:[]
    },
    charge: function(){
        do{
          this.numModul = parseInt(prompt("please enter num Module"))
        }while(this.numModul<=0)
        for (let i = 0; i < this.numModul; i++) {
            this.notes.module[i] = prompt("please enter nom Module")
            this.notes.note[i] = parseInt(prompt("please enter Note Module"))
            this.notes.coefs[i] = parseInt(prompt("please enter Coef Module"))
        }
        console.log(this.notes.module,this.notes.note,this.notes.coefs);
        return this
    },
    myenM: function(){
       for (let i = 0; i < this.numModul; i++) {
           this.notes.moy[i] = this.notes.note[i] * this.notes.coefs[i]
           this.coefSum = this.coefSum + this.notes.coefs[i]
       }
       return this
    },

    myenG: function(){
        for (let i = 0; i < this.numModul; i++) {
            this.moyenSum =  this.moyenSum  + this.notes.moy[i]
        }
        return this.moyenSum/ this.coefSum 
    }
}


// student.charge()
// student.myenM()

// console.log(student.myenG());

console.log(student.charge().myenM().myenG());