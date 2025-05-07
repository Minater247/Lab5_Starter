// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const slider = document.querySelector('[type="range"]');
  const audio = document.querySelector('audio');
  const icon = document.querySelector('#volume-controls > img');

  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');

  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();
  
  slider.addEventListener('input', function() {
    audio.volume = this.value / 100;

    if (this.value < 1) {
      icon.src = 'assets/icons/volume-level-0.svg';
      icon.alt = 'Volume Level 0';
    } else if (this.value < 33) {
      icon.src = 'assets/icons/volume-level-1.svg';
      icon.alt = 'Volume Level 1';
    } else if (this.value < 67) {
      icon.src = 'assets/icons/volume-level-2.svg';
      icon.alt = 'Volume Level 2';
    } else {
      icon.src = 'assets/icons/volume-level-3.svg';
      icon.alt = 'Volume Level 3';
    }
  });

  hornSelect.addEventListener('input', function() {
    hornImage.src = 'assets/images/' + this.value + '.svg';
    hornImage.alt = this.value;

    audio.src = 'assets/audio/' + this.value + '.mp3';
  });

  playButton.addEventListener('click', function() {
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
    audio.play();
  });


  // May have already-loaded context
  if (slider.value < 1) {
    icon.src = 'assets/icons/volume-level-0.svg';
    icon.alt = 'Volume Level 0';
  } else if (slider.value < 33) {
    icon.src = 'assets/icons/volume-level-1.svg';
    icon.alt = 'Volume Level 1';
  } else if (slider.value < 67) {
    icon.src = 'assets/icons/volume-level-2.svg';
    icon.alt = 'Volume Level 2';
  } else {
    icon.src = 'assets/icons/volume-level-3.svg';
    icon.alt = 'Volume Level 3';
  }

  audio.volume = slider.value / 100;

  if (hornSelect.value !== "select") {
    hornImage.src = 'assets/images/' + hornSelect.value + '.svg';
    hornImage.alt = hornSelect.value;
  }

  audio.src = 'assets/audio/' + hornSelect.value + '.mp3';
}