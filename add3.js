// 04-3. 넘버링 png 만드는 기능
// 1) 0000 ~ 0999.png 파일 이름을 0~999.png로 변경한다.

const fs = require('fs')

for (var i = 0; i < 10; i++) {
    fs.rename(`./number/combiend/000${i}.png`, `./number/combiend/${i}.png`, () => {
    });
    console.log(`000${i}`)
}

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        fs.rename(`./number/combiend/00${i}${j}.png`, `./number/combiend/${i}${j}.png`, () => {
        });
        console.log(`00${i}${j}`)
    }
}

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        for (var k = 0; k < 10; k++) {
            fs.rename(`./number/combiend/0${i}${j}${k}.png`, `./number/combiend/${i}${j}${k}.png`, () => {
            });
            console.log(`0${i}${j}${k}`)
        }
    }
}

