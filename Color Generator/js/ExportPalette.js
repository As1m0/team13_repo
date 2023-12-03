//Export colors
buttonExport.addEventListener("click", function () {
    //put saved color codes in array
    let colors = [];
    for (let i = (document.getElementById("saved-color-wrapper").children.length); i !== 0; i--) {
        colors[i - 1] = (document.querySelector("#saved-color-wrapper :nth-child(" + i + ")").innerHTML);
    };

    // modify & remove html elements
    sleep(3000).then(() => { colorSing.style.filter = "opacity(0)"; });
    buttonExport.style.display = "none";
    buttonReset.style.display = "block";
    document.body.style.backgroundColor = "#2e2d2e";
    colorSing.innerHTML = "Color codes are copied to your clipboard!";
    colorSing.style.color = "#65d23b";
    previous.style.display = "none";
    next.style.display = "none";
    button.style.display = "none";
    buttonSave.style.display = "none";

    exported = true;

   //test secure
   console.log(window.isSecureContext);
   if (window.isSecureContext) {
     console.log(
       'The context is secure, can use navigator.clipboard',
     );
   } else {
     console.log('The context is NOT secure');
   }


    //copy array element to the clipboard
   // navigator.clipboard.writeText(colors);
    navigator.clipboard
    .writeText(colors)
    .then(() => {
      console.log('The text has been copied');
    });
});