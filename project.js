const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");
const errorMessage = document.getElementById("errorMessage");

let total = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("expenseName").value;
  if (!/^[A-Za-z ]+$/.test(name)) {
  errorMessage.textContent = "Expense name should contain letters only";
  return;
}
  const amount = document.getElementById("expenseAmount").value;

  
  if (name === "" || amount === "") {
    errorMessage.textContent = " All fields are required";
    return;
  }

  if (amount <=-1) {
    errorMessage.textContent = " Amount must be greater than zero";
    return;
  }

  errorMessage.textContent = "";

  const li = document.createElement("li");
  li.textContent = `${name} - $${amount}`;
  expenseList.appendChild(li);

  total += Number(amount);
  totalAmount.textContent = total;
  alert(`Expense Added:\nName: ${name}\nAmount: $${amount}\nTotal: $${total}`);
  form.reset();
});


