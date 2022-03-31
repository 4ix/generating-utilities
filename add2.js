// 04-2. 넘버링 png 만드는 기능
// 1) 조합된 [천][백][십] 에서 추가로 [일] 조합한다.
// 2) 컴퓨터 사양상 0~2, 2~4, 4~6, 6~8, 8~10 나눠서 해야함

var images = require("images");
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10 ; j++) {
        for (var k = 0; k < 10 ; k++) {
            for (var l = 6; l < 10 ; l++) {
                images(`./number/draft/${i}${j}${k}.png`).draw(images(`./number/green/green${l}.png`)).save(`./number/combiend/${i}${j}${k}${l}.png`);
                console.log(`${i}${j}${k}${l}`)
            }
        }
    }
}
