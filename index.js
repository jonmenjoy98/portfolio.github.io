// prompt("You are under cctv")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hambarger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display="inline"
        document.querySelector('.cross').style.display="none"
    }
    else{
        document.querySelector('.ham').style.display="none"
        setTimeout(()=>{

        },300);
        document.querySelector('.cross').style.display="inline"
    }
});