const songRows = document.querySelectorAll("tr");
const fullList = document.querySelector("table");

const deleteBtn = document.querySelectorAll(".btn-danger");

// const deleteAsongRow = function () {
//   for (let i = 1; i < songRows.length; i++) {
//     fullList.deleteRow(deleteAsongRow[i]);
//   }
// };

const removerow = function (i) {
  fullList.deleteRow(i);
};

// for (let i = 1; i < songRows.length; i) {
//   for (let button of deleteBtn) {
//     button.addEventListener("click", function () {
//       removerow();
//     });
//   }
// }
