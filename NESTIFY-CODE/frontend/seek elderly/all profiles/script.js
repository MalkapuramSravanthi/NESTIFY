function showElderModal(name, occupation, age, careCenter) {
  const modal = document.getElementById('elder-modal');
  const elderDetails = document.getElementById('elder-details');
  elderDetails.textContent = `${name}, a ${occupation}, aged ${age}, currently in ${careCenter}.`;
  modal.style.display = 'flex'; 
}

function closeElderModal() {
  document.getElementById('elder-modal').style.display = 'none'; 
}
