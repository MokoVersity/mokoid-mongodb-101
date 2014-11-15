// 0011

{
    var db = connect('localhost/test');

    var start
    	, end;

    db.vipData.aggregate([
    	{ $group: {
            _id: "$Age",
            count: { $sum: 1 },
            names: { $addToSet: "$Name"}
        } },
        { $sort: {hello: 1} }
    ]).forEach(function(user) {
        print("Age: " + user._id + ", Users: " + user.names);
        print("");
    });

    print("Info: 0011-aggregate-group finished.");
}
