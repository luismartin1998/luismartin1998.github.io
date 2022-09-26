
alert("Welcome to The Dragon Lair 🐲");

let random = Math.floor(Math.random()*8)

let count = 0

const swordFinder = (id) => {
count++
  if (count >= 4){
    alert("🐲You have clicked too many times🐲");
    location.reload()
  }
  if (id === random) {
    document.getElementById(random.toString()).innerHTML = "🔑"
  alert(" 🔑Congratulations🔑, you have found the key!")
  location.reload()
}
  else { document.getElementById(id.toString()).innerHTML = "🐲"

  }
  // if(id === 0)       {
  //   document.getElementById("0").innerHTML = "🐲"
  // }
  // else if (id === 1) {
  //   document.getElementById("1").innerHTML = "🐲"
  // }
  // else if (id === 2) {=
  //   document.getElementById("2").innerHTML = "🔑"
  // }
  // else if (id === 3) {
  //   document.getElementById("3").innerHTML = "🐲"
  // }
  // else if (id === 4) {
  //   document.getElementById("4").innerHTML = "🐲"
  // }
  // else if (id === 5) {
  //   document.getElementById("5").innerHTML = "🐲"
  // }
  // else if (id === 6) {
  //   document.getElementById("6").innerHTML = "🔑"
  // }
  // else if (id === 7) {
  //   document.getElementById("7").innerHTML = "🐲"
  // }
  // else if (id === 8) {
  //   document.getElementById("8").innerHTML = "🔑"
  // }



}
