// let web3 = new Web3('ws://localhost:8546')
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
console.log("web3",web3);

var mkaccounts = [];
var msgsender ='0xbA1b68f19d439752679F56cCF924aa4c6AB6D345'
web3.eth.getAccounts().then(function(accounts){
    mkaccounts = accounts;
    $("#mkaccount").html(mkaccounts[0]);
});

ethereum.on('accountsChanged', (_accounts) => window.location.reload());

var ercabi =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDEscimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
//实例化一个合约
var ercContract = new web3.eth.Contract(ercabi,'0x3A2AC845861cA342cb5Fbcc44AA23cF8aEd8917F');
console.log('myContract==>',ercContract);

//授权代币
$('#approve').click(function(){
    var spender = '0xecC3bc2BE251c0FE0cd55c2352D076EF77b757ff';
    var amount = '2000000000'
    ercContract.methods.approve(spender,amount).send({
        from:mkaccounts[0],
    }).on('transactionHash', function(hash){
        console.log(hash)
    })
    .on('receipt',function(receipt){
        alert("授权成功")
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log(receipt)
    }).on('error',function(error){
        console.log(error)
    })
});

//判断当前账号是否授权该网站
$('#lend').click(function(){
    var owner = mkaccounts[0];
	var spender = '0xecC3bc2BE251c0FE0cd55c2352D076EF77b757ff'
    ercContract.methods.allowance(owner,spender).call().then((result)=>{
		console.log("返回值",result)
		if(result == 0){
			alert("请先授权该网站")
			window.location.reload("/")
		}
	})
});
$('#borrow').click(function(){
    var owner = mkaccounts[0];
	var spender = '0xecC3bc2BE251c0FE0cd55c2352D076EF77b757ff'
    ercContract.methods.allowance(owner,spender).call().then((result)=>{
		if(result == 0){
			alert("请先授权该网站")
			window.location.reload("/")
		}
	})
});
var pumpabi =[
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "_erc20",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tital",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethPledge",
				"type": "uint256"
			}
		],
		"name": "addGoodsEvnt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tital",
				"type": "string"
			}
		],
		"name": "addNoticeEvnt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			}
		],
		"name": "addStickerEvnt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "askAddress",
				"type": "address"
			}
		],
		"name": "askAddStickEvnt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			}
		],
		"name": "borrowGoodsEvnt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			}
		],
		"name": "returnGoodsEvnt",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ethPledge",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tital",
				"type": "string"
			}
		],
		"name": "addGoods",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tital",
				"type": "string"
			}
		],
		"name": "addNotice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			}
		],
		"name": "addSticker",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allGoods_lijiebing",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "ethPledge",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "available",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isBorrow",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "exist",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "tital",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "askAddress",
				"type": "address"
			}
		],
		"name": "askAddStick",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_pledge",
				"type": "uint256"
			}
		],
		"name": "borrowGoods",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			}
		],
		"name": "doGoodsReturn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getAccountERCBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getERCBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			}
		],
		"name": "isGoodExist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			}
		],
		"name": "isGoodsAvailable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			}
		],
		"name": "isGoodsLend",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			}
		],
		"name": "isStickExist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "queryBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			}
		],
		"name": "queryBorrower",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			}
		],
		"name": "queryPledge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			}
		],
		"name": "queryTital",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stickName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "inx",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "available",
				"type": "bool"
			}
		],
		"name": "setGoodsStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var pumpaddress = '0xecC3bc2BE251c0FE0cd55c2352D076EF77b757ff'
var pumpContract = new web3.eth.Contract(pumpabi,pumpaddress);
console.log("pumpcontract===>",pumpContract)

//添加贴纸
$('#btn_addstick').click(function(){
    var stickname= $('#stickName').val();
    console.log(stickname)
	if (mkaccounts[0]!= msgsender) {
		alert("您没有权限添加贴纸")
	}
    else{
		pumpContract.methods.addSticker(stickname).send({
			from:mkaccounts[0],
		}).on('transactionHash', function(hash){
			console.log(hash)
		})
		.on('receipt',function(receipt){
			alert("添加成功")
		})
		.on('confirmation', function(confirmationNumber, receipt){
			console.log(receipt)
		}).on('error',function(error){
			alert("添加失败")
			console.log(error)
		})
	}
});
//查询贴纸是否存在
$('#lend_btn_isExistStick').click(function(){
    var lend_stickName_isExistStick = $('#lend_stickName_isExistStick').val();
    console.log(lend_stickName_isExistStick);
    pumpContract.methods.isStickExist(lend_stickName_isExistStick).call().then(function(receipt){
        $('#lend_isStickExit_result').html(receipt);
		alert(receipt)
    });
});

