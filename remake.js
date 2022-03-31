// 05. 메타데이터 안의 내용 수정하는 기능.
// 1) 현재 파일 안에 원하는 메타데이터를 입력한다.
// 2) node remake.js를 실행하면 metadatas 폴더 안에 파일들이 수정된다. 끝.

function delay(item) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        const fs = require('fs')
        fs.readFile(`./metadatas/${item}.json`, 'utf8', function(err, data) {
            const obj = JSON.parse(data)
                const metadata = { //수정하고자 하는 내용으로 입력
                    name: obj.name,
                    description: obj.description,
                    image: `https://주소주소`,
                    attributes: obj.attributes,
                }
            
            // 수정된 내용 기준 메타데이터 새로 생성
            const metadataJSON = JSON.stringify(metadata);
            fs.writeFileSync (`./metadatas/new/${item}.json`, metadataJSON)
            console.log(`${item} 수정완료`)
            });
        resolve();
        },100)
    })
}
    
async function test(array) {
for(let i=0; i< array.length; i++){
    await delay(array[i]);
}
console.log('끝');
}

const arrayed = [0,1,2,3,4]; //수정할 메타데이터 번호 배열로 입력

test(arrayed);