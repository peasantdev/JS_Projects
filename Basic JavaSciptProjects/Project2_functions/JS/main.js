function My_First_Function() {                    //Defining the function and giving it a name
    var str = "Click this button to do nothing!"; //Defining a variable as a string
    str += " I was serious the button does nothing!"; //Concatanating a string

    document.getElementById("Button_Text").innerHTML = str; //Placing the value of the variable with the "Button_Text" ID
}