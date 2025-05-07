// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let availableSpeechSynthesis = window.speechSynthesis.getVoices();
  let voiceSelect = document.getElementById('voice-select');

  availableSpeechSynthesis.forEach(voice => {
    let option = document.createElement('option');
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  })

  let speakButton = document.querySelector('button');
  let textContent = document.getElementById('text-to-speak');
  let img = document.querySelector('img');

  speakButton.addEventListener('click', () => {
    let selectedVoice = voiceSelect.value;
    let utterance = new SpeechSynthesisUtterance(textContent.value);
    utterance.voice = availableSpeechSynthesis.find(voice => voice.name === selectedVoice);
    window.speechSynthesis.speak(utterance);

    utterance.addEventListener('start', () => {
      img.src = 'assets/images/smiling-open.png';
      img.alt = 'Smiling face';
    });

    utterance.addEventListener('end', () => {
      img.src = 'assets/images/smiling.png';
      img.alt = 'Smiling face';
    });
  });
}