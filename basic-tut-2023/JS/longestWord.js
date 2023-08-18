let para1 = "Cringe (चापलूसी), To feel ashamed or embarrassed by what someone else is doing or saying.";
let para2 = "Awedde overcome with anger, madness, or distress";

function longestWord(para) {
    document.getElementById('para').innerHTML = para;
    document.getElementById('para').style.color = "blue";
    let longestEle;
    para = para.split(" ");
    let oldLength = 0;
    para.forEach((element) => {
        if (element.length > oldLength) {
            oldLength = element.length;
            longestEle = element;
        }
    });
    document.getElementById('para1').innerHTML = longestEle;
    document.getElementById('para1').style.color = "#00dd00";
    document.getElementById('para1').style.fontWeight = "bold";
}

function longestWordClick1() {
    document.getElementById('para2').innerHTML = '';
    longestWord(para1);
}
function longestWordClick2() {
    document.getElementById('para2').innerHTML = '';
    longestWord(para2);
}


// https://www.youtube.com/watch?v=yG03EvfHSIU&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA&index=1
let para3 = "Shero:	a woman admired or idealised for her courage, outstanding achievements, or noble qualities; a heroine"

function longestWordOne(para) {
    document.getElementById('para').innerHTML = para;
    document.getElementById('para').style.color = "red";
    let longestEleOne = "";
    let words = para.split(" ");
    for (let word of words) {
        if (word.length > longestEleOne.length) {
            longestEleOne = word
        }
    }
    document.getElementById('para1').innerHTML = longestEleOne;
    document.getElementById('para1').style.color = "green";
    document.getElementById('para1').style.fontWeight = "bold";
    return longestEleOne;
}
function longestWordClick3() {
    longestWordOne(para3);

    // setTimeout(() => {
    //     document.getElementById('para2').innerHTML = 'setTimeOut Para 1';
    //     longestWord(para1);
    //     setTimeout(() => {
    //         document.getElementById('para2').innerHTML = 'setTimeOut Para 2';
    //         longestWord(para2);
    //         longestWordClick3();
    //     }, 2000)
    // }, 1000)

}

