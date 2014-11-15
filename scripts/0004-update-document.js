// 0004

{
    var db = connect('localhost/test');

    db.vipData.update({name: 'jollen'}, { $set: {name: 'jollenchen'} });

    print('0004-update-document finished');
}