// 0010

{
    var db = connect('localhost/test');

    var start
    	, end;

    start = new Date().getTime();

    db.vipData.aggregate([
    	{ $match: {Age:  {$gt: 30}} },
    	{ $match: {Age:  {$lt: 40}} },
    	{ $sort: {Age: 1, Name: -1} },
    	{ $limit: 20 }
    ]).forEach(function(user) {
        print("User: " + user.Name + ". Age: "  + user.Age);
    });

    end = new Date().getTime();

    print("Info: 0010-aggregate finished.");
    print("Escape Time: " + (end - start) + "(ms)");
}
