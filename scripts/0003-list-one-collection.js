// 0003

{
    var db = connect('localhost/test');

    db.vipData.find().forEach(function(user) {
        print("User: " + user.name + ", tel: " + user.tel);
    });

    print("Info: 0003-list-one-collection finished.");
}
