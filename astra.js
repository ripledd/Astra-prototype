
const texts = document.querySelector(".texts");

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
console.log(new SpeechRecognition());

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");


//Astra voice
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices;
}


recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  //Lower case text
  var text_l = text.toLowerCase();
  // For search with voice
  var text_static = text.replace(/\s+/g, '+');
  var text_s = text_static.slice(7);
  // Search link
  var comp_link = search_url+text_s;
  var und_link = search_url+text_static;


// DIALOG RULES ______________________________________________________________________________________________________________________________________---
  if (e.results[0].isFinal) {

    var selectedVoiceName = 'Google US English';

    if (text_l.includes("search")) {
      document.getElementById("left_eye").style.transform = "scale(1.2)";
      document.getElementById("right_eye").style.transform = "scale(1.2)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Right! Showing your results!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("Right! Showing your results!");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening Speecher search");
      window.open(comp_link);
    }

    if (text_l.includes("find") || text_l.includes("searching")) {
      document.getElementById("left_eye").style.transform = "scale(1.0)";
      document.getElementById("right_eye").style.transform = "scale(1.0)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Do you want to search? Please say search and then your search term, to activate voice search!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Do you want to search? Please say. search. and then. your search term. to activate voice search!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text_l.includes("how are you") || text_l.includes("how you are")) {
      document.getElementById("left_eye").style.transform = "scale(1.2)";
      document.getElementById("right_eye").style.transform = "scale(1.2)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I'm fine, thaks! :)";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('I´m fine, thanks!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text_l.includes("hi") || text.includes("hello") || text.includes("Hi") || text.includes("Hello") || text.includes("Astra") || text.includes("astra")) {
      document.getElementById("left_eye").style.transform = "scale(1.2)";
      document.getElementById("right_eye").style.transform = "scale(1.2)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = greetings;
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance(greetings);
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text.includes("bye") || text.includes("Bye") || text.includes("see you") || text.includes("See you")) {
      document.getElementById("left_eye").style.transform = "scale(0.8)";
      document.getElementById("right_eye").style.transform = "scale(0.8)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Bye bye! Hope to see you soon again!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("Bye bye! Hope to see you soon again!");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text_l.includes("tell me more about you") || text.includes("tell about you") || text.includes("tell more about you")) {
      document.getElementById("left_eye").style.transform = "scale(1.4)";
      document.getElementById("right_eye").style.transform = "scale(1.4)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "'Sure! My name is Astra and I am always ready to assist you in Speecher. I was created in january 9 th 2022 by Valery Dremov! Try to ask me 'Do I have new notifications?'!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Sure! My name is Astra and I am always ready to assist you in Speecher. I was created in january 9 th 2022 by Valery Dremov! Try to ask me, Do I have new notifications?!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text.includes("help") || text.includes("Help") || text.includes("support") || text.includes("Support")) {
      document.getElementById("left_eye").style.transform = "scale(1.2)";
      document.getElementById("right_eye").style.transform = "scale(1.2)";
      document.getElementById("mouth").style.transform = "rotate(-8deg)"
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Do you want to contact Speecher support? Please contact via support@speecher.me!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("Do you want to contact Speecher support? Please contact via support@speecher.me!");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text_l.includes("password") || text.includes("reset")) {
       document.getElementById("left_eye").style.transform = "scale(0.9)";
       document.getElementById("right_eye").style.transform = "scale(0.7)";
       p = document.createElement("p");
       p.classList.add("replay");
       p.innerText = "Forgot your password, or want to change it? Leading you to the reset password page...";
       texts.appendChild(p);
       var toSpeak = new SpeechSynthesisUtterance('Forgot your password, or want to change it? Leading you to the reset password page!');
       voices.forEach((voice)=>{
           if(voice.name === selectedVoiceName){
               toSpeak.voice = voice;
           }
       });
       synth.speak(toSpeak);
       console.log("opening Speecher password reset");
       window.open("https://speecher.me/reset/password/reset");
     }

    if (text.includes("good") || text.includes("fine") || text.includes("perfect")) {
      document.getElementById("left_eye").style.margin = "-170px 0px -10px 0px";
      document.getElementById("right_eye").style.margin = "-170px 120px 0px 120px";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Good to hear!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("Good, to hear!");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text.includes("bad") || text.includes("boring") || text.includes("sad") || text.includes("not fine")) {
      document.getElementById("left_eye").style.transform = "scale(0.6)";
      document.getElementById("right_eye").style.transform = "rotate(3deg)";
      document.getElementById("mouth").style.transform = "scale(0.7)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Oh, sad to hear! Maybe you should try Speecher explore?";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("Oh, sad to hear! Maybe you should try Speecher explore?");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening Speecher explore");
      window.open("https://speecher.me/explore");
    }


    if (
      text_l.includes("your name") || text_l.includes("who you are") || text_l.includes("what") || text_l.includes("who") || text_l.includes("who are you")) {
      document.getElementById("left_eye").style.transform = "scale(1.2)";
      document.getElementById("right_eye").style.transform = "scale(1.2)";
      document.getElementById("mouth").style.transform = "rotate(3deg)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My name is Astra, I'm your assistant in Speecher";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('My name is Astra. I´m your assistant, in Speecher!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text.includes("many followers")) {
      document.getElementById("left_eye").style.transform = "scale(1.2)";
      document.getElementById("right_eye").style.transform = "scale(1.2)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = followers;
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance(followers);
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text.includes("rank") || text.includes("popular") ) {
      document.getElementById("left_eye").style.transform = "scale(1.1)";
      document.getElementById("right_eye").style.transform = "scale(1.1)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Do you want to see popular creators, is that right? Leading you to the rank page...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Do you want to see popular creators, is that right? Leading you to the rank page!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening rank");
      window.open("https://speecher.me/rank");
    }

    if (text_l.includes("speecher") || text.includes("home") || text.includes("spetcher") || text.includes("speaker")) {
      document.getElementById("left_eye").style.transform = "scale(1.1)";
      document.getElementById("right_eye").style.transform = "scale(1.1)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening Speecher...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Opening Speecher!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening speecher");
      window.open("https://speecher.me");
    }

    if (text_l.includes("open notifications") || text.includes("direct to notifications") || text.includes("show notifications") || text.includes("lead me to notifications")) {
      document.getElementById("left_eye").style.transform = "scale(1.1)";
      document.getElementById("right_eye").style.transform = "scale(1.1)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening notifications...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Opening notifications!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening notifications");
      window.open("https://speecher.me/notifications");
    }

    if (text_l.includes("notifications") || text_l.includes("notification") ) {
      document.getElementById("left_eye").style.transform = "scale(1.1)";
      document.getElementById("right_eye").style.transform = "scale(1.1)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = notifications;
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance(notifications);
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text.includes("edit profile")) {
      document.getElementById("left_eye").style.transform = "scale(1.0)";
      document.getElementById("right_eye").style.transform = "scale(1.0)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Sure, leading you to your edit page...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Sure! Leading you to your edit page!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening profile editor");
      window.open("https://speecher.me/edit");
    }

    if (text_l.includes("made you") || text_l.includes("are you from") || text_l.includes("created you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Valery Dremov gave me life, want to see his profile?";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Valery Dremov gave me life, want to see his profile?');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening valerydremov profile");
      window.open("https://speecher.me/user/valerydremov");
    }

    if (text.includes("am I safe") || text.includes("safety") || text.includes("agreement")) {
      document.getElementById("left_eye").style.transform = "scale(1.0)";
      document.getElementById("right_eye").style.transform = "scale(1.0)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Do you want to read more about your privacy and user agreement? Redirecting you to policy&terms page...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Do you want to read more about your privacy and user agreement? Redirecting you to policy and terms page!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening user agreement");
      window.open("https://speecher.me/center/policy-terms");
    }

    if (text_l.includes("saved post") || text.includes("saved content") || text.includes("liked content") || text.includes("liked post")) {
      document.getElementById("left_eye").style.transform = "scale(1.0)";
      document.getElementById("right_eye").style.transform = "scale(1.0)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Sure! Showing you your saved content!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Sure! Showing you your saved content!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening saved page");
      window.open("https://speecher.me/saved/");
    }

    if (text_l.includes("comments") || text.includes("commented")) {
      document.getElementById("left_eye").style.transform = "scale(1.2)";
      document.getElementById("right_eye").style.transform = "scale(1.1)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Alright! Showing you your all comments!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Alright! Showing you your all comments!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening comments page");
      window.open("https://speecher.me/comments/");
    }

    if (text_l.includes("post") || text.includes("create") || text.includes("publish")) {
      document.getElementById("left_eye").style.transform = "scale(1.2)";
      document.getElementById("right_eye").style.transform = "scale(1.1)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Good! Opening posting page!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Good! Opening posting page!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening create page");
      window.open("https://speecher.me/create");
    }

    if (text_l.includes("report") || text_l.includes("feedback")) {
      document.getElementById("left_eye").style.transform = "scale(1.0)";
      document.getElementById("right_eye").style.transform = "scale(1.0)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Do you want to report user or content? Here is page you might searching for! Opening report page...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Do you want to report, user or content!? Here is page you might searching for!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening report page");
      window.open("https://speecher.me/report");
    }

    if (text.includes("partners") || text.includes("partner") || text.includes("Partners") || text.includes("Partner")) {
      document.getElementById("left_eye").style.transform = "scale(1.0)";
      document.getElementById("right_eye").style.transform = "scale(1.0)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I found for you page, where you can learn about partnership and how to access partner dashboard!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('I found page for you! Where you can learn, about partnership and how to access, partner dashboard!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening partners info");
      window.open("https://speecher.webflow.io/partners");
    }

    if (text_l.includes("login") || text_l.includes("log in") || text_l.includes("logan") || text_l.includes("locate") || text_l.includes("sign in") || text_l.includes("sign me in")) {
      document.getElementById("left_eye").style.transform = "scale(1.1)";
      document.getElementById("right_eye").style.transform = "scale(1.1)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Sure, redirecting you to log in page...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Sure, redirecting you to log in page!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening login page");
      window.open("https://speecher.me/login");
    }

    if (text_l.includes("logout") || text_l.includes("log me out") || text_l.includes("log out") || text_l.includes("lookout")) {
      document.getElementById("left_eye").style.transform = "scale(1.0)";
      document.getElementById("right_eye").style.transform = "scale(1.0)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Sure! Logging you out! Bye-bye!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Sure! Logging you out! Bye-bye!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening login page");
      window.open("https://speecher.me/logout");
    }

    if (text.includes("sign up") || text.includes("signup") || text.includes("Sign up") || text.includes("Signup") || text.includes("me up") || text.includes("create account")) {
      document.getElementById("left_eye").style.transform = "scale(1.1)";
      document.getElementById("right_eye").style.transform = "scale(1.1)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Sure, Welcome to Speecher! Redirecting you to sign up page...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Sure, Welcome to Speecher! Redirecting you to sign up page!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening signup page");
      window.open("https://speecher.me/signup");
    }

    if (text.includes("my profile")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening your profile...";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Sure!. Opening your profile!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening profile");
      window.open(profile_url);
    }

    // Cool replica-->

    if (text_l.includes("lights off") || text.includes("night") || text.includes("sleep")) {
      document.getElementById("left_eye").style.transform = "scale(0.5)";
      document.getElementById("right_eye").style.transform = "scale(0.5)";
      document.getElementById("right_eye").style.height = "10px";
      document.getElementById("left_eye").style.height = "10px";
      document.getElementById("mouth").style.transform = "scale(0.5)";
      document.getElementById("mouth").style.height = "5px";
      document.getElementById("body").style.backgroundImage = "linear-gradient(#002663, #000917)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I'm still here! Good night!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("I am still here! Good night!");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text.includes("happy") || text.includes("Happy") || text.includes("party") || text.includes("Party")) {
      document.getElementById("left_eye").style.transform = "scale(1.4)";
      document.getElementById("right_eye").style.transform = "scale(1.4)";
      document.getElementById("body").style.backgroundImage = "linear-gradient(#22e0cd, #00cf6e)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Happy! I'm very happy!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("Happy! I'm very happy!");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text.includes("angry mode") || text.includes("Angry mode")) {
      document.getElementById("right_eye").style.transform = "scale(0.9";
      document.getElementById("left_eye").style.transform = "scale(0.7)";
      document.getElementById("right_eye").style.width = "10px";
      document.getElementById("left_eye").style.width = "10px";
      document.getElementById("right_eye").style.transform = "rotate(38deg)";
      document.getElementById("left_eye").style.transform = "rotate(-38deg)";
      document.getElementById("mouth").style.transform = "rotate(8deg)"
      document.getElementById("body").style.backgroundImage = "linear-gradient(#ff00bb, #e02522)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Aaargh, I'm angry!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("Aaargh! I'm angry!");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (text_l.includes("birthday") || text.includes("congratulate")) {
      document.getElementById("left_eye").style.transform = "scale(1.5)";
      document.getElementById("right_eye").style.transform = "scale(1.5)";
      document.getElementById("body").style.backgroundImage = "linear-gradient(#22e0cd, #ff00d0, #00cf6e)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "🥳Happy birthday! I whish you luck!🥳";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance("Happy birthday! I whish you luck!");
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
        var audio = new Audio('../astra/sound/astra_congratulate.wav');
          audio.play();
    }

    if (
      text.includes("thanks") || text.includes("Thank you") || text.includes("Thanks") || text.includes("Thank you")) {
      document.getElementById("left_eye").style.transform = "scale(1.4)";
      document.getElementById("right_eye").style.transform = "scale(1.4)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "You are very welcome!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('You are very welcome!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    // Small replica-->
    if (
      text_l.includes("wrong") || text.includes("you are wrong") || text.includes("stupid") || text.includes("idiot")) {
      document.getElementById("left_eye").style.transform = "scale(0.6)";
      document.getElementById("right_eye").style.transform = "scale(0.9)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I'm sorry to hear that! Do you want to send feedback? Just say support!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('I am sorry to hear that! Do you want to send feedback? Just say support!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (
      text_l.includes("helping me") || text.includes("assist")) {
      document.getElementById("left_eye").style.transform = "scale(0.6)";
      document.getElementById("right_eye").style.transform = "scale(0.9)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I'm always glad to assist you! Just ask what you have in your mind right now!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('I am always glad to assist you! Just ask what you have in your mind right now!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
    }

    if (typeof toSpeak == 'undefined') {
      document.getElementById("left_eye").style.transform = "scale(0.4)";
      document.getElementById("right_eye").style.transform = "scale(0.8)";
      document.getElementById("mouth").style.transform = "rotate(-8deg)";
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Sorry! I'm trying very hard, but can't understand you. Check out these search results!";
      texts.appendChild(p);
      var toSpeak = new SpeechSynthesisUtterance('Sorry! I´m trying very hard, but can not understand you! Check out these search results!');
      voices.forEach((voice)=>{
          if(voice.name === selectedVoiceName){
              toSpeak.voice = voice;
          }
      });
      synth.speak(toSpeak);
      console.log("opening Speecher search");
      window.open(und_link);
   }
    p = document.createElement("p");
  }
});




//-------------------------------------------------------------------------------------------
function PopulateVoices(){
    voices = synth.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice)=>{
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
}

function astraOn() {
  document.getElementById("astra_ripple").style.display = "block";
  var audio = document.getElementById("audio"); audio.play();

  recognition.addEventListener("end", () => {
    recognition.stop();
    document.getElementById("astra_ripple").style.display = "none";
  });
  recognition.start();
}
