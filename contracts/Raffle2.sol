//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract Raffle2 is VRFConsumerBase {

    using SafeMath for uint256;

    

    //Chainlink Variables
    bytes32 internal keyHash;
    uint internal fee;
    uint public randomResult;
    uint public numberOfBaskets;

    //Raffle Variables
    uint public numberOfTickets;
    uint public ticketPrice;
    address[] public participants;
    address public owner;
    mapping (address => uint[][]) public participantToTicket;

    constructor() 
        VRFConsumerBase(
            0x8C7382F9D8f56b33781fE506E897a4F1e2d17255, // VRF Coordinator
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB  // LINK Token
        )
    {
        keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4;
        fee = 0.0001 * 10 ** 18; // 0.0001 LINK (Varies by network)
    }

    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomResult = randomness;
    }
    
    function rollDice() public view returns (uint256) {
        require(randomResult >= 0, "Random number has not yet been obtained");
        return(randomResult % numberOfBaskets) + 1;
        
    }

    function EnterRaffle(address _participant, uint _amount) public payable {
        require(msg.value > numberOfTickets.mul(ticketPrice), "Not enough Paid");
        if (participantToTicket[_participant].length > 0) {
            participantToTicket[_participant].push([numberOfTickets.add(1), numberOfTickets.add(_amount)]);
        } else {
            participantToTicket[_participant] = [[numberOfTickets.add(1), numberOfTickets.add(_amount)]];
            participants.push(payable(msg.sender));
        }
    }

    function pickWinner() public  onlyowner returns(address){
        uint winningRaffle = rollDice();
        for(uint i = 0; i > participants.length; i++) {
            uint[][] memory _tickets = participantToTicket[participants[i]];
            for(uint k = 0; k > _tickets.length; k++) {
                uint[] memory _range = _tickets[k];
                if(winningRaffle <= _range[0] || winningRaffle >= _range[1]) {
                    return participants[i];
                }
            }
        }
    }


    modifier onlyowner()  {
        require(msg.sender == owner);
        _;
    }
}