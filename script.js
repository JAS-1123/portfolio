async function loadCFGraph() {
    const handle = "JAS1123";
    const url = `https://codeforces.com/api/user.rating?handle=${handle}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "OK") return;
    // let j = 0;

    const url2 = `https://codeforces.com/api/user.status?handle=${handle}`;
    const res2 = await fetch(url2);
    const data2 = await res2.json();
    const submissions = data2.result;

    if (data2.status !== "OK") return;

    const solved = new Set();
    submissions.forEach(sub => {
        if (sub.verdict === "OK") {
            const key = `${sub.problem.contestId}-${sub.problem.index}`;
            solved.add(key);
        }
    });

    const solvedCount = solved.size;
    document.getElementById("questionCF").innerText = `Questions solved : ${solvedCount}`;

    const contests = data.result;
    const labels = contests.map((c, idx) => idx + 1);
    const ratings = contests.map(c => c.newRating);

    const dat3 = document.getElementById("ratingCF");
    dat3.innerText = `Max rating : ${Math.max(...ratings)}`;
    const contestCF = document.getElementById("contestCF");
    contestCF.innerText = `Contests given : ${ratings.length}`;

    new Chart(document.getElementById("ratingChart"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${handle}'s CF Rating`,
                data: ratings,
                fill: true, 
                borderColor: "rgba(253, 253, 253, 1)",
                tension: 0,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            scales: {
                // x: { title: { display: true, text: 'Contest Number' } },
                y: { beginAtZero: false }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        title: (context) => `Contest #${context[0].label}`,
                        label: (context) => `Rating: ${context.parsed.y}`
                    }
                }
            }
        }
    });
}
loadCFGraph();

const ratingsAt = [25, 149, 278, 474, 605, 634, 648];
async function loadAtCoderGraph() {
    const handle = "JAS1123";
    const labels = ratingsAt.map((_, idx) => idx + 1);

    new Chart(document.getElementById("ratingChart2"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${handle}'s AtCoder Rating`,
                data: ratingsAt,
                fill: true,
                borderColor: "rgba(255, 255, 255, 1)",
                // backgroundColor: "rgba(255, 99, 132, 0.1)",
                tension: 0,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'Contest Number' } },
                y: { beginAtZero: false, title: { display: true, text: 'Rating' } }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        title: (context) => `Contest #${context[0].label}`,
                        label: (context) => `Rating: ${context.parsed.y}`
                    }
                }
            }
        }
    });
}
loadAtCoderGraph();

const ratingsCC = [953, 1136, 1166, 1193, 1160, 1228, 1285, 1355, 1423, 1435, 1442, 1450, 1462, 1490, 1513, 1523, 1524, 1536, 1543, 1557, 1558, 1591, 1610, 1609, 1620, 1650, 1634, 1655, 1690, 1718, 1734];
async function loadCCGraph() {
    const handle = "chosen_undead";
    const labels = ratingsCC.map((_, idx) => idx + 1);

    new Chart(document.getElementById("ratingChart3"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${handle}'s CodeChef Rating`,
                data: ratingsCC,
                fill: true,
                borderColor: "rgba(255, 255, 255, 1)",
                // backgroundColor: "rgba(255, 99, 132, 0.1)",
                tension: 0,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'Contest Number' } },
                y: { beginAtZero: false, title: { display: true, text: 'Rating' } }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        title: (context) => `Contest #${context[0].label}`,
                        label: (context) => `Rating: ${context.parsed.y}`
                    }
                }
            }
        }
    });
}
loadCCGraph();

const dat = document.getElementById("ratingCC");
dat.innerText = `Max rating : ${Math.max(...ratingsCC)}`;
const contestCC = document.getElementById("contestCC");
contestCC.innerText = `Contests given : ${ratingsCC.length}`;

const dat2 = document.getElementById("ratingAt");
dat2.innerText = `Max rating : ${Math.max(...ratingsAt)}`;
const contestAt = document.getElementById("contestAt");
contestAt.innerText = `Contests given : ${ratingsAt.length}`;

