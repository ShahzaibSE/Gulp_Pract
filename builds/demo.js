//Some Typescript Code.
var Demo = (function () {
    function Demo() {
    }
    Object.defineProperty(Demo.prototype, "set_data", {
        get: function () {
            return this.mydata;
        },
        set: function (val) {
            this.mydata = val;
        },
        enumerable: true,
        configurable: true
    });
    Demo.prototype.Inserting_Data = function (myvalue) {
        this.set_data = myvalue;
        console.log("Inserted Data : " + this.set_data);
    };
    return Demo;
}());
var demo1 = new Demo();
demo1.Inserting_Data("Never Give Up");
var demo2 = new Demo();
demo2.Inserting_Data("Yes!..that's the way");
