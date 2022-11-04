const songRows = document.querySelectorAll("tr");
const fullList = document.querySelector("table");

const deleteBtn = document.querySelectorAll(".btn-danger");

// const deleteAsongRow = function () {
//   for (let i = 1; i < songRows.length; i++) {
//     fullList.deleteRow(deleteAsongRow[i]);
//   }
// };

const removerow = function () {
  for (let btn of deleteBtn) {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.remove(0);
    });
  }
};
removerow();
