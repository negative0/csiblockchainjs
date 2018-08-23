const crypto = require('crypto-js/sha256');

class Block{
	constructor(index,timestamp,previousHash = '',data)
	{
		this.previousHash = previousHash;
		this.index = index;
		this.data = data;
		//this.hash = this.calculateHash();
		this.nonce = 0;
	}

	calculateHash(difficulty) {
		this.hash = crypto(this.index + this.timestamp + this.previousHash + this.data + this.nonce).toString();

		while(!this.hash.startsWith(new Array(difficulty+1).join("0"))){
			this.nonce++;
			this.hash = crypto(this.index + this.timestamp + this.previousHash + this.data + this.nonce).toString();
		}
	}
}

class Transaction{
	constructor(sender_address, receiver_address, amount )
}

class BlockChain{
	constructor(){
		this.blocks = [this.createGenesisBlock()];
		this.difficulty = 5;
	}
	createGenesisBlock(){
		return new Block(0, "20/08/2018", 0, "Genesis Block");
	}

	addBlock(newBlock){
		const previousBlock = this.blocks[this.blocks.length - 1];
		newBlock.calculateHash(this.difficulty);
		newBlock.previousHash = previousBlock.hash;
		this.blocks.push(newBlock);
	}

	getLatestBlock(){
		return this.blocks[this.blocks.length +1];
	}

	verify(){
		for(let i=1; i < this.blocks.length; i++){
			const currentBlock = this.blocks[i];
			const previousBlock = this.blocks[i-1];

			if(currentBlock.hash !== currentBlock.calculateHash()){
				return false;
			}

			if(previousBlock.hash !== currentBlock.previousHash){
				return false;
			}
		}
		return true;
	}

	display(){
		for(let i = 0;i < this.blocks.length;i++){
			console.log(JSON.stringify(this.blocks[i]));
			console.log("\n");
		}		
	}

}
// console.log(new Array(4).join("0"));
negativeBlockChain = new BlockChain();
console.log("Adding New Block");
negativeBlockChain.addBlock(new Block(1,"23/08/2018",'',{amount:100}));
console.log("Adding New Block");
negativeBlockChain.addBlock(new Block(2,"23/08/2018",'',{amount:200}));
negativeBlockChain.display();
