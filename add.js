// 04-1. 넘버링 png 만드는 기능
// 1) [천][백][십] 먼저 조합한다.

var images = require("images");
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10 ; j++) {
        images(`./number/red/red${i}.png`).draw(images(`./number/blue/blue${j}.png`)).save(`./number/draft/${i}${j}.png`);
        for (var k = 0; k < 10 ; k++) {
            images(`./number/draft/${i}${j}.png`).draw(images(`./number/yellow/yellow${k}.png`)).save(`./number/draft/${i}${j}${k}.png`);
            console.log(`${i}${j}${k}`)
            // for (var l = 0; l < 10 ; l++) {
            //     images(`./output/${i}${j}${k}.png`).draw(images(`./number/green/green${l}.png`)).save(`./output/${i}${j}${k}${l}.png`);
            //     console.log(`${i}${j}${k}${l}`)
            // }
        }
    }
}
