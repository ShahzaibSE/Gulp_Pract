//Some Typescript Code.
class Demo{
    private mydata:any;

    set set_data(val){
        this.mydata=val;
    }

    get set_data(){
        return this.mydata;
    }

    constructor(){

    }

    Inserting_Data(myvalue){
        this.set_data = myvalue;
        console.log(`Inserted Data : ${this.set_data}`);
    }
}

let demo1 = new Demo();
demo1.Inserting_Data("Never Give Up");

let demo2 = new Demo();
demo2.Inserting_Data("Yes!..that's the way");