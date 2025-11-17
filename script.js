let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN"; 
    window.speechSynthesis.speak(text_speak);
}

function wishme() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("good morning sir");
    } else if (hours >= 12 && hours < 16) {
        speak("good afternoon sir");
    } else {
        speak("good evening sir");
    }
}
window.addEventListener('load', () => {
   wishme()
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript; 
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start(); 
    btn.style.display = "none";
    voice.style.display = "block";
});

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello") || message.includes("hey drogo")) {
        speak("hello sir, what can i help you");
    } else if (message.includes("who r u")||message.includes("hu r u")||message.includes("who are you")||message.includes("who are you")) {
        speak("i am drogo , virtual assistant , created by vivek ");
    }
    else if (message.includes("joke for me")||message.includes("crack a joke") ||message.includes("joke")) {
        speak("Why did the student eat his homework? Because the teacher told him it was a piece of cake.");
    } 
    else if (message.includes("i love u")||message.includes("i hate you")|| message.includes("i love you")||message.includes("i hate you")) {
        speak("i am a  virtual assistant you can love me hate me i have no feelings");
    } 
    else if (message.includes("i am very sad")||message.includes("no one loves me ")) {
        speak("We must understand that sadness is an ocean, and sometimes we drown, while other days we are forced to swim");
    }
    else if (message.includes("how are you")||message.includes("how r u ")) {
        speak("I'm just a computer program, so I don't have feelings, but I'm running perfectly and ready to help you!");
    }
    else if (message.includes("hey, siri")||message.includes("hey bixby ")||message.includes("ok, google")||message.includes("hello gemini")||message.includes("Hi Bixby ")) {
        speak("sorry...........................! call me by my name....................................!  i am drogo");
        }
    else if (message.includes("signal and  system")||message.includes("what is signal and what is system ")||message.includes("what is signal")||message.includes("what is system")||message.includes("explain signal and system ")) {
        speak("A signal is any physical quantity that carries information and varies with time.  and       A system is a device or process that takes a signal as input and produces another signal as output.");
    } 
     else if (message.includes("how are you")||message.includes("how r u")||message.includes("how are you doing")||message.includes("how r u doing")||message.includes("how r you")) {
        speak("i am good............................................!  how about you");
    }
    else if (message.includes("i am good")||message.includes("well i am good")||message.includes("absolutly fine")||message.includes("awesome")||message.includes("great")) {
        speak("oh! thank youuuuuuuuuuu............................!  ask me anything");
    }
    else if (message.includes("are you a robot")||message.includes("are you gay")||message.includes("you are gay")||message.includes("fuck you")||message.includes("lasbian")) {
        speak(" I'm not . I'm an AI assistant built by vivek.");
    } 
     else if (message.includes("good morning")) {
        speak("good morning sir  ");
    } 
    else if (message.includes("good afternoon")) {
        speak("good after noon sir  ");
    }
    else if (message.includes("good evening")) {
        speak("good evening sir  ");
    }
     else if (message.includes("good night")) {
        speak("good night  sir  ");
    }
  
    else if (message.includes("open youtube")) {
        speak("opening youtube");
        window.open("https://www.youtube.com");
    } else if (message.includes("open facebook")) {
        speak("opening facebook");
        window.open("https://www.facebook.com");
    } else if (message.includes("open instagram")) {
        speak("opening instagram");
        window.open("https://www.instagram.com");
    } else if (message.includes("open google")) {
        speak("opening google");
        window.open("https://www.google.com");
    } else if (message.includes("open whatsapp")) {
        speak("opening whatsapp");
        window.open("whatsapp://");
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp");
        window.open("whatsapp://");
    }
     else if (message.includes("time")) {
        
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } else if (message.includes("date")) {
       
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } else {
        
        let query = message.replace("drogo", "").replace("rogo", "").replace("grogo", "").trim();
        let finalText = "this is what I found on the internet regarding " + query;
        speak(finalText);
        
        
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
}
