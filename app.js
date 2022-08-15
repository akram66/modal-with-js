const showModalBtn=document.querySelector(".show-modal");
const modal=document.querySelector(".modal");
const backdrop=document.querySelector(".backdrop");
const closeModal=document.querySelector(".close-modal");
const confirmModal=document.querySelector(".confirm-modal");

showModalBtn.addEventListener("click",()=>{
    modal.style.opacity="1";
    modal.style.transform="translateY(15vh)";
    backdrop.style.display="block";
   
});

closeModal.addEventListener("click",()=>{
    modal.style.opacity="0";
    modal.style.transform="translateY(-100vh)";
    backdrop.style.display="none";
   
})

confirmModal.addEventListener("click",()=>{
    modal.style.opacity="0";
    modal.style.transform="translateY(-100vh)";
    backdrop.style.display="none";
    alert("modal accepted");
   
})