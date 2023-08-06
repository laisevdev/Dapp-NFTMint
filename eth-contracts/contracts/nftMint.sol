// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract MyNFT is ERC721URIStorage  {
    uint256 public id = 0;
    address public owner;
    uint256 priceTotal;
    uint256 public supplyNFT= 9;
    uint256 public price = 0.0001 ether;
    string baseUri = "https://ipfs.io/ipfs/bafybeihtixxgkce64vg6fe32v2knumoprw24qje543mvoroirenbjnjrxi/";

    using Strings for uint256;

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
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment(); 
            _safeMint(msg.sender, tokenId);      
            _setTokenURI(tokenId, uri);       
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