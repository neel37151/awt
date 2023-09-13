const navbar = document.querySelector(".navbar");
const navul = document.querySelector(".nav-link");
const icon = document.querySelector("#icon");
const blogs_card = document.querySelector(".blogs-card");
const evnet_card = document.querySelector(".event-card");
const job_card = document.querySelector(".job-cards");
const fetchData = async (name) => {
  let data = await fetch(`./data/${name}.json`);
  data = await data.json();
  return data;
};

const showJob = (data) => {
  job_card.innerHTML = "";
  data.forEach((element) => {
    const box = document.createElement("div");
    box.classList.add("j-card");
    box.classList.add("card-body");
    box.classList.add("round");
    box.innerHTML = `
    <h2>${element.job_title}</h2>
    <h6 class="company-name">${element.company}</h6> <hr>
    <div class="job-dec ">
       <p id="flex aline-center">
       <svg style="width: 15px; margin-right: 2px; text-align: center;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
       <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
     </svg>
          <span>${element.loaction}</span>
       </p>
       <div class="flex">
          <div class="flex-col">
             <div class="flex aline-center">
             <svg style="width: 15px; margin-right:2px; text-align: center;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
             <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
           </svg>
                <span>
                Start date
                </span>
             </div>
             <span>${element.date}</span$>
          </div>
          <div class="flex-col details">
             <div class="flex aline-center">
                <svg style="width: 15px; margin-right: 2px; text-align: center;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                   <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                   <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
                </svg>
                <span>CTC</span>
             </div>
             <div class="flex aline-center">
                <svg style="margin-right: 2px; text-align: center;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                </svg>
                ${element.CTC}
             </div>
          </div>
          <div class="flex-col details">
             <div class="flex aline-center">
                <svg style="margin-right: 2px; text-align: center;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-bottom" viewBox="0 0 16 16">
                   <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
                </svg>
                <span>
                Experience
                </span>
             </div>
             <div class="item_body desktop-text">${element.experience}</div>
          </div>
       </div>
       <br>
    </div>
    <div class="btn btn-primary custom-btn" style="padding: 0px 2px;;">Apply Now</div>
      `;
    job_card.appendChild(box);
  });
};

const showEvents = (data) => {
  evnet_card.innerHTML = "";
  data.forEach((element) => {
    const box = document.createElement("div");
    box.classList.add("event-cards");
    box.innerHTML = `
    <div class="card-img">
    <img src="${element.img}" alt="">
</div>
<div class="card-body">
    <div class="date">
        <span class="badge rounded-pill text-bg-info ">${element.date}</span>
    </div>
    <div class="card-info">
        <samp class="title">${element.title}</samp><hr>
        <p class="card-text">${element.dec.substring(0, 100)}...</p>    
    </div>
    <div class="register">
        <button class="btn btn-primary custom-btn">REGISTER</button>
    </div>
</div>
      `;
    evnet_card.appendChild(box);
  });
};

const showNews = (data) => {
  blogs_card.innerHTML = "";
  data.forEach((element) => {
    const box = document.createElement("div");
    box.classList.add("card");
    box.innerHTML = `
        
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class="title">${element.title}</h2><hr>
          <p class="card-text">${element.dec.substring(0, 100)}...</p>
        </div>
        `;
    blogs_card.appendChild(box);
  });
};

const showNothing = (name) => {
  if (name === "event") {
    evnet_card.innerHTML = "";
    const box = document.createElement("div");
    box.classList.add("no-data");
    box.innerText = "Nothing to Show";
    evnet_card.appendChild(box);
  } else if (name === "news") {
    blogs_card.innerHTML = "";
    const box = document.createElement("div");
    box.classList.add("no-data");
    box.innerText = "Nothing to Show";
    blogs_card.appendChild(box);
  } else {
    job_card.innerHTML = "";
    const box = document.createElement("div");
    box.classList.add("no-data");
    box.innerText = "Nothing to Show";
    job_card.appendChild(box);
  }
};

const filterData = async (cat, name) => {
  // console.log(cat);
  let data = await fetchData(name);
  data = data.filter((item) => {
    return item.tag == cat;
  });
  if (data.length === 0) {
    showNothing(name);
  } else if (name == "event") {
    showEvents(data);
  } else if (name == "news") {
    showNews(data);
  }
};

const main = async () => {
  const blogs = await fetchData("news");
  const event = await fetchData("event");
  const job = await fetchData("job");
  if (blogs.length == 0) {
    showNothing("news");
  } else if (event.length == 0) {
    showNothing("event");
  } else if (job.length == 0) {
    showNothing("job");
  } else console.log(job);
  showNews(blogs);
  showEvents(event);
  showJob(job);
  loaction;
};

main();

const menu = () => {
  //   console.log(icon.src);
  if (icon.src.includes("/menu.png")) {
    icon.src = "./images/close.png";
    // navul.classList.remove("nav-list");
    navul.classList.add("m");
  } else {
    icon.src = "./images/menu.png";
    // navul.classList.remove("nav-list");
    navul.classList.remove("m");
  }
};
