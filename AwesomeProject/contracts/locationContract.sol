// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GamePot {
    address public owner;
    uint256 public potBalance;
    uint256 public totalPlayers;
    uint256 public winningAmount;

    mapping(address => uint256) public playerBalances;
    address[] public players;

    event NewPlayer(address indexed player, uint256 amount);
    event WinnerSelected(address indexed winner, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function enterGame() public payable {
        require(msg.value > 0.01 ether, "You must send at least 0.01 ether to enter the game");
        
        playerBalances[msg.sender] += msg.value;
        potBalance += msg.value;
        players.push(msg.sender);
        totalPlayers++;

        emit NewPlayer(msg.sender, msg.value);
    }

    function selectWinner() public onlyOwner {
        require(totalPlayers > 0, "No players in the game");

        uint256 winnerIndex = random() % totalPlayers;
        address winner = players[winnerIndex];
        winningAmount = potBalance;

        // Transfer the winning amount to the winner
        payable(winner).transfer(winningAmount);

        // Reset the game
        delete players;
        potBalance = 0;
        totalPlayers = 0;

        emit WinnerSelected(winner, winningAmount);
    }

    // Simple pseudo-random number generator for demonstration purposes only
    function random() private view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, players)));
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}
