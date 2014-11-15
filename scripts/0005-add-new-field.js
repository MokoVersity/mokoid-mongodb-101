// 0005

{
    var db = connect('localhost/test');

    db.vipData.find().forEach(function(data) {
        data.isActive = true;
        db.vipData.save(data);
    });

    print('0005-add-new-field finished');
}