function reverse(text) {
    let revTxt = "";
    for (var i = text.length-1; i >= 0; i--) {
        revTxt = revTxt + text.charAt(i);
    }
    return revTxt;
}

console.log(reverse("I love Money"));
console.log(reverse("Hello, Good Bye"));
console.log(reverse("문자열 거꾸로 출력하기."))