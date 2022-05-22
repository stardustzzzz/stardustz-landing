//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract ERC721Test1 is ERC721 {
  constructor() ERC721('TestERC721Token1', 'TEST1') {
    _safeMint(msg.sender, 0);
    _safeMint(msg.sender, 1);
  } 
}

contract ERC721Test2 is ERC721 {
  constructor() ERC721('TestERC721Token2', 'TEST2') {
    _safeMint(msg.sender, 0);
    _safeMint(msg.sender, 1);
  } 
}