//查询商品是否出借
$('#lend_btn_isGoodsLend').click(function(){
    var lend_stickName_isGoodsLend = $('#lend_stickName_isGoodsLend').val();
    var lend_idx_isGoodsLend = $('#lend_idx_isGoodsLend').val();
    console.log(lend_stickName_isGoodsLend,lend_idx_isGoodsLend);
    pumpContract.methods.isGoodsLend(lend_stickName_isGoodsLend,lend_idx_isGoodsLend).call().then(function(receipt){
        $('#lend_isGoodsLend_result').html(receipt)
		alert(receipt)
    });
});

//查询商品是否上架
$('#lend_btn_isGoodsAvailable').click(function(){
    var lend_stickName_isGoodsAvailable = $('#lend_stickName_isGoodsAvailable').val();
    var lend_idx_isGoodsAvailable = $('#lend_idx_isGoodsAvailable').val();
    console.log(lend_stickName_isGoodsAvailable,lend_idx_isGoodsAvailable);
    pumpContract.methods.isGoodsAvailable(lend_stickName_isGoodsAvailable,lend_idx_isGoodsAvailable).call().then(function(receipt){
        alert(receipt)
    });
});

//查看商品是否存在
$('#lend_btn_isGoodExist').click(function(){
    var lend_stickName_isGoodExist = $('#lend_stickName_isGoodExist').val();
    var lend_idx_isGoodExist = $('#lend_idx_isGoodExist').val();
    console.log(lend_stickName_isGoodExist,lend_idx_isGoodExist);
    pumpContract.methods.isGoodExist(lend_stickName_isGoodExist,lend_idx_isGoodExist).call().then(function(receipt){
        alert(receipt)
    });
});

//添加商品
$('#btn_borrow_addgoods').click(function(){
    var borrow_stickName = $('#borrow_stickName').val();
    var borrow_pledge = $('#borrow_pledge').val();
    var borrow_tital = $('#borrow_tital').val();
    console.log(borrow_stickName,borrow_pledge,borrow_tital);
    pumpContract.methods.addGoods(borrow_stickName,borrow_pledge,borrow_tital).send({
        from:mkaccounts[0],
    })
    .on('receipt',function(receipt){
        alert("添加成功")
        console.log(receipt.events.addGoodsEvnt.returnValues[1],receipt.events.addGoodsEvnt.returnValues[2]);
        $('#borrow_setGoodsStatus_stickName').val(receipt.events.addGoodsEvnt.returnValues[1]);
        $('#borrow_setGoodsStatus_idx').val(receipt.events.addGoodsEvnt.returnValues[2]);
        $('#borrow_setGoodsStatus_tital').val(receipt.events.addGoodsEvnt.returnValues[3]);
        
    })
    .on('confirmation',function(confirmation,receipt){
        console.log("confirmation confirmationHash",confirmationNumber);
        console.log("confirmation receipt",receipt)
        
    })
    .on('transactionHash',function(hash){
        console.log("transationHash",hash)
    })
});

//设置物品上架状态
$('#isGoodsAvailable').click(function(){
    var borrow_setGoodsStatus_stickName = $('#borrow_setGoodsStatus_stickName').val();
    var borrow_setGoodsStatus_idx = $('#borrow_setGoodsStatus_idx').val();
    var borrow_setGoodsStatus_tital = $('#borrow_setGoodsStatus_tital').val();
    pumpContract.methods.setGoodsStatus(borrow_setGoodsStatus_stickName,borrow_setGoodsStatus_idx,borrow_setGoodsStatus_tital).send({
        from:mkaccounts[0]
    })
    .on('receipt',function(receipt){
        console.log("receipt",receipt)
		alert("上架成功")
        
    })
    .on('transactionHash',function(hash){
        console.log("transationHash",hash)
    })
});

//出借商品
$('#btn_lend_borrowgoods').click(function(){
    var lend_stickName = $('#lend_stickName').val();
    var lend_inx = $('#lend_inx').val();
    var lend_pledge = $('#lend_pledge').val();
    console.log(lend_stickName,lend_pledge,lend_inx)
    pumpContract.methods.borrowGoods(lend_stickName,lend_inx,lend_pledge).send({
        from:mkaccounts[0],
    }).on('receipt',function(receipt){
        console.log("receipt",receipt)
		alert("成功借出")  
    })
    .on('transactionHash',function(hash){
        console.log("transationHash",hash)
    })
});

