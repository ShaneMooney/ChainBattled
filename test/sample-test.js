const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("Chainbattles", function () {
  it("Should mint then return the stats of minted ERC721", async function () {
    const ChainBattles = await ethers.getContractFactory("ChainBattles");
    const chainBattles = await ChainBattles.deploy();
    await chainBattles.deployed();

    await chainBattles.mint();
    test = await chainBattles.ownerOf(1);
    console.log(test);
    console.log(await chainBattles.getTokenURI(1));

    levels = await chainBattles.getLevels(1);
    console.log(levels['level'].toNumber());
    
    await chainBattles.train(1);
    level = await chainBattles.getLevels(1);
    console.log(level['level'].toNumber());

    console.log(await chainBattles.getTokenURI(1));

  });
});
