// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import './interfaces/IStardustToken.sol';
import './interfaces/IChargedParticles.sol';

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
        uint charityId;
        address erc721Address;
        uint tokenId;
        string donationDate;
        DonationState state;
    }

    Donation[] public list;

    constructor(address _stardustToken) {
        owner = payable(msg.sender);
        admin = payable(msg.sender);
        stardustToken = payable(_stardustToken);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "only admin");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner");
        _;
    }

    function donate(
        address donor,
        uint charityId,
        address erc721Address,
        uint tokenId,
        string memory donationDate
    ) public {
        _donationId.increment();
        uint donationId = _donationId.current();
        list.push(Donation({
            donationId: donationId,
            donor: donor,
            charityId: charityId,
            erc721Address: erc721Address,
            tokenId: tokenId,
            donationDate: donationDate,
            state: DonationState.VAULT 
        }));
    }

    function fetchDonationsList() public view returns (Donation[] memory) {
        return list;
    }

    function depositDonationIntoBasket(
        uint donationId,
        address basketTokenAddress,
        uint basketTokenId,
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
