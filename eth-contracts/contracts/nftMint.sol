// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract MyNFT is ERC721URIStorage {
    uint256 public id;
    address public owner;
    uint256 priceTotal;
    uint256 public supplyNFT= 4;
    uint256 public price = 0.001 ether;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    

    modifier OnlyOwner () {
        require(msg.sender == owner);
        _;
}

    constructor() ERC721("noobNFT", "NOB") {
        owner = msg.sender;
    }

    function mint(uint256 amount, string memory uri) public payable {
        
        priceTotal = amount * price;
        require(amount + id <= supplyNFT, "Sold out" );
        require(msg.value == priceTotal, "Enough Balance");

        for(uint256 i =0; i < amount; i++) {
            id +=1;
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment(); 

            _safeMint(msg.sender, tokenId);         
            _setTokenURI(tokenId, uri);       
        }        
    }

    function supplyTotal() public view returns (uint256) {
        return id;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() external OnlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}