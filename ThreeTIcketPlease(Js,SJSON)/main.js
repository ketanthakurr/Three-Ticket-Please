Load()

async function Load() {
    console.log("test");
    let request = new Request("main.json")
    let response = await fetch(request)
    let json = await response.json()

    LoadNav(json["navbar"])

    //Write Below//
    LoadFooter(json["footer"])

    LoadCard1(json["card1"])

    LoadCard1(json["card2"])

}


function LoadNav(obj) {
    let nav = document.createElement("div");
    nav.classList.add("game-nav");
    nav.classList.add("navbar");
    nav.id = "navbar";
    nav.classList.add("gradient");
    ////////
    // let logo = document.createElement("div");
    // logo.classList.add("logo");
    // let a = document.createElement("a");
    // a.href = "/index.html";
    // let img = document.createElement("img");
    // img.src = obj.logo;
    // img.classList.add("logoimg");
    // a.appendChild(img);
    // logo.appendChild(a);
    ////////
    let mid = document.createElement("div");
    mid.classList.add("mid-items");
    let home = document.createElement("a");
    home.href = "#";
    home.innerText = "Home";
    let news = document.createElement("a");
    news.href = "/news.html";
    news.innerText = "Travel Resources6"
    mid.appendChild(home);
    mid.appendChild(news);
    let destination = document.createElement("div");
    destination.classList.add("dropdown");
    let dropbtn = document.createElement("div");
    dropbtn.innerText = "destination";
    dropbtn.style.cursor = "pointer";
    dropbtn.style.fontSize = "1.15vw";
    let dropcont = document.createElement("div");
    dropcont.classList.add("dropdown-content");
    // for (let i = 0; i < Object.getOwnPropertyNames(obj["destination"]).length; i++) {
    //     let link = document.createElement("a");
    //     link.href = obj["destination"][i].link;
    //     link.target = "_blank";
    //     link.innerText = obj["destination"][i].name;
    //     dropcont.appendChild(link);
    // }
    destination.appendChild(dropbtn);
    destination.appendChild(dropcont);
    mid.appendChild(destination);

    let games = document.createElement("a");
    games.href = "/games.html";
    games.innerText = "Games"
    mid.appendChild(games);
    ////////
    let search = document.createElement("div");
    search.classList.add("search-container");
    let form = document.createElement("form");
    form.action = "/search";
    form.method = "get";
    let input = document.createElement("input");
    input.classList.add("search");
    input.classList.add("expandright");
    input.id = "searchright";
    input.type = "search";
    input.name = "q";
    input.placeholder = "Search";
    let label = document.createElement("label");
    label.classList.add("button");
    label.classList.add("searchbutton");
    label.htmlFor = "searchright";
    let span = document.createElement("span");
    span.classList.add("mglass");
    span.innerHTML = "&#9906;"
    label.appendChild(span);
    form.appendChild(input);
    form.appendChild(label);
    search.appendChild(form);
    // ////////
    // let login = document.createElement("div");
    // let signa = document.createElement("a");
    // signa.href = "/login.html";
    // let simg = document.createElement("img");
    // simg.classList.add("signup");
    // simg.src = obj.signup;
    // signa.appendChild(simg);
    // login.appendChild(signa);
    // ////////
    // nav.appendChild(logo);
    // nav.appendChild(mid);
    // nav.appendChild(search);
    // nav.appendChild(login);
    // let head = document.createElement("header");
    // head.appendChild(nav);
    // document.body.appendChild(head);
}

function LoadCard1(obj) {


    let some = document.createElement("div");

}
