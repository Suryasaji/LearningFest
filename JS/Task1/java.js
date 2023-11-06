function show(){
    let dice=Math.floor(Math.random()*6)+1;
    document.getElementById("myRoll").innerHTML = dice;
    //document.write(dice);
}