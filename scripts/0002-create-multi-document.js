// 0002

{
    var db = connect('localhost/test');

    var i;
    for (i = 0; i < 10; i++) {
        db.vipData.save({name: 'jollen', tel: '' + i});
    }

    print('0002-create-multi-document finished.');
}