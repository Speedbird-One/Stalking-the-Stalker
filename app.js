document.addEventListener("click", musicPlay);

function musicPlay() {
  document.getElementById("song").play();

  const duration = 3 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 100 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);

  setTimeout(pageEdit, 200);
}

function pageEdit() {
  document.getElementById("landing").remove();
  document.removeEventListener("click", musicPlay);
}

document.getElementById("isDark").addEventListener("change", dark_func1);

function dark_func1() {
  var fg_clr = "hsl(0, 0%, 90%)";
  var bg_clr = "hsl(200, 100%, 5%)";
  var bg_lgt = "hsl(205, 75%, 20%)";
  var btn_clr = "hsl(205, 90%, 55%)";

  if (document.getElementById("isDark").checked) {
    document.getElementById("isDark2").checked = true;
    document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 70%)";
    document.querySelector(".switchDiv").style.backgroundColor =
      "hsl(0, 0%, 70%)";
    document
      .querySelectorAll("h1")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("h3")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("label")
      .forEach((elem) => (elem.style.color = bg_clr));
    document.getElementById("arrow").src = "assets/images/triangle-light.png";

    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.backgroundColor = "hsl(0, 0%, 70%)"));
    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll(".dropListContent")
      .forEach((elem) => (elem.style.backgroundColor = "hsl(0, 0%, 70%)"));

    document
      .querySelectorAll(".card")
      .forEach((elem) => (elem.style.backgroundColor = fg_clr));

    document
      .querySelectorAll("h2")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("p")
      .forEach((elem) => (elem.style.color = "black"));
    document
      .querySelectorAll("a")
      .forEach((elem) => (elem.style.color = btn_clr));
  } else {
    document.getElementById("isDark2").checked = false;
    document.querySelector("body").style.backgroundColor = bg_clr;
    document.querySelector(".switchDiv").style.backgroundColor = bg_clr;

    document
      .querySelectorAll("h1")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("h3")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("label")
      .forEach((elem) => (elem.style.color = fg_clr));
    document.getElementById("arrow").src = "assets/images/triangle-dark.png";

    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.backgroundColor = bg_clr));
    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll(".dropListContent")
      .forEach((elem) => (elem.style.backgroundColor = bg_clr));

    document
      .querySelectorAll(".card")
      .forEach((elem) => (elem.style.backgroundColor = bg_lgt));

    document
      .querySelectorAll("h2")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("p")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("a")
      .forEach((elem) => (elem.style.color = "hsl(195, 50%, 70%)"));
  }
}

document.getElementById("isDark2").addEventListener("change", dark_func2);

function dark_func2() {
  var fg_clr = "hsl(0, 0%, 90%)";
  var bg_clr = "hsl(200, 100%, 5%)";
  var bg_lgt = "hsl(205, 75%, 20%)";
  var btn_clr = "hsl(205, 90%, 55%)";

  if (document.getElementById("isDark2").checked) {
    document.getElementById("isDark").checked = true;
    document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 70%)";
    document.querySelector(".switchDiv").style.backgroundColor =
      "hsl(0, 0%, 70%)";
    document
      .querySelectorAll("h1")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("h3")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("label")
      .forEach((elem) => (elem.style.color = bg_clr));
    document.getElementById("arrow").src = "assets/images/triangle-light.png";

    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.backgroundColor = "hsl(0, 0%, 70%)"));
    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll(".dropListContent")
      .forEach((elem) => (elem.style.backgroundColor = "hsl(0, 0%, 70%)"));

    document
      .querySelectorAll(".card")
      .forEach((elem) => (elem.style.backgroundColor = fg_clr));

    document
      .querySelectorAll("h2")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("p")
      .forEach((elem) => (elem.style.color = "black"));
    document
      .querySelectorAll("a")
      .forEach((elem) => (elem.style.color = btn_clr));
  } else {
    document.getElementById("isDark").checked = false;
    document.querySelector("body").style.backgroundColor = bg_clr;
    document.querySelector(".switchDiv").style.backgroundColor = bg_clr;

    document
      .querySelectorAll("h1")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("h3")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("label")
      .forEach((elem) => (elem.style.color = fg_clr));
    document.getElementById("arrow").src = "assets/images/triangle-dark.png";

    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.backgroundColor = bg_clr));
    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll(".dropListContent")
      .forEach((elem) => (elem.style.backgroundColor = bg_clr));

    document
      .querySelectorAll(".card")
      .forEach((elem) => (elem.style.backgroundColor = bg_lgt));

    document
      .querySelectorAll("h2")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("p")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("a")
      .forEach((elem) => (elem.style.color = "hsl(195, 50%, 70%)"));
  }
}

document.getElementById("isVulgar").addEventListener("change", vulgar_func1);

