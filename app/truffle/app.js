// var accounts;
// var account;
//
// function setStatus(message) {
//   var status = document.getElementById("status");
//   // status.innerHTML = message;
// };
//
// function refreshBalance() {
//   var meta = MetaCoin.deployed();
//
//   meta.getBalance.call(accounts[0], {from: account}).then(function(value) {
//     var balance_element1 = document.getElementById("balance1");
//     balance_element1.innerHTML = value.valueOf();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error getting balance 1; see log.");
//   });
//
//   meta.getBalance.call(accounts[1], {from: account}).then(function(value) {
//     var balance_element2 = document.getElementById("balance2");
//     balance_element2.innerHTML = value.valueOf();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error getting balance 2; see log.");
//   });
//
//   meta.getBalance.call(accounts[2], {from: account}).then(function(value) {
//     var balance_element3 = document.getElementById("balance3");
//     balance_element3.innerHTML = value.valueOf();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error getting balance 3; see log.");
//   });
// };
//
// function sendCoin() {
//   var meta = MetaCoin.deployed();
//
//   var amount = parseInt(document.getElementById("amount").value);
//   var receiver = document.getElementById("receiver").value;
//
//   setStatus("Initiating transaction... (please wait)");
//
//   meta.sendCoin(receiver, amount, {from: account}).then(function() {
//     setStatus("Transaction complete!");
//     refreshBalance();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error sending coin; see log.");
//   });
// };
//
// window.onload = function() {
//   web3.eth.getAccounts(function(err, accs) {
//     if (err != null) {
//       alert("There was an error fetching your accounts.");
//       return;
//     }
//
//     if (accs.length == 0) {
//       alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
//       return;
//     }
//
//     accounts = accs;
//     account = accounts[0];
//     // var account_element1= document.getElementById("account0");
//     // account_element1.innerHTML = accounts[0];
//     // var account_element2= document.getElementById("account1");
//     // account_element2.innerHTML = accounts[1];
//     // var account_element3= document.getElementById("account2");
//     // account_element3.innerHTML = accounts[2];
//
//     refreshBalance();
//   });
// }
