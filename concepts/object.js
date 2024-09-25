const phone ={
    brand: 'Huawei',
    SO: 'Android 10',
    ram: '4GB',
    hdd: '260GB',
    screen: '5',
    model: 'Y',
    funcional: true,
    damage: false
};

console.log(phone);
console.log(phone.brand);
phone.damage = true;

phone.color = 'black';
phone['case color'] = 'grey';
console.log(phone);
console.log(phone ['color']);
phone.start = function() {
    console.log('Mi' + this.brand + '...');
    console.log('Encendido.....' );
    console.log('Listo!!!');
}

phone.call = function(name){
    console.log('Llamado a ' + name);
    console.log('No contestó :/');
}

phone.start();
phone.call('Batman');