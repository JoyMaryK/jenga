const mobileMenuBtn = document.querySelector("button.mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItems = document.querySelectorAll(".mobile-menu-items")

mobileMenuBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('hidden')

})
mobileMenuItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        mobileMenu.classList.toggle('hidden')
    })
})