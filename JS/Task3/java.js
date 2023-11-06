function emi(){
  let p = document.getElementById("amount").value;
  let r = document.getElementById("interest").value;
  let n = document.getElementById("months").value;
  let interest = (p * (r * 0.01)) / n;
  let result = ((p / n) + interest).toFixed(2);
  document.getElementById("Emi").innerHTML = result;
} 