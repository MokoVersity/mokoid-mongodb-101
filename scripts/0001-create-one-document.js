{
    var db = connect('localhost/test');

    var member = {
        name: 'mongouser',
        tel: '012345678'
    };

    db.vipData.save(member);

    print("Info: 0001-create-one-document finished.");
}
