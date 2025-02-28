function showPetModal(name, breed, dob, shelter) {
  const modal = document.getElementById('pet-modal');
  const petDetails = document.getElementById('pet-details');
  petDetails.textContent = `${name}, a ${breed}, born on ${dob}, currently in ${shelter}.`;
  modal.style.display = 'flex'; 
}

function closePetModal() {
  const modal = document.getElementById('pet-modal');
  modal.style.display = 'none'; 
}
