document.getElementById("btn-first-loop").onclick = () => {
    const ul = document.getElementById("ul-first-loop");

    for(let i = 0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = 'Im the ${i+1} element';
        ul.append(li);
    }
};

document.getElementById("btn-count-range").onclick = () => {
    const startNumber = parseInt(document.getElementById("txt-start").value);
    const endNumber = parseInt (document.getElementById("txt-end").value);
    const errorP = do

}