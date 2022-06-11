require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/312d3d2040ee4cf7bb3fefc4dc5a6201", //Infura url with projectId
            accounts: ["535b8f321b1dda7ad9336ce72b8087677aea6955d17c544309398d2e29e4a17e"] // add the account that will deploy the contract (private key)
        },
    }
};
