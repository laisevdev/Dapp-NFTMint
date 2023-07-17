const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();
  console.log("Deploy do contrato com a conta:", deployer.address);

  const token = await ethers.deployContract("MyNFT");
  console.log("Endereço do Contrato:", await token.getAddress());
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});