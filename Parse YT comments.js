v2 = document.querySelectorAll("ytd-comment-renderer#comment")
for (i = 0; i < v2.length; i++) {
    console.log(v2[i].children[0].children[1].children[1].innerText)
}

v = $x("//ytd-comment-renderer[@id='comment']")
