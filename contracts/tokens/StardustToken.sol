//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@opoenzeppelin/contracts/access/Ownable.sol";

contract StardustToken is ERC20, Ownable {

    constructor() ERC20("StardustToken", "SDT") {}

    function issueToken(address reciever, uint256 amount) public onlyOwner {
        _mint(reciever, amount);
    }
}
