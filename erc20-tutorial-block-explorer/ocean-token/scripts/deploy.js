const hre = require("hardhat");

async function main() {
  const Devflovv = await hre.ethers.getContractFactory("DevflovvToken");
  const devToken = await Devflovv.deploy(100000000, 50);

  await devToken.deployed();

  console.log("Ocean Token deployed: ", devToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
