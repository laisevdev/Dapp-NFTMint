const main = async () => {
    const [deployer] = await ethers.getSigners();
  console.log("Deploy do contrato com a conta:", deployer.address);

  const token = await ethers.deployContract("MyNFT");
  console.log("Endereço do Contrato:", await token.getAddress());
    // Chama a função.
    const mintAmount = 1;
    const uri = "https://ipfs.io/ipfs/bafybeihtixxgkce64vg6fe32v2knumoprw24qje543mvoroirenbjnjrxi/";
    let mintjpg = await token.mint(mintAmount, uri, {
      value: BigInt("10000000000000000") * BigInt(mintAmount),
    });
    console.log("Cunhando...espere por favor.")

    // Espera ela ser minerada.
    await mintjpg.wait();
    console.log("1-NFT MINTADO", mintjpg, mintAmount, uri)
    console.log("NFT Cunhado, veja o hash da transação", mintjpg.hash) 


    await mintjpg.wait();
    console.log("2-NFT MINTADO", mintjpg, mintAmount, uri)
    console.log("2-NFT Cunhado, veja o hash da transação", mintjpg.hash) 
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