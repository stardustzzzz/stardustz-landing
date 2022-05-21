// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder';
import './interfaces/IStardustToken';

contract ERC721Donations {
    using Counters for Counters.Counter;

    enum DonationState { VAULT, DEPOSITED, DONATED, BURNED }

    Counters.Counter private _donationId;

    address payable public owner;
    address payable public admin;
    address payable public stardustToken;

    struct Donation {
        uint donationId;
        address donor;
        string charityId;
        address erc721Address;
        uint tokenId;
        string donationDate;
    }

    Donation[] public list;

    constructor(address _owner, address _admin, address _stardustToken) {
        owner = payable(_owner);
        admin = payable(_admin);
        stardustToken = payable(_stardustToken);
    }

    function createDonation(
        address donor,
        uint memory charityId,
        address erc721Address,
        string memory tokenId,
        string memory donationDate
    ) public {
        _donationId.increment();
        uint donationId = _donationId.current();
        self.list.push(Donation({
            donationId: donationId,
            donor: msg.sender,
            charityId: "global",
            erc721Address: erc721Address,
            tokenId: tokenId,
            donationDate: donationDate,
            state: DonationState.VAULT 
        }));
    }

    function fetchDonationsList() public view returns (Donation[] memory) {
        return self.list;
    }

    function depositDonationIntoBasket(
        uint donationId,
        address basketTokenAddress,
        string basketTokenId,
        string calldata basketManagerId,
        address cpAddress,
        uint nftTokenAmount
    ) external onlyAdmin {
        Donation memory donation = list[donationId];

        IChargedParticles(cpAddress).covalentBond(
            basketTokenAddress,
            basketTokenId,
            basketManagerId, // generic.B
            donation.erc721Address,
            donation.tokenId,
            nftTokenAmount
        );
        list[donationId].state = DonationState.DEPOSITED;
        IStardustToken(stardustToken).issueToken(donation.donor, 100);
    }
}
