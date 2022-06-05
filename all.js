// es5 var
// es6 let const(宣告了之後就不可以再更改)
// es6 文字模板

let str = "";
let data1 = document.getElementById('portfolio');

let box = ['hello','kyrie','xxxx']
for(item in box){
    console.log(box[item]);
}

// 迴圈(for forEach for in)
// 渲染 
for(item in dataPortfolio){
    // ~
    str = 
    `
    <div class="portfolio_box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800"
                data-aos-once="true">
        <a href="${dataPortfolio[item].link}" target="_blank">
            <img src="./img/${dataPortfolio[item].img}" alt="">
            <div class="portfolio_data">
                <span class="data_title">${dataPortfolio[item].type}</span>
                <span class="data_main">${dataPortfolio[item].title}</span>
            </div>
        </a>
    </div>
    
    `
    // innerHTML 插入一段html
    data1.innerHTML += str ;


   
}




// console.log(dataPortfolio);
// console.log(dataPortfolio[0].title);
// console.log(dataPortfolio[0].type);
// console.log(dataPortfolio[0].title);
// console.log(dataPortfolio[0].link);

// console.log(dataPortfolio[1].img);
// console.log(dataPortfolio[1].type);
// console.log(dataPortfolio[1].title);
// console.log(dataPortfolio[1].link);



// let box = ['kyrie','jenny','json'];
// console.log(box);


