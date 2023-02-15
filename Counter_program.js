let count = 0;
document.getElementById("sumazintiBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count=0
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("padidintiBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}
