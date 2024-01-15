const page = document.querySelector('html')
const corps = document.querySelector('body');
const person = chrome.runtime.getURL("images/icon-128.png");
console.log("person:", person);
let changeHTML = () => {
  corps.innerHTML+= `<div class="popup-content" id="customPopup"><img src=${person}><h2>Finally!!</h2><p>Good job, it s time for a walk!<br> Take a break, you deserve it 😉</p><button onclick="closePopup()" class="dismiss">Close</button></div>`;
}

// function showPopup() {
//     const popup = document.createElement('div');
//     popup.id = 'customPopup';
//     console.log("id:",popup.id);
//     //document.body.appendChild(popup); 
//     popup.innerHTML = '<div class="popup-content" id="close"><i class="fa-solid fa-check"></i><lord-icon src="https://cdn.lordicon.com/yqpvgvgs.json" trigger="loop" state="loop-cycle" style="width:90px; height:90px"></lord-icon><h2>Finally!!</h2><p>Good job, it s time for a break!<br> Take break, you deserve it 😉</p><button onclick="closePopup()" class="dismiss">Close</button></div>';
  
//   }

function blurPage() {
  document.body.style.filter = 'blur(10px)'; 
}

  function closePopup() {
    const popup = document.getElementById('customPopup');
    if (popup) {
      popup.style.display = 'none';
    }
  }


  setTimeout(changeHTML,5000); 
  setTimeout(blurPage, 5000);