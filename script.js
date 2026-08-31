const verses = [
  { ref: "Psalm 119:11 (KJV)", text: "Thy word have I hid in mine heart, that I might not sin against thee." },
  { ref: "John 3:16 (KJV)", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." },
  { ref: "Philippians 4:13 (KJV)", text: "I can do all things through Christ which strengtheneth me." }
];

let currentIndex = 0;
let showingVerse = false;

function flipCard() {
  const cardText = document.getElementById("card-text");
  if (showingVerse) {
    cardText.innerHTML = verses[currentIndex].ref;
    showingVerse = false;
  } else {
    cardText.innerHTML = verses[currentIndex].text;
    showingVerse = true;
  }
}

function nextVerse() {
  currentIndex = (currentIndex + 1) % verses.length;
  showingVerse = false;
  document.getElementById("card-text").innerHTML = verses[currentIndex].ref + " (Click to reveal verse)";
}
