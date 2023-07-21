// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract MyNFT is ERC721 {
    uint256 public id;
    address public owner;
    uint256 priceTotal;
    uint256 public supplyNFT= 4;
    uint256 public price = 0.001 ether;
    string baseUri = "https://ipfs.io/ipfs/Qmc2NJLkBumcL1G4VrYKn6b1rFm1EVvA7RHsh1TdqZTfXG/";

    using Strings for uint256;

    modifier OnlyOwner () {
        require(msg.sender == owner);
        _;
}

    constructor() ERC721("noobNFT", "NOB") {
        owner = msg.sender;
    }

    function mint(uint256 amount) public payable {
        priceTotal = amount * price;
        require(msg.value == priceTotal, "Enough Balance");

        for(uint256 i =0; i < amount; i++) {
            id += 1;
            _safeMint(msg.sender, id);
        }
    }

    function supplyTotal() public view returns (uint256) {
        return id;
    }

    function uri() internal view virtual returns (string memory) {
        return baseUri;
    }

    function tokenURI(uint256 _id) public view virtual override returns (string memory) {
        string memory baseURI = uri();
        string memory json = ".json";
        
        return bytes(baseURI).length > 0 ? string.concat(baseURI, _id.toString(), json) : "Error";
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() external OnlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}