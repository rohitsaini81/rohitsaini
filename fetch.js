// Description: Fetches data from the API
const mainfunction = async (image,proname,prodesc,prolink,githublinks) => {
const projectall= document.getElementById("projects-all");


const projectbox = document.createElement("div");
projectbox.classList.add("details-container", "color-container");
const divarticle = document.createElement("div");
divarticle.classList.add("article-container");
projectbox.appendChild(divarticle);
const img = document.createElement("img");
img.classList.add("project-img");
img.src = image;
img.alt = "Project";
divarticle.appendChild(img);
const h2 = document.createElement("h2");
h2.classList.add("experience-sub-title", "project-title");
projectbox.appendChild(h2);
h2.innerHTML = proname;
const btncontainer = document.createElement("div");
btncontainer.classList.add("btn-container");
projectbox.appendChild(btncontainer);
const btn1 = document.createElement("button");
btn1.classList.add("btn", "btn-color-2", "project-btn");
btn1.innerHTML = "Github";
btn1.onclick = function() {
    location.href =githublinks;
}
btncontainer.appendChild(btn1);
const btn2 = document.createElement("button");
btn2.classList.add("btn", "btn-color-2", "project-btn");
btn2.innerHTML = "Live Demo";
btn2.onclick = function() {
    location.href = prolink;
}
btncontainer.appendChild(btn2);
projectall.appendChild(projectbox);

// projectbox.addEventListener("mouseenter", function() {
//    projectbox.classList.add("active");
//     projectall.style.background = "linear-gradient(90deg, #000000 0%, #000000 100%)";
// })
}

const sourceimage='./assets/magandaprev.png'
const prevlink='https://maganda-sakub.onrender.com/'
const githublink='https://github.com/rohitsaini81/maganda-shakun'
// mainfunction(image,proname,prodesc,prolink)

mainfunction(sourceimage,"Portfolio","Maganda-Shakub from uganda",prevlink,githublink)









