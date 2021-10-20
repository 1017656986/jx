function getinput() {
    var res = document.getElementById('input').value;
    if (res == "") {
        alert('请您输入要解析的链接或片名');
    } else {
        var url = document.getElementById("jx");
        url.href = "https://z1.m1907.cn/?jx=" + res;
    }
}