document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".fa-brands.fa-github");

    icon.addEventListener("click", function () {
        window.open("https://github.com/JAS-1123", "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".fa-brands.fa-linkedin");
    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            window.open("https://www.linkedin.com/in/jai-aditya-671a22326/", "_blank");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".fa-regular.fa-envelope");
    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=jaiaditya2234@gmail.com", "_blank");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector("#p1github");

    icon.addEventListener("click", function () {
        window.open("https://github.com/JAS-1123/CodeForcesBookMark", "_blank");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".fa-brands.fa-discord");
    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            window.open("https://discord.com/users/thunder0626", "_blank");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll("#codeforces .cfinfo #name");
    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            window.open("https://codeforces.com/profile/JAS1123", "_blank");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll("#codechef .cfinfo #name");
    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            window.open("https://www.codechef.com/users/chosen_undead", "_blank");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll("#atcoder .cfinfo #name");
    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            window.open("https://atcoder.jp/users/JAS1123", "_blank");
        });
    });
});

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,);

function calcOffsets() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  return lines.map(line => {
    const r = line.getBoundingClientRect();
    const lineCenterX = r.left + r.width / 2;
    const lineCenterY = r.top + r.height / 2;
    return {
      x: centerX - lineCenterX,
      y: centerY - lineCenterY
    };
  });
}

const tl = gsap.timeline({ repeat: 0});


const split = new SplitText("#introstartheading", { type: "lines" });
const lines = Array.from(split.lines);

lines.forEach(line => {
  line.style.display = "block";
  line.style.willChange = "transform, opacity";
});

requestAnimationFrame(() => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsets = lines.map(line => {
    const r = line.getBoundingClientRect();
    const lineCenterX = r.left + r.width / 2;
    const lineCenterY = r.top + r.height / 2;
    return {
      x: centerX - lineCenterX,
      y: centerY - lineCenterY
    };
  });

  tl.fromTo(lines,
    {
      x: i => offsets[i].x,
      y: i => offsets[i].y + 100,
      scale: 3,
      autoAlpha: 0,
      transformOrigin: "center center"
    },
    {
      x: i => offsets[i].x,
      y: i => offsets[i].y,
      scale: 3,
      autoAlpha: 1,
      duration: 1.5,
      ease: "power2.out"
    }
  );

  tl.fromTo(lines, 
    {
        x: i => offsets[i].x,
        y: i => offsets[i].y,
        scale: 3
    },
    {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5
    }
    );
    gsap.to("#sc1, #sc2, #sc3", {
        rotation: 15,          
        duration: 0.15,       
        repeat: 100,            
        yoyo: true,           
        ease: "power1.inOut"
    });
    tl.fromTo("#sc1, #sc2, #sc3", {
        opacity: 1,
    },{
        opacity: 0,
        duration: 2,
    }, "-=1.5");
    let split2 = new SplitText("#intromain", {
        type: "lines"
    });
    tl.from(split2.lines, {
        autoAlpha: 0,
        y: 50,
        duration: 1.0,
        stagger: 0.2 
    }, "-=0.75");
    tl.from("#img", {
        autoAlpha: 0,
        duration: 1 
    }, "-=0.75");
    tl.from("#contact i", {
        y: 30, 
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.5
    }, "-=0.25");

document.addEventListener("DOMContentLoaded", () => {
  const skills = gsap.utils.toArray("#languages .skillset");
    gsap.from(skills, {
    autoAlpha: 0,
    y: 25,
    duration: 0.8,
    stagger: {
      each: 0.06,
      from: "random"
    },
    ease: "power2.in",
    clearProps: "transform,opacity,visibility",
      scrollTrigger: {
        trigger: "#languages",
        start: "top 80%",
        once: true,
      }
    });

    const profiles = gsap.utils.toArray("#containercc > div");
    gsap.from(profiles, {
        autoAlpha: 0,
        y: 40,
        duration: 1,
        stagger: { each: 0.3, from: "center" },
        ease: "power2.out",
        clearProps: "transform,opacity,visibility",
        scrollTrigger: {
            trigger: "#containercc",
            start: "top 75%",
            once: true,
        }
    });
});


})
