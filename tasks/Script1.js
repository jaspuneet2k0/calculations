// JavaScript source code
function newyear()
{
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("currentyear").innerHTML = n;
}
function calculateAge(birthyear, currentyear)
{
    var birthyear = document.getElementById('birthyear').value;
    var currentyear = document.getElementById('currentyear').value;
    var age = currentyear - birthyear;
    document.getElementById("result").innerHTML = "You are either " + age + " or " + (age - 1);
}
function calculateSupply(age, amount)
{
    var age = document.getElementById('age').value;
    var amount = document.getElementById('amount').value;
    var maxAge = 100;
    var totalNeeded = (amount * 365) * (maxAge - age);
    document.getElementById("newresult").innerHTML = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
}
function circle(rad)
{
    var rad = document.getElementById('rad').value;
    var circumference = Math.PI * 2 * rad;
    document.getElementById("newresult").innerHTML ="The circumference is " + circumference;

}
function circle1(rad1)
{
    var rad1 = document.getElementById('rad1').value;
    var area = Math.PI * rad1 * rad1;
    document.getElementById("newresult1").innerHTML = "The area is " + area;
}
function celToFahr(cel)
{
    var cel = document.getElementById('cel').value;
    var celInF = (cel * 9) / 5 + 32;
    document.getElementById("newresult").innerHTML = cel + '&deg;C is ' + celInF + '&deg;F';
}

function fahrToCel(fahr) 
{
    var fahr = document.getElementById('fahr').value;
    var fahrInC = ((fahr - 32) * 5) / 9;
    document.getElementById("newresult1").innerHTML = fahr + '&deg;F is ' + fahrInC + '&deg;C';
}