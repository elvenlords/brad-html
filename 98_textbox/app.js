document.getElementById("key_a").addEventListener("click", keyPressA)
document.getElementById("key_b").addEventListener("click", keyPressB)
document.getElementById("key_c").addEventListener("click", keyPressC)

document.getElementById("textarea").value = "";

function keyPressA(e)
{
    e.preventDefault();
    currentText = document.getElementById("textarea").value;
    document.getElementById("textarea").value = currentText + 'A';

    console.log("pressed A")
}

function keyPressB(e)
{
    e.preventDefault();
    currentText = document.getElementById("textarea").value;
    document.getElementById("textarea").value = currentText + 'B';
    console.log("pressed B")
}

function keyPressC(e)
{
    e.preventDefault();
    currentText = document.getElementById("textarea").value;
    document.getElementById("textarea").value = currentText + 'C';
    console.log("pressed C")
}