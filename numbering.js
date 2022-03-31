// 02. 최종적으로 만들어진 이미지에 추가로 넘버링 이미지 작업하는 기능.
// 1) original 폴더 안에 최종적으로 만들어진 이미지를 준비한다.
// 2) number 폴더 안에 넘버링 하고자 하는 이미지를 준비한다.
// 3) node numbering.js를 실행하면 final 폴더 안에 두 개의 이미지가 합쳐진 파일이 새로 생성된다. 끝.

var images = require("images");
for (var i = 1; i < 10001; i++) { // 2000개씩 나눠서 하는게 좋을듯함. 넘어가니 오류나는듯.
    images(`./images/rename/${i}.png`).draw(images(`./number/combiend/${i}.png`)).save(`./final/${i}.png`);
    console.log(i)
}
