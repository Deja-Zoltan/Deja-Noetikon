// Cover Function
{
    let cover = document.getElementById('cover');
    let nav = document.getElementById('nav');
    let homebg = document.getElementById('background');
    let mando = document.getElementById('mando-img');
    let darkside = document.getElementById('darkside-img');
    let mandotext = document.getElementById('mando-text');
    let codetext = document.getElementById('code');
    let codelabel = document.getElementById('label-code');
    let codebutton = document.getElementById('submit-button');

    function coverClick1() {
        cover.style.backgroundColor = 'rgba(1, 1, 1, 1)';
        mandotext.style.opacity = '1';
        mandotext.style.visibility = 'visible';
        darkside.style.opacity = '0';
        darkside.style.visibility = 'hidden';
    }
    function coverClick2() {
        codetext.style.opacity = '1';
        codelabel.style.opacity = '1';
        codetext.style.visibility = 'visible';
        codelabel.style.visibility = 'visible';
        codebutton.style.opacity = '1';
        codebutton.style.visibility = 'visible';
        mando.style.opacity = '0';
        mando.style.visibility = 'hidden';
    }
    function checkCode() {
        let text = codetext.value;
        if (text == "coffee") {
            cover.style.backgroundColor = 'rgba(1, 1, 1, 0)';
            darkside.style.opacity = '0';
            darkside.style.visibility = 'hidden';
            codetext.style.opacity = '0';
            codelabel.style.opacity = '0';
            codetext.style.visibility = 'hidden';
            codelabel.style.visibility = 'hidden';
            codebutton.style.opacity = '0';
            codebutton.style.visibility = 'hidden';
            homebg.style.filter = 'blur(0px)';
        } else {
            cover.style.backgroundColor = 'rgba(1, 1, 1, 1)'
            mandotext.style.opacity = '1';
            mandotext.style.visibility = 'visible';
            darkside.style.opacity = '0';
            darkside.style.visibility = 'hidden';
            codetext.style.opacity = '0';
            codelabel.style.opacity = '0';
            codetext.style.visibility = 'hidden';
            codelabel.style.visibility = 'hidden';
            codebutton.style.opacity = '0';
            codebutton.style.visibility = 'hidden';
        }
    }
}