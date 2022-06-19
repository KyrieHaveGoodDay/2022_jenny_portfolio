// es5 var
// es6 let const(宣告了之後就不可以再更改)
// es6 文字模板

// let str = "";
// let data1 = document.getElementById('portfolio');

// let box = ['hello','kyrie','xxxx']
// for(item in box){
//     console.log(box[item]);
// }

// // 迴圈(for forEach for in)
// // 渲染 
// for(item in dataPortfolio){
//     // ~
//     str = 
//     `
//     <div class="portfolio_box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800"
//                 data-aos-once="true">
//         <a href="${dataPortfolio[item].link}" target="_blank">
//             <img src="./img/${dataPortfolio[item].img}" alt="">
//             <div class="portfolio_data">
//                 <span class="data_title">${dataPortfolio[item].type}</span>
//                 <span class="data_main">${dataPortfolio[item].title}</span>
//             </div>
//         </a>
//     </div>
    
//     `
//     // innerHTML 插入一段html
//     data1.innerHTML += str ;


   
// }


// nav
let nav_title ='作品集';
let nav_from = '表單';
// 啟動
// nav_component(nav_title,'main_nav')
// nav_component(nav_from,'main_from_nav')


function nav_component(title,divId){
    // id
    let main_nav = document.getElementById(divId);

    // nav資訊

    let nav_github = 'https://www.youtube.com/';
    let nav_fb = 'https://www.iconfinder.com/';
    let nav_line = 'https://unsplash.com/';
    let nav_html = '';
    nav_html = `
    
        <div class="logo">
            <a href="./index.html">Kyrie</a>
        </div>
        <div class="nav_title">${title}</div>
        <div class="abut_icon">
            <a href="${nav_github}" target="_blank"><img src="./img/github.png" alt=""></a>
            <a href="${nav_fb}" target="_blank"><img src="./img/fb.png" alt=""></a>
            <a href="${nav_line}" target="_blank"><img src="./img/line.png" alt=""></a>
        </div>
        <img id="menu" class="menu" src="./img/menu.png" alt="">
    
    `
    // 渲染回頁面上
    main_nav.innerHTML = nav_html
    
}

