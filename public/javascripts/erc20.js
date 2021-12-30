var fs = require('fs')
//web3服务
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
//连接metamask
//检测浏览器是否安装matemask插件
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
ethereum.request({ method: 'eth_requestAccounts' });
let mkaccounts = [];
web3.eth.getAccounts().then(function(accounts){
    mkaccounts = accounts;
    console.log("metamask当前账号为：",mkaccounts[0]);
});
async function getAccounts(){
   mkaccounts = await ethereum.request({method: 'eth_requestAccounts'});
	const account = mkaccounts[0];
	console.log(account);
}
var abi = JSON.parse(fs.readFileSync("./myabi/ERC20_abi.json"));
var contractaddress = '0xBD441A29F3F218C05Eba035244D7cC4A82E337DE';
var erccontract = new web3.eth.Contract(abi,contractaddress);
console.log("erc20合约",erccontract);