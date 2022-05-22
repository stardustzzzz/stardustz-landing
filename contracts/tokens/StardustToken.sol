//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StardustToken is ERC20, Ownable {

    constructor() ERC20("StardustToken", "SDT") {}

    function issueToken(address reciever, uint256 amount) public onlyOwner {
        _mint(reciever, amount);
    }
}
