
const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const hoversign=document.querySelector('.hover-sign');
const sidebar=document.querySelector('.sidebar');
const menu=document.querySelector('.menuicon');
const close=document.querySelector('.close-icon');
const videolist=[video1,video2,video3];
videolist.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
        hoversign.classList.add("active");
    })
    video.addEventListener('mouseout',function(){
        video.pause()
        hoversign.classList.remove("active");
})
})
menu.addEventListener("click",function(){
    sidebar.classList.remove('sidebarclose');
    sidebar.classList.add('sidebaropen');
})
close.addEventListener("click",function(){
    sidebar.classList.remove('sidebaropen');
    sidebar.classList.add('sidebarclose');

})