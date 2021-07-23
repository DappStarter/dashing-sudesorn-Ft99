require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note soccer prosper grace opinion symptom tail'; 
let testAccounts = [
"0xaaa09107b32ff671de4498263126274a0babcf8cd1cc625289610c71b0979a21",
"0x47a5a6589258731c72a025ad02b3c068e07bdfe87b147001629352b2b508e61a",
"0xc781d7583258cde97ca6d78a736d38609691749264b62ef73e120168034aa091",
"0x83475203428622c4bc829271a3ca6aafe6280aca9512cbdc4a46277ba0a17840",
"0xb3ac5385ac6803547e49418cd551bc937472d444daf57db4d1ec2929df507a88",
"0x8add3b9495e73e68538a5a7bd98b22f1826428b131cee137363b29dafe5cdd81",
"0x4bcaa0de05ed8be501d0d745d8d98f21e97eaeda42d4f6a3e0ea00490df38ccd",
"0x4e74c0fc643a45ef4ecd35d002f40157decbc38e7be3b1fe4262a6bba6f4469d",
"0x2674a21647b94c6770e39be6d39e27afdf1d91a0d0e2bb301c09f48e1d4ae6b2",
"0x5cffb6b41a4029778cb3f77e6e3927ddff435cad4a69d9618f01beaabbb044c1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

