document.getElementById('openBtn').addEventListener('click', function() {
    // Get the value entered by the user
    var input = document.getElementById('pw').value;
    
    // UI Elements
    const errorMsg = document.getElementById('err');
    const lockScreen = document.getElementById('lockwrap');
    const mainContent = document.getElementById('main');
    
    // --- PASSWORD LOGIC ---
    // .toUpperCase() નો ઉપયોગ કર્યો છે જેથી small કે capital બંને ચાલે.
    // પાસવર્ડ: REKHAMILAN2008
    if(input.toUpperCase().trim() === "REKHAMILAN2008") {
        
        // Success: Unlock effect
        lockScreen.style.opacity = '0';
        
        // Wait 1 second for fade out, then show content
        setTimeout(() => {
            lockScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Auto play music if you add it later
            // document.getElementById('bgMusic').play();
        }, 1000); 

    } else {
        // Failure: Wrong password animation
        errorMsg.textContent = "Oops! Wrong password. Try REKHAMILAN2008 💖";
        document.querySelector('.input').style.border = "2px solid red";
        
        // Shake animation
        const box = document.querySelector('.lockbox');
        box.style.transform = "translateX(10px)";
        setTimeout(() => box.style.transform = "translateX(0)", 100);
        setTimeout(() => box.style.transform = "translateX(-10px)", 200);
        setTimeout(() => box.style.transform = "translateX(0)", 300);
    }
});