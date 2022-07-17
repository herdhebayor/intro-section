// DESKTOP MENU DROP DOWN
function feature(){
    let f_content = document.getElementById("feature_contd")
    if (f_content.style.display === 'none'){
        f_content.style.display = 'block'
        document.querySelector(".first1").style.display = 'none'
        document.querySelector(".second1").style.display ='unset'
    }
    else{
        f_content.style.display='none'
        document.querySelector(".first1").style.display = 'unset'
        document.querySelector(".second1").style.display ='none'
    }
}
function company(){
    let c_content = document.getElementById("company_contd")
    if (c_content.style.display === 'none'){
        c_content.style.display = 'block'
        document.querySelector(".first2").style.display = 'none'
        document.querySelector(".second2").style.display ='unset'
    }
    else{
        c_content.style.display='none'
        document.querySelector(".first2").style.display = 'unset'
        document.querySelector(".second2").style.display ='none'
    }
}
// ENDS
// MOBILE COLLAPSE MENU
function mobile_feature(){
    let f2_content = document.querySelector(".feature_contd")
    if (f2_content.style.display === 'none'){
        f2_content.style.display = 'block'
        document.getElementById("first1").style.display = 'none'
        document.getElementById("second1").style.display ='unset'
    }
    else{
        f2_content.style.display='none'
        document.getElementById("first1").style.display = 'unset'
        document.getElementById("second1").style.display ='none'
    }}

function mobile_company(){
    let c2_content = document.querySelector(".company_contd")
    if (c2_content.style.display === 'none'){
        c2_content.style.display = 'block'
        document.getElementById("first2").style.display = 'none'
        document.getElementById("second2").style.display ='unset'
    }
    else{
        c2_content.style.display='none'
        document.getElementById("first2").style.display = 'unset'
        document.getElementById("second2").style.display ='none'
    }}
    // ENDS

    // TO TRANSFORM THE COLLAPSE BUTTON AND THE NAV DIV TO BE DISPLAYED
    let open_btn = document.getElementById("collapse")
    let close_btn= document.getElementById("close_btn")
        let nav = document.querySelector(".drop")

    open_btn.addEventListener("click", function(){
        nav.style.display = "block"
            open_btn.style.display ="none"
            close_btn.style.display = "block"
    })
    close_btn.addEventListener("click", function(){
        close_btn.style.display="none"
        open_btn.style.display = "block"
        nav.style.display = "none"
    })
  