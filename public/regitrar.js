// Verificar dominio antes de ejecutar
if (location.hostname === "laplatavirtual.com.ar"||
  location.hostname === "www.laplatavirtual.com.ar") {

  let userID = localStorage.getItem("lpvID");

  if (!userID) {
    userID = Math.floor(10000000 + Math.random() * 90000000) + "_lpv";
    localStorage.setItem("lpvID", userID);
  }

  fetch("https://script.google.com/macros/s/AKfycbxSXhwvoTeYPd2Ju74Fibufr6_lrtfxzpYqFw12QVBuigKwjJJ2vjmgGdjScCmVaU2MWQ/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: userID })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

}else{
  console.log("se encuentra en version desarrollador")
}