function vulgar_func1() {
  if (document.getElementById("isVulgar").checked) {
    document.getElementById("isVulgar2").checked = true;

    document.getElementById("song").src = "assets/audio/mamtas-interlude.mp3";
    document.getElementById("song").play();

    document.querySelector("#pic0").src = "assets/images/vulgar/stalker.png";
    document.querySelector("#pic1").src = "assets/images/vulgar/ramu-haram.jpg";
    document.querySelector("#pic2").src = "assets/images/vulgar/9-11-haram.png";
    document.querySelector("#pic3").src =
      "assets/images/vulgar/fuk-ponnappa.jpg";

    document.getElementById("head0").innerHTML = "WANTED: Stalker";
    document.getElementById("par1").innerHTML =
      "Turning 19 is big, bro! One more year and you'll be eligible to stalk people professionally - they call it 'market research' then. Till then, keep being Dharwad's most loyal follower (literally). Can't beleive you came out of your mom 19 years ago.";

    document.getElementById("head2").innerHTML = "Only Slightly Suicidal";
    document.getElementById("par2").innerHTML =
      "I know that jump from GJB is tempting. It's almost as high as your parents were in November of 2005. But hold on, coz ISIS can't airstrike Jawahar without Llama Intelligence Agency's one and only Cheif Intelligence Officer.";

    document.getElementById("head3").innerHTML = "Fuck You Ponnappa";
    document.getElementById("par3").innerHTML =
      "This one IS personal, kid. (Ran out of stuff to say and couldn't be arsed to write another paragraph. Only so many stalker references I can make before it gets boring.) So yeah... fuck you. Also, watch Star Wars you piece of shit!";
  } else {
    document.getElementById("isVulgar2").checked = false;

    document.getElementById("song").src = "assets/audio/happy-birthday.mp3";
    document.getElementById("song").play();

    document.querySelector("#pic0").src = "assets/images/clean/bday-boi.png";
    document.querySelector("#pic1").src = "assets/images/clean/ramu-halal.jpg";
    document.querySelector("#pic2").src = "assets/images/clean/9-11-halal.png";
    document.querySelector("#pic3").src = "assets/images/clean/hecker.jpg";

    document.getElementById("head0").innerHTML = "Birthday Boy";
    document.getElementById("par1").innerHTML =
      "Wishing you a very happy 19th birthday my man. Enjoy it while it lasts, because this is your last year before Leonardo DiCaprio stops returning your texts. Don't worry though, you'll get someone with that Vasundhara Krithika-rizz.";

    document.getElementById("head2").innerHTML =
      "Survived A Year In PESU... Almost";
    document.getElementById("par2").innerHTML =
      "Somehow you've avoided a spontaneous high jump from GJB terrace for almost as long as Surya has been alive. Hope you can manage 3 more years. May your attendance rise, your GPA stabilize and your bank account maximize.";

    document.getElementById("head3").innerHTML = "Minecraft Hecker";
    document.getElementById("par3").innerHTML =
      "Bro be destroying 5 year olds in Minecraft with auto-clicker. I wish you 50 games of Bed Wars with 10+ kills. But like seriously bro, steal Damascus' PS5 and play some other games also lol.";
  }
}

document.getElementById("isVulgar2").addEventListener("change", vulgar_func2);

function vulgar_func2() {
  if (document.getElementById("isVulgar2").checked) {
    document.getElementById("isVulgar").checked = true;

    document.getElementById("song").src = "assets/audio/mamtas-interlude.mp3";
    document.getElementById("song").play();

    document.querySelector("#pic0").src = "assets/images/vulgar/stalker.png";
    document.querySelector("#pic1").src = "assets/images/vulgar/ramu-haram.jpg";
    document.querySelector("#pic2").src = "assets/images/vulgar/9-11-haram.png";
    document.querySelector("#pic3").src =
      "assets/images/vulgar/fuk-ponnappa.jpg";

    document.getElementById("head0").innerHTML = "WANTED: Stalker";
    document.getElementById("par1").innerHTML =
      "Turning 19 is big, bro! One more year and you'll be eligible to stalk people professionally - they call it 'market research' then. Till then, keep being Dharwad's most loyal follower (literally). Can't beleive you came out of your mom 19 years ago.";

    document.getElementById("head2").innerHTML = "Only Slightly Suicidal";
    document.getElementById("par2").innerHTML =
      "I know that jump from GJB is tempting. It's almost as high as your parents were in November of 2005. But hold on, coz ISIS can't airstrike Jawahar without Llama Intelligence Agency's one and only Cheif Intelligence Officer.";

    document.getElementById("head3").innerHTML = "Fuck You Ponnappa";
    document.getElementById("par3").innerHTML =
      "This one IS personal, kid. (Ran out of stuff to say and couldn't be arsed to write another paragraph. Only so many stalker references I can make before it gets boring.) So yeah... fuck you. Also, watch Star Wars you piece of shit!";
  } else {
    document.getElementById("isVulgar").checked = false;

    document.getElementById("song").src = "assets/audio/happy-birthday.mp3";
    document.getElementById("song").play();

    document.querySelector("#pic0").src = "assets/images/clean/bday-boi.png";
    document.querySelector("#pic1").src = "assets/images/clean/ramu-halal.jpg";
    document.querySelector("#pic2").src = "assets/images/clean/9-11-halal.png";
    document.querySelector("#pic3").src = "assets/images/clean/hecker.jpg";

    document.getElementById("head0").innerHTML = "Birthday Boy";
    document.getElementById("par1").innerHTML =
      "Wishing you a very happy 19th birthday my man. Enjoy it while it lasts, because this is your last year before Leonardo DiCaprio stops returning your texts. Don't worry though, you'll get someone with that Vasundhara Krithika-rizz.";

    document.getElementById("head2").innerHTML =
      "Survived A Year In PESU... Almost";
    document.getElementById("par2").innerHTML =
      "Somehow you've avoided a spontaneous high jump from GJB terrace for almost as long as Surya has been alive. Hope you can manage 3 more years. May your attendance rise, your GPA stabilize and your bank account maximize.";

    document.getElementById("head3").innerHTML = "Minecraft Hecker";
    document.getElementById("par3").innerHTML =
      "Bro be destroying 5 year olds in Minecraft with auto-clicker. I wish you 50 games of Bed Wars with 10+ kills. But like seriously bro, steal Damascus' PS5 and play some other games also lol.";
  }
}
