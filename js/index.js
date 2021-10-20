function getinput() {
    // 输入框
    var input = document.getElementById('input').value;
    if (input === "") {
        alert('请您输入要解析的链接或片名');
    } else {
        // // 解析按钮
        var Resolve = document.getElementById("Resolve");
        var Resolve_source = document.getElementById("Resolve_source");
        var Parsing_url = Resolve_source.options[Resolve_source.selectedIndex].value;
        Resolve.href = ""+Parsing_url + input
    }
}