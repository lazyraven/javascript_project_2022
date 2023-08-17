

function longestWord(para) {
    let longestEle;
    // para = [...para];
    para = para.split(" ");
    console.log("longestWord :: ", para);
    let oldLength = 0;
    para.forEach((element) => {
        console.log("element", element.length, oldLength)
        if (element.length > oldLength) {
            oldLength = element.length;
            longestEle = element;
        }
    });
    console.log("longestEle", longestEle);
}


longestWord("A paragraph made up of point transparent.");
// console.log(longestWord("Information to sustain three, four, or five sentences."));
