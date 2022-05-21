//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder';

contract Vault is ERC721Holder {

    address payable public owner;

    constructor(address _owner) {
        owner = payable(_owner);
    }

    mapping (address => Donation) addressToDonation;

    struct Donation {
        
    }

    function acceptERC721Donation() public {

    }

    modifier onlyOwner() {
        require(msg.sender == owner, "OO0");
        _;
    }
}