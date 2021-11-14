require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strategy rival outside proof hunt kangaroo army gauge'; 
let testAccounts = [
"0x2df492203cbe8f89f301c2a23508919be93a9e6abaa40b627d0c604ff3d1fd1c",
"0xb0a83ea53d6c13da56e03cc2df8cacda3d37066160af8371d257243f1c3e3ddf",
"0xff6ea7ce35ea755d1c3ff714010d861c160154a8299dff28f577bff4564b5f10",
"0xf95ba1a5bd9fdbd36997014c9dded517ef1d2bb200c72b42b0d6cde01ac0aac0",
"0x4f3889a4f7a3b35388874f7c2c38a5fce012c5dde97dc5f68d33693314a2fbd9",
"0xd24ea3ff0ccbe453af3609ed40695fda1ec6a0532c6df32866729afff63fbd3b",
"0x2ccd470755f0861da23b0ff6984ead5d78010409aa180f26d100aee8ed48743a",
"0xae06c89b5316b3a42274c9087388a068b4a61d2d3a58a2aa7399504bd8508109",
"0x1611ad29577bbd373c33bbb497c2bd12fa9a083b4527c8d7cc7ff844cd8bd588",
"0xec1c3081e582d0e5baae6a0a7c24426761443761504649cef3a946c25c156f4d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


