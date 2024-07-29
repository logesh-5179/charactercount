document.addEventListener("DOMContentLoaded", function() {
    const textarea=document.getElementById('name');
    const total=document.getElementById('total');
    const rem=document.getElementById('rem');
    const length=50; 
function update() {
        const currentLength = textarea.value.length;
        total.textContent = `Total characters: ${currentLength}`;
        rem.textContent = `Remaining: ${length - currentLength}`;
        if(currentLength>50){
            alert("You have attained an limit");
        }
        
    }textarea.addEventListener('input', update);
});
