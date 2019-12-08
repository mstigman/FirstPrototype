pragma solidity >=0.4.24;

contract ReviewSystemTest {

    uint levelPerUpvote = 1;
    uint levelPerDownvote = 1;

    struct Review {
        string content;
        uint upvotes;
        uint downvotes;
        uint reviewableID;
        address payable author;
        mapping (address => bool) usersVoted;
        string reply;
        uint timeWritten;
        uint ID;
        bool created;
    }

    struct Reviewable {
        mapping (address => bool) consumersReviewed;
        bool needsAuthentication;
        uint[] reviewIDs;
        mapping (uint => bool) TokenIdAvailable;
        uint costToReview;
        uint costToVote;
        uint bussinessID;
        uint funds;
        uint ID;
        bool created;
        mapping (uint => bool) rewards; //ID to bool maybe a different data struct better
    }

    struct Bussiness {
        uint[] reviewables;
        uint ID;
        mapping (address => bool) managers;
        bool created;
    }

    struct User {
        bool created;
        uint level;
        uint value; //used for voting and writing reviews?
        uint[] reviewIDs;
    }

    struct ReviewToken {
        uint reviewableID;
        bool used;
        address owner;
        bool needsOwner;
        uint ID;
        bool created;
    }

    struct Reward {
        uint amount;
        uint ID;
        bytes data;
        uint reviewableID;
        bool active;
        bool created;
    }

    mapping (uint => Reviewable) referenceReviewables;
    mapping (address => User) referenceUsers;
    mapping (uint => Review) referenceReviews;
    mapping (uint => Bussiness) referenceBussiness;
    mapping (uint => Reward) referenceRewards;
    mapping (uint => ReviewToken) referenceReviewTokens;

    address admin;
    uint num_tokens;
    uint num_reviewable;
    uint num_review;
    uint num_bussiness;
    uint num_rewards;

    constructor () public {
        admin = msg.sender;
    }

    function writeReview (string memory content, uint reviewableID, uint reviewTokenID) public returns (bool){
        Reviewable storage reviewable = referenceReviewables[reviewableID];
        ReviewToken storage reviewToken = referenceReviewTokens[reviewTokenID];

        require(reviewable.created && (reviewToken.created || !reviewable.needsAuthentication));
        require(!reviewable.needsAuthentication || (reviewToken.reviewableID == reviewable.ID && !reviewToken.used && (!reviewToken.needsOwner || msg.sender == reviewToken.owner)));


        require(referenceUsers[msg.sender].value > reviewable.costToReview);

        if (reviewable.needsAuthentication && reviewToken.reviewableID == reviewable.ID && !reviewToken.used) {
            reviewToken.used = true;
        }

        Review memory newReview;
        newReview.content = content;
        newReview.upvotes = 0;
        newReview.downvotes = 0;
        newReview.reviewableID = reviewable.ID;
        newReview.author = msg.sender;
        newReview.timeWritten = now;
        newReview.ID = num_review + 1;
        newReview.created = true;

        reviewable.consumersReviewed[msg.sender] = true;
        referenceUsers[msg.sender].value -= reviewable.costToReview;
        referenceUsers[msg.sender].reviewIDs.push(num_review + 1);
        reviewable.reviewIDs.push(num_review + 1);

        referenceReviews[num_review + 1] = newReview;

        num_review += 1;
        return true;
    }

    function writeReview (string memory content, uint reviewableID) public returns (bool) {
        return writeReview(content, reviewableID, 0);
    }

    function upVote(uint reviewID) public {
        Review storage review = referenceReviews[reviewID];
        require(review.created);
        require(msg.sender != review.author);

        require(!review.usersVoted[msg.sender]);

        uint costToVote = referenceReviewables[review.reviewableID].costToVote;

        require(referenceUsers[msg.sender].value > costToVote);

        review.upvotes += 1;
        referenceUsers[msg.sender].value -= costToVote;
        review.usersVoted[msg.sender] = true;
        referenceUsers[review.author].level += levelPerUpvote;

    }

    function downVote(uint reviewID) public {
        Review storage review = referenceReviews[reviewID];
        require(review.created);
        require(msg.sender != review.author);

        require(!review.usersVoted[msg.sender]);

        uint costToVote = referenceReviewables[review.reviewableID].costToVote;

        require(referenceUsers[msg.sender].value > costToVote);

        review.downvotes += 1;
        referenceUsers[msg.sender].value -= costToVote;
        review.usersVoted[msg.sender] = true;
        referenceUsers[review.author].level -= levelPerDownvote;

    }

    function createNewUser() public {
        require(!referenceUsers[msg.sender].created);
        User memory newUser;
        newUser.level = 0;
        newUser.value = 10;
        newUser.created = true;
        referenceUsers[msg.sender] = newUser;

    }

    function createNewBusiness(address manager) public {
        require(msg.sender == admin);

        Bussiness memory newBussiness;

        newBussiness.ID = num_bussiness + 1;
        newBussiness.created = true;

        referenceBussiness[num_bussiness + 1] = newBussiness;

        num_bussiness += 1;

        Bussiness storage bussiness = referenceBussiness[num_bussiness];
        bussiness.managers[manager] = true;

    }

    function addManager(uint bussinessID, address newManager) public {
        Bussiness storage bussiness = referenceBussiness[bussinessID];

        require(bussiness.created);
        require(bussiness.managers[msg.sender]);
        require(!bussiness.managers[newManager]);

        bussiness.managers[newManager] = true;
    }

    function createNewReviewable(uint bussinessID, bool needsAuthentication, uint costToReview, uint costToVote) public {
        Bussiness storage bussiness = referenceBussiness[bussinessID];

        require(bussiness.created);
        require(bussiness.managers[msg.sender]);


        Reviewable memory reviewable;

        reviewable.bussinessID = bussinessID;
        reviewable.needsAuthentication = needsAuthentication;
        reviewable.costToReview = costToReview;
        reviewable.costToVote = costToVote;
        reviewable.ID = num_reviewable + 1;
        reviewable.created = true;

        referenceReviewables[num_reviewable + 1] = reviewable;

        bussiness.reviewables.push(num_reviewable + 1);

        num_reviewable += 1;
    }

    function createNewReviewToken(uint reviewableID, bool needsOwner, address owner) public {
        Reviewable storage reviewable = referenceReviewables[reviewableID];

        Bussiness storage bussiness = referenceBussiness[reviewable.bussinessID];

        require(reviewable.created && bussiness.created);

        require(bussiness.managers[msg.sender]);

        ReviewToken memory reviewToken;
        reviewToken.reviewableID = reviewableID;
        reviewToken.used = false;
        reviewToken.needsOwner = needsOwner;
        reviewToken.owner = owner;
        reviewToken.ID = num_tokens + 1;
        reviewToken.created = true;


        reviewable.TokenIdAvailable[num_tokens + 1] = true;
        num_tokens += 1;

        referenceReviewTokens[num_tokens] = reviewToken;


    }

    function createNewReviewToken(uint reviewableID, bool needsOwner) public {
        createNewReviewToken(reviewableID, needsOwner, msg.sender);
    }

    function createNewReviewToken(uint reviewableID) public {
        createNewReviewToken(reviewableID, false, msg.sender);
    }

    function sendReviewToken(uint reviewTokenID, address newOwner) public {
        ReviewToken storage reviewToken = referenceReviewTokens[reviewTokenID];

        require(reviewToken.created);
        require(msg.sender == reviewToken.owner);

        reviewToken.owner = newOwner;
    }

    function createReward(uint reviewableID, bytes memory data, uint amount) payable public {
        Reviewable storage reviewable = referenceReviewables[reviewableID];

        Bussiness storage bussiness = referenceBussiness[reviewable.bussinessID];

        require(reviewable.created && bussiness.created);

        require(bussiness.managers[msg.sender]);
        require(msg.value == amount);

        Reward memory newReward;
        newReward.amount = amount;
        newReward.data = data;
        newReward.ID = num_rewards + 1;
        newReward.reviewableID = reviewableID;
        newReward.active = true;
        newReward.created = true;

        referenceRewards[num_rewards + 1] = newReward;
        reviewable.rewards[num_rewards + 1] = true;
        num_rewards += 1;
        }

        function changeAuthentification(uint reviewableID, bool needs) public {
            Reviewable storage reviewable = referenceReviewables[reviewableID];

            require(reviewable.created);
            require(reviewable.needsAuthentication != needs);

            Bussiness storage bussiness = referenceBussiness[reviewable.bussinessID];

            require(bussiness.created);
            require(bussiness.managers[msg.sender]);


            reviewable.needsAuthentication = needs;
        }

        function addFunds(uint reviewableID, uint amount) payable public {
            Reviewable storage reviewable = referenceReviewables[reviewableID];

            require(reviewable.created);
            require(amount == msg.value);

            Bussiness storage bussiness = referenceBussiness[reviewable.bussinessID];

            require(bussiness.created);
            require(bussiness.managers[msg.sender]);

            reviewable.funds += amount;
        }

        function payReview(uint reviewID, uint amount) public {
            Review storage review = referenceReviews[reviewID];
            Reviewable storage reviewable = referenceReviewables[review.reviewableID];
            Bussiness storage bussiness = referenceBussiness[reviewable.bussinessID];


            require(review.created && reviewable.created && bussiness.created);
            require(bussiness.managers[msg.sender]);
            require(reviewable.funds >= amount);
            address payable reviewer = review.author;
            reviewable.funds -= amount;
            (reviewer).transfer(amount);

        }

        function giveReward(uint reviewID, uint rewardID) public returns (bytes memory){
            Review storage review = referenceReviews[reviewID];
            Reviewable storage reviewable = referenceReviewables[review.reviewableID];
            Bussiness storage bussiness = referenceBussiness[reviewable.bussinessID];
            Reward storage reward = referenceRewards[rewardID];

            require(review.created && reviewable.created && bussiness.created && reward.created);
            require(bussiness.managers[msg.sender]);
            require(reviewable.rewards[rewardID]);


            reward.active = false;
            review.author.transfer(reward.amount);

            return reward.data;

        }

        function managerReply(uint reviewID, string memory content) public {
            Review storage review = referenceReviews[reviewID];
            Reviewable storage reviewable = referenceReviewables[review.reviewableID];
            Bussiness storage bussiness = referenceBussiness[reviewable.bussinessID];

            require(review.created && reviewable.created && bussiness.created);
            require(bussiness.managers[msg.sender]);

            review.reply = content;


        }

        function getReview(uint reviewID) public view returns (string memory content, uint upvotes, uint downvotes, uint reviewableID, address author, string memory reply,
                uint timeWritten) {
            Review memory r = referenceReviews[reviewID];
            require(r.created);
            return (r.content, r.upvotes, r.downvotes, r.reviewableID, r.author, r.reply, r.timeWritten);
        }

        function userVotedOnReview(uint reviewID, address user) public view returns (bool) {
            Review storage review = referenceReviews[reviewID];
            require(review.created);

            return review.usersVoted[user];
        }

        function getReviewable(uint reviewableID) public view returns (bool needsAuthentication, uint costToReview, uint costToVote, uint bussinessID, uint funds) {
            Reviewable memory r = referenceReviewables[reviewableID];
            require(r.created);

            return (r.needsAuthentication, r.costToReview, r.costToVote, r.bussinessID, r.funds);
        }

        function getReviewIDsFromReviewable(uint reviewableID) public view returns (uint[] memory reviewIDs) {
            Reviewable memory r = referenceReviewables[reviewableID];
            require(r.created);
            return r.reviewIDs;
        }

        function didConsumerReview(uint reviewableID, address consumer) public view returns (bool) {
            Reviewable storage reviewable = referenceReviewables[reviewableID];

            require(reviewable.created);

            return reviewable.consumersReviewed[consumer];
        }

        function getBussinessReviewables(uint bussinessID) public view returns (uint[] memory reviewableIDs) {
            Bussiness memory bussiness = referenceBussiness[bussinessID];

            require(bussiness.created);

            return bussiness.reviewables;
        }

        function getUserInfo(address user) public view returns (uint level, uint value) {
            User memory u = referenceUsers[user];

            require(u.created);

            return (u.level, u.value);
        }

        function getUserReviews(address user) public view returns (uint[] memory reviewIDs) {
            User memory u = referenceUsers[user];

            require(u.created);

            return u.reviewIDs;
        }

        function getRewardInfo(uint rewardID) public view returns (uint amount, uint reviewableID, bool active) {
            Reward memory reward = referenceRewards[rewardID];

            require(reward.created);

            return (reward.amount, reward.reviewableID, reward.active);
        }

        function getRewardData(uint rewardID) public view returns (bytes memory data) {
            Reward memory reward = referenceRewards[rewardID];

            require(reward.created);

            return reward.data;
        }



    }
