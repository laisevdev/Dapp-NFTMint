const main = async () => {
    const [deployer] = await ethers.getSigners();
  console.log("Deploy do contrato com a conta:", deployer.address);

  const token = await ethers.deployContract("MyNFT");
  console.log("Endereço do Contrato:", await token.getAddress());
    // Chama a função.
    const mintAmount = 1;
    const uri = "https://ipfs.io/ipfs/Qmc2NJLkBumcL1G4VrYKn6b1rFm1EVvA7RHsh1TdqZTfXG/";
    let txn = await token.mint(mintAmount, uri, {
      value: BigInt("1000000000000000") * BigInt(mintAmount),
    });

    // Espera ela ser minerada.
    await txn.wait();
    console.log("1-", txn)

    await txn.wait();
    console.log("2-", txn)
  };

  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  runMain();