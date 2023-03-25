import { monsters } from "./monsters.js";

for (let monsterdiv of monsters) {
  showMonster(monsterdiv);
}
function showMonster(monsterdiv) {
  const monster = document.createElement("div");
  monster.className = "monster";

  const img = document.createElement("img");
  img.src = `https://robohash.org/${monsterdiv.id}.png?set=set4`;
  img.alt = monsterdiv.name;

  const name = document.createElement("p");
  name.className = "name"
  name.innerText = monsterdiv.name;

  const email = document.createElement("p");
  email.className = "email";
  email.innerText = monsterdiv.email;

  monster.append(img, name, email);
  document.querySelector(".monsters").append(monster);
  console.log(monster);
}

notfound();
function notfound() {
  const notFoundDiv = document.createElement("div");
  notFoundDiv.className = "p-5 not-found";

  notFoundDiv.style.display = "none";

  const span = document.createElement("span");
  span.innerText = "404";

  const h1 = document.createElement("h1");
  h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";

  notFoundDiv.append(span, h1);
  document.querySelector(".monsters").append(notFoundDiv);

  console.log(notFoundDiv);
}

document
  .querySelector("#search-monster")
  .addEventListener("keyup", function(e) {
   let notfound=true;
    const keyword = e.target.value.toLowerCase();
    const monsters = document.querySelectorAll(".monster");

    for (let monster of monsters) {
      const name = monster.children[1].innerText.toLowerCase();
      const email = monster.children[2].innerText.toLowerCase();
 
      if (name.includes(keyword) || email.includes(keyword)) {
        monster.style.display = "block";
        notfound=false;
      } else {
        monster.style.display = "none";
      }
    }

    if(notfound){
      document.querySelector('.not-found').style.display='block';
    }else{ document.querySelector('.not-found').style.display='none';
  }
  });
