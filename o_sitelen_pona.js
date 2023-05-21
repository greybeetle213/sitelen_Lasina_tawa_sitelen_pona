font = "linjalipamanka"
optionsMenu = false

function openMenu(){
    optionsMenu = !optionsMenu
    if(optionsMenu){
        document.getElementById("options").style.display = "initial"
        document.getElementById("menuButton").innerHTML = "o lukin ala e nasin ante"
    }else{
        document.getElementById("options").style.display = "none"
        document.getElementById("menuButton").innerHTML = "o lukin e nasin ante"
    }
}

function ChangeFont(){
    //console.log("running")
    font = sel.value
    document.getElementById("output").style.fontFamily = sel.value
    document.getElementById("nasinsitelen").style.fontFamily = sel.value
    if(document.getElementById("input").value != ""){
        Start()
    }
    if(font == "selikiwen"){
        font = "fairfax"
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

function Init(){
    sel = document.getElementById('nasinsitelen');

    sel.addEventListener("change", ChangeFont);
}
function update_str(string, index, new_char) {
    var a_list;
    a_list = string.split("");
    a_list[index] = new_char;
    return a_list.join("");
    }

function Start(){
    document.getElementById("waitWarning").innerHTML = "mi ante e sitelen. o awen lon tenpo lili."
    setTimeout(MakeSitelenPona, 1)
}
function MakeSitelenPona(){
    var _pj;
    //console.log("started")
    var allWords, bestFit, containerGlyfs, currentFit, file, fineshedSpWord, nameToSP, nonContainableGlyfs, output, validWord, visualBestFit, weirdGlyfs;

    function _pj_snippets(container) {
    function in_es6(left, right) {
        if (right instanceof Array || typeof right === "string") {
        return right.indexOf(left) > -1;
        } else {
        if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
            return right.has(left);
        } else {
            return left in right;
        }
        }
    }

    container["in_es6"] = in_es6;
    return container;
    }

    _pj = {};

    _pj_snippets(_pj);

    containerGlyfs = ["anpa", "ijo", "jan", "kala", "kili", "kiwen", "ko", "lawa", "len", "lipu", "luka", "lupa", "mije", "nena", "pi", "pilin", "poka", "poki", "pona", "sitelen", "sona", "suno", "tomo", "toki", "tonsi", "walo", "wile"];
    nonContainableGlyfs = ["o", "anu", "e", "en", "kama", "kepeken", "la", "li", "lon", "pi", "tan", "tawa", "sama", "te", "to"];
    weirdGlyfs = ["luka"];
    allWords = ["a", "akesi", "ala", "alasa", "ale", "ali", "anpa", "ante", "anu", "awen", "en", "esun", "ijo", "ike", "ilo", "insa", "jaki", "jan", "jelo", "jo", "kala", "kalama", "kama", "kasi", "ken", "kepeken", "kili", "kin", "kiwen", "ko", "kon", "kule", "kulupu", "kute", "la", "lape", "laso", "lawa", "len", "lete", "lili", "linja", "lipu", "loje", "lon", "luka", "lukin", "lupa", "ma", "mama", "mani", "meli", "mi", "mije", "moku", "moli", "monsi", "mu", "mun", "musi", "mute", "nanpa", "nasa", "nasin", "nena", "ni", "nimi", "noka", "namako", "o", "oko", "olin", "ona", "open", "pakala", "pali", "palisa", "pan", "pana", "pi", "pilin", "pimeja", "pini", "pipi", "poka", "poki", "pona", "pu", "sama", "seli", "selo", "seme", "sewi", "sijelo", "sike", "sin", "sina", "sinpin", "sitelen", "sona", "soweli", "suli", "suno", "supa", "suwi", "tan", "taso", "tawa", "telo", "tenpo", "toki", "tomo", "tu", "uta", "utala", "walo", "wan", "waso", "wawa", "weka", "wile"];
    mastodon_Glyfs = ["a", "n", "mute", "e", "o"]
    file = document.getElementById("input").value
    if(document.getElementById("nasin").value==="allto<br>"){
        quotemarks = `\`“”""‘’''\``.split("")
        for(i=0; i<file.length;i++){
            if(quotemarks.includes(file[i])){
                console.log(i)
                if(file[i-1]!=" " && file[i-1]!="\n"){
                    file = file.replaceAt(i, "”XNEWLINEX")
                }else{
                    file = file.replaceAt(i, "“")
                }
            }
            if(usejqoutes){
                if(font == "Arial" || font == "linjapona"){
                    file = file.replaceAll("”", "」XNEWLINEX")
                    file = file.replaceAll("“", "「")
                }else{
                    file = file.replaceAll("”", "toXNEWLINEX")
                    file = file.replaceAll("“", "te ")
                }
            }
        }
        console.log(file)
        file = file.replaceAll("\n\n", "XNEWLINEXXNEWLINEX")
        file = file.replaceAll(" \n", " ")
        file = file.replaceAll("\n", " ")
        file = file.replaceAll("! ", "\n")
        file = file.replaceAll("? ", "\n")
        file = file.replaceAll(", ", " ")
        file = file.replaceAll(". ", "\n")
        file = file.replaceAll(": ", "\n")
        file = file.replaceAll("XNEWLINEX", "\n")
    }else{
        quotemarks = `\`“”""‘’''\``.split("")
        usejqoutes = document.getElementById("usejqoutes").checked
        if(!usejqoutes){
            for(i=0; i<file.length;i++){
                if(quotemarks.includes(file[i])){
                    console.log(i)
                    if(file[i-1]!=" " && file[i-1]!="\n"){
                        file = file.replaceAt(i, "”")
                    }else{
                        file = file.replaceAt(i, "“")
                    }
                }
            }
        } else if(font == "Arial" || font == "linjapona") {
            for(i=0; i<file.length;i++){
                if(quotemarks.includes(file[i])){
                    console.log(i)
                    if(file[i-1]!=" " && file[i-1]!="\n"){
                        file = file.replaceAt(i, " 」")
                    }else{
                        file = file.replaceAt(i, "「")
                    }
                }
            }
        }else{
            for(i=0; i<file.length;i++){
                if(quotemarks.includes(file[i])){
                    console.log(i)
                    if(file[i-1]!=" " && file[i-1]!="\n"){
                        file = file.replaceAt(i, " to")
                    }else{
                        file = file.replaceAt(i, "te ")
                    }
                }
            }
        }
    }
    file = file.replace(/ +(?= )/g,'')
    if(document.getElementById("nasin").value==="allto "){
        file = file.replaceAll("!", " ")
        file = file.replaceAll("?", " ")
        file = file.replaceAll(",", "")
        file = file.replaceAll(".", " ")
        file = file.replaceAll(":", " ")
    }
    if(document.getElementById("nasin").value === "allto."){
        file = file.replaceAll("!", ".")
        file = file.replaceAll("?", ".")
        file = file.replaceAll(",", "")
        file = file.replaceAll(",", "")


    }
    file.replaceAll("”", " ”")

    function splitMora(word) {
    var splitword;
    splitword = word.toLowerCase().split("");

    for (var letter = 0, _pj_a = splitword.length; letter < _pj_a; letter += 1) {
        if (letter >= splitword.length - 1) {
        break;
        }

        if (_pj.in_es6(splitword[letter], "ptksmnljw") && _pj.in_es6(splitword[letter + 1], "aeiou")) {
        splitword[letter] = splitword[letter] + splitword.splice(letter + 1,1)[0];
        }
    }

    return splitword;
    }

    for (var i = 0, _pj_a = file.length; i < _pj_a; i += 1) {
    if (!_pj.in_es6(file[i], "abcdefghijklmnopqrstuvqxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ     ")) {
        if (file[i - 1] !== " ") {
        file = update_str(file, i, " " + file[i]);
        i += 1;
        }

        if (i !== file.length && file[i + 1] !== " ") {
        file = update_str(file, i, file[i] + " ");
        }
    }
    }
    if("abcdefghijklmnopqrstuvqxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ     ".indexOf(file[file.length-1])==-1 && font == "Arial"){
        if(file[file.length-2]!=" "){
            file = file.replaceAt(file.length-1, " "+file[file.length-1])
        }
    }
    file = file.split(" ");
    if (font != "Arial"){
        for (var word = 0, _pj_a = file.length - 1; word < _pj_a; word += 1) {
            if (word >= file.length - 1) {
                break;
            }

            validWord = true; 
            
            if ((_pj.in_es6(file[word], containerGlyfs) && !_pj.in_es6(file[word + 1], nonContainableGlyfs))||font == "fairfax") {
                for (var letter, _pj_d = 0, _pj_b = file[word + 1], _pj_c = _pj_b.length; _pj_d < _pj_c; _pj_d += 1) {
                    letter = _pj_b[_pj_d];
                    if (!_pj.in_es6(letter, "ptksmnljwaeiou")) {
                        validWord = false;
                    }
                }
                if(file[word+1]=="ala" && file[word+2] == file[word]){
                    validWord = false
                }
                if(font == "fairfax" && FairfaxGlyfs.indexOf(file[word]+"-"+file[word+1]) == -1){
                    validWord = false
                }
                if ((!_pj.in_es6(file[word], weirdGlyfs)||font!="linjapona") && validWord) {
                file[word] = file[word] + "-" + file.splice(word + 1,1)[0];
                } else {
                    if (validWord) {
                        file[word] = file[word] + " -" + file.splice(word + 1,1)[0];
                    }
                }
            }
        }
    }else{
        for(word = 0; word < file.length; word++){
            validWord = true
            for (letter = 0; letter < file[word].length; letter++) {
                if (!_pj.in_es6(file[word][letter], "ptksmnljwaeiou")) {
                    validWord = false;
                }
            }
            if(validWord && !_pj.in_es6(file[word], mastodon_Glyfs)){
                file[word] = ":"+file[word]+":"
            }else if(validWord){
                file[word] = ":"+file[word]+"_:"
            }
        }
    }

    for (var word = 0, _pj_a = file.length; word < _pj_a; word += 1) {
        tpword = true
            for(letter = 0; letter < file[word].length; letter++){
                if("ptksmnljwaeiouPTKSMNLJWAEIOU.!?',:“”「」- _".indexOf(file[word][letter])==-1){
                    if(document.getElementById("makentpwordsbig").checked){
                        file[word] = file[word].toUpperCase()
                    }
                    tpword = false
                    break
                }
            }
            if(file[word].indexOf("-") == -1){
                for(morph = 0; morph < splitMora(file[word]).length; morph++){
                    if(splitMora(file[word])[morph].length == 1 && "aeiounAEIOU.!?',:“”「」- _".indexOf(splitMora(file[word])[morph])==-1){
                        if(document.getElementById("makentpwordsbig").checked){
                            file[word] = file[word].toUpperCase()
                        }
                        tpword = false
                        break
                    }
                }
            }
    if (file[word].toLowerCase() !== file[word] && tpword) {
        nameToSP = splitMora(file[word].toLowerCase());
        //console.log("word" + nameToSP.toString());
        fineshedSpWord = "";
        while (true) {
            bestFit = ["", 0];
            for (var dictanaryWord, _pj_d = 0, _pj_b = allWords, _pj_c = _pj_b.length; _pj_d < _pj_c; _pj_d += 1) {
                dictanaryWord = _pj_b[_pj_d];
                currentFit = 0;

                for (var Mora = 0, _pj_e = nameToSP.length; Mora < _pj_e; Mora += 1) {
                if (splitMora(dictanaryWord)[Mora] === nameToSP[Mora]) {
                    currentFit += 1;
                } else {
                    break;
                }

                if (currentFit === splitMora(dictanaryWord).length) {
                    break;
                }
                }

                if (currentFit === 0) {
                //console.log(nameToSP)
                if (dictanaryWord[0] === nameToSP[0][0]) {
                    currentFit = 0.5;
                }
                }

                if (currentFit > bestFit[1]) {
                bestFit[1] = currentFit;
                bestFit[0] = dictanaryWord;
                }
            }

            if (bestFit[1] === 0) {
                nameToSP.splice(0,1)        }

            if (bestFit[1] === 0.5) {
                if(font == "linjalipamanka" || font == "fairfax"){
                    fineshedSpWord += " " + bestFit[0];
                }else if(font == "linjapona"){
                    fineshedSpWord += "_" + bestFit[0];
                    
                }else if(font == "Arial"){
                    fineshedSpWord += ":" + bestFit[0]+":";
                }else if(font == "fairfax"){
                    
                }
                //console.log(nameToSP);
                nameToSP[0] = update_str(nameToSP[0], 0, "");
                //console.log(nameToSP);

                if (nameToSP[0] === "") {
                    nameToSP.splice(0,1)
                }
            }

            if (bestFit[1] > 0.5) {
                visualBestFit = bestFit[1];

                if (nameToSP[0].length === 1) {
                visualBestFit -= 1;
                }

                nameToSP = nameToSP.slice(bestFit[1]);

                if (bestFit[1]-1 < splitMora(dictanaryWord).length) {
                    switch(font){
                        case "linjapona":
                            fineshedSpWord += "_" + bestFit[0] + "_.".repeat(visualBestFit);
                            break
                        case "linjalipamanka":
                            fineshedSpWord += " " + bestFit[0] + ".".repeat(visualBestFit);
                            break
                        case "Arial":
                            fineshedSpWord += " :" + bestFit[0] + ": .".repeat(visualBestFit);
                            break
                        case "fairfax":
                            fineshedSpWord += " " + bestFit[0] + ".".repeat(visualBestFit);
                            break
                    }
                } else {
                    switch(font){
                        case "linjapona":
                            fineshedSpWord += "_" + bestFit[0] + "_:";
                            break
                        case "linjalipamanka":
                            fineshedSpWord += " " + bestFit[0] + " :";
                            break
                        case "Arial":
                            fineshedSpWord += " :" + bestFit[0] + ": :";
                            break
                        case "fairfax":
                            fineshedSpWord += " " + bestFit[0] + " ::";
                            break
                    }
                }
            }

            if (nameToSP.length == 0) {
                break;
            }
        }

        //console.log("[" + fineshedSpWord + "]");
        file[word] = "[" + fineshedSpWord + "]";
    }
    }
    //console.log(file)
    file = file.join(" ")
    //console.log(file)
    if(document.getElementById("nasin").value==="allto<br>"){
        file = file.replace(/ +(?= )/g,'')
    }
    file = file.replaceAll("\n ",'\n')
    document.getElementById("waitWarning").innerHTML = "pini"
    if (font == "Arial"){
        file.replaceAll(":ali:", ":ale:")
    }
    if(font == "fairfax"){
        file = file.replaceAll(".", "..")
    }
    document.getElementById("output").value = file;
}