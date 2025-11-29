const host = location.hostname.replace("www.", "");


if (host === "laplatavirtual.com.ar") {

  let userID = localStorage.getItem("lpvID");

  if (!userID) {
    userID = Math.floor(10000000 + Math.random() * 90000000) + "_lpv";
    localStorage.setItem("lpvID", userID);
  }

  const url =
    "https://script.google.com/macros/s/AKfycbxSXhwvoTeYPd2Ju74Fibufr6_lrtfxzpYqFw12QVBuigKwjJJ2vjmgGdjScCmVaU2MWQ/exec" +
    "?id=" + encodeURIComponent(userID);

  fetch(url) // GET por defecto
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));


}else{
  console.log("se encuentra en version desarrollador")
}
