function reverse(text) {
    let revTxt = "";
    for (var i = text.length-1; i >= 0; i--) {
        revTxt = revTxt + text.charAt(i);
    }
    return revTxt;
}

console.log(reverse("I love Money"));
console.log(reverse("Hello, Good Bye"));