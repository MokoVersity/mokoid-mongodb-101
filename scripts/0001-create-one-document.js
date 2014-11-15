// 0001

{
    var db = connect('localhost/test');

    db.vipData.save({name: 'jollen', tel: '09384567182'});

    print('0001-create-one-document finished.')
}