//设置归还
$('#doGoodsReturn').click(function(){
    var borrow_doGoodsReturn_stickName= $('#borrow_doGoodsReturn_stickName').val();
    var borrow_doGoodsReturn_idx = $('#borrow_doGoodsReturn_idx').val();
    pumpContract.methods.doGoodsReturn(borrow_doGoodsReturn_stickName,borrow_doGoodsReturn_idx).send({
        from:mkaccounts[0],
    }).on('receipt',function(receipt){
        alert("设置成功")
        
    })
    .on('error',function(error){
        console.log(error)
    })
});

//添加到公告栏
$('#addNoticeEvnt').click(function(){
	var borrow_addNoticeEvnt_stickName = $('#borrow_addNoticeEvnt_stickName').val();
	var borrow_addNoticeEvnt_idx = $('#borrow_addNoticeEvnt_idx').val();
	var borrow_addNoticeEvnt_tital = $('#borrow_addNoticeEvnt_tital').val();
	pumpContract.methods.addNotice(borrow_addNoticeEvnt_stickName,borrow_addNoticeEvnt_idx,borrow_addNoticeEvnt_tital).send({
		from:mkaccounts[0],
	}).on('receipt',function(receipt){
        alert("添加成功")
        
    })
    .on('error',function(error){
		alert("添加失败")
        console.log(error)
    })
})
//查询当前账号的erc20余额
$('#getAccountERCBalance').click(async function(){
	var account = mkaccounts[0];
	pumpContract.methods.getAccountERCBalance(account).call().then(function(receipt){
		$('#AccountERC20Balance').html(receipt)
	})
})
//出借页面的添加物品记录
pumpContract.events.addGoodsEvnt({
     filter: {myOtherIndexedParam:mkaccounts[0]}, 
     fromBlock: 0,
    toBlock: 'latest'
    }, 
    function(error, event){ 
	var data = event.returnValues;
    $('#borrow_doGoodsReturn_stickName').val(data[1]);
    $('#borrow_doGoodsReturn_idx').val(data[2]);
	for(i in data){
		str = "<tr><td>" +data[1]+"</td><td>" + data[2] +"</td><td>"+data[3] + "</td><td>" +"</td></tr>";	
	}
	$('#tab').append(str)
});
pumpContract.events.addStickerEvnt({
	filter: {myOtherIndexedParam:mkaccounts[0]}, 
     fromBlock: 0,
    toBlock: 'latest'
	},
	function(error,event){
		var addstickevent = event.returnValues;
		for(i in addstickevent){
			str = "<tr><td>" +addstickevent[1]+"</td></tr>";	
		}
		$('#sticktab').append(str)
	});

pumpContract.events.addGoodsEvnt({
	 fromBlock: 0,
	toBlock: 'latest'
	},
	function(error,event){
		var addGoodsEvnt = event.returnValues;
		console.log("aaa",addGoodsEvnt)
		for(i in addGoodsEvnt){
				str = "<tr><td>" +addGoodsEvnt[1]+"</td><td>"+addGoodsEvnt[2]+"</td><td>"+addGoodsEvnt[3]+"</td><td>"+addGoodsEvnt[4]+"</td></tr>";	
		}
		$('#addGoodslist').append(str)
});
pumpContract.events.addNoticeEvnt({
	fromBlock:0,
	toBlock:'latest'
},
    function(error,event){
		var addNoticeEvnt = event.returnValues;
		console.log(addNoticeEvnt)
		for(i in addNoticeEvnt){
			str = "<tr><td>" +addNoticeEvnt[1]+"</td><td>"+addNoticeEvnt[2]+"</td><td>"+addNoticeEvnt[3]+"</td></tr>";	
		}
		$('#addNoticelist').append(str)
	}
)

//查看
$('#lookover').click(function(){
	if(mkaccounts[0] == msgsender){
		pumpContract.events.askAddStickEvnt({
			fromBlock:0,
			toBlock:'latest'
		},
		function(error,event){
			var askAddstick = event.returnValues;
			for(i in askAddstick){
				str = "<tr><td>" +askAddstick[1]+"</td><td>"+askAddstick[2]+"</td></tr>";	
			}
			$('#askAddsticktab').append(str)
			$('#askAddStickDiv').show();
		}
		)
	}else{
		alert("您不是管理员无法查看")
	}	
})

//向管理员发送想添加的贴纸
$('#lend_btn_askaddstick').click(function(){
	var lend_stickName_askaddstick = $('#lend_stickName_askaddstick').val();
	var askaddress = mkaccounts[0];
	pumpContract.methods.askAddStick(lend_stickName_askaddstick,askaddress).send({
		from:mkaccounts[0]
	}).on('receipt',function(receipt){
        alert("添加成功")
        
    })
    .on('error',function(error){
		alert("添加失败")
        console.log(error)
    })
})


