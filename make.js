// 03. 메타데이터 같은 내용으로 대량 생성용 기능. (리빌 전 메타데이터 생성용)
// 1) 현재 파일 안에 원하는 메타데이터를 입력한다.
// 2) node make.js를 실행하면 json 폴더 안에 파일들이 생성된다. 끝.

var fs = require('fs');

for (var i = 1; i < 10001; i++) {
    const metadata = {
        name: `Test #${i}`,
        description: "Test",
        image: `ipfs://QmWZM72v9EAWtiZTF9zdEKZZvsKg5GKaPWLhG9inffcUuJ/${i}.jpg`,
      }
      
      const metadataJSON = JSON.stringify(metadata);
      fs.writeFileSync(`./json/${i}.json`, metadataJSON)
      console.log(i)
}

