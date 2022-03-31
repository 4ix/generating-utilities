// 01. generative art를 무작위 순서로 재배열 후 메타데이터를 새로 만드는 기능. (약 5분 소요, 1~10000)
// 1) 루트 폴더에 기존에 생성된 _metadata.json 파일을 복사하여 준비한다.
// 2) 루트 폴더에 기존에 생성된 images 폴더를 복사하여 준비한다.
// 3) images 폴더안에 rename 폴더를 생성한다.
// 4) 루트 폴더에 metadatas 폴더를 생성한다.
// 5) 현재 파일 안에 metadata 내용을 수정한다.
// 6) node reorder.js를 실행하면 rename 폴더안에 이미지 이름이 바뀐 파일명으로 이동된다.
// 7) metadatas 폴더 안에 새로 생성된다. 끝.


const fs = require('fs')
fs.readFile('./_metadata.json', 'utf8', function(err, data) {
const obj = JSON.parse(data)

var totalIndex = 100
var selectingNumber = 100

//중복 없이 번호 랜덤 생성
    let randomIndexArray = []
    for (i=0; i<selectingNumber; i++) {   //check if there is any duplicate index
      randomNum = Math.floor(Math.random() * totalIndex)
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum)
        // console.log(randomIndexArray[i])
        
        const metadata = {
          name: `#${randomIndexArray[i]}`,
          description: "The decentralized music NFT project.",
          image: `https://mintpang.com/chrisbrown01/images/${randomIndexArray[i]}.jpg`,
          attributes: obj[i].attributes,
        }

        // 새 폴더로 이동하면서 파일명 변경
        fs.rename(`./images/${i}.png`, `./images/rename/${randomIndexArray[i]}.png`, () => {
        });
        
        // 메타데이터 새로 생성
        const metadataJSON = JSON.stringify(metadata);
        fs.writeFileSync(`./metadatas/${randomIndexArray[i]}.json`, metadataJSON)
        console.log(`바뀐번호: ${randomIndexArray[i]} from 원래번호: ${i}`)

        const changedTXT = randomIndexArray.join(`\n`);
        fs.writeFileSync(`./changedNumber.txt`, changedTXT)

      } else { //랜덤 번호가 배열에 이미 존재할 때
        i--
      }
    }
});

