const input = document.querySelector("#in1");
const btn = document.querySelector("#btn");
const box = document.querySelector("#box");
input.addEventListener("input", (e) => {
  let x = e.target.value;
  if (e.target) {
    if (
      btn.addEventListener("click", (e) => {
        if (e.target) {
          box.innerHTML = `<b>${x}</b>`;
          document.body.append(box);
        }
      })
    ) {
    }
  }
});
btn.addEventListener("click", () => {
  console.log("btn clicked");
});
