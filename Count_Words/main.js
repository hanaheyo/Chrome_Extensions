document.querySelector("#user").addEventListener("change", () => {

    // get value from the textarea
    const user = document.querySelector("#user").value;

    // execute Javascript on chrome tabs
    chrome.tabs.executeScript({
        code: ' document.querySelector("body").innerText'
    }, function (result) {
        // code가 실행된 후 그 return값이 function에 담겨서 실행된다.
        let bodyText = result[0];
        let bodyNum = bodyText.split(" ").length;
        let myNum = bodyText.match(new RegExp('\\b(' + user + ')\\b', 'gi')).length;
        let per = myNum / bodyNum * 100;
        per = per.toFixed(2);
        // id값이 result인 tag에 결과값을 넣는다.
        document.querySelector('#result').innerText = myNum + "/" + bodyNum + '(' + (per) + '%)';
    });